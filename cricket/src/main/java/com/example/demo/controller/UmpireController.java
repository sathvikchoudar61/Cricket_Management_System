package com.example.demo.controller;
import com.example.demo.model.Umpire;
import com.example.demo.repository.UmpireRepository;
import java.util.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import lombok.*;

@RestController
@RequestMapping("/umpire")
@CrossOrigin
public class UmpireController {
    @Autowired
    private UmpireRepository repo;

    @PostMapping("/add")
    public Umpire addUmpire(@RequestBody Umpire coach) {
        return repo.save(coach);
    }

    @GetMapping("/all")
    public List<Umpire> getAllUmpires() {
        return repo.findAll();
    }

    @GetMapping("/{id}")
    public Umpire getUmpirebyID(@PathVariable String id) {
        return repo.findById(id).orElse(null);
    }

    @DeleteMapping("/{id}")
    public String deleteUmpirebyID(@PathVariable String id) {
        repo.deleteById(id);
        return "deleted Coach";
    }
}
