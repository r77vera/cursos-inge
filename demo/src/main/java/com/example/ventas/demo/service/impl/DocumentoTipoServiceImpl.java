package com.example.ventas.demo.service.impl;

import org.springframework.stereotype.Service;
import com.example.ventas.demo.model.dto.DocumentoTipoDTO;
import com.example.ventas.demo.model.entity.DocumentoTipo;
import com.example.ventas.demo.repository.DocumentoTipoRepository;
import com.example.ventas.demo.service.DocumentoTipoService;
import com.example.ventas.demo.mapper.DocumentoTipoMapper;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class DocumentoTipoServiceImpl implements DocumentoTipoService {

    private final DocumentoTipoRepository repository;
    private final DocumentoTipoMapper mapper;

    public DocumentoTipoServiceImpl(DocumentoTipoRepository repository, DocumentoTipoMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    @Override
    public DocumentoTipoDTO create(DocumentoTipoDTO dto) {
        DocumentoTipo entity = mapper.toEntity(dto);
        entity = repository.save(entity);
        return mapper.toDto(entity);
    }

    @Override
    public DocumentoTipoDTO update(String id, DocumentoTipoDTO dto) {
        if (repository.existsById(id)) {
            DocumentoTipo entity = mapper.toEntity(dto);
            entity.setId(id);
            entity = repository.save(entity);
            return mapper.toDto(entity);
        }
        return null;
    }

    @Override
    public DocumentoTipoDTO findById(String id) {
        return repository.findById(id)
                .map(mapper::toDto)
                .orElse(null);
    }

    @Override
    public List<DocumentoTipoDTO> findAll() {
        return repository.findAll().stream()
                .map(mapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public void delete(String id) {
        repository.deleteById(id);
    }
}
