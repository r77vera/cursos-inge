package com.example.ventas.demo.repository;

import com.example.ventas.demo.model.entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {
    boolean existsByNumeroDocumento(String numeroDocumento);
}
