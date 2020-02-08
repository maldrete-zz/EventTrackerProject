package com.skilldistillery.eventtracker.services;

import java.util.List;

import com.skilldistillery.eventtracker.entities.Flight;

public interface FlightService {
	
	Flight findById(int id);			// Read
	
	List<Flight> findAllFlights();
	
	Flight createFlight(Flight flight);		// Create
	
	Flight updateFlightById(Flight flight, int id);		// update
	
	boolean deleteFlightById(int id);				// delete
	
	
}
