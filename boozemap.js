//Below is me trying to get the addListener() to listen to me clicking the cocksucking blue line link
//and adjust market and center position accordingly

let map, infoWindow;

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");

async function initMap() {
  // The location central KC
  let position = { lat: 39.099724, lng: -94.578331 };
  // Location of Blue Line
  let position1 = { lat: 39.10776947541088, lng: -94.58114152892296};
  // Location of The Pheonix
  let position2 = { lat: 39.104770085461546, lng: -94.5863219679229};
  // Location of KCTC
  let position3 = { lat: 39.107796828584185, lng: -94.581549569397};
  // Location of The Quaff
  let position4 = { lat: 39.10206022323068, lng: -94.58856413107522};
  // Location of Lidia's
  let position5 = { lat: 39.087716271569256, lng: -94.58473943107556};
  // Location of Parlor
  let position6 = { lat: 39.092853590081795, lng: -94.57762424427997};
  // Location of Kobe Q
  let position7 = { lat: 39.09469967156795, lng: -94.58099523107545};
  // Location of Garozzo's
  let position8 = { lat: 39.10935329653525, lng: -94.57205495991066};
  // Location of Auther Bryants
  let position9 = { lat: 39.091466117405936, lng: -94.55619555991112};
  // Location of Homesteader
  let position10 = { lat: 39.10571164616625, lng: -94.58129090223954};
  // Location of Baramee
  let position11 = { lat: 39.091445025740306, lng: -94.58493431573304};
  // Location of Bristol
  let position12 = { lat: 39.096981471797484, lng: -94.58280612699158};
  // Request needed libraries.
  //@ts-ignore

  // This info windows that appear when locations are selected
  const contentString1 = 
  '<div id="content">' +
  '<div id="poi1">' +
  "</div>" +
  '<h1 id="firstHeading" class="firstHeading">Blue Line Hockey Bar</h1>' +
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
  '<h1 id="firstHeading" class="firstHeading">The Pheonix</h1>' +
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
  '<h1 id="firstHeading" class="firstHeading">Kansas City Taco Company</h1>' +
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
  '<h1 id="firstHeading" class="firstHeading">The Quaff</h1>' +
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
  '<h1 id="firstHeading" class="firstHeading">Lidias</h1>' +
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
  '<h1 id="firstHeading" class="firstHeading">Parlor</h1>' +
  "<h2><b>Deals of the Day:</b></h2>" +
  "<h3>Day of the Week</h3>" +
  "<ul id='dailyDeals'>" +  
  "<li>Deal 1</li>" +
  "<li>Deal 2</li>" +
  "<li>Deal 3</li></ul>" +
  "</div>";

  const contentString7 = 
  '<div id="content">' +
  '<div id="poi1">' +
  "</div>" +
  '<h1 id="firstHeading" class="firstHeading">Kobe Q</h1>' +
  "<h2><b>Deals of the Day:</b></h2>" +
  "<h3>Day of the Week</h3>" +
  "<ul id='dailyDeals'>" +  
  "<li>Deal 1</li>" +
  "<li>Deal 2</li>" +
  "<li>Deal 3</li></ul>" +
  "</div>";

  const contentString8 = 
  '<div id="content">' +
  '<div id="poi1">' +
  "</div>" +
  '<h1 id="firstHeading" class="firstHeading">Garozzos</h1>' +
  "<h2><b>Deals of the Day:</b></h2>" +
  "<h3>Day of the Week</h3>" +
  "<ul id='dailyDeals'>" +  
  "<li>Deal 1</li>" +
  "<li>Deal 2</li>" +
  "<li>Deal 3</li></ul>" +
  "</div>";

  const contentString9 = 
  '<div id="content">' +
  '<div id="poi1">' +
  "</div>" +
  '<h1 id="firstHeading" class="firstHeading">Aurther Bryants</h1>' +
  "<h2><b>Deals of the Day:</b></h2>" +
  "<h3>Day of the Week</h3>" +
  "<ul id='dailyDeals'>" +  
  "<li>Deal 1</li>" +
  "<li>Deal 2</li>" +
  "<li>Deal 3</li></ul>" +
  "</div>";

  const contentString10 = 
  '<div id="content">' +
  '<div id="poi1">' +
  "</div>" +
  '<h1 id="firstHeading" class="firstHeading">Homesteader</h1>' +
  "<h2><b>Deals of the Day:</b></h2>" +
  "<h3>Day of the Week</h3>" +
  "<ul id='dailyDeals'>" +  
  "<li>Deal 1</li>" +
  "<li>Deal 2</li>" +
  "<li>Deal 3</li></ul>" +
  "</div>";

  const contentString11 = 
  '<div id="content">' +
  '<div id="poi1">' +
  "</div>" +
  '<h1 id="firstHeading" class="firstHeading">Baramee</h1>' +
  "<h2><b>Deals of the Day:</b></h2>" +
  "<h3>Day of the Week</h3>" +
  "<ul id='dailyDeals'>" +  
  "<li>Deal 1</li>" +
  "<li>Deal 2</li>" +
  "<li>Deal 3</li></ul>" +
  "</div>";

  const contentString12 = 
  '<div id="content">' +
  '<div id="poi1">' +
  "</div>" +
  '<h1 id="firstHeading" class="firstHeading">Bristol</h1>' +
  "<h2><b>Deals of the Day:</b></h2>" +
  "<h3>Day of the Week</h3>" +
  "<ul id='dailyDeals'>" +  
  "<li>Deal 1</li>" +
  "<li>Deal 2</li>" +
  "<li>Deal 3</li></ul>" +
  "</div>";

  // Request needed libraries.
  //@ts-ignore

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
  const infowindow7 = new google.maps.InfoWindow({
    content: contentString7,
  });
  const infowindow8 = new google.maps.InfoWindow({
    content: contentString8,
  });
  const infowindow9 = new google.maps.InfoWindow({
    content: contentString9,
  });
  const infowindow10 = new google.maps.InfoWindow({
    content: contentString10,
  });
  const infowindow11 = new google.maps.InfoWindow({
    content: contentString11,
  });
  const infowindow12 = new google.maps.InfoWindow({
    content: contentString12,
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
    link7.onclick = () => {
        map.panTo(new google.maps.LatLng(position7))
        currentMarker.setMap(null);
        currentMarker = new google.maps.Marker ({
            position: new google.maps.LatLng(position7),
            map: map,
            title: "k pop but its food and it's good... so not k pop"
        })
        infowindow7.open({
            anchor: currentMarker,
        })
    };
    link8.onclick = () => {
        map.panTo(new google.maps.LatLng(position8))
        currentMarker.setMap(null);
        currentMarker = new google.maps.Marker ({
            position: new google.maps.LatLng(position8),
            map: map,
            title: "k pop but its food and it's good... so not k pop"
        })
        infowindow8.open({
            anchor: currentMarker,
        })
    };
    link9.onclick = () => {
        map.panTo(new google.maps.LatLng(position9))
        currentMarker.setMap(null);
        currentMarker = new google.maps.Marker ({
            position: new google.maps.LatLng(position9),
            map: map,
            title: "Kansas City BBQ... but the best one"
        })
        infowindow9.open({
            anchor: currentMarker,
        })
    };
    link10.onclick = () => {
        map.panTo(new google.maps.LatLng(position10))
        currentMarker.setMap(null);
        currentMarker = new google.maps.Marker ({
            position: new google.maps.LatLng(position10),
            map: map,
            title: "Kansas City BBQ... but the best one"
        })
        infowindow10.open({
            anchor: currentMarker,
        })
    };
    link11.onclick = () => {
        map.panTo(new google.maps.LatLng(position11))
        currentMarker.setMap(null);
        currentMarker = new google.maps.Marker ({
            position: new google.maps.LatLng(position11),
            map: map,
            title: "Kansas City BBQ... but the best one"
        })
        infowindow11.open({
            anchor: currentMarker,
        })
    };
    link12.onclick = () => {
        map.panTo(new google.maps.LatLng(position12))
        currentMarker.setMap(null);
        currentMarker = new google.maps.Marker ({
            position: new google.maps.LatLng(position12),
            map: map,
            title: "Kansas City BBQ... but the best one"
        })
        infowindow12.open({
            anchor: currentMarker,
        })
    };
};



initMap();