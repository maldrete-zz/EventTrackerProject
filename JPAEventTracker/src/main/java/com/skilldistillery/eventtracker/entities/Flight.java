package com.skilldistillery.eventtracker.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Flight {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int id;
	private String aircraft;
	private String weather;

	@Column(name = "flight_time")
	private String flightTime;

	@Column(name = "difficulty_level")
	private int difficultyLevel;

	private String terrain;

	@Column(name = "drone_issues")
	private String droneIssues;

	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "location_id")
	private Location location;

	public Flight() {

	}

	public Flight(int id, String aircraft, String weather, String flightTime, int difficultyLevel, String terrain,
			String droneIssues, Location location) {
		super();
		this.id = id;
		this.aircraft = aircraft;
		this.weather = weather;
		this.flightTime = flightTime;
		this.difficultyLevel = difficultyLevel;
		this.terrain = terrain;
		this.droneIssues = droneIssues;
		this.location = location;
	}

	@Override
	public String toString() {
		return "Flight [id=" + id + ", aircraft=" + aircraft + ", weather=" + weather + ", flightTime=" + flightTime
				+ ", difficultyLevel=" + difficultyLevel + ", terrain=" + terrain + ", droneIssues=" + droneIssues
				+ ", location=" + location + "]";
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getAircraft() {
		return aircraft;
	}

	public void setAircraft(String aircraft) {
		this.aircraft = aircraft;
	}

	public String getWeather() {
		return weather;
	}

	public void setWeather(String weather) {
		this.weather = weather;
	}

	public String getFlightTime() {
		return flightTime;
	}

	public void setFlightTime(String flightTime) {
		this.flightTime = flightTime;
	}

	public int getDifficultyLevel() {
		return difficultyLevel;
	}

	public void setDifficultyLevel(int difficultyLevel) {
		this.difficultyLevel = difficultyLevel;
	}

	public String getTerrain() {
		return terrain;
	}

	public void setTerrain(String terrain) {
		this.terrain = terrain;
	}

	public String getDroneIssues() {
		return droneIssues;
	}

	public void setDroneIssues(String droneIssues) {
		this.droneIssues = droneIssues;
	}

	public Location getLocation() {
		return location;
	}

	public void setLocation(Location location) {
		this.location = location;
	}

}
