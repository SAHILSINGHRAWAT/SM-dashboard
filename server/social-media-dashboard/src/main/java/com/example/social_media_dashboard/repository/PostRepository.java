package com.example.socialmediadashboard.repository;

import com.example.socialmediadashboard.model.Post;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostRepository extends MongoRepository<Post, String> {
}
