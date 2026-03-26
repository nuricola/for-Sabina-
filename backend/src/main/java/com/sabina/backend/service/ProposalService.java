package com.sabina.backend.service;

import com.sabina.backend.entity.Proposal;
import com.sabina.backend.repository.ProposalRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class ProposalService {
    private final ProposalRepository proposalRepository;

    public Proposal getLatest() {
        return proposalRepository.findAll()
                .stream()
                .max((a, b) -> a.getCreatedAt().compareTo(b.getCreatedAt()))
                .orElseThrow();
    }

    public Proposal create(Proposal proposal) {
        return proposalRepository.save(proposal);
    }

    public Proposal accept(Long id) {
        Proposal proposal = proposalRepository.findById(id).orElseThrow();
        proposal.setIsAccepted(true);
        proposal.setRespondedAt(LocalDateTime.now());
        return proposalRepository.save(proposal);
    }

    public Proposal update(Long id, Proposal proposal) {
        Proposal existing = proposalRepository.findById(id).orElseThrow();
        existing.setTitle(proposal.getTitle());
        existing.setMessage(proposal.getMessage());
        existing.setProposedLocation(proposal.getProposedLocation());
        return proposalRepository.save(existing);
    }
}