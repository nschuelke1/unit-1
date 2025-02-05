// City population data array
var cityPop = [
  { 
      city: 'Madison',
      population: 233209
  },
  {
      city: 'Milwaukee',
      population: 594833
  },
  {
      city: 'Green Bay',
      population: 104057
  },
  {
      city: 'Superior',
      population: 27244
  }
];

// Function to populate the table
function cities() {
  // Loop through the cityPop array and create table rows
  for (var i = 0; i < cityPop.length; i++) {
      var tr = document.createElement("tr");

      var city = document.createElement("td");
      city.innerHTML = cityPop[i].city;
      tr.appendChild(city);

      var pop = document.createElement("td");
      pop.innerHTML = cityPop[i].population;
      tr.appendChild(pop);

      // Append the row to the tbody
      var tableBody = document.querySelector("table tbody");
      tableBody.appendChild(tr);
  }
  addColumns(cityPop);
  addEvents();
}

// Function to add columns to the table
function addColumns(cityPop){
  document.querySelectorAll("tr").forEach(function(row, i){
      if (i == 0){
          row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
      } else {
          var citySize;

          if (cityPop[i-1].population < 100000){
              citySize = 'Small';
          } else if (cityPop[i-1].population < 500000){
              citySize = 'Medium';
          } else {
              citySize = 'Large';
          }

          row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
      }
  });
}

// Function to add events to the table
function addEvents(){
  document.querySelector("table").addEventListener("mouseover", function(){
      var color = "rgb(";
      for (var i=0; i<3; i++){
          var random = Math.round(Math.random() * 255);
          color += random;
          if (i<2){
              color += ",";
          } else {
              color += ")";
          }
      }
      document.querySelector("table").style.color = color;
  });

  document.querySelector("table").addEventListener("click", function(){
      alert('Hey, you clicked me!');
  });
}

// process response from AJAX request
function debugCallback(response){
  response.json().then(function(data) {
      document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(data));
  });
}
// fetch request to get json data
function debugAjax(){
  var myData;

  fetch("data/MegaCities1.csv")
      .then(function(response){
          return response.json();
      })
      .then(function(data){
          myData = data;
          debugCallback(data);
      });

  document.querySelector("#mydiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:<br>' + JSON.stringify(myData));
}

// Call functions to execute them
cities();
debugAjax();
