package com.example.ventas.demo.repository;

import com.example.ventas.demo.model.entity.Venta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface VentaRepository extends JpaRepository<Venta, Long> {
    @Query("SELECT MAX(v.correlativo) FROM Venta v WHERE v.serie = :serie AND v.comprobanteTipoId = :tipoId")
    Integer findLastCorrelativoBySerie(@Param("serie") String serie, @Param("tipoId") String tipoId);
}
