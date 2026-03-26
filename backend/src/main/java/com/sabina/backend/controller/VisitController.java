package com.sabina.backend.controller;

import com.sabina.backend.entity.Visit;
import com.sabina.backend.service.VisitService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/visits")
public class VisitController {
    private final VisitService visitService;

    public VisitController(VisitService visitService) {
        this.visitService = visitService;
    }

    @GetMapping
    public List<Visit> getAll() {
        return visitService.getAll();
    }

    @PostMapping
    public Visit logVisit(@RequestBody Visit visit) {
        return visitService.logVisit(
                visit.getPageUrl(),
                visit.getUserAgent(),
                visit.getIpAddress()
        );
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        visitService.delete(id);
    }
}