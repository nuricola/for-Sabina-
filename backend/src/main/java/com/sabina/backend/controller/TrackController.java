package com.sabina.backend.controller;

import com.sabina.backend.entity.Track;
import com.sabina.backend.service.TrackService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tracks")
public class TrackController {
    private final TrackService trackService;

    public TrackController(TrackService trackService) {
        this.trackService = trackService;
    }

    @GetMapping
    public List<Track> getAll() {
        return trackService.getAll();
    }

    @GetMapping("/{id}")
    public Track getById(@PathVariable Long id) {
        return trackService.getById(id);
    }

    @PostMapping
    public Track create(@RequestBody Track track) {
        return trackService.save(track);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        trackService.delete(id);
    }
}