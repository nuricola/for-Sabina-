package com.sabina.backend.controller;

import com.sabina.backend.entity.Poem;
import com.sabina.backend.service.PoemService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/poems")
public class PoemController {
    private final PoemService poemService;

    public PoemController(PoemService poemService) {
        this.poemService = poemService;
    }

    @GetMapping
    public List<Poem> getAll() {
        return poemService.getAll();
    }

    @GetMapping("/{id}")
    public Poem getById(@PathVariable Long id) {
        return poemService.getById(id);
    }

    @PostMapping
    public Poem create(@RequestBody Poem poem) {
        return poemService.save(poem);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        poemService.delete(id);
    }
}