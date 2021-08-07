let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: new google.maps.LatLng(21.005100351650803, 105.84261613746062),
    mapTypeId: "terrain",
  });
  // Create a <script> tag and set the USGS URL as the source.
  /* const script = document.createElement("script");
  // This example uses a local copy of the GeoJSON stored at
  // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
  script.src =
    "https://raw.githubusercontent.com/ungvietanh20172394/testMap/master/demo.json";
  document.getElementsByTagName("head")[0].appendChild(script);
  } */

  // Loop through the results array and place a marker for each
  // set of coordinates.

  /* const eqfeed_callback = function (results) {
  for (let i = 0; i < results.features.length; i++) {
    const coords = results.features[i].geometry.coordinates;
    const latLng = new google.maps.LatLng(coords[1], coords[0]);
    new google.maps.Marker({
      position: latLng,
      map: map,
    });
  }

}; */
  map.data.loadGeoJson(
    "https://raw.githubusercontent.com/ungvietanh20172394/testMap/master/demo.json"
  );

  map.data.setStyle(function (feature) {
    var color = feature.getProperty("fill");
    console.log(color);
    return {
      fillColor: color,
      strokeWeight: 1,
    };
  });
}
