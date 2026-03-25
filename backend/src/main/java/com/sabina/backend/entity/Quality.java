package com.sabina.backend.entity;
import jakarta.persistence.*;
import lombok.Data;



@Data
@Entity
@Table(name = "qualities")
public class Quality {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String titleJpn;

    @Column(nullable = false)
    private String description ;

    @Column(nullable = false)
    private int sortOrder
            ;
}
