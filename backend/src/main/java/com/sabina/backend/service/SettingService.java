package com.sabina.backend.service;

import com.sabina.backend.entity.Settings;
import com.sabina.backend.repository.SettingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SettingService {

    private final SettingRepository settingRepository;

    public List<Settings> getAll() {
        return settingRepository.findAll();
    }

    public Settings getByKey(String key) {
        return settingRepository.findAll()
                .stream()
                .filter(s -> s.getKey().equals(key))
                .findFirst()
                .orElseThrow();
    }

    public Settings save(Settings settings) {
        return settingRepository.save(settings);
    }

    public void delete(Long id) {
        settingRepository.deleteById(id);
    }
}