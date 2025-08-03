package com.example.ventas.demo.service.impl;

import org.springframework.stereotype.Service;
import com.example.ventas.demo.model.dto.ComprobanteTipoDTO;
import com.example.ventas.demo.model.entity.ComprobanteTipo;
import com.example.ventas.demo.repository.ComprobanteTipoRepository;
import com.example.ventas.demo.service.ComprobanteTipoService;
import com.example.ventas.demo.mapper.ComprobanteTipoMapper;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ComprobanteTipoServiceImpl implements ComprobanteTipoService {

    private final ComprobanteTipoRepository repository;
    private final ComprobanteTipoMapper mapper;

    public ComprobanteTipoServiceImpl(ComprobanteTipoRepository repository, ComprobanteTipoMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    @Override
    public ComprobanteTipoDTO create(ComprobanteTipoDTO dto) {
        ComprobanteTipo entity = mapper.toEntity(dto);
        entity = repository.save(entity);
        return mapper.toDto(entity);
    }

    @Override
    public ComprobanteTipoDTO update(String id, ComprobanteTipoDTO dto) {
        if (repository.existsById(id)) {
            ComprobanteTipo entity = mapper.toEntity(dto);
            entity.setId(id);
            entity = repository.save(entity);
            return mapper.toDto(entity);
        }
        return null;
    }

    @Override
    public ComprobanteTipoDTO findById(String id) {
        return repository.findById(id)
                .map(mapper::toDto)
                .orElse(null);
    }

    @Override
    public List<ComprobanteTipoDTO> findAll() {
        return repository.findAll().stream()
                .map(mapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public void delete(String id) {
        repository.deleteById(id);
    }
}
