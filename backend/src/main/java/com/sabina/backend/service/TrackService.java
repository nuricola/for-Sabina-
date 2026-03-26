package com.sabina.backend.service;

import com.sabina.backend.entity.Track;
import com.sabina.backend.repository.TrackRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TrackService {

    private final TrackRepository trackRepository;

    public List<Track> getAll() {
        return trackRepository.findAll();
    }

    public Track getById(Long id) {
        return trackRepository.findById(id).orElseThrow();
    }

    public Track save(Track track) {
        return trackRepository.save(track);
    }

    public void delete(Long id) {
        trackRepository.deleteById(id);
    }
}