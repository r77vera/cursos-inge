package com.example.ventas.demo.mapper;

import org.springframework.stereotype.Component;
import com.example.ventas.demo.model.dto.ComprobanteTipoDTO;
import com.example.ventas.demo.model.entity.ComprobanteTipo;

@Component
public class ComprobanteTipoMapper {
    
    public ComprobanteTipoDTO toDto(ComprobanteTipo entity) {
        if (entity == null) return null;
        
        ComprobanteTipoDTO dto = new ComprobanteTipoDTO();
        dto.setId(entity.getId());
        dto.setDescripcion(entity.getDescripcion());
        return dto;
    }
    
    public ComprobanteTipo toEntity(ComprobanteTipoDTO dto) {
        if (dto == null) return null;
        
        ComprobanteTipo entity = new ComprobanteTipo();
        entity.setId(dto.getId());
        entity.setDescripcion(dto.getDescripcion());
        return entity;
    }
}
