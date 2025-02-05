



function debugCallback(response){
	response.json().then(function(data) {
	  document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(data));
	});
  };
  
  function debugAjax(){
	var myData;
  
	fetch("data/MegaCities.geojson")
	  .then(function(response){
		return response.json();
	  })
	  .then(function(data){
		myData = data;
		debugCallback(data);
	  });
  
	document.querySelector("#mydiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:<br>' + JSON.stringify(myData));
  };
  
  document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(myData));
  