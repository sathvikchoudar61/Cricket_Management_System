package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.demo.model.Coach;

public interface CoachRepository extends MongoRepository<Coach, String> {
}