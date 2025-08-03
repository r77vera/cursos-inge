package com.example.ventas.demo.model.dto;

import lombok.Data;

@Data
public class ClienteDTO {
    private Long id;
    private String documentoTipoId;
    private String numeroDocumento;
    private String razonSocial;
    private String direccion;
    private DocumentoTipoDTO documentoTipo;
}
