package com.example.ventas.demo.mapper;

import org.springframework.stereotype.Component;
import com.example.ventas.demo.model.dto.DocumentoTipoDTO;
import com.example.ventas.demo.model.entity.DocumentoTipo;

@Component
public class DocumentoTipoMapper {
    
    public DocumentoTipoDTO toDto(DocumentoTipo entity) {
        if (entity == null) return null;
        
        DocumentoTipoDTO dto = new DocumentoTipoDTO();
        dto.setId(entity.getId());
        dto.setDescripcion(entity.getDescripcion());
        return dto;
    }
    
    public DocumentoTipo toEntity(DocumentoTipoDTO dto) {
        if (dto == null) return null;
        
        DocumentoTipo entity = new DocumentoTipo();
        entity.setId(dto.getId());
        entity.setDescripcion(dto.getDescripcion());
        return entity;
    }
}
