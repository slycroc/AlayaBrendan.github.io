// Do not change

var woodIcon = L.icon({
    iconUrl: 'images/marker-icon.png',
    shadowUrl: 'images/marker-shadow.png',

    iconSize:     [25, 41], // size of the icon
    shadowSize:   [41, 41], // size of the shadow
    iconAnchor:   [12, 41], // point of the icon which will correspond to marker's location
    shadowAnchor: [12, 41], // the same for the shadow
    popupAnchor:  [0, -38] // point from which the popup should open relative to the iconAnchor
});
var weddingIcon = L.icon({
    iconUrl: 'images/wedding_icon.png',
    shadowUrl: 'images/marker-shadow.png',

    iconSize:     [50, 82], // size of the icon
    shadowSize:   [41, 41], // size of the shadow
    iconAnchor:   [24, 82], // point of the icon which will correspond to marker's location
    shadowAnchor: [12, 41], // the same for the shadow
    popupAnchor:  [0, -38] // point from which the popup should open relative to the iconAnchor
});



		
	// Change coordinates and information below

	// Purple digits are the GPS coordinates of the markers
	// Note that all content inside marker.bindpopup ('Inside here') needs to be in a single line otherwise markers won't be displayed on the map

	var marker = L.marker([48.445905, -123.3507607], {icon: woodIcon}).addTo(map)
	marker.bindPopup('<b>Sylvain and Shona<br><b>1317 McNair St.<br><b>Email:</b> <a href="mailto:slyandsho@gmail.com" class="speciallink">slyandsho@gmail.com</a><br><b>Phone:</b>(250)882-1308/(250)216-0308')
		
	var marker = L.marker([49.41260270970647, -123.5690389849176], {icon: weddingIcon}).addTo(map)
	marker.bindPopup('<b>Manfield Mansion - Wedding Place</b><br><b>Address:</b> 934 Selkirk, Victoria, BC<br>')
	
	var marker = L.marker([48.419617,-123.370285], {icon: woodIcon}).addTo(map)
	marker.bindPopup('<b>Parlement Building<br>')	

	var marker = L.marker([48.5637842,-123.46616589], {icon: woodIcon}).addTo(map)
	marker.bindPopup('<b>Butchart Garden<br>')	
	
	var marker = L.marker([48.6887002,-123.4115931], {icon: woodIcon}).addTo(map)
	marker.bindPopup('<b>Ferry Terminal<br>')	

	var marker = L.marker([48.4233571,-123.37662239], {icon: woodIcon}).addTo(map)
	marker.bindPopup('<b>Hotel:</b> Laurel Point<br><b>Web:</b> <a href="http://www.laurelpoint.com/" target="_blank" class="speciallink">http://www.laurelpoint.com/</a>')	
		

	// Do not remove
	map.on('popupopen', function() {
    	$('.speciallink').click(function() {
    });


});