package com.example.demo.model;
import java.util.*;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "matches")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Match {
	@Id
	private String id;

	private List<Player> teamA;
	private List<Player> totalTeamA;
	private List<Player> teamB;
	private List<Player> totalTeamB;
	private Coach coachA;
	private Coach coachB;
	private List<Umpire> umpires;

	private String matchType;     // T20, ODI, TEST
	private String venue;
	private Date matchDate;
	private String status;       // SCHEDULED, LIVE, COMPLETED

	private String tossWinner;
	private String tossDecision; // BAT / BOWL

}
