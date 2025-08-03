package com.example.ventas.demo.service.impl;

import com.example.ventas.demo.model.dto.AfectacionTipoDTO;
import com.example.ventas.demo.model.entity.AfectacionTipo;
import com.example.ventas.demo.repository.AfectacionTipoRepository;
import com.example.ventas.demo.service.AfectacionTipoService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class AfectacionTipoServiceImpl implements AfectacionTipoService {
    
    private final AfectacionTipoRepository repository;

    public AfectacionTipoServiceImpl(AfectacionTipoRepository repository) {
        this.repository = repository;
    }

    @Override
    @Transactional(readOnly = true)
    public List<AfectacionTipoDTO> findAll() {
        return repository.findAll().stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public AfectacionTipoDTO findById(String id) {
        return repository.findById(id)
                .map(this::toDTO)
                .orElseThrow(() -> new EntityNotFoundException("Tipo de afectación no encontrado"));
    }

    @Override
    public AfectacionTipoDTO create(AfectacionTipoDTO dto) {
        AfectacionTipo entity = toEntity(dto);
        entity = repository.save(entity);
        return toDTO(entity);
    }

    @Override
    public AfectacionTipoDTO update(String id, AfectacionTipoDTO dto) {
        AfectacionTipo entity = repository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Tipo de afectación no encontrado"));
        
        BeanUtils.copyProperties(dto, entity);
        entity = repository.save(entity);
        return toDTO(entity);
    }

    @Override
    public void delete(String id) {
        if (!repository.existsById(id)) {
            throw new EntityNotFoundException("Tipo de afectación no encontrado");
        }
        repository.deleteById(id);
    }

    private AfectacionTipoDTO toDTO(AfectacionTipo entity) {
        AfectacionTipoDTO dto = new AfectacionTipoDTO();
        BeanUtils.copyProperties(entity, dto);
        return dto;
    }

    private AfectacionTipo toEntity(AfectacionTipoDTO dto) {
        AfectacionTipo entity = new AfectacionTipo();
        BeanUtils.copyProperties(dto, entity);
        return entity;
    }
}
