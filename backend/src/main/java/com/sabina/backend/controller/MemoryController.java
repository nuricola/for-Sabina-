package com.sabina.backend.controller;


import com.sabina.backend.entity.Memory;
import com.sabina.backend.service.MemoryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/memories")
public class MemoryController {
    private  final MemoryService memoryService;

    public  MemoryController(MemoryService memoryService){
        this.memoryService = memoryService;
    }

    @GetMapping
    public List<Memory> getAll() {
        return memoryService.getAll();
    }

    @PostMapping
    public Memory create(@RequestBody Memory memory) {
        return memoryService.save(memory);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        memoryService.delete(id);
    }
}
