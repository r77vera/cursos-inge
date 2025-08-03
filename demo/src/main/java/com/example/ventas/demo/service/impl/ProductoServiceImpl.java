package com.example.ventas.demo.service.impl;

import com.example.ventas.demo.model.dto.ProductoDTO;
import com.example.ventas.demo.model.entity.Producto;
import com.example.ventas.demo.repository.ProductoRepository;
import com.example.ventas.demo.service.AfectacionTipoService;
import com.example.ventas.demo.service.ProductoService;
import com.example.ventas.demo.service.UnidadService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class ProductoServiceImpl implements ProductoService {
    
    private final ProductoRepository repository;
    private final AfectacionTipoService afectacionTipoService;
    private final UnidadService unidadService;

    public ProductoServiceImpl(ProductoRepository repository, 
                             AfectacionTipoService afectacionTipoService,
                             UnidadService unidadService) {
        this.repository = repository;
        this.afectacionTipoService = afectacionTipoService;
        this.unidadService = unidadService;
    }

    @Override
    @Transactional(readOnly = true)
    public List<ProductoDTO> findAll() {
        return repository.findAll().stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public ProductoDTO findById(Long id) {
        return repository.findById(id)
                .map(this::toDTO)
                .orElseThrow(() -> new EntityNotFoundException("Producto no encontrado"));
    }

    @Override
    public ProductoDTO create(ProductoDTO dto) {
        if (repository.existsByCodigo(dto.getCodigo())) {
            throw new IllegalArgumentException("Ya existe un producto con ese código");
        }
        Producto entity = toEntity(dto);
        entity = repository.save(entity);
        return toDTO(entity);
    }

    @Override
    public ProductoDTO update(Long id, ProductoDTO dto) {
        Producto entity = repository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Producto no encontrado"));
        
        if (!entity.getCodigo().equals(dto.getCodigo()) &&
            repository.existsByCodigo(dto.getCodigo())) {
            throw new IllegalArgumentException("Ya existe un producto con ese código");
        }

        BeanUtils.copyProperties(dto, entity);
        entity.setId(id); // aseguramos que el ID no cambie
        entity = repository.save(entity);
        return toDTO(entity);
    }

    @Override
    public void delete(Long id) {
        if (!repository.existsById(id)) {
            throw new EntityNotFoundException("Producto no encontrado");
        }
        repository.deleteById(id);
    }

    private ProductoDTO toDTO(Producto entity) {
        ProductoDTO dto = new ProductoDTO();
        BeanUtils.copyProperties(entity, dto);
        if (entity.getAfectacionTipo() != null) {
            dto.setAfectacionTipo(afectacionTipoService.findById(entity.getAfectacionTipoId()));
        }
        if (entity.getUnidad() != null) {
            dto.setUnidad(unidadService.findById(entity.getUnidadId()));
        }
        return dto;
    }

    private Producto toEntity(ProductoDTO dto) {
        Producto entity = new Producto();
        BeanUtils.copyProperties(dto, entity);
        return entity;
    }
}
