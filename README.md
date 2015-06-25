# Udacity FE Web Developer Project 5: Neighborhood Map

## How to Use the Web App:
- Open the [MyBay App](http://shawnclover.com/apps/mybay)
- By default, the map displays a list and markers of many of my personal favorite places in the San Francisco Bay Area
- Optionally click any filter categories to deselect/reselect categories to the search results
- Optionally type any letters for a location in the search box to narrow results
- Click a location in either the list or click a marker on the map for details on the location
- My personal review appears in the map infowindow
- Foursquare and/or Wikipedia information appears below the map for each location

## Additional Features:
- The location list, photos, and my review are all touch-scrollable on mobile devices or a mouse scrollwheel can be used
- Phone number, website, photos, and a link back to the venue on Foursquare appear when data is available in Foursquare for the selected location
- A snippet from Wikipedia appears with a link to the full article when a Wikipedia article is available for the selected location
- Some locations have multiple categories and the app ensures that the location information is not repeated in these cases

## Resources Used:
- Udacity courses: Intro to AJAX, JavaScript Design Patterns
- Udacity help resources
- JavaScript Array.Push Performance (Scott Logic)
- Stackoverflow: hundreds of articles and code snippets
- Books: A Smarter Way to Learn JavaScript, Effective JavaScript, Learning JavaScript, JavaScript: The Good Parts, JavaScript Pocket Reference
- jQuery documentation
- Bootstrap documentation
- Knockoutjs documentation
- Google Maps API documentation
- Foursquare API documentation
- Wikipedia API documentation
- Codepen: responsive full screen navigation menu that slides from top using a toggle button

## Known Bugs:
- Wikipedia data randomly doesn't display sometimes (the data is coming across because it is console-logging). May be a Bootstrap issue.
- Foursquare data is purposesly turned off for some locations even though the venue exists in Foursquare because Foursquare is unable to find using name and lat/lng.

## Attributions:
- Location contact information and photos courtesy Foursquare
- Additional location courtesy Wikipedia
- Map data courtesy Google Maps
- Icons courtesy Pixabay under Creative Commonds Deed CC0 license (public domain) and modified by Shawn Clover
