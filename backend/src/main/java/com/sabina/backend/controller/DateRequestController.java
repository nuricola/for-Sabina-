package com.sabina.backend.controller;

import com.sabina.backend.entity.DateRequest;
import com.sabina.backend.service.DateRequestService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/date-requests")
public class DateRequestController {
    private final DateRequestService dateRequestService;

    public DateRequestController(DateRequestService dateRequestService) {
        this.dateRequestService = dateRequestService;
    }

    @GetMapping
    public List<DateRequest> getAll() {
        return dateRequestService.getAll();
    }

    @GetMapping("/pending")
    public List<DateRequest> getPending() {
        return dateRequestService.getPendingRequests();
    }

    @GetMapping("/{id}")
    public DateRequest getById(@PathVariable Long id) {
        return dateRequestService.getById(id);
    }

    @PostMapping
    public DateRequest create(@RequestBody DateRequest dateRequest) {
        return dateRequestService.save(dateRequest);
    }

    @PostMapping("/{id}/accept")
    public DateRequest accept(@PathVariable Long id) {
        return dateRequestService.acceptRequest(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        dateRequestService.delete(id);
    }
}