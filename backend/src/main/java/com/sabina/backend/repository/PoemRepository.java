package com.sabina.backend.repository;

import com.sabina.backend.entity.Poem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PoemRepository extends JpaRepository<Poem,Long> {
}
