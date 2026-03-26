package com.sabina.backend.controller;

import com.sabina.backend.entity.Quality;
import com.sabina.backend.service.QualityService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/qualities")
public class QualityController {
    private final QualityService qualityService;

    public QualityController(QualityService qualityService) {
        this.qualityService = qualityService;
    }

    @GetMapping
    public List<Quality> getAll() {
        return qualityService.getAll();
    }

    @GetMapping("/{id}")
    public Quality getById(@PathVariable Long id) {
        return qualityService.getById(id);
    }

    @PostMapping
    public Quality create(@RequestBody Quality quality) {
        return qualityService.save(quality);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        qualityService.delete(id);
    }
}