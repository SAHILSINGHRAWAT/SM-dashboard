package com.example.socialmediadashboard.repository;

import com.example.socialmediadashboard.model.Analytics;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AnalyticsRepository extends MongoRepository<Analytics, String> {
}
