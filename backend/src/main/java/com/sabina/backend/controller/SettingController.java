package com.sabina.backend.controller;

import com.sabina.backend.entity.Settings;
import com.sabina.backend.service.SettingService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/settings")
public class SettingController {
    private final SettingService settingService;

    public SettingController(SettingService settingService) {
        this.settingService = settingService;
    }

    @GetMapping
    public List<Settings> getAll() {
        return settingService.getAll();
    }

    @GetMapping("/{key}")
    public Settings getByKey(@PathVariable String key) {
        return settingService.getByKey(key);
    }

    @PostMapping
    public Settings create(@RequestBody Settings settings) {
        return settingService.save(settings);
    }

    @PutMapping("/{id}")
    public Settings update(@PathVariable Long id, @RequestBody Settings settings) {
        settings.setId(id);
        return settingService.save(settings);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        settingService.delete(id);
    }
}