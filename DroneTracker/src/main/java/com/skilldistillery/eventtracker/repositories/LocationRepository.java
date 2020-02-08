package com.skilldistillery.eventtracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.eventtracker.entities.Location;

public interface LocationRepository extends JpaRepository<Location, Integer> {

}
