package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.*;

@Document(collection = "players")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Player {
    @Id
    private String id;

    private String name;
    private Integer jerseyNo;
    private Integer age;
    private String country;
    private String role; 
    private String gender; 

    private Integer matchesPlayed;
    private Integer innings;
    private Integer runs;
    private Double battingAverage;
    private Double strikeRate;
    private Integer fifties;
    private Integer centuries;
    private Integer highestScore;
    private Integer sixes;
    private Integer fours;
    private Integer ducks;

    private Integer wickets;
    private Double economy;
    private Double bowlingAverage;
    private Integer ballsBowled;
    private Integer dotBalls;
    private Integer fiveWicketHauls;
    private Integer maidenOvers;

    private Integer catches;
    private Integer stumping;

    private Integer performanceIndex;
    private Integer manOfTheMatch;
    private Integer manOfTheTournament;

    public void setDefaults() {
        this.matchesPlayed=0;
        this.innings=0;
        this.runs=0;
        this.battingAverage=0.0;
        this.strikeRate=0.0;
        this.fifties=0;
        this.centuries=0;
        this.highestScore=0;
        this.sixes=0;
        this.fours=0;
        this.ducks=0;
        this.wickets=0;
        this.economy=0.0;
        this.bowlingAverage=0.0;
        this.ballsBowled=0;
        this.dotBalls=0;
        this.fiveWicketHauls=0;
        this.maidenOvers=0;
        this.catches=0;
        this.stumping =0;
        this.performanceIndex=0;
        this.manOfTheMatch=0;
        this.manOfTheTournament=0;
    }
}