package com.example.ventas.demo.exception;

import lombok.Getter;
import lombok.Setter;
import java.time.LocalDateTime;
import java.util.Map;

@Getter
@Setter
public class ValidationError extends ApiError {
    private Map<String, String> errors;

    public ValidationError(int status, String code, String message, LocalDateTime timestamp, Map<String, String> errors) {
        super(status, code, message, timestamp);
        this.errors = errors;
    }
}
