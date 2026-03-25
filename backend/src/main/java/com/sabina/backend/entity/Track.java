package com.sabina.backend.entity;

import jakarta.persistence.*;
import lombok.Data;




@Data
@Entity
@Table(name = "tracks")
public class Track {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String spotifyTrackId ;

    @Column(nullable = true)
    private int sortOrder;



}
