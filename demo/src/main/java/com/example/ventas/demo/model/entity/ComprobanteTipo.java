package com.example.ventas.demo.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "comprobante_tipos")
public class ComprobanteTipo {
    @Id
    @Column(length = 2)
    private String id;

    @Column(length = 50, nullable = false)
    private String descripcion;
}
