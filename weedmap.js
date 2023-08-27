//Below is me trying to get the addListener() to listen to me clicking the cocksucking blue line link
//and adjust market and center position accordingly

let map, infoWindow;

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");

async function initMap() {
  // The location of central kansas city
  let position = { lat: 39.099724, lng: -94.578331 };
  // Location of Besame
  let position1 = { lat: 39.12859947156114, lng: -94.58029723107457};
    // Location of From the Earth
  let position2 = { lat: 39.0990099668092, lng: -94.57994208134926};
    // Location of HomeState
  let position3 = { lat: 39.091468742436916, lng: -94.57733290223982};
    // Location of WestBottoms Hemp
  let position4 = { lat: 39.099851271566834, lng: -94.60117980223964};
    // Location of KC Kush
  let position5 = { lat: 39.09366013746434, lng: -94.57803043107543};
    // Location of Local
  let position6 = { lat: 39.04630050399117, lng: -94.598768702241};

  // Request needed libraries.
  //@ts-ignore

  // This info windows that appear when locations are selected
  const contentString1 = 
  '<div id="content">' +
  '<div id="poi1">' +
  "</div>" +
  '<h1 id="firstHeading" class="firstHeading">BesaMe</h1>' +
  "<h2><b>Deals of the Day:</b></h2>" +
  "<h3>Day of the Week</h3>" +
  "<ul id='dailyDeals'>" +
  "<li>Deal 1</li>" +
  "<li>Deal 2</li>" +
  "<li>Deal 3</li></ul>" +
  "</div>";

  const contentString2 = 
  '<div id="content">' +
  '<div id="poi1">' +
  "</div>" +
  '<h1 id="firstHeading" class="firstHeading">From The Earth</h1>' +
  "<h2><b>Deals of the Day:</b></h2>" +
  "<h3>Day of the Week</h3>" +
  "<ul id='dailyDeals'>" +
  "<li>Deal 1</li>" +
  "<li>Deal 2</li>" +
  "<li>Deal 3</li></ul>" +
  "</div>";

  const contentString3 = 
  '<div id="content">' +
  '<div id="poi1">' +
  "</div>" +
  '<h1 id="firstHeading" class="firstHeading">HomeState</h1>' +
  "<h2><b>Deals of the Day:</b></h2>" +
  "<h3>Day of the Week</h3>" +
  "<ul id='dailyDeals'>" +
  "<li>Deal 1</li>" +
  "<li>Deal 2</li>" +
  "<li>Deal 3</li></ul>" +
  "</div>";

  const contentString4 = 
  '<div id="content">' +
  '<div id="poi1">' +
  "</div>" +
  '<h1 id="firstHeading" class="firstHeading">West Bottoms Hemp Co.</h1>' +
  "<h2><b>Deals of the Day:</b></h2>" +
  "<h3>Day of the Week</h3>" +
  "<ul id='dailyDeals'>" +  
  "<li>Deal 1</li>" +
  "<li>Deal 2</li>" +
  "<li>Deal 3</li></ul>" +
  "</div>";

  const contentString5 = 
  '<div id="content">' +
  '<div id="poi1">' +
  "</div>" +
  '<h1 id="firstHeading" class="firstHeading">KC Kush</h1>' +
  "<h2><b>Deals of the Day:</b></h2>" +
  "<h3>Day of the Week</h3>" +
  "<ul id='dailyDeals'>" +  
  "<li>Deal 1</li>" +
  "<li>Deal 2</li>" +
  "<li>Deal 3</li></ul>" +
  "</div>";

  const contentString6 = 
  '<div id="content">' +
  '<div id="poi1">' +
  "</div>" +
  '<h1 id="firstHeading" class="firstHeading">Local Cannabis</h1>' +
  "<h2><b>Deals of the Day:</b></h2>" +
  "<h3>Day of the Week</h3>" +
  "<ul id='dailyDeals'>" +  
  "<li>Deal 1</li>" +
  "<li>Deal 2</li>" +
  "<li>Deal 3</li></ul>" +
  "</div>";

  const { Map } = await google.maps.importLibrary("maps");

  const infowindow1 = new google.maps.InfoWindow({
    content: contentString1,
  });
  const infowindow2 = new google.maps.InfoWindow({
    content: contentString2,
  });
  const infowindow3 = new google.maps.InfoWindow({
    content: contentString3,
  });
  const infowindow4 = new google.maps.InfoWindow({
    content: contentString4,
  });
  const infowindow5 = new google.maps.InfoWindow({
    content: contentString5,
  });
  const infowindow6 = new google.maps.InfoWindow({
    content: contentString6,
  });

 map = new Map(document.getElementById("map"), {
    zoom: 16,
    center: position,   
    mapId: "project-map-id",
  });

  // The marker, positioned at central KC
  let currentMarker = new google.maps.Marker({
    position: new google.maps.LatLng(position),
    map: map,
    title: "Click to relocate"
  });

    link1.onclick = () => {
        map.panTo(new google.maps.LatLng(position1))
        currentMarker.setMap(null);
        currentMarker = new google.maps.Marker ({
            position: new google.maps.LatLng(position1),
            map: map,
            title: "Blue Line Baby let fucking gooooo"
        })
        infowindow1.open({
            anchor: currentMarker,
        })
    };
    link2.onclick = () => {
        map.panTo(new google.maps.LatLng(position2))
        currentMarker.setMap(null);
        currentMarker = new google.maps.Marker ({
            position: new google.maps.LatLng(position2),
            map: map,
            title: "Da feeny weiny"
        })
        infowindow2.open({
            anchor: currentMarker,
        })
    };
    link3.onclick = () => {
        map.panTo(new google.maps.LatLng(position3))
        currentMarker.setMap(null);
        currentMarker = new google.maps.Marker ({
            position: new google.maps.LatLng(position3),
            map: map,
            title: "Tequila and a Dos Equis mmm"
        })
        infowindow3.open({
            anchor: currentMarker,
        })
    };
    link4.onclick = () => {
        map.panTo(new google.maps.LatLng(position4))
        currentMarker.setMap(null);
        currentMarker = new google.maps.Marker ({
            position: new google.maps.LatLng(position4),
            map: map,
            title: "Queefy Quafffff"
        })
        infowindow4.open({
            anchor: currentMarker,
        })
    };
    link5.onclick = () => {
        map.panTo(new google.maps.LatLng(position5))
        currentMarker.setMap(null);
        currentMarker = new google.maps.Marker ({
            position: new google.maps.LatLng(position5),
            map: map,
            title: "mmm pear noodle"
        })
        infowindow5.open({
            anchor: currentMarker,
        })
    };
    link6.onclick = () => {
        map.panTo(new google.maps.LatLng(position6))
        currentMarker.setMap(null);
        currentMarker = new google.maps.Marker ({
            position: new google.maps.LatLng(position6),
            map: map,
            title: "hot chicken and old fashies on tap"
        })
        infowindow6.open({
            anchor: currentMarker,
        })
    };
};



initMap();