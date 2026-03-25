package com.sabina.backend.repository;

import com.sabina.backend.entity.Letter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LetterRepostitory extends JpaRepository<Letter,Long> {
}
