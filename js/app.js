'use strict';

// check for offline
/*
var run = function(){
	if (Offline.state === 'up')
	Offline.check();
	Offline.options = {
		checkOnLoad: false,
		interceptRequests: true,
		reconnect: {
			initialDelay: 3
		},
	requests: true
	};
}
setInterval(run, 5000);
*/
//***************************************************************** Location Object
// this object stores data for one location using data in the model
var Location = function(data, parent) {
	this.name = ko.observable(data.name);
	this.review = ko.observable(data.review);
	this.wiki = ko.observable(data.wiki);
	this.fs = ko.observable(data.fs);
	this.category = ko.observableArray(data.category);
	this.lat = ko.observable(data.lat);
	this.lng = ko.observable(data.lng);

	// Location ajax data
	this.state = ko.observable(false);

	// create map markers for each location
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(data.lat, data.lng),
		animation: google.maps.Animation.DROP,
		icon: 'img/marker-default.png'
	});

	// listen for clicks on the map markers
	google.maps.event.addListener(marker, 'click', (function(location, parent) {
		return function() {
			// if marker is clicked then show the location detail
			this.marker = null;
			parent.showLocation(location);
		};
	}) (this, parent));
	this.marker = marker;
};

//***************************************************************** Google Maps
// create the Google Map

var Map = {
	map: {},
	infoWindow: new google.maps.InfoWindow({
		}),
	options: {
		center: {lat: 37.8, lng: -122.3},
		zoom: 10,
		maxZoom: 15,
		minZoom: 9,
		backgroundColor: '#b2d0fb'
	},
	// set the infowindow content and apply css classes to the content
	infoWindowContent: '<div class="info-window"><div class="window-title">%title%</div><hr class="horizontal-line"></div>',
	initialize: function(viewModel) {
		Map.map = new google.maps.Map(document.getElementById('map'), Map.options);
		// show markers using either viewModel or Google Map
		if (viewModel.state && !viewModel.hasMarkers) viewModel.showMarkers();
	}
};

//***************************************************************** Misc
// alphabetize location names in the JSON data A-Z
function compare(el1, el2, index) {
	return el1[index] == el2[index] ? 0 : (el1[index] < el2[index] ? -1 : 1);
}

locations.sort(function(el1,el2){
	return compare(el1, el2, "name");
});

// 'loading' indicator when page loads
$(window).load(function() {
	$('#loading').hide();
});

// declare some variables which clears up some issues
var wikiSummary;
var foursquareApi;
var foursquareLink;

//***************************************************************** Filter Object
var Filter = function(data) {
	this.name = ko.observable(data.name);
	this.on = ko.observable(true);
};

//***************************************************************** ViewModel
var ViewModel = function() {
	var self = this;
	self.searchFilter = ko.observable('');
	self.selectedLocation = ko.observable();
	self.state = false;
	self.hasMarkers = false;
	self.connectionError = ko.observable(false);

	// initialize the ViewModel
	self.initialize = function() {
		var tempCategoryArray = [];
		var tempFilterArray = [];

		// create an array to hold the locations
		self.locationList = ko.observableArray([]);

		// loop through each location in the array and convert each to a ko object
		locations.forEach(function(location) {
			self.locationList.push(new Location(location, self));

			// loop through all categories for each location and add to self.filters
			location.category.forEach(function(category) {
				// if selected category not filtered then add to self.filters
				if (tempCategoryArray.indexOf(category) < 0) {
					tempCategoryArray.push(category);
				}
			});
		});

		// make filters from the categories
		tempCategoryArray.forEach(function(category) {
			tempFilterArray.push(new Filter({name: category}));
		});

		// use the temp array to set filters
		self.filters = ko.observableArray(tempFilterArray);

		// set filters array
		self.selectedFilters = ko.computed(function() {
			var tempCurrentFilters = [];

			// find all "on" filters in the array
			ko.utils.arrayForEach(self.filters(), function(filter) {
				if (filter.on()) tempCurrentFilters.push(filter.name());
			});
			// close infoWindow if filters change
			Map.infoWindow.close();
			return tempCurrentFilters;
		});

		// show the locations based on the the filters
		self.filteredLocations = ko.computed(function() {
			var tempLocations = ko.observableArray([]);
			var returnLocations = ko.observableArray([]);
			Map.infoWindow.close();

			// apply the filter
			ko.utils.arrayForEach(self.locationList(), function(location) {
				var locationCategories = location.category();

				// find any intersections in the applied filters since each location can have multiple categories
				var intersections = locationCategories.filter(function(category) {
					return self.selectedFilters().indexOf(category) != -1;
				});

				// add categories if any categories for a single location are in a filter
				if (intersections.length > 0) tempLocations.push(location);
			});

			var tempSearchFilter = self.searchFilter().toLowerCase();

			// return filtered locations
			if (!tempSearchFilter) {
				returnLocations = tempLocations();
			}

			// apply the text filter
			else {
				returnLocations = ko.utils.arrayFilter(tempLocations(), function(location) {
				return location.name().toLowerCase().indexOf(tempSearchFilter) !== -1;
				});
			}

			// display markers based on active locations
			self.filterMarkers(returnLocations);
			return returnLocations;
		});

		// if there are no markers then show the markers
		if (!self.hasMarkers) self.showMarkers();
		self.state = true;
	};

	// set each marker invisible if not in the displayed locations and set each marker visible if in the displayed locations
	self.filterMarkers = function(filteredLocations) {
		ko.utils.arrayForEach(self.locationList(), function(location) {
			if (filteredLocations.indexOf(location) === -1) {
				location.marker.setVisible(false);
			}
			else {
				location.marker.setVisible(true);
			}
		});
	};

	// toggles each filter based on the filter buttons click state
	self.toggleFilter = function(filter) {
		filter.on(!filter.on());
	};

	// experimental unused function to clear all markers
	self.clearMarkers = function(filteredLocations) {
		ko.utils.arrayForEach(self.locationList(), function(location) {
			location.marker.setVisible(false);
		});
	};

	// expand the info drawer
	function infoExpand() {
		$('nav').addClass('open');
		$('this').addClass('close-btn');
	}

	$(document).ready(function(){
		$('.menu-btn').click(function(){
			expandCollapse();
		});
	});

	// collapsible info area
	function expandCollapse() {
		$('nav').removeClass('open');
	}

	// clear selected location
	self.clearLocation = function() {
		Map.infoWindow.close();
		Map.infoWindow.setContent(null);
	};

	// show the selected location when either an item in the location list or its map marker is clicked
	self.showLocation = function(location) {
		// open the info drawer
		infoExpand();

		// display the Google Maps infowindow
		Map.infoWindow.open(Map.map, location.marker);
		Map.infoWindow.setContent(Map.infoWindowContent.replace('%title%', location.name()));

		// reset connectionError back to false
		self.connectionError(false);

		// if location does not have additional info via ajax
		if (!location.state()) {

			//***************************************************************** Call Foursquare API
			foursquareApi = {
				clientId: 'CHOZ3HJEWOJOGBDA1PFUA0Y3KP300XAQM2LAJVZVL1XHD5UE',
				clientSecret: 'II50TC3MPWNJ0DEVPFWXNEQV4USNZXFNWSXXSOW05OJYFTC4',
				ver: '20150601',
				baseUrl: 'https://api.foursquare.com/v2/venues/'
			};

			var foursquareRequestTimeout = setTimeout(function() {
				self.connectionError(true);
			}, 6000); // set Foursquare error status after 6 seconds

			$.ajax({
				url: foursquareApi.baseUrl+'search?ll='+location.lat()+','+location.lng()+'&intent=match&name='+location.name()+'&client_id='+foursquareApi.clientId+'&client_secret='+foursquareApi.clientSecret+'&v='+foursquareApi.ver
			})

			.done(function(data) {
				var venue = data.response.venues[0];

				// check to see if we should fire a FourSquare request
				if (location.fs() === '1') {
				
				//set called Foursquare data as properties
				location.id = ko.observable(venue.id);
				// create the link back to Foursquare per Foursquare Attribution & Linking policy
				foursquareLink = ko.observable('<a href="http://foursquare.com/v/'+venue.id+'?ref='+foursquareApi.clientId+'" target="_blank">'+location.name()+' on Foursquare</a>');

					// grab the url for the location if Foursquare has it or set it to null 
					if (venue.hasOwnProperty('url')) {
						location.url = ko.observable(venue.url);
					}
					else location.url = null;

					// grab the phone number for the location if Foursquare has it or set it to null 
					if (venue.hasOwnProperty('contact') && venue.contact.hasOwnProperty('formattedPhone')) {
						location.phone = ko.observable(venue.contact.formattedPhone);
					}
					else location.phone = null;

					// request Foursquare photos
					$.ajax({
						url: foursquareApi.baseUrl+location.id()+'/photos?client_id='+foursquareApi.clientId+'&client_secret='+foursquareApi.clientSecret+'&v='+foursquareApi.ver
					})

					.done(function(data) {
						// grab the first eight Foursquare photos for each location. TODO: convert to array
						var photos = data.response.photos.items;
						location.photo1 = ko.observable(photos[0].prefix + 'height300' + photos[0].suffix);
						location.photo2 = ko.observable(photos[1].prefix + 'height300' + photos[1].suffix);
						location.photo3 = ko.observable(photos[2].prefix + 'height300' + photos[2].suffix);
						location.photo4 = ko.observable(photos[3].prefix + 'height300' + photos[3].suffix);
						location.photo5 = ko.observable(photos[4].prefix + 'height300' + photos[4].suffix);
						location.photo6 = ko.observable(photos[5].prefix + 'height300' + photos[5].suffix);
						location.photo7 = ko.observable(photos[6].prefix + 'height300' + photos[6].suffix);
						location.photo8 = ko.observable(photos[7].prefix + 'height300' + photos[7].suffix);
						location.state(true);

						// set the selected location
						self.selectedLocation(location);
					})
					.fail(function(err) {
						// if error then set the error status and set the selected location
						self.connectionError(true);
						self.selectedLocation(location);
					});
				}
				// if we're not firing a Foursquare request then set all Foursquare data to null and update location
				else {
					location.phone = null;
					location.url = null;
					location.foursquareLink = null;
					location.photo1 = null;
					location.photo2 = null;
					location.photo3 = null;
					location.photo4 = null;
					location.photo5 = null;
					location.photo6 = null;
					location.photo7 = null;
					location.photo8 = null;
					self.selectedLocation(location);
				}
				clearTimeout(foursquareRequestTimeout); // clear the Foursquare timeout
			});

			//***************************************************************** Call Wikipedia API
			// check to see if should fire request to wikipedia, if yes then do it
			if (location.wiki() === '1') {
				var wikiRequestTimeout = setTimeout(function() {
					self.connectionError(true);
				}, 6000); // set wiki error status after 6 seconds
				
				$.ajax({
					url: 'http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + location.name() + '&limit=1&namespace=0&format=json',
					dataType: "jsonp"
				})
				.done(function(wikiData) {
						var articleList = wikiData;
						var articleTitle = articleList[1];
						var articleSnippet = articleList[2];
						var wikipediaUrl = 'http://en.wikipedia.org/wiki/' + articleTitle;
						location.wikiInfo = ko.observable(articleSnippet);
						location.wikiUrl = ko.observable(wikipediaUrl);
						location.wikiSummary = ko.observable('<h3>Wikipedia says</h3><p>'+articleSnippet+'<a href="'+wikipediaUrl+'" target="_blank"> ...more from Wikipedia</a></p>');
					clearTimeout(wikiRequestTimeout); // clear the wiki timeout
				});
			}
		}
		// if the location has data
		else {
			// set the selected location
			self.selectedLocation(location);
		}
	};

	// show each location's marker
	self.showMarkers = function() {
		ko.utils.arrayForEach(self.locationList(), function(location) {
			location.marker.setMap(Map.map);
		});

		self.hasMarkers = true;
	};
};


//***************************************************************** Declare ViewModel
// declare the global ViewModel and apply the view bindings
var viewModel = new ViewModel();

$( document ).ready(function() {
	viewModel.initialize();
	ko.applyBindings(viewModel);
});
// listener for the Google Map initialization
google.maps.event.addDomListener(window, 'load', Map.initialize(viewModel));