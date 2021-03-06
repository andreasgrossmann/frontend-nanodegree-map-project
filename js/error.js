/*
* Project: Neighborhood Map
* Course: Udacity - Front End Web Dev Nanodegree
* Author: Andreas Grossmann
* Description: Error handling
* Version: August 2016
*/

// Alternative content to be shown in case the Google map fails to load

function mapError (){
  'use strict';
  document.getElementById('wrapper').innerHTML = '<div class="map-error"><h2>Oops, we weren\'t able to load your map.</h2><p>Here\'s a photo of a baby hedgehog on a skateboard instead... Please try again later.</p><img src="img/baby-hedgehog.jpg" alt="Photo of a baby hedgehog on a skateboard."></div>';
}