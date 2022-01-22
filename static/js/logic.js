persons = new L.LayerGroup();
property = new L.LayerGroup();
society = new L.LayerGroup();
// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

// // Get data from cities.js
// let cityData = cities;

//  // Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//   //console.log(city)
//   persons=L.circleMarker(city.location, {
//     radius: city.person/3500,
//     fillColor: "#ffae42",
//     color: "#000000",
//   })
//   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Person Crime " + city.person.toLocaleString() + "</h3>");
// persons.addTo(map);
// });

// let person_type_crime = cityData
// person_type_crime.forEach(function(record) {
//     if (record.state === "MT") {
//         record.person = 1000;
//     }
// });

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// // We create the tile layer that will be the background of our map.
// let propertycrime = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// // We create the tile layer that will be the background of our map.
// let societycrime = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// Create a base layer that holds all three maps.

//persons = new L.LayerGroup()

// Pass our map layers into our layers control and add the layers control to the map.
//L.control.layers(baseMaps).addTo(map);

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

d3.json('./getperson').then(data => {
console.log(data)
// Loop through the cities array and create one marker for each city.

for (const [key, value] of Object.entries(data["capital"])) {
  console.log([data.sum[key]])
  console.log(key, value);
  L.circleMarker([data.lat[key],data.long[key]],{
    radius: data.sum[key]/3500,
    fillColor: "#ffae42",
    color: "#000000",
  })
  .bindPopup("<h2>" + data.capital[key] + ", " + data.state[key] + "</h2> <hr> <h3>Person Crime " + data.sum[key].toLocaleString() + "</h3>")
  .addTo(persons)
}
   //persons.addTo(map);
  //persons.append(L.circleMarker(city.location,
  
// cityData.forEach(function(city) {
//   //console.log(city)
//   persons=L.circleMarker(city.location, {
//     radius: city.person/3500,
//     fillColor: "#ffae42",
//     color: "#000000",
//   })
//   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Person Crime " + city.person.toLocaleString() + "</h3>");
// persons.addTo(map);
d3.json('./getproperty').then(data => {
  //console.log(data)
  // Loop through the cities array and create one marker for each city.
  property = new L.LayerGroup();
for (const [key, value] of Object.entries(data["capital"])) {
  console.log(key, value);
  L.circleMarker([data.lat[key],data.long[key]],{
    radius: data.sum[key]/3500,
    fillColor: "#ffae42",
    color: "#000000",
  })
  .bindPopup("<h2>" + data.capital[key] + ", " + data.state[key] + "</h2> <hr> <h3>Property Crime " + data.sum[key].toLocaleString() + "</h3>")
  .addTo(property)
}
//property.addTo(map);
d3.json('./getsociety').then(data => {
  //console.log(data)
  // Loop through the cities array and create one marker for each city.
  society = new L.LayerGroup();
for (const [key, value] of Object.entries(data["capital"])) {
  console.log(key, value);
  L.circleMarker([data.lat[key],data.long[key]],{
    radius: data.sum[key]/3500,
    fillColor: "#ffae42",
    color: "#000000",
  })
  .bindPopup("<h2>" + data.capital[key] + ", " + data.state[key] + "</h2> <hr> <h3>Society Crime " + data.sum[key].toLocaleString() + "</h3>")
  .addTo(society)
}
//society.addTo(map);
let overlays = {
  "Person Crime": persons,
  "Property Crime": property,
  "Society Crime": society
};

L.control.layers(null, overlays).addTo(map);
var info = L.control({
  position: "bottomright"
});
info.onAdd = function() {
  var div = L.DomUtil.create("div", "legend");
  return div;
};
info.addTo(map);
  })
  })
  
})





    
  





