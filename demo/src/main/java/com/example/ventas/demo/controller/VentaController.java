package com.example.ventas.demo.controller;

import com.example.ventas.demo.model.dto.VentaDTO;
import com.example.ventas.demo.service.VentaService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ventas")
@Tag(name = "Ventas", description = "API para gestionar las ventas")
public class VentaController {

    private final VentaService service;

    public VentaController(VentaService service) {
        this.service = service;
    }

    @GetMapping
    @Operation(summary = "Obtener todas las ventas")
    public ResponseEntity<List<VentaDTO>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    @Operation(summary = "Obtener una venta por ID")
    public ResponseEntity<VentaDTO> findById(@PathVariable Long id) {
        return ResponseEntity.ok(service.findById(id));
    }

    @PostMapping
    @Operation(summary = "Crear una nueva venta")
    public ResponseEntity<VentaDTO> create(@Valid @RequestBody VentaDTO dto) {
        return new ResponseEntity<>(service.create(dto), HttpStatus.CREATED);
    }
}
