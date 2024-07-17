package com.example.socialmediadashboard.controller;

import com.example.socialmediadashboard.model.Analytics;
import com.example.socialmediadashboard.repository.AnalyticsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/analytics")
public class AnalyticsController {

    @Autowired
    private AnalyticsRepository analyticsRepository;

    @GetMapping
    public List<Analytics> getAnalytics() {
        return analyticsRepository.findAll();
    }
}
