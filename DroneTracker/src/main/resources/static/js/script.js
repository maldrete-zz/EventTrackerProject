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
  
  getAllFlights();
}



function updateFlight(flight) {
  var xhr = new XMLHttpRequest();

  xhr.open('PUT', 'http://localhost:8083/api/flight/' + flight.id);
  
  xhr.setRequestHeader("Content-type", "application/json");
  

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

  console.log(flight);
  
  var userObjectJson = JSON.stringify(flight);
  
  xhr.send(userObjectJson);
}

function displayAllFlights(allflights) {

  var dataDiv = document.getElementById('flightTable');
  dataDiv.textContent = '';

  let header = document.createElement('h2');
  header.textContent ="All Drone Flights";
  dataDiv.appendChild(header);

  
    allflights.forEach(function(value, index, array) {

    let table = document.createElement('table');
    dataDiv.appendChild(table);

    let tr1 = document.createElement('tr');
    table.appendChild(tr1);

    // Aircraft
    let td10 = document.createElement('td');
    td10.textContent = "Aircraft";
    td10.addEventListener('click', function(e) {
      console.log(value);
      flightDetails(value);
    });
    tr1.appendChild(td10)
    
    let td1 = document.createElement('td');
    td1.textContent = value.aircraft;
    td1.addEventListener('click', function(e) {
      flightDetails(value);
    });
    tr1.appendChild(td1);
  

    let tr2 = document.createElement('tr');
    table.appendChild(tr2);

    // Weather
    let td11 = document.createElement('td');
    td11.textContent = "Weather";
    td11.addEventListener('click', function(e) {
      flightDetails(value);
    });
    tr2.appendChild(td11);

    let td2 = document.createElement('td');
    td2.textContent = value.weather;
    td2.addEventListener('click', function(e) {
      flightDetails(value);
    });
    tr2.appendChild(td2);

    let tr3 = document.createElement('tr');
    table.appendChild(tr3);
    
    // Flight Time
    let td12 = document.createElement('td');
    td12.textContent = "Flight Time";
    td12.addEventListener('click', function(e) {
      flightDetails(value);
    });
    tr3.appendChild(td12);

    let td3 = document.createElement('td');
    td3.textContent = value.flightTime;
    td3.addEventListener('click', function(e) {
      flightDetails(value);
    });
    tr3.appendChild(td3);

    let tr4 = document.createElement('tr');
    table.appendChild(tr4);

    // Difficulty Level
    let td13 = document.createElement('td');
    td13.textContent = "Difficulty Level";
    td13.addEventListener('click', function(e) {
      flightDetails(value);
    });
    tr4.appendChild(td13);

    let td4 = document.createElement('td');
    td4.textContent = value.difficultyLevel;
    td4.addEventListener('click', function(e) {
      flightDetails(value);
    });
    tr4.appendChild(td4);

    let tr5 = document.createElement('tr');
    table.appendChild(tr5);

    //Terrain
    let td14 = document.createElement('td')
    td14.textContent = "Terrain";
    td14.addEventListener('click', function(e) {
      flightDetails(value);
    });
    tr5.appendChild(td14);

    let td5 = document.createElement('td')
    td5.textContent = value.terrain;
    td5.addEventListener('click', function(e) {
      flightDetails(value);
    });
    tr5.appendChild(td5);

    let tr6 = document.createElement('tr');
    table.appendChild(tr6);

    // Drone Issues
    let td15 = document.createElement('td');
    td15.textContent = "Drone Issues";
    td15.addEventListener('click', function(e) {
      flightDetails(value);
    });
    tr6.appendChild(td15);

    let td6 = document.createElement('td');
    td6.textContent = value.droneIssues;
    td6.addEventListener('click', function(e) {
      flightDetails(value);
    });
    tr6.appendChild(td6);

    let tr7 = document.createElement('tr');
    table.appendChild(tr7);

    // State
    let td16 = document.createElement('td');
    td16.textContent = "State";
    td16.addEventListener('click', function(e) {
      flightDetails(value);
    });
    tr7.appendChild(td16);

    let td7 = document.createElement('td');
    td7.textContent = value.location.state;
    td7.addEventListener('click', function(e) {
      flightDetails(value);
    });
    tr7.appendChild(td7);
    
    dataDiv.appendChild(table);

    let br = document.createElement('br');
    dataDiv.appendChild(br);
    
  });
  }

  function flightDetails(flight) {

    let updateFlightDiv = document.getElementById('updateFlight');
    updateFlightDiv.textContent = "";

    let hr = document.createElement('hr');
    updateFlightDiv.appendChild(hr);
    
    let h2 = document.createElement('h2');
    h2.textContent = 'Update Flight';
    updateFlightDiv.appendChild(h2);

    let form = document.createElement('form');
    form.name = 'update';
  
    //  Aircraft
    let aircraft = document.createElement('input');
    aircraft.name = 'aircraft';
    aircraft.type = 'text';
    aircraft.value = flight.aircraft;
    form.appendChild(aircraft);

    let br1 = document.createElement('br');
    form.appendChild(br1);
  
    // Weather
    let weather = document.createElement('input');
    weather.name = 'weather';
    weather.type = 'text';
    weather.value = flight.weather;
    form.appendChild(weather);

    let br2 = document.createElement('br');
    form.appendChild(br2);
  
    // Fight Time
    let flightTime = document.createElement('input');
    flightTime.name = 'flightTime';
    flightTime.type = 'text';
    flightTime.value = flight.flightTime;
    form.appendChild(flightTime);

    let br3 = document.createElement('br');
    form.appendChild(br3);
  
    // Difficulty Level
    let difficultyLevel = document.createElement('input');
    difficultyLevel.name = 'difficultyLevel';
    difficultyLevel.type = 'number';
    difficultyLevel.value = flight.difficultyLevel;
    form.appendChild(difficultyLevel);
  
    let br4 = document.createElement('br');
    form.appendChild(br4);

    // Terrain
    let terrain = document.createElement('input');
    terrain.name = 'terrain';
    terrain.type = 'text';
    terrain.value = flight.terrain;
    form.appendChild(terrain);

    let br5 = document.createElement('br');
    form.appendChild(br5);
  
    // Drone Issues
    let droneIssues = document.createElement('input');
    droneIssues.name = 'droneIssues';
    droneIssues.type = 'text';
    droneIssues.value = flight.droneIssues;
    form.appendChild(droneIssues);

    let br6 = document.createElement('br');
    form.appendChild(br6);
  
    // create a submit input
    var submit = document.createElement('input');
    submit.name = 'submit'; // assign a name attribute
    submit.type = 'submit'; // assign a type attribute
    submit.value = 'Submit Form'; // assign a value attribute
  
    submit.addEventListener('click', function(e) { // Assign an event listener to the submit button variable
      e.preventDefault();
      var form = e.target.parentElement;
  
      // print the fname value to the console
  
      flight.aircraft = form.aircraft.value;
      flight.weather = form.weather.value;
      flight.flightTime = form.flightTime.value;
      flight.difficultyLevel = form.difficultyLevel.value;
      flight.terrain = form.terrain.value;
      flight.droneIssues = form.droneIssues.value;

      updateFlight(flight);
  
      // clear the form data
      form.reset();
    });
  
    // add the input to the form
    form.appendChild(submit);
    
    updateFlightDiv.appendChild(form);
  }

function postFlight(flight) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:8083/api/flight', true);

  xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON
  // request body

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

  var userObjectJson = JSON.stringify(flight); // Convert JS object to JSON
  // string

  xhr.send(userObjectJson);
}



function getFlight(flightId) {
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


function getAllFlights() {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'http://localhost:8083/api/flight');


  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status < 400) {
      var allflights = JSON.parse(xhr.responseText);
      console.log(allflights)

      displayAllFlights(allflights);
    }

    if (xhr.readyState === 4 && xhr.status >= 400) {
      console.error(xhr.status + ': ' + xhr.responseText);
    }
  };

  xhr.send(null);
}



  function displayFlight(flight) {

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

  }
