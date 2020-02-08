package com.skilldistillery.eventtracker.entities;

import static org.junit.jupiter.api.Assertions.*;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class FlightTests {
	
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Flight flight;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("DronePU");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		flight = em.find(Flight.class, 1);
		
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
	}

	@Test
	void test1() {

		assertEquals("DJI Mavic Pro", flight.getAircraft());
		assertEquals("overcast clear skies", flight.getWeather());
		assertEquals("24 minutes", flight.getFlightTime());
		assertEquals(5, flight.getDifficultyLevel());
		assertEquals("beach, over water, with hills", flight.getTerrain());
		assertEquals("app issues, lost visual connection during wind gusts", flight.getDroneIssues());
		assertEquals("Mckinleyville",flight.getLocation().getCity());
		
		

	}

}
