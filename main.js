var map = L.map("map").setView([51.292243, 9.556749], 6);

var osm = L.tileLayer(
  "https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=j44CDnWpdQElQVPjWTS8",
  {
    attribution:
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  }
);

var OpenTopoMap = L.tileLayer(
  "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 20,
    attribution:
      'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
  }
).addTo(map);

var satellite = L.tileLayer(
  "https://api.maptiler.com/maps/satellite/{z}/{x}/{y}.jpg?key=j44CDnWpdQElQVPjWTS8",
  {
    attribution:
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  }
);

//leaflet layer control
var baseMaps = {
  "Open Topo Map": OpenTopoMap,
  "Open Street Map": osm,
  Satellite: satellite,
};

L.control.layers(baseMaps).addTo(map);

var marker = [];
var markerLayer = L.layerGroup();

fetch("./marker_data.json")
  .then((response) => response.json())
  .then((data) => {
    for (i = 0; i < data.length; i++) {
      marker[i] = L.marker([data[i].latitude, data[i].longitude], {
        title: data[i].name,
      }).addTo(map);
      marker[i].bindPopup(data[i].name);
      markerLayer.addLayer(marker[i]);
      marker[i].on("click", approach);
    }
    //console.log(data); // You can also log it here if you want
  })
  .catch((error) => console.error("Error:", error));

var searchControl = new L.Control.Search({
  layer: markerLayer, // Add your marker layer here
  propertyName: "title", // Property in the markers to search
  marker: false,
});

searchControl.on("search:locationfound", function (e) {
  e.layer.openPopup();
});

map.addControl(searchControl);

function approach() {
  document.getElementById("modal1").style.display = "block";

  var map1 = L.map("map1", {
    center: [0, 0], // Center of the map (latitude, longitude)
    zoom: 15, // Initial zoom level
    attributionControl: false, // Disable attribution control
  });

  var marker1 = L.marker([0, 0]).addTo(map1);

  // Define the center point of the spiral
  var center = { lat: 0, lng: 0 };

  // Generate spiral coordinates
  var spiralCoords = generateSpiral(center, 200, 0.0001, 0.2);

  // Add markers to the map
  for (var i = 0; i < spiralCoords.length; i++) {
    L.marker(spiralCoords[i]).addTo(map1);
  }
}

// Function to generate spiral coordinates
function generateSpiral(center, numMarkers, radiusStep, angleStep) {
  var coords = [];
  var angle = 0;
  var radius = 0;

  for (var i = 0; i < numMarkers; i++) {
    angle += angleStep;
    radius += radiusStep;

    var lat = center.lat + radius * Math.sin(angle);
    var lng = center.lng + radius * Math.cos(angle);

    coords.push([lat, lng]);
  }

  return coords;
}

document.getElementById("btnClose1").addEventListener("click", function () {
  document.getElementById("modal1").style.display = "none";
});
