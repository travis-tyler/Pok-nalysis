// Load data from pokedex csv
(async function(){
  var pokeData = await d3.csv("../../../Resources/pokedex_(Update.04.20).csv").catch(function(error) {
    console.log(error);
  });
  // Print the pokeData
  console.log(pokeData);

  // Select the button
  var button = d3.select("button");

  // Select the form
  var form = d3.select("#form-control");

  // Select the table body
  var tableBody = d3.select("tbody")

  // Create event handlers 
  button.on("click", eventHandler);
  form.on("submit", eventHandler);

  // Complete the event handler function for the form
  function eventHandler() {

    // Prevent refreshing
    d3.event.preventDefault();

    // Select rows and clear table
    tableBody.selectAll("tr").remove()

    // Select HTML of input element 
    var userNo = d3.select(".no-field");
    var userName = d3.select(".name-field");
    var userGen = d3.select(".gen-field");
    var userType1 = d3.select(".type1-field");
    var userType2 = d3.select(".type2-field");
    var userAbility = d3.select(".ability-field");


    // Get value property of inputElement
    var inputNo = userNo.property("value");
    var inputName = userName.property("value");
    var inputGen = userGen.property("value");
    var inputType1 = userType1.property("value");
    var inputType2 = userType2.property("value");
    var inputAbility = userAbility.property("value");


    // Use the form input to filter the data by input fields
    var stats = pokeData
    
    if (inputNo) {
      stats = stats.filter(stats => stats.pokedex_number === inputNo);
    }
    if (inputName) {
      stats = stats.filter(stats => stats.name === inputName);
    }
    if (inputGen) {
      stats = stats.filter(stats => stats.generation === inputGen);
    }
    if (inputType1) {
      stats = stats.filter(stats => stats.type_1 === inputType1);
    }
    if (inputType2) {
      stats = stats.filter(stats => stats.type_2 === inputType2);
    }
    if (inputAbility) {
      stats = stats.filter(stats => stats.ability_1 === inputAbility);
    }

    // Create arrays for each column
    var pokeNo = stats.map(stats => stats.pokedex_number);
    var pokeName = stats.map(stats => stats.name);
    var generation = stats.map(stats => stats.generation);
    var type1 = stats.map(stats => stats.type_1);
    var type2 = stats.map(stats => stats.type_2);
    var height = stats.map(stats => stats.height_m);
    var weight = stats.map(stats => stats.weight_kg);
    var ability1 = stats.map(stats => stats.ability_1);
    var ability2 = stats.map(stats => stats.ability_2);
    var abilityHidden = stats.map(stats => stats.ability_hidden);
    var totalPoints = stats.map(stats => stats.total_points);
    var hp = stats.map(stats => stats.hp);
    var attack = stats.map(stats => stats.attack);
    var defense = stats.map(stats => stats.defense);
    var spAttack = stats.map(stats => stats.sp_attack);
    var spDefense = stats.map(stats => stats.sp_defense);
    var speed = stats.map(stats => stats.speed);
    var catchRate = stats.map(stats => stats.catch_rate);
    var baseFriendship = stats.map(stats => stats.base_friendship);
    var baseEp = stats.map(stats => stats.base_experience);

    // Use a for loop to append new rows to table and populate with filtered data
    for (var stat = 0; stat < stats.length; stat++) {
      var newRow = tableBody.append("tr");
      newRow.append("td").text(pokeNo[stat]);
      newRow.append("td").text(pokeName[stat]);
      newRow.append("td").text(generation[stat]);
      newRow.append("td").text(type1[stat]);
      newRow.append("td").text(type2[stat]);
      newRow.append("td").text(height[stat]);
      newRow.append("td").text(weight[stat]);
      newRow.append("td").text(ability1[stat]);
      newRow.append("td").text(ability2[stat]);
      newRow.append("td").text(abilityHidden[stat]);
      newRow.append("td").text(totalPoints[stat]);
      newRow.append("td").text(hp[stat]);
      newRow.append("td").text(attack[stat]);
      newRow.append("td").text(defense[stat]);
      newRow.append("td").text(spAttack[stat]);
      newRow.append("td").text(spDefense[stat]);
      newRow.append("td").text(speed[stat]);
      newRow.append("td").text(catchRate[stat]);
      newRow.append("td").text(baseFriendship[stat]);
      newRow.append("td").text(baseEp[stat]);

    }
  }


})()





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
