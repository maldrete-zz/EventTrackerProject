package com.skilldistillery.eventtracker.services;

import java.util.List;

import com.skilldistillery.eventtracker.entities.Location;

public interface LocationService {

	Location findById(int id); // Read

	List<Location> findAllLocations();

	Location createLocation(Location location); // Create

	Location updateLocationById(Location location, int id); // update

	boolean deleteLocationById(int id); // delete

}
