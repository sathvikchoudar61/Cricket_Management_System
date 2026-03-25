package com.example.demo.controller;
import com.example.demo.model.Coach;
import com.example.demo.repository.CoachRepository;
import java.util.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import lombok.*;



@RestController
@RequestMapping("/coach")
@CrossOrigin
public class CoachController {
    @Autowired
    private CoachRepository repo;

    @PostMapping("/add")
    public Coach addCoach(@RequestBody Coach coach) {
        return repo.save(coach);
    }

    @GetMapping("/all")
    public List<Coach> getAllCoachs() {
        return repo.findAll();
    }

    @GetMapping("/{id}")
    public Coach getCoachbyID(@PathVariable String id) {
        return repo.findById(id).orElse(null);
    }

    @DeleteMapping("/{id}")
    public String deleteCoachbyID(@PathVariable String id) {
        repo.deleteById(id);
        return "deleted Coach";
    }


}
