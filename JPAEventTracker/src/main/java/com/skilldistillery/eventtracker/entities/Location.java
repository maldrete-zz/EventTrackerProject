package com.skilldistillery.eventtracker.entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Location {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int id;

	@OneToMany(mappedBy = "location")
	private List<Flight> flights;

	private String state;
	private String city;

	public Location() {

	}

	public Location(int id, List<Flight> flights, String state, String city) {
		super();
		this.id = id;
		this.flights = flights;
		this.state = state;
		this.city = city;
	}

	@Override
	public String toString() {
		return "Location [id=" + id + ", flights=" + flights + ", state=" + state + ", city=" + city + "]";
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public List<Flight> getFlights() {
		return flights;
	}

	public void setFlights(List<Flight> flights) {
		this.flights = flights;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}
}
