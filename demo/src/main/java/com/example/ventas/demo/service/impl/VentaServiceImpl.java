package com.example.ventas.demo.service.impl;

import com.example.ventas.demo.model.dto.VentaDTO;
import com.example.ventas.demo.model.entity.DetalleVenta;
import com.example.ventas.demo.model.entity.Venta;
import com.example.ventas.demo.repository.DetalleVentaRepository;
import com.example.ventas.demo.repository.VentaRepository;
import com.example.ventas.demo.service.*;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.example.ventas.demo.model.dto.DetalleVentaDTO;
import com.example.ventas.demo.model.dto.ProductoDTO;
import com.example.ventas.demo.exception.BusinessException;

@Service
@Transactional
public class VentaServiceImpl implements VentaService {
    
    private final VentaRepository repository;
    private final DetalleVentaRepository detalleVentaRepository;
    private final ClienteService clienteService;
    private final ComprobanteTipoService comprobanteTipoService;
    private final ProductoService productoService;

    public VentaServiceImpl(VentaRepository repository,
                          DetalleVentaRepository detalleVentaRepository,
                          ClienteService clienteService,
                          ComprobanteTipoService comprobanteTipoService,
                          ProductoService productoService) {
        this.repository = repository;
        this.detalleVentaRepository = detalleVentaRepository;
        this.clienteService = clienteService;
        this.comprobanteTipoService = comprobanteTipoService;
        this.productoService = productoService;
    }

    @Override
    @Transactional(readOnly = true)
    public List<VentaDTO> findAll() {
        return repository.findAll().stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public VentaDTO findById(Long id) {
        return repository.findById(id)
                .map(this::toDTO)
                .orElseThrow(() -> new EntityNotFoundException("Venta no encontrada"));
    }

    @Override
    public VentaDTO create(VentaDTO dto) {
        // Validar que exista el cliente y el tipo de comprobante
        clienteService.findById(dto.getClienteId());
        comprobanteTipoService.findById(dto.getComprobanteTipoId());

        if (dto.getDetalles() == null || dto.getDetalles().isEmpty()) {
            throw new IllegalArgumentException("La venta debe tener al menos un detalle");
        }

        // Generar correlativo
        Integer lastCorrelativo = repository.findLastCorrelativoBySerie(dto.getSerie(), dto.getComprobanteTipoId());
        dto.setCorrelativo(lastCorrelativo != null ? lastCorrelativo + 1 : 1);
        
        // Establecer fecha si no está establecida
        if (dto.getFecha() == null) {
            dto.setFecha(LocalDateTime.now());
        }

        // Calcular totales
        BigDecimal subtotal = BigDecimal.ZERO;
        BigDecimal impuesto = BigDecimal.ZERO;

        for (DetalleVentaDTO detalleDTO : dto.getDetalles()) {
            ProductoDTO producto = productoService.findById(detalleDTO.getProductoId());
            BigDecimal importe = producto.getPrecioUnitario().multiply(detalleDTO.getCantidad());
            subtotal = subtotal.add(importe);

            // Calcular impuesto según tipo de afectación
            if (producto.getAfectacionTipo() != null) {
                BigDecimal tasaImpuesto = producto.getAfectacionTipo().getPorcentaje().divide(new BigDecimal("100"));
                impuesto = impuesto.add(importe.multiply(tasaImpuesto));
            }
        }

        dto.setImpuesto(impuesto);
        dto.setTotal(subtotal.add(impuesto));

        Venta entity = toEntity(dto);
        entity = repository.save(entity);
        
        // Validar y guardar detalles
        if (dto.getDetalles() != null) {
            List<DetalleVenta> detalles = new ArrayList<>();
            for (DetalleVentaDTO detalleDTO : dto.getDetalles()) {
                // Validar que existe el producto y obtenerlo
                ProductoDTO producto = productoService.findById(detalleDTO.getProductoId());
                
                // Validar cantidad
                if (detalleDTO.getCantidad().compareTo(BigDecimal.ZERO) <= 0) {
                    throw new BusinessException("ERR_INVALID_QUANTITY", 
                        "La cantidad debe ser mayor a 0 para el producto " + producto.getNombre());
                }
                
                DetalleVenta detalle = new DetalleVenta();
                BeanUtils.copyProperties(detalleDTO, detalle);
                detalle.setVentaId(entity.getId());
                detalle.setVenta(entity);
                detalles.add(detalleVentaRepository.save(detalle));
            }
            entity.setDetalles(detalles);
        }

        return toDTO(entity);
    }

    @Override
    public VentaDTO update(Long id, VentaDTO dto) {
        throw new UnsupportedOperationException("Las ventas no se pueden modificar");
    }

    @Override
    public void delete(Long id) {
        throw new UnsupportedOperationException("Las ventas no se pueden eliminar");
    }

    private VentaDTO toDTO(Venta entity) {
        VentaDTO dto = new VentaDTO();
        BeanUtils.copyProperties(entity, dto);
        if (entity.getCliente() != null) {
            dto.setCliente(clienteService.findById(entity.getClienteId()));
        }
        if (entity.getComprobanteTipo() != null) {
            dto.setComprobanteTipo(comprobanteTipoService.findById(entity.getComprobanteTipoId()));
        }
        if (entity.getDetalles() != null) {
            dto.setDetalles(entity.getDetalles().stream()
                    .map(detalle -> {
                        var detalleDTO = new com.example.ventas.demo.model.dto.DetalleVentaDTO();
                        BeanUtils.copyProperties(detalle, detalleDTO);
                        detalleDTO.setProducto(productoService.findById(detalle.getProductoId()));
                        return detalleDTO;
                    })
                    .collect(Collectors.toList()));
        }
        return dto;
    }

    private Venta toEntity(VentaDTO dto) {
        Venta entity = new Venta();
        BeanUtils.copyProperties(dto, entity);
        return entity;
    }
}
