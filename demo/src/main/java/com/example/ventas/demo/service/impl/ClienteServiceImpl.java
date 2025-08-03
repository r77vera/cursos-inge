package com.example.ventas.demo.service.impl;

import com.example.ventas.demo.model.dto.ClienteDTO;
import com.example.ventas.demo.model.entity.Cliente;
import com.example.ventas.demo.repository.ClienteRepository;
import com.example.ventas.demo.service.ClienteService;
import com.example.ventas.demo.service.DocumentoTipoService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class ClienteServiceImpl implements ClienteService {
    
    private final ClienteRepository repository;
    private final DocumentoTipoService documentoTipoService;

    public ClienteServiceImpl(ClienteRepository repository, DocumentoTipoService documentoTipoService) {
        this.repository = repository;
        this.documentoTipoService = documentoTipoService;
    }

    @Override
    @Transactional(readOnly = true)
    public List<ClienteDTO> findAll() {
        return repository.findAll().stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public ClienteDTO findById(Long id) {
        return repository.findById(id)
                .map(this::toDTO)
                .orElseThrow(() -> new EntityNotFoundException("Cliente no encontrado"));
    }

    @Override
    public ClienteDTO create(ClienteDTO dto) {
        if (repository.existsByNumeroDocumento(dto.getNumeroDocumento())) {
            throw new IllegalArgumentException("Ya existe un cliente con ese número de documento");
        }
        Cliente entity = toEntity(dto);
        entity = repository.save(entity);
        return toDTO(entity);
    }

    @Override
    public ClienteDTO update(Long id, ClienteDTO dto) {
        Cliente entity = repository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Cliente no encontrado"));
        
        if (!entity.getNumeroDocumento().equals(dto.getNumeroDocumento()) &&
            repository.existsByNumeroDocumento(dto.getNumeroDocumento())) {
            throw new IllegalArgumentException("Ya existe un cliente con ese número de documento");
        }

        BeanUtils.copyProperties(dto, entity);
        entity.setId(id); // aseguramos que el ID no cambie
        entity = repository.save(entity);
        return toDTO(entity);
    }

    @Override
    public void delete(Long id) {
        if (!repository.existsById(id)) {
            throw new EntityNotFoundException("Cliente no encontrado");
        }
        repository.deleteById(id);
    }

    private ClienteDTO toDTO(Cliente entity) {
        ClienteDTO dto = new ClienteDTO();
        BeanUtils.copyProperties(entity, dto);
        if (entity.getDocumentoTipo() != null) {
            dto.setDocumentoTipo(documentoTipoService.findById(entity.getDocumentoTipoId()));
        }
        return dto;
    }

    private Cliente toEntity(ClienteDTO dto) {
        Cliente entity = new Cliente();
        BeanUtils.copyProperties(dto, entity);
        return entity;
    }
}
