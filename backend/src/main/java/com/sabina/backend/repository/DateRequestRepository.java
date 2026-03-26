package com.sabina.backend.repository;

import com.sabina.backend.entity.DateRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DateRequestRepository extends JpaRepository<DateRequest, Long> {
    List<DateRequest> findByIsAccepted(Boolean isAccepted);
}