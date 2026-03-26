package com.sabina.backend.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "visits")
public class Visit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String pageUrl;

    @Column(nullable = true)
    private String userAgent;

    @Column(nullable = true)
    private String ipAddress;

    @Column(nullable = false)
    private LocalDateTime visitedAt;

    @Column(nullable = true)
    private Long durationSeconds;

    @PrePersist
    protected void onCreate() {
        visitedAt = LocalDateTime.now();
    }
}