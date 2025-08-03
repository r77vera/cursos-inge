package com.example.ventas.demo.model.dto;

import lombok.Data;
import java.math.BigDecimal;

@Data
public class DetalleVentaDTO {
    private Long id;
    private Long ventaId;
    private Long productoId;
    private BigDecimal cantidad;
    private ProductoDTO producto;
}
