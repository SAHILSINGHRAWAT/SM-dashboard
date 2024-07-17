package com.example.socialmediadashboard.repository;

import com.example.socialmediadashboard.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
}
