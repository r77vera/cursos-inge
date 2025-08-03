package com.example.ventas.demo.service;

import com.example.ventas.demo.model.dto.UsuarioDTO;

public interface UsuarioService extends CrudService<UsuarioDTO, Long> {
    void changePassword(Long id, String currentPassword, String newPassword);
}
