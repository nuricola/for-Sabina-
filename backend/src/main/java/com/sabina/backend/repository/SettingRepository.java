package com.sabina.backend.repository;

import com.sabina.backend.entity.Settings;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SettingRepository extends JpaRepository<Settings,Long> {
}
