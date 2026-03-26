package com.sabina.backend.service;

import com.sabina.backend.entity.Location;
import com.sabina.backend.repository.LocationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LocationService {
    private final LocationRepository locationRepository;

    public List<Location> getAll() {
        return locationRepository.findAll();
    }

    public List<Location> getSecretLocations() {
        return locationRepository.findByIsSecret(true);
    }

    public Location getById(Long id) {
        return locationRepository.findById(id).orElseThrow();
    }

    public Location save(Location location) {
        return locationRepository.save(location);
    }

    public void delete(Long id) {
        locationRepository.deleteById(id);
    }
}