package com.example.ventas.demo.model.dto;

import lombok.Data;
import java.math.BigDecimal;

@Data
public class AfectacionTipoDTO {
    private String id;
    private String descripcion;
    private String letra;
    private String codigo;
    private BigDecimal porcentaje;
}
