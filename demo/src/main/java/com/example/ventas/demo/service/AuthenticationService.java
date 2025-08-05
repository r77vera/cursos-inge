package com.example.ventas.demo.service;

import com.example.ventas.demo.model.dto.AuthenticationRequest;
import com.example.ventas.demo.model.dto.AuthenticationResponse;
import com.example.ventas.demo.model.dto.RegisterRequest;
import com.example.ventas.demo.model.entity.Usuario;
import com.example.ventas.demo.mapper.UsuarioMapper;
import com.example.ventas.demo.repository.UsuarioRepository;
import com.example.ventas.demo.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UsuarioRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
        private final AuthenticationManager authenticationManager;
    private final UsuarioMapper usuarioMapper;

    public AuthenticationResponse register(RegisterRequest request) {
        if (repository.existsByEmail(request.getEmail())) {
            throw new IllegalArgumentException("El email ya está registrado");
        }

        var user = Usuario.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .rol(request.getRol())
                .activo(true)
                .build();
        repository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .usuario(usuarioMapper.toDto(user))
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = repository.findByEmail(request.getEmail())
                .orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .usuario(usuarioMapper.toDto(user))
                .build();
    }
}
