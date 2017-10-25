var gmarkers1 = [];
var markers1 = [];



// Our markers
markers1 = [
    ['0', '<h2>Soccer Game</h2></h3><b>27/10/17</h3><p>Friendly game of soccer to be played from 6-7</p><a href="exampleWorkout.html"><center>More Info</center></a>', -27.49639, 153.00607, 'sports'],
    ['1', '<h2>Swimming Session</h2></h3><b>27/10/17</h3><p>Early morning swimming session from 5-7am</p><a href="exampleWorkout.html"><center>More Info</center></a>', -27.49483, 153.01665, 'cardio'],
    ['2', '<h2>Circuit Training</h2></h3><b>27/10/17</h3><p>Circuit Training Session from 12-2pm</p><a href="exampleWorkout.html"><center>More Info</center></a>', -27.47842, 153.0162, 'strength'],
    ['3', '<h2>Weight Training</h2></h3><b>27/10/17</h3><p>Weights Session guided by a certified PT - All Day</p><a href="exampleWorkout.html"><center>More Info</center></a>', -27.47781, 153.01355, 'strength'],
    ['4', '<h2>Jog Around Bris</h2></h3><b>27/10/17</h3><p>Jogging Session along Southbank and Brisbane along designated tracks</p><a href="exampleWorkout.html"><center>More Info</center></a>', -27.47347, 153.02017, 'cardio']

];

/**
 * Function to init map
 */

function initialize() {

    var center = new google.maps.LatLng(-27.4802, 153.0122);
    var mapOptions = {
        zoom: 13,
        center: center,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    for (i = 0; i < markers1.length; i++) {
        addMarker(markers1[i]);
    }
}

/**
 * Function to add marker to map
 */

function addMarker(marker) {
    var category = marker[4];
    var title = marker[1];
    var pos = new google.maps.LatLng(marker[2], marker[3]);
    var content = marker[1];

    marker1 = new google.maps.Marker({
        title: title,
        position: pos,
        category: category,
        map: map
    });

    gmarkers1.push(marker1);

    // Marker click listener
    google.maps.event.addListener(marker1, 'click', (function (marker1, content) {
        return function () {
          var infowindow = new google.maps.InfoWindow({
              content: ''
          });
            console.log('Gmarker 1 gets pushed');
            infowindow.setContent(content);
            infowindow.open(map, marker1);
            map.panTo(this.getPosition());
            map.setZoom(15);
        }
    })(marker1, content));
}

/**
 * Function to filter markers by category
 */

filterMarkers = function (category) {
    for (i = 0; i < markers1.length; i++) {
        marker = gmarkers1[i];
        // If is same category or category not picked
        if (marker.category == category || category.length === 0) {
            marker.setVisible(true);
        }
        // Categories don't match
        else {
            marker.setVisible(false);
        }
    }
}

function alertFunction() {
    alert("You are now Attending this event and will recieve notifications");
}
