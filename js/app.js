// Create map variable
var map;
// Initialize map within map div
function initMap() {
  // Styles array from https://snazzymaps.com/style/38/shades-of-grey
  var styles = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}];

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 55.9503585, lng: -3.1869788},
    zoom: 14,
    styles: styles,
    mapTypeControl: false
  });

  // Create a single latLng literal object.
  var wings = {lat: 55.949443, lng: -3.189398};
  var bakedPotatoShop = {lat: 55.950501, lng: -3.188515};
  var brewDog = {lat: 55.948594, lng: -3.189563};
  var oink;
  var petitParis;
  var devilsAdvocate;
  var harajuku;
  var stockbridgeMarket;
  var holyrood9A;
  var arthursSeat;
  var hanks;
  var akva;
  var fountainbridgeMarket;
  var ozBar;
  var bonVivant;
  var aliWillmore;
  var skyScanner;
  var rockstarGames;
  var loveCrumbs;
  var pinnies;
  var pieMaker;
  var laFavorita;

  // Marker
  var marker = new google.maps.Marker({
    position: wings,
    map: map,
    title: 'Wings Edinburgh',
    animation: google.maps.Animation.DROP
  });

  var marker = new google.maps.Marker({
    position: bakedPotatoShop,
    map: map,
    title: 'Baked Potato Shop',
    animation: google.maps.Animation.DROP
  });

  var marker = new google.maps.Marker({
    position: brewDog,
    map: map,
    title: 'BrewDog Edinburgh',
    animation: google.maps.Animation.DROP
  });

  // Infowindow
  var infowindow = new google.maps.InfoWindow({
    content: 'The best chicken wings in town.'
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

}