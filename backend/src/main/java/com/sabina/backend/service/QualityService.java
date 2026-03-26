package com.sabina.backend.service;

import com.sabina.backend.entity.Quality;
import com.sabina.backend.repository.QualityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class QualityService {

    private final QualityRepository qualityRepository;

    public List<Quality> getAll() {
        return qualityRepository.findAll();
    }

    public Quality getById(Long id) {
        return qualityRepository.findById(id).orElseThrow();
    }

    public Quality save(Quality quality) {
        return qualityRepository.save(quality);
    }

    public void delete(Long id) {
        qualityRepository.deleteById(id);
    }
}