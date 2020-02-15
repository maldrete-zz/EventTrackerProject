window.addEventListener('load', function(e) {
  console.log('document loaded');
  init();
});

function init() {
  document.flightForm.lookup.addEventListener('click', function(event) {
    event.preventDefault();
    var flightId = document.flightForm.flightId.value;
    if (!isNaN(flightId) && flightId > 0) {
      getFlight(flightId);
    }
  })

  document.addflightForm.createFlight.addEventListener('click', function(event) {
    event.preventDefault();
    var location = {
    		id: document.addflightForm.location.value
    }
    
    var flight = {};
    let aircraft1 = document.addflightForm.aircraft.value;
    let weather1 = document.addflightForm.weather.value;
    let flightTime1 = document.addflightForm.flightTime.value;
    let difficultyLevel1 = document.addflightForm.difficultyLevel.value;
    let terrain1 = document.addflightForm.terrain.value;
    let droneIssues1 = document.addflightForm.droneIssues.value;
    let location1 = location;
    console.log(location1);

    flight.aircraft = aircraft1;
    flight.weather = weather1;
    flight.flightTime = flightTime1;
    flight.difficultyLevel = difficultyLevel1;
    flight.terrain = terrain1;
    flight.droneIssues = droneIssues1;
    flight.location = location1;

    if (flight) {
      postFlight(flight);
    }

  })
}

  function postFlight(flight) {
var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8083/api/flight', true);

xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
	  var flightObject = JSON.parse(xhr.responseText);
      console.log(flightObject);
    if (xhr.status == 200 || xhr.status == 201) { // Ok or Created
      var flightObject = JSON.parse(xhr.responseText);
      console.log(flightObject);
    } else {
      console.log("POST request failed.");
      console.error(xhr.status + ': ' + xhr.responseText);
    }
  }
};

var userObjectJson = JSON.stringify(flight); // Convert JS object to JSON string

xhr.send(userObjectJson);
}


function getFlight(flightId) {
  // TODO:
  // * Use XMLHttpRequest to perform a GET request to "api/films/"
  //   with the filmId appended.
  // * On success, if a response was received parse the film data
  //   and pass the film object to displayFilm().
  // * On failure, or if no response text was received, put "Film not found"
  //   in the filmData div.
  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'http://localhost:8083/api/flight/' + flightId);

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status < 400) {
      var flight = JSON.parse(xhr.responseText);
      console.log(flight);
      displayFlight(flight);
    }

    if (xhr.readyState === 4 && xhr.status >= 400) {
      console.error(xhr.status + ': ' + xhr.responseText);
    }
  };

  xhr.send(null);
}

function displayFlight(flight) {

  // TODO:
  // * Create and append elements to the data div to display:
  // * Film title (h1) and description (blockquote).
  // * Rating, release year, and length as an unordered list.

  var dataDiv = document.getElementById('flightData');
  dataDiv.textContent = '';

  let p = document.createElement('p');
  p.textContent = "Aircraft: " + flight.aircraft;
  dataDiv.appendChild(p);

  let p1 = document.createElement('p');
  p1.textContent = "Weather: " + flight.weather;
  dataDiv.appendChild(p1);

  let p2 = document.createElement('p');
  p2.textContent = "Flight Time: " + flight.flightTime;
  dataDiv.appendChild(p2);

  let p3 = document.createElement('p');
  p3.textContent = "Difficulty Level: " + flight.difficultyLevel;
  dataDiv.appendChild(p3);

  let p4 = document.createElement('p');
  p4.textContent = "Terrain: " + flight.terrain;
  dataDiv.appendChild(p4);

  let p5 = document.createElement('p');
  p5.textContent = "Drone Issues: " + flight.droneIssues;
  dataDiv.appendChild(p5);

  let p6 = document.createElement('p');
  p6.textContent = "State: " + flight.location.state;
  dataDiv.appendChild(p6);


  var dataDiv = document.getElementById('createFlight');
  dataDiv.textContent = '';




}
