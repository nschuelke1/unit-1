// Example 3.5 line 6...
function cities(){
    // Define two arrays for cities and population
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
        } // Add missing closing brace
    ]; // Add missing closing bracket
    
    // Add your code to manipulate and display the data as needed
    for (var i = 0; i < cityPop.length; i++) {
        var tr = document.createElement("tr");

        var city = document.createElement("td");
        city.innerHTML = cityPop[i].city;
        tr.appendChild(city);

        var pop = document.createElement("td");
        pop.innerHTML = cityPop[i].population;
        tr.appendChild(pop);

        var table = document.querySelector("table"); // Ensure there's a <table> element in your HTML
        table.appendChild(tr);
    }
}

// Call the function to execute it
cities();
