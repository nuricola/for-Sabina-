package com.sabina.backend.service;

import com.sabina.backend.entity.Visit;
import com.sabina.backend.repository.VisitRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class VisitService {

    private final VisitRepository visitRepository;

    public List<Visit> getAll() {
        return visitRepository.findAll();
    }

    public Visit logVisit(String pageUrl, String userAgent, String ipAddress) {
        Visit visit = new Visit();
        visit.setPageUrl(pageUrl);
        visit.setUserAgent(userAgent);
        visit.setIpAddress(ipAddress);
        visit.setVisitedAt(LocalDateTime.now());
        return visitRepository.save(visit);
    }

    public void delete(Long id) {
        visitRepository.deleteById(id);
    }
}