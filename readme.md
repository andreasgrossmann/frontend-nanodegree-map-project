# Udacity - Frontend Nanodegree
# Project 5: Neighborhood Map

A map with some of the most amazing locations to visit in Edinburgh, Scotland. Locations can be filtered by name and include Yelp reviews (if available) as well as links with further information.

## Live version

https://andreasgrossmann.github.io/frontend-nanodegree-map-project/dist/

## How to run locally

* Clone the repo
* Run `npm install` and then `bower install` to install dependencies

### To develop

* Open `index.html` and include your Google API key here: `<script async src="https://maps.googleapis.com/maps/api/js?v=3&key=YOUR_API_KEY&callback=initMap" onerror="mapError()"></script>`

### To generate production files

* If you have included your Google API key in `index.html`, run `gulp`. Otherwise run `google_api_key=YOUR_API_KEY gulp` (and include your API key here)