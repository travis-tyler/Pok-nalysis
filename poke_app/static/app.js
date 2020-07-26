d3.csv("../Resources/pokedex_(Update.04.20).csv").then(function(data) {
    console.log(data[0]);
  });
// // from data.js
// var tableData = data;

// // Select the button
// var button = d3.select("button");

// // Select the form
// var form = d3.select("#form-control");

// // Select the table body
// var tableBody = d3.select("tbody")

// // Create event handlers 
// button.on("click", eventHandler);
// form.on("submit", eventHandler);

// // Complete the event handler function for the form
// function eventHandler() {

//   // Prevent refreshing
//   d3.event.preventDefault();

//   // Select rows and clear table
//   tableBody.selectAll("tr").remove()

//   // Select HTML of input element 
//   var userDate = d3.select(".date-field");
//   var userCity = d3.select(".city-field");
//   var userState = d3.select(".state-field");
//   var userCountry = d3.select(".country-field");
//   var userShape = d3.select(".shape-field");


//   // Get value property of inputElement
//   var inputDate = userDate.property("value");
//   var inputCity = userCity.property("value");
//   var inputState = userState.property("value");
//   var inputCountry = userCountry.property("value");
//   var inputShape = userShape.property("value");


//   // Use the form input to filter the data by input fields
//   var sightings = tableData
  
//   if (datetime) {
//     sightings = sightings.filter(sighting => sighting.datetime === inputDate);
//   }
//   if (inputCity) {
//     sightings = sightings.filter(sighting => sighting.city === inputCity);
//   }
//   if (inputState) {
//     sightings = sightings.filter(sighting => sighting.state === inputState);
//   }
//   if (inputCountry) {
//     sightings = sightings.filter(sighting => sighting.country === inputCountry);
//   }
//   if (inputShape) {
//     sightings = sightings.filter(sighting => sighting.shape === inputShape);
//   }

//   // Create arrays for each column
//   var datetime = sightings.map(sighting => sighting.datetime);
//   var city = sightings.map(sighting => sighting.city);
//   var state = sightings.map(sighting => sighting.state);
//   var country = sightings.map(sighting => sighting.country);
//   var shape = sightings.map(sighting => sighting.shape);
//   var durationMinutes = sightings.map(sighting => sighting.durationMinutes);
//   var comments = sightings.map(sighting => sighting.comments);

//   // Use a for loop to append new rows to table and populate with filtered data
//   for (var sighting = 0; sighting < sightings.length; sighting++) {
//     var newRow = tableBody.append("tr");
//     newRow.append("td").text(datetime[sighting]);
//     newRow.append("td").text(city[sighting]);
//     newRow.append("td").text(state[sighting]);
//     newRow.append("td").text(country[sighting]);
//     newRow.append("td").text(shape[sighting]);
//     newRow.append("td").text(durationMinutes[sighting]);
//     newRow.append("td").text(comments[sighting]);
//   }

// };


// function buildPlot(stat1, stat2) {
//     // let d3;
//     // let Plotly;

//     console.log(stat1);

//     Plotly.d3.csv("../../resources/scatter_pokedex.csv", function (err, rows) {
//         function unpack(rows, key) {
//             return rows.map(function (row) { return row[key]; });
//         }


//     /* data route */
//     // const url = "/scatter";

//         console.log(stat1);

//     // d3.json(url).then(function(response) {

//     //     console.log(response);


//         // Trace for poke data
//         let trace = {
//             x: unpack(rows, stat1),
//             y: unpack(rows, stat2),
//             type:"scatter",
//             name:"hello"
//         };

//         let data = [trace];

//         // Layout for line graph
//         let layout = {
//             title: `${stat_name1} vs. ${stat_name2}`,
//             height: 700,
//             width: 1000,
//             xaxis: {
//                 title: stat_name1
//               },
//               yaxis: {
//                 title: stat_name2,
//                 tick0: 0
//               },
//             paper_bgcolor: 'rgba(0,0,0,0)',
//             plot_bgcolor: 'rgba(0,0,0,0)',
//             font: {
//                 color: "white"
//             }        
//         };

//         console.log(data);

//         Plotly.newPlot("plot", data, layout);
//     });
// }

// // Select dropdown menus using D3
// // var selectDrop1 = d3.select("#stat_name1");
// // var selectDrop2 = d3.select("#stat_name2");
// var submitButton = d3.select("#submitButton")

// // console.log(selectDrop1);
// // console.log(selectDrop2);
// console.log(submitButton);



// // Create event handler
// submitButton.on("click",runEnter);
// // Event handler function
// function runEnter() {
//     // Prevent the page from refreshing
//     d3.event.preventDefault();
//     // Select the input element and get HTML node
//     var inputElement1 = d3.select("#stat_name1");
//     // Get the value property of the input element
//     let userStat1 = inputElement1.property("value");

//     console.log(userStat2);

//     // Select the input element and get HTML node
//     var inputElement2 = d3.select("#stat_name2");
//     // Get the value property of the input element
//     let userStat2 = inputElement2.property("value");

//     buildPlot(userStat1, userStat2);
 
// };


