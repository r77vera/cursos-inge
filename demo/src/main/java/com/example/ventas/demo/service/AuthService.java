package com.example.ventas.demo.service;

import com.example.ventas.demo.model.dto.AuthenticationRequest;
import com.example.ventas.demo.model.dto.AuthenticationResponse;
import com.example.ventas.demo.model.dto.RegisterRequest;

public interface AuthService {
    AuthenticationResponse register(RegisterRequest request);
    AuthenticationResponse authenticate(AuthenticationRequest request);
}
