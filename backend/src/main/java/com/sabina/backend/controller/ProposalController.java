package com.sabina.backend.controller;

import com.sabina.backend.entity.Proposal;
import com.sabina.backend.service.ProposalService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/proposal")
public class ProposalController {
    private final ProposalService proposalService;

    public ProposalController(ProposalService proposalService) {
        this.proposalService = proposalService;
    }

    @GetMapping
    public Proposal getLatest() {
        return proposalService.getLatest();
    }

    @PostMapping
    public Proposal create(@RequestBody Proposal proposal) {
        return proposalService.create(proposal);
    }

    @PostMapping("/{id}/accept")
    public Proposal accept(@PathVariable Long id) {
        return proposalService.accept(id);
    }

    @PutMapping("/{id}")
    public Proposal update(@PathVariable Long id, @RequestBody Proposal proposal) {
        return proposalService.update(id, proposal);
    }
}