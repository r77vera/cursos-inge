package com.example.ventas.demo.model.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
@Table(name = "ventas")
public class Venta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id", nullable = false)
    private Long userId;

    @Column(name = "comprobante_tipo_id", length = 2, nullable = false)
    private String comprobanteTipoId;

    @Column(name = "cliente_id", nullable = false)
    private Long clienteId;

    @Column(length = 4, nullable = false)
    private String serie;

    @Column(nullable = false)
    private Integer correlativo;

    @Column(name = "forma_pago", length = 20)
    private String formaPago;

    @Column(nullable = false)
    private LocalDateTime fecha;

    @Column(precision = 8, scale = 2)
    private BigDecimal impuesto = BigDecimal.ZERO;

    @Column(precision = 8, scale = 2)
    private BigDecimal total = BigDecimal.ZERO;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", referencedColumnName = "id", insertable = false, updatable = false)
    private Usuario usuario;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cliente_id", referencedColumnName = "id", insertable = false, updatable = false)
    private Cliente cliente;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "comprobante_tipo_id", referencedColumnName = "id", insertable = false, updatable = false)
    private ComprobanteTipo comprobanteTipo;

    @OneToMany(mappedBy = "venta", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<DetalleVenta> detalles;
}
