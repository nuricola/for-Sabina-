package com.sabina.backend.controller;

import com.sabina.backend.entity.Letter;
import com.sabina.backend.service.LetterService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/letters")
public class LetterController {
    private final LetterService letterService;

    public LetterController(LetterService letterService) {
        this.letterService = letterService;
    }

    @GetMapping
    public List<Letter> getAll() {
        return letterService.getAll();
    }

    @GetMapping("/{id}")
    public Letter getById(@PathVariable Long id) {
        return letterService.getById(id);
    }

    @PostMapping
    public Letter create(@RequestBody Letter letter) {
        return letterService.save(letter);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        letterService.delete(id);
    }
}