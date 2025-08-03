package com.example.ventas.demo.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import java.math.BigDecimal;

@Data
@Entity
@Table(name = "afectacion_tipos")
public class AfectacionTipo {
    @Id
    @Column(length = 2)
    private String id;

    @Column(length = 50, nullable = false)
    private String descripcion;

    @Column(length = 1, nullable = false)
    private String letra;

    @Column(length = 4, nullable = false)
    private String codigo;

    @Column(precision = 4, scale = 2, nullable = false)
    private BigDecimal porcentaje;
}
