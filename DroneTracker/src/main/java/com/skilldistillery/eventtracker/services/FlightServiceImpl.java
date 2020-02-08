package com.skilldistillery.eventtracker.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.eventtracker.entities.Flight;
import com.skilldistillery.eventtracker.repositories.FlightRepository;

@Service
public class FlightServiceImpl implements FlightService {

	@Autowired
	FlightRepository repo;

	@Override
	public Flight findById(int id) {
		Optional<Flight> flight = repo.findById(id);
		return flight.get();
	}

	@Override
	public List<Flight> findAllFlights() {
		return repo.findAll();
	}

	@Override
	public Flight createFlight(Flight flight) {
		return repo.saveAndFlush(flight);
	}

	@Override
	public Flight updateFlightById(Flight flight, int id) {
		Optional<Flight> flightOptional = repo.findById(id);
		Flight managedFlight = null;
		if (flightOptional.isPresent()) {
			managedFlight = flightOptional.get();
		}
		managedFlight = repo.saveAndFlush(flight);
		return managedFlight;
	}

	@Override
	public boolean deleteFlightById(int id) {
		boolean result = false;
		Optional<Flight> flightOptional = repo.findById(id);
		Flight managedFlight = null;
		if (flightOptional.isPresent()) {
			managedFlight = flightOptional.get();
			repo.delete(managedFlight);
		}

		if (managedFlight == null) {
			result = true;
		} else {
			result = false;
		}

		return result;

	}

}
