'use strict';

var locations = [{
  "title": "Wings",
  "icon": "img/chicken-wing.png",
  "coordinates": {
    "lat": 55.949443,
    "lng": -3.189398
  },
  "content": "The best chicken wings in town."
},
{
  "title": "Baked Potato Shop",
  "icon": "img/potato.png",
  "coordinates": {
    "lat": 55.950501,
    "lng": -3.188515
  },
  "content": "Delicious baked potatoes with a variety of different fillings."
},
{
  "title": "Brew Dog",
  "icon": "img/beer.png",
  "coordinates": {
    "lat": 55.948594,
    "lng": -3.189563
  },
  "content": "Amazing craft beer."
},
{
  "title": "Oink",
  "icon": "img/yummy.png",
  "coordinates": {
    "lat": 55.949393,
    "lng": -3.194352
  },
  "content": "Delicious pulled pork sandwiches."
},
{
  "title": "Petit Paris",
  "icon": "img/wine.png",
  "coordinates": {
    "lat": 55.947736,
    "lng": -3.196568
  },
  "content": "Probably the best French restaurant in town."
},
{
  "title": "The Devil's Advocate",
  "icon": "img/dark-beer.png",
  "coordinates": {
    "lat": 55.950462,
    "lng": -3.191650
  },
  "content": ""
},
{
  "title": "Harajuku Kitchen",
  "icon": "img/sushi-box.png",
  "coordinates": {
    "lat": 55.940836,
    "lng": -3.203995
  },
  "content": "Probably the best Japanese Restaurant in town."
},
{
  "title": "Stockbridge Market",
  "icon": "img/street-food.png",
  "coordinates": {
    "lat": 55.957681,
    "lng": -3.208512
  },
  "content": ""
},
{
  "title": "The Holyrood 9A",
  "icon": "img/burger.png",
  "coordinates": {
    "lat": 55.949501,
    "lng": -3.182734
  },
  "content": ""
},
{
  "title": "Arthur's Seat",
  "icon": "img/shoe.png",
  "coordinates": {
    "lat": 55.944635,
    "lng": -3.161833
  },
  "content": ""
},
{
  "title": "Hank's",
  "icon": "img/sandwich.png",
  "coordinates": {
    "lat": 55.943015,
    "lng": -3.211281
  },
  "content": ""
},
{
  "title": "The Oz Bar",
  "icon": "img/8-ball.png",
  "coordinates": {
    "lat": 55.947682,
    "lng": -3.192091
  },
  "content": ""
},
{
  "title": "The Bon Vivant",
  "icon": "img/cocktail.png",
  "coordinates": {
    "lat": 55.954163,
    "lng": -3.199671
  },
  "content": ""
},
{
  "title": "Ali Willmore Hairdressing",
  "icon": "img/haircut.png",
  "coordinates": {
    "lat": 55.950488,
    "lng": -3.184093
  },
  "content": ""
},
{
  "title": "Skyscanner",
  "icon": "img/unicorn.png",
  "coordinates": {
  "lat": 55.944458,
  "lng": -3.194548
  },
  "content": ""
},
{
  "title": "Rockstar North",
  "icon": "img/rocket.png",
  "coordinates": {
    "lat": 55.950382,
    "lng": -3.176155
  },
  "content": ""
},
{
  "title": "Lovecrumbs",
  "icon": "img/coffee.png",
  "coordinates": {
    "lat": 55.946127,
    "lng": -3.201857
  },
  "content": ""
},
{
  "title": "Pinnies & Poppy Seeds",
  "icon": "img/doughnut.png",
  "coordinates": {
    "lat": 55.950265,
    "lng": -3.183600
  },
  "content": ""
},
{
  "title": "Wee Bite",
  "icon": "img/bacon.png",
  "coordinates": {
    "lat": 55.950518,
    "lng": -3.184185
  },
  "content": ""
},
{
  "title": "La Favorita",
  "icon": "img/pizza.png",
  "coordinates": {
    "lat": 55.964715,
    "lng": -3.176667
  },
  "content": ""
}];





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


  locations.forEach(function(location) {
  // Marker
  var marker = new google.maps.Marker({
    position: location.coordinates,
    map: map,
    icon: location.icon,
    title: location.title,
    animation: google.maps.Animation.DROP
  });

  // Infowindow
  var infowindow = new google.maps.InfoWindow({
    content: location.content
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
})

}









function EdinburghViewModel() {

}