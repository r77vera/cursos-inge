package com.example.ventas.demo.service.impl;

import org.springframework.stereotype.Service;
import com.example.ventas.demo.model.dto.UnidadDTO;
import com.example.ventas.demo.model.entity.Unidad;
import com.example.ventas.demo.repository.UnidadRepository;
import com.example.ventas.demo.service.UnidadService;
import com.example.ventas.demo.mapper.UnidadMapper;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UnidadServiceImpl implements UnidadService {

    private final UnidadRepository repository;
    private final UnidadMapper mapper;

    public UnidadServiceImpl(UnidadRepository repository, UnidadMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    @Override
    public UnidadDTO create(UnidadDTO dto) {
        Unidad entity = mapper.toEntity(dto);
        entity = repository.save(entity);
        return mapper.toDto(entity);
    }

    @Override
    public UnidadDTO update(String id, UnidadDTO dto) {
        if (repository.existsById(id)) {
            Unidad entity = mapper.toEntity(dto);
            entity.setId(id);
            entity = repository.save(entity);
            return mapper.toDto(entity);
        }
        return null;
    }

    @Override
    public UnidadDTO findById(String id) {
        return repository.findById(id)
                .map(mapper::toDto)
                .orElse(null);
    }

    @Override
    public List<UnidadDTO> findAll() {
        return repository.findAll().stream()
                .map(mapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public void delete(String id) {
        repository.deleteById(id);
    }
}
