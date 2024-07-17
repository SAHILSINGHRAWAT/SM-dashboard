package com.example.socialmediadashboard.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "analytics")
public class Analytics {
    @Id
    private String id;
    private int followers;
    private int following;
    private int posts;
    private int accountsReached;
    private int accountsEngaged;
    private int adsInsights;
    private int activePromotions;
    private int totalStories;
    private int totalFollows;
    private int totalSaves;
    private int totalComments;
    private int totalShares;
}
