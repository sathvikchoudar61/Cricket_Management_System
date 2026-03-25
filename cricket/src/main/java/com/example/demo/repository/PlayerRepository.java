package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.demo.model.Player;

public interface PlayerRepository extends MongoRepository<Player, String> {
}