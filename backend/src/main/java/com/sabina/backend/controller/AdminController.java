package com.sabina.backend.controller;

import com.sabina.backend.entity.Admin;
import com.sabina.backend.service.AdminService;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/admin")
public class AdminController {
    private final AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @GetMapping("/{username}")
    public Optional<Admin> findByUsername(@PathVariable String username) {
        return adminService.findByUsername(username);
    }

    @PostMapping
    public Admin create(@RequestBody Admin admin) {
        return adminService.save(admin);
    }

    @PostMapping("/{id}/login")
    public void recordLogin(@PathVariable Long id) {
        adminService.recordLogin(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        adminService.delete(id);
    }
}