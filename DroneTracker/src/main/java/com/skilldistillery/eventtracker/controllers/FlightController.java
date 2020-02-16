package com.skilldistillery.eventtracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.eventtracker.entities.Flight;
import com.skilldistillery.eventtracker.services.FlightServiceImpl;

@RestController
@RequestMapping("api")
public class FlightController {

	@Autowired
	FlightServiceImpl svc;

	@GetMapping("flight/{id}")
	public Flight getOneFLight(@PathVariable Integer id, HttpServletRequest request, HttpServletResponse response) {
		try {
			Flight flight = svc.findById(id);
			response.setStatus(200);
			response.setHeader("Location", "http://localhost:8082/api/flight/" + flight.getId());
			return flight;
		} catch (Exception e) {
			e.printStackTrace();
			response.setStatus(400);
			return null;
		}

	}

	@PostMapping("flight")
	public Flight createFlight(@RequestBody Flight flight, HttpServletRequest request, HttpServletResponse response) {

		try {
			Flight createdFlight = svc.createFlight(flight);
			response.setStatus(200);
			StringBuffer url = request.getRequestURL();
			url.append("/").append(flight.getId());
			String location = url.toString();
			response.addHeader("Location", location);
			return createdFlight;
		} catch (Exception e) {
			e.printStackTrace();
			response.setStatus(400);
			return null;
		}
	}
	
	@GetMapping("flight")
	public List<Flight> AllFlight(HttpServletRequest request, HttpServletResponse response) {

		try {
			List<Flight> createdFlight = svc.findAllFlights();
			
			response.setStatus(200);
			StringBuffer url = request.getRequestURL();
			url.append("/").append(createdFlight.get(0).getId());
			String location = url.toString();
			response.addHeader("Location", location);
			return createdFlight;
		} catch (Exception e) {
			e.printStackTrace();
			response.setStatus(400);
			return null;
		}
	}

	@PutMapping("flight/{fid}")
	public Flight updateFlight(@PathVariable int fid, @RequestBody Flight flight) {
		Flight updatedflight = svc.updateFlightById(flight, fid);
		return updatedflight;
	}

	@DeleteMapping("d")
	public boolean deletePost(@PathVariable Integer id, HttpServletResponse resp) {
		boolean deleted = svc.deleteFlightById(id);
		if (deleted) {
			resp.setStatus(204);
		} else {
			resp.setStatus(404);
		}
		return deleted;
	}

}
