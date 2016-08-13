'use strict';

// Model

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
  "content": "Amazing selection of fine beers and whiskeys."
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
  "content": "Farmers' market, amazing street food."
},
{
  "title": "The Holyrood 9A",
  "icon": "img/burger.png",
  "coordinates": {
    "lat": 55.949501,
    "lng": -3.182734
  },
  "content": "Probably the best burgers in town."
},
{
  "title": "Arthur's Seat",
  "icon": "img/shoe.png",
  "coordinates": {
    "lat": 55.944635,
    "lng": -3.161833
  },
  "content": "Climb it and enjoy a great view of the city."
},
{
  "title": "Hank's",
  "icon": "img/sandwich.png",
  "coordinates": {
    "lat": 55.943015,
    "lng": -3.211281
  },
  "content": "Amazing sandwiches and salads."
},
{
  "title": "The Oz Bar",
  "icon": "img/8-ball.png",
  "coordinates": {
    "lat": 55.947682,
    "lng": -3.192091
  },
  "content": "Awesome place to go for a game of pool."
},
{
  "title": "The Bon Vivant",
  "icon": "img/cocktail.png",
  "coordinates": {
    "lat": 55.954163,
    "lng": -3.199671
  },
  "content": "Great food and drinks."
},
{
  "title": "Ali Willmore Hairdressing",
  "icon": "img/haircut.png",
  "coordinates": {
    "lat": 55.950488,
    "lng": -3.184093
  },
  "content": "Probably the best hairdresser in town."
},
{
  "title": "Skyscanner",
  "icon": "img/unicorn.png",
  "coordinates": {
  "lat": 55.944458,
  "lng": -3.194548
  },
  "content": "Edinburgh's local unicorn, use their app to find cheap flights."
},
{
  "title": "Rockstar North",
  "icon": "img/rocket.png",
  "coordinates": {
    "lat": 55.950382,
    "lng": -3.176155
  },
  "content": "This is where people work on the latest Grand Theft Auto game."
},
{
  "title": "Lovecrumbs",
  "icon": "img/coffee.png",
  "coordinates": {
    "lat": 55.946127,
    "lng": -3.201857
  },
  "content": "Probably the best coffee in town."
},
{
  "title": "Pinnies & Poppy Seeds",
  "icon": "img/doughnut.png",
  "coordinates": {
    "lat": 55.950265,
    "lng": -3.183600
  },
  "content": "Amazing shortbread, doughnuts and other treats."
},
{
  "title": "Wee Bite",
  "icon": "img/bacon.png",
  "coordinates": {
    "lat": 55.950518,
    "lng": -3.184185
  },
  "content": "Probably the best bacon rolls in town."
},
{
  "title": "La Favorita",
  "icon": "img/pizza.png",
  "coordinates": {
    "lat": 55.964715,
    "lng": -3.176667
  },
  "content": "Amazing pizza!"
}];





// Create map variable
var map;







// View Model

function ViewModel() {

  var self = this;

  // Turn the 'locations' json array of objects into an observable array
  self.locations = ko.observableArray(locations);

  var marker;


  self.locations().forEach(function(location) {
    // Markers
    marker = new google.maps.Marker({
      position: location.coordinates,
      map: map,
      icon: location.icon,
      content: location.content,
      title: location.title,
      animation: google.maps.Animation.DROP
    });

    // Add marker as property of location
    location.marker = marker;

    // Make all list items initially visible
    location.visibility = ko.observable(true);


    // Check if any markers are clicked
    // Set content for infowindow and open it
    marker.addListener('click', function() {
      self.infowindow.setContent(this.content);
      self.infowindow.open(map, this);
      // Make the marker bounce once
      this.setAnimation(google.maps.Animation.BOUNCE);
      setTimeout(function () {
        location.marker.setAnimation(null);
      }, 700);
    });


  })






  // Define one infowindow to be used for all markers
  self.infowindow = new google.maps.InfoWindow();

  // Link clicks on list items to clicks on markers
  self.listItemClicked = function(marker) {
    google.maps.event.trigger(this.marker, 'click');
  };





  // Location filter input
  self.filterInput = ko.observable();

  // Filter function
  self.locationFilter = ko.computed(function() {

    // Check if there's text input
    if(self.filterInput() !== undefined) {

      // Close any open infowindows (looks nicer and cleaner)
      self.infowindow.close();

      // Set text input to lowercase
      var searchQuery = self.filterInput().toLowerCase();
      var locationTitle;

      // Loop through location titles
      self.locations().forEach(function(location) {

        // Set them to lowercase
        locationTitle = location.title.toLowerCase();

        // Find all markers and list items that don't match text input and hide them
        // Otherwise, show all markers and list items
        if(locationTitle.search(searchQuery) === -1) {
          location.marker.setVisible(false);
          location.visibility(false);
        } else {
          location.marker.setVisible(true);
          location.visibility(true);
        }

      })

    }

  }, this);





}




// Load map and start app

function initMap() {

  // Styles from https://snazzymaps.com/style/38/shades-of-grey
  var styles = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}];

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 55.9503585, lng: -3.1869788},
    zoom: 14,
    styles: styles,
    mapTypeControl: false
  });

  ko.applyBindings(new ViewModel());

}

// Error handling function for Google map

function mapError (){
  document.getElementById('wrapper').innerHTML = '<div class="map-error"><h2>Oops, we weren\'t able to load your map.</h2><p>Here\'s a photo of a baby beaver instead... Please try again later.</p><img src="img/baby-beaver.jpg" alt="Photo of a baby beaver."></div>';
}

