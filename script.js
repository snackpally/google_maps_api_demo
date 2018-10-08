var map;
var service;
var markers =[];
var marker;

function initMap() {
  var mapCenter = new google.maps.LatLng(0,0);

  map = new google.maps.Map(document.getElementById('map'), {
    center: mapCenter,
    zoom: 2
  });

  map.addListener('click', function(e) {
          placeMarkerAndPanTo(e.latLng, map);
        });
        
}

function placeMarkerAndPanTo(latLng, map) {
          marker = new google.maps.Marker({
          position: latLng,
          map: map
        });
        map.panTo(latLng);
      }




// dropdown menu with choices
// choices drop marker on location
//call for data on location and move map center to current marker
// use places library to change markers to photo icons
