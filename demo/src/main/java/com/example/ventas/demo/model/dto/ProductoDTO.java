package com.example.ventas.demo.model.dto;

import lombok.Data;
import java.math.BigDecimal;

@Data
public class ProductoDTO {
    private Long id;
    private String afectacionTipoId;
    private String unidadId;
    private String codigo;
    private String nombre;
    private String descripcion;
    private String imagen;
    private BigDecimal precioUnitario;
    private AfectacionTipoDTO afectacionTipo;
    private UnidadDTO unidad;
}
