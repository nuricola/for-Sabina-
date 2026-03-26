package com.sabina.backend.controller;

import com.sabina.backend.entity.Location;
import com.sabina.backend.service.LocationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/locations")
public class LocationController {
    private final LocationService locationService;

    public LocationController(LocationService locationService) {
        this.locationService = locationService;
    }

    @GetMapping
    public List<Location> getAll() {
        return locationService.getAll();
    }

    @GetMapping("/secret")
    public List<Location> getSecretLocations() {
        return locationService.getSecretLocations();
    }

    @GetMapping("/{id}")
    public Location getById(@PathVariable Long id) {
        return locationService.getById(id);
    }

    @PostMapping
    public Location create(@RequestBody Location location) {
        return locationService.save(location);
    }

    @PutMapping("/{id}")
    public Location update(@PathVariable Long id, @RequestBody Location location) {
        location.setId(id);
        return locationService.save(location);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        locationService.delete(id);
    }
}