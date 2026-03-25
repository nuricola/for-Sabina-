package com.sabina.backend.service;

import com.sabina.backend.entity.Memory;
import com.sabina.backend.repository.MemoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MemoryService {

    private final MemoryRepository memoryRepository;

    public List<Memory> getAll(){
        return memoryRepository.findAll();
    }

    public  Memory getById(Long id){
        return  memoryRepository.findById(id).orElseThrow();
    }

    public Memory save(Memory memory) {
        return memoryRepository.save(memory);
    }

    public void delete(Long id) {
        memoryRepository.deleteById(id);
    }

}
