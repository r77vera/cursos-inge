package com.example.ventas.demo.model.dto;

import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Data
public class VentaDTO {
    private Long id;
    private Long userId;
    private String comprobanteTipoId;
    private Long clienteId;
    private String serie;
    private Integer correlativo;
    private String formaPago;
    private LocalDateTime fecha;
    private BigDecimal impuesto;
    private BigDecimal total;
    private ClienteDTO cliente;
    private ComprobanteTipoDTO comprobanteTipo;
    private UsuarioDTO usuario;
    private List<DetalleVentaDTO> detalles;
}
