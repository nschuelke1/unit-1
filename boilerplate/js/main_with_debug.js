
// Create cityPop array for each city and its population.
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

// Create a function to add citySize column to table grouping the cities by population
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
            };
            row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
        };
    });
};

// Function to add an event. This allows the mouseover event with click event inside.
function addEvents(){
    document.querySelector("table").addEventListener("mouseover", function(){
        var color = "rgb(";
        for (var i = 0; i < 3; i++){
            var random = Math.round(Math.random() * 255);
            color += random;
            if (i < 2){
                color += ",";
            } else {
                color += ")";
            };
        };
        document.querySelector("table").style.color = color;
    });

    function clickme(){
        alert('Hey, you clicked me!');
    };

    document.querySelector("table").addEventListener("click", clickme);
};

// Call the functions after creating the table
addColumns(cityPop);
addEvents();
