package com.sabina.backend.service;

import com.sabina.backend.entity.Letter;
import com.sabina.backend.repository.LetterRepostitory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LetterService {

    private final LetterRepostitory letterRepository;

    public List<Letter> getAll() {
        return letterRepository.findAll();
    }

    public Letter getById(Long id) {
        return letterRepository.findById(id).orElseThrow();
    }

    public Letter save(Letter letter) {
        return letterRepository.save(letter);
    }

    public void delete(Long id) {
        letterRepository.deleteById(id);
    }
}