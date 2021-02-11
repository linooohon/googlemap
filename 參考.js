var map;
var infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 62.791711, lng: 22.808479},
      zoom: 4
  });

  infoWindow = new google.maps.InfoWindow();
  addMarkers();

  map.addListener('click', function() {
    if (infoWindow) infoWindow.close();
  });
}

function addMarkers() {
  addMarker({
    coords: { lat: 62.791711, lng: 22.808479 },
    content: 'test 1'
  });
  addMarker({
    coords: { lat: 65.799962, lng: 24.497773 },
    content: 'test 2'
  });
  addMarker({
    coords: { lat: 62.331629, lng: 22.890667 },
    content: 'test 3'
  });
}

function addMarker(props) {
  var marker = new google.maps.Marker({
    position: props.coords,
    map: map
  });

  if (props.content) {
    marker.addListener('click', function() {
      infoWindow.setContent(props.content);
      infoWindow.open(map, marker);
    });
  }
}






// ------------------------------------

var infowindow = new google.maps.InfoWindow({
    content: ""
});

var contentString = `<div class="content">${element.name}</div>`;

marker.addListener("click", () => {
    infowindow.setContent(contentString);
    infowindow.open(map, marker);
});
