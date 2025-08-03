package com.example.ventas.demo.service.impl;

import com.example.ventas.demo.exception.BusinessException;
import com.example.ventas.demo.model.dto.UsuarioDTO;
import com.example.ventas.demo.model.entity.Usuario;
import com.example.ventas.demo.repository.UsuarioRepository;
import com.example.ventas.demo.service.UsuarioService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.BeanUtils;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class UsuarioServiceImpl implements UsuarioService {
    
    private final UsuarioRepository repository;
    private final PasswordEncoder passwordEncoder;

    public UsuarioServiceImpl(UsuarioRepository repository, PasswordEncoder passwordEncoder) {
        this.repository = repository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    @Transactional(readOnly = true)
    public List<UsuarioDTO> findAll() {
        return repository.findAll().stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public UsuarioDTO findById(Long id) {
        return repository.findById(id)
                .map(this::toDTO)
                .orElseThrow(() -> new EntityNotFoundException("Usuario no encontrado"));
    }

    @Override
    public UsuarioDTO create(UsuarioDTO dto) {
        if (repository.existsByEmail(dto.getEmail())) {
            throw new BusinessException("ERR_DUPLICATE_EMAIL", "El email ya está registrado");
        }

        Usuario usuario = toEntity(dto);
        usuario.setPassword(passwordEncoder.encode("changeme")); // Contraseña temporal
        usuario = repository.save(usuario);
        return toDTO(usuario);
    }

    @Override
    public UsuarioDTO update(Long id, UsuarioDTO dto) {
        Usuario usuario = repository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Usuario no encontrado"));

        if (!usuario.getEmail().equals(dto.getEmail()) && 
            repository.existsByEmail(dto.getEmail())) {
            throw new BusinessException("ERR_DUPLICATE_EMAIL", "El email ya está registrado");
        }

        // No actualizamos la contraseña aquí
        usuario.setName(dto.getName());
        usuario.setEmail(dto.getEmail());
        usuario.setRol(dto.getRol());
        usuario.setActivo(dto.getActivo());

        usuario = repository.save(usuario);
        return toDTO(usuario);
    }

    @Override
    public void delete(Long id) {
        Usuario usuario = repository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Usuario no encontrado"));
        
        // En lugar de eliminar, desactivamos el usuario
        usuario.setActivo(false);
        repository.save(usuario);
    }

    public void changePassword(Long id, String currentPassword, String newPassword) {
        Usuario usuario = repository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Usuario no encontrado"));

        if (!passwordEncoder.matches(currentPassword, usuario.getPassword())) {
            throw new BusinessException("ERR_INVALID_PASSWORD", "La contraseña actual no es correcta");
        }

        usuario.setPassword(passwordEncoder.encode(newPassword));
        repository.save(usuario);
    }

    private UsuarioDTO toDTO(Usuario entity) {
        UsuarioDTO dto = new UsuarioDTO();
        BeanUtils.copyProperties(entity, dto, "password");
        return dto;
    }

    private Usuario toEntity(UsuarioDTO dto) {
        Usuario entity = new Usuario();
        BeanUtils.copyProperties(dto, entity, "password");
        return entity;
    }
}
