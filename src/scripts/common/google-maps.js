// google maps

window.initMap = function() {
  var uluru = { lat: 48.9481767, lng: 38.4878774 };
  var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      zoomControl: false,
      scaleControl: true,
      mapTypeControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false,
      center: uluru
  });
}
