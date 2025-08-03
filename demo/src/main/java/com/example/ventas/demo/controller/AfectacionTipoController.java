package com.example.ventas.demo.controller;

import com.example.ventas.demo.model.dto.AfectacionTipoDTO;
import com.example.ventas.demo.service.AfectacionTipoService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/afectacion-tipos")
@Tag(name = "Tipos de Afectación", description = "API para gestionar los tipos de afectación")
public class AfectacionTipoController {

    private final AfectacionTipoService service;

    public AfectacionTipoController(AfectacionTipoService service) {
        this.service = service;
    }

    @GetMapping
    @Operation(summary = "Obtener todos los tipos de afectación")
    public ResponseEntity<List<AfectacionTipoDTO>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    @Operation(summary = "Obtener un tipo de afectación por ID")
    public ResponseEntity<AfectacionTipoDTO> findById(@PathVariable String id) {
        return ResponseEntity.ok(service.findById(id));
    }

    @PostMapping
    @Operation(summary = "Crear un nuevo tipo de afectación")
    public ResponseEntity<AfectacionTipoDTO> create(@Valid @RequestBody AfectacionTipoDTO dto) {
        return new ResponseEntity<>(service.create(dto), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    @Operation(summary = "Actualizar un tipo de afectación existente")
    public ResponseEntity<AfectacionTipoDTO> update(@PathVariable String id, @Valid @RequestBody AfectacionTipoDTO dto) {
        return ResponseEntity.ok(service.update(id, dto));
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Eliminar un tipo de afectación")
    public ResponseEntity<Void> delete(@PathVariable String id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
