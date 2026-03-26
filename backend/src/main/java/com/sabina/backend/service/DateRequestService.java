package com.sabina.backend.service;

import com.sabina.backend.entity.DateRequest;
import com.sabina.backend.repository.DateRequestRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class DateRequestService {
    private final DateRequestRepository dateRequestRepository;

    public List<DateRequest> getAll() {
        return dateRequestRepository.findAll();
    }

    public List<DateRequest> getPendingRequests() {
        return dateRequestRepository.findByIsAccepted(false);
    }

    public DateRequest getById(Long id) {
        return dateRequestRepository.findById(id).orElseThrow();
    }

    public DateRequest save(DateRequest dateRequest) {
        return dateRequestRepository.save(dateRequest);
    }

    public DateRequest acceptRequest(Long id) {
        DateRequest request = getById(id);
        request.setIsAccepted(true);
        request.setRespondedAt(LocalDateTime.now());
        return dateRequestRepository.save(request);
    }

    public void delete(Long id) {
        dateRequestRepository.deleteById(id);
    }
}