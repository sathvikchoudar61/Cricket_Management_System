package com.example.demo.repository;

import com.example.demo.model.Umpire;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UmpireRepository extends MongoRepository<Umpire, String> {
}