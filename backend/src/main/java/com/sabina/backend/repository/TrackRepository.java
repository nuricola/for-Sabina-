package com.sabina.backend.repository;

import com.sabina.backend.entity.Track;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TrackRepository extends JpaRepository<Track,Long> {
}
