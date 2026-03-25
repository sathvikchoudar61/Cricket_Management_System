package com.example.demo.controller;

import com.example.demo.model.Player;
import com.example.demo.repository.PlayerRepository;
import java.util.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import lombok.*;


@RestController
@RequestMapping("/player")
@CrossOrigin
public class PlayerController {
	@Autowired
    private PlayerRepository repo;
	
	@PostMapping("/add")
	public Player addPlayer(@RequestBody Player entry) {
		Player player = new Player();

	    player.setName(entry.getName());
	    player.setAge(entry.getAge());
	    player.setGender(entry.getGender());
	    player.setJerseyNo(entry.getJerseyNo());
		player.setCountry(entry.getCountry());
	    player.setRole(entry.getRole());
		player.setDefaults();
		return repo.save(player);
	}

	@GetMapping("/all")
    public List<Player> getAllPlayers() {
        return repo.findAll();
    }
	
	@GetMapping("/{id}")
	public Player getPlayerbyID(@PathVariable String id) {
		return repo.findById(id).orElse(null);
	}
	
	@DeleteMapping("/{id}")
	public String deletePlayerbyID(@PathVariable String id) {
		repo.deleteById(id);
		return "deleted player";
	}
	
	
	
}
