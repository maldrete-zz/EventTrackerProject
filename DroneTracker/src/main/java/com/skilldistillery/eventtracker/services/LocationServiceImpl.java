package com.skilldistillery.eventtracker.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.skilldistillery.eventtracker.entities.Location;
import com.skilldistillery.eventtracker.repositories.LocationRepository;

public class LocationServiceImpl implements LocationService {

	@Autowired
	LocationRepository repo;
	
	@Override
	public Location findById(int id) {
		Optional<Location> managedLocation = repo.findById(id);
		return managedLocation.get();
	}

	@Override
	public List<Location> findAllLocations() {
		List<Location> managedLocations = repo.findAll();
		return managedLocations;
	}

	@Override
	public Location createLocation(Location location) {
		Location newLocation = repo.saveAndFlush(location);
		return newLocation;
	}

	@Override
	public Location updateLocationById(Location location, int id) {
		Location newLocation = null;
		Optional<Location> managedLocation = repo.findById(id);
		
		if(managedLocation.isPresent()) {
			newLocation = managedLocation.get();
			newLocation = repo.saveAndFlush(location);
		}
		return newLocation;
	}

	@Override
	public boolean deleteLocationById(int id) {
		boolean result = false;
		Optional<Location> managedLocation = repo.findById(id);
		Location optionalLocation = managedLocation.get();
		if(managedLocation.isPresent()) {
			repo.delete(optionalLocation);
		}
		
		if(optionalLocation != null) {
			result = false;
		} else {
			result = true;
		}
		return result;
	}

}
