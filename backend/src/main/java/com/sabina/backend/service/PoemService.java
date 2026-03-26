package com.sabina.backend.service;

import com.sabina.backend.entity.Poem;
import com.sabina.backend.repository.PoemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PoemService {

    private final PoemRepository poemRepository;

    public List<Poem> getAll() {
        return poemRepository.findAll();
    }

    public Poem getById(Long id) {
        return poemRepository.findById(id).orElseThrow();
    }

    public Poem save(Poem poem) {
        return poemRepository.save(poem);
    }

    public void delete(Long id) {
        poemRepository.deleteById(id);
    }
}