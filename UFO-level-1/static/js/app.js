// check that it works console.log("app.js is loaded");

// from data.js
var ufosightings = data;

// check
//console.log(ufosightings);

// get a reference to the table body
let tbody = d3.select("tbody");

//create everything under one function to simplify
let ufo_table = (ufosightings) => {
    
// clear any existing data
tbody.html("");

//this get's you each element as a whole
ufosightings.forEach((ufo_element) => {

    console.log(ufo_element);
    let row = tbody.append("tr");

    // this get's you each key value in each objecy seperately
    Object.entries(ufo_element).forEach(([key, value]) => {
        //console.log(key, value); check if it works
        var cell = row.append("td");
        //makes it show up on the website itself
        cell.text(value);
    });
});
}

let searchbar = (event) => {
    // Prevent page refresh
    d3.event.preventDefault();

    //gets the element and value, can link up actions with . to make it more effecient
    let date = d3.select("#datetime").property("value");
        //console.log(date) check it works
    if (date) {
        return ufo_table(ufosightings.filter(row => row.datetime === date))
        
    } else {
        
    }
}

//find button and activate searchbar function when clicked
var button = d3.select("#filter-btn");

var form = d3.select("form");

button.on("click", searchbar);
form.on("submit",searchbar);

//call the function
ufo_table(ufosightings);
