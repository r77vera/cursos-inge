package com.example.ventas.demo.mapper;

import org.springframework.stereotype.Component;
import com.example.ventas.demo.model.dto.UnidadDTO;
import com.example.ventas.demo.model.entity.Unidad;

@Component
public class UnidadMapper {
    
    public UnidadDTO toDto(Unidad entity) {
        if (entity == null) return null;
        
        UnidadDTO dto = new UnidadDTO();
        dto.setId(entity.getId());
        dto.setDescripcion(entity.getDescripcion());
        return dto;
    }
    
    public Unidad toEntity(UnidadDTO dto) {
        if (dto == null) return null;
        
        Unidad entity = new Unidad();
        entity.setId(dto.getId());
        entity.setDescripcion(dto.getDescripcion());
        return entity;
    }
}
