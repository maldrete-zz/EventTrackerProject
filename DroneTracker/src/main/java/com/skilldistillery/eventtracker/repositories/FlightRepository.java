package com.skilldistillery.eventtracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.eventtracker.entities.Flight;

public interface FlightRepository extends JpaRepository<Flight, Integer> {

}
