package com.example.ventas.demo.model.dto;

import com.example.ventas.demo.model.entity.Usuario.Role;
import lombok.Data;

@Data
public class UsuarioDTO {
    private Long id;
    private String name;
    private String email;
    private Role rol;
    private Boolean activo;
}
