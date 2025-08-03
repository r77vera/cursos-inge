package com.example.ventas.demo.model.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.math.BigDecimal;

@Data
@Entity
@Table(name = "productos")
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "afectacion_tipo_id", length = 2, nullable = false)
    private String afectacionTipoId;

    @Column(name = "unidad_id", length = 3, nullable = false)
    private String unidadId;

    @Column(length = 50, nullable = false)
    private String codigo;

    @Column(length = 50, nullable = false)
    private String nombre;

    @Column(length = 255)
    private String descripcion;

    @Column(length = 255)
    private String imagen;

    @Column(name = "precio_unitario", precision = 6, scale = 2, nullable = false)
    private BigDecimal precioUnitario;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "afectacion_tipo_id", referencedColumnName = "id", insertable = false, updatable = false)
    private AfectacionTipo afectacionTipo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "unidad_id", referencedColumnName = "id", insertable = false, updatable = false)
    private Unidad unidad;
}
