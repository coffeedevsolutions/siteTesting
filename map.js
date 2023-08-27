//Below is me trying to get the addListener() to listen to me clicking the cocksucking blue line link
//and adjust market and center position accordingly

let map;

//const link1 = document.getElementById("link1");
//const link2 = document.getElementById("link2");

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



  // This info windows that appear when locations are selected
  const contentString1 = 
  '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">' +
  '<style>' +
  '.windowButtonMenu {display:inline-block; text-align:center; verticle-align: center; padding:10px; width: 50%; transition: background-color 0.3s;} .windowButtonMenu:hover, .clickable-container:hover{background-color: #f0f0f0;}' +
  '.windowButtonSub {display:inline-block; text-align:center; verticle-align: center; padding:10px; width: 50%; transition: background-color 0.3s;} .windowButtonSub:hover, .clickable-container:hover{background-color: #f0f0f0;}' +
  '.li {list-style-type: none; margin: 20px; text-align: left; font-size: 18px}' +
  '#dailyDeals {background-color: #f0f0f0; border-radius: 8px; padding: 0.1px;}' +
  '.firstHeading {font-family: "Trebuchet MS", Calibri, Tahoma, sans-serif; font-weight: 1000;}' +
  '.secondHeading {font-family: "Trebuchet MS", Calibri, Tahoma, sans-serif; font-size: 20px;}' +
  '.dayPlaceholder {font-size: 20px;}' +
  '</style>' +
  '<div id="content">' +
  '<div id="poi1">' +
  "</div>" +
  '<h1 id="firstHeading" class="firstHeading ">Blue Line Hockey Bar</h1>' +
  "<h2 id='secondHeading'>Deals of the Day:</h2>" +
  "<h3 class='dayPlaceholder'><i>*day of the week here*</i></h3>" +
  "<ul id='dailyDeals'>" +
  "<li class='li'>Deal 1</li>" +
  "<li class='li'>Deal 2</li>" +
  "<li class='li'>Deal 3</li></ul>" +
  '<a class="btn windowButtonMenu" href="./blueLine.html" role="button">Full Menu</a>' +
  '<a class="btn windowButtonSub" href="./blueLine.html" role="button">View Subscription</a>' +
  "</div>";

  const contentString2 = 
  '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">' +
  '<style>' +
  '.windowButtonMenu {display:inline-block; text-align:center; verticle-align: center; padding:10px; width: 50%; transition: background-color 0.3s;} .windowButtonMenu:hover, .clickable-container:hover{background-color: #f0f0f0;}' +
  '.windowButtonSub {display:inline-block; text-align:center; verticle-align: center; padding:10px; width: 50%; transition: background-color 0.3s;} .windowButtonSub:hover, .clickable-container:hover{background-color: #f0f0f0;}' +
  '.li {list-style-type: none; margin: 20px; text-align: left; font-size: 18px}' +
  '#dailyDeals {background-color: #f0f0f0; border-radius: 8px; padding: 0.1px;}' +
  '.firstHeading {font-family: "Trebuchet MS", Calibri, Tahoma, sans-serif; font-weight: 1000;}' +
  '.secondHeading {font-family: "Trebuchet MS", Calibri, Tahoma, sans-serif; font-size: 20px;}' +
  '.dayPlaceholder {font-size: 20px;}' +
  '</style>' +
  '<div id="content">' +
  '<div id="poi1">' +
  "</div>" +
  '<h1 id="firstHeading" class="firstHeading ">The Pheonix</h1>' +
  "<h2 id='secondHeading'>Deals of the Day:</h2>" +
  "<h3 class='dayPlaceholder'><i>*day of the week here*</i></h3>" +
  "<ul id='dailyDeals'>" +
  "<li class='li'>Deal 1</li>" +
  "<li class='li'>Deal 2</li>" +
  "<li class='li'>Deal 3</li></ul>" +
  '<a class="btn windowButtonMenu" href="#" role="button">Full Menu</a>' +
  '<a class="btn windowButtonSub" href="#" role="button">View Subscription</a>' +
  "</div>";

  const contentString3 = 
  '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">' +
  '<style>' +
  '.windowButtonMenu {display:inline-block; text-align:center; verticle-align: center; padding:10px; width: 50%; transition: background-color 0.3s;} .windowButtonMenu:hover, .clickable-container:hover{background-color: #f0f0f0;}' +
  '.windowButtonSub {display:inline-block; text-align:center; verticle-align: center; padding:10px; width: 50%; transition: background-color 0.3s;} .windowButtonSub:hover, .clickable-container:hover{background-color: #f0f0f0;}' +
  '.li {list-style-type: none; margin: 20px; text-align: left; font-size: 18px}' +
  '#dailyDeals {background-color: #f0f0f0; border-radius: 8px; padding: 0.1px;}' +
  '.firstHeading {font-family: "Trebuchet MS", Calibri, Tahoma, sans-serif; font-weight: 1000;}' +
  '.secondHeading {font-family: "Trebuchet MS", Calibri, Tahoma, sans-serif; font-size: 20px;}' +
  '.dayPlaceholder {font-size: 20px;}' +
  '</style>' +
  '<div id="content">' +
  '<div id="poi1">' +
  "</div>" +
  '<h1 id="firstHeading" class="firstHeading ">Kansas City Taco Company</h1>' +
  "<h2 id='secondHeading'>Deals of the Day:</h2>" +
  "<h3 class='dayPlaceholder'><i>*day of the week here*</i></h3>" +
  "<ul id='dailyDeals'>" +
  "<li class='li'>Deal 1</li>" +
  "<li class='li'>Deal 2</li>" +
  "<li class='li'>Deal 3</li></ul>" +
  '<a class="btn windowButtonMenu" href="#" role="button">Full Menu</a>' +
  '<a class="btn windowButtonSub" href="#" role="button">View Subscription</a>' +
  "</div>";

  const contentString4 = 
  '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">' +
  '<style>' +
  '.windowButtonMenu {display:inline-block; text-align:center; verticle-align: center; padding:10px; width: 50%; transition: background-color 0.3s;} .windowButtonMenu:hover, .clickable-container:hover{background-color: #f0f0f0;}' +
  '.windowButtonSub {display:inline-block; text-align:center; verticle-align: center; padding:10px; width: 50%; transition: background-color 0.3s;} .windowButtonSub:hover, .clickable-container:hover{background-color: #f0f0f0;}' +
  '.li {list-style-type: none; margin: 20px; text-align: left; font-size: 18px}' +
  '#dailyDeals {background-color: #f0f0f0; border-radius: 8px; padding: 0.1px;}' +
  '.firstHeading {font-family: "Trebuchet MS", Calibri, Tahoma, sans-serif; font-weight: 1000;}' +
  '.secondHeading {font-family: "Trebuchet MS", Calibri, Tahoma, sans-serif; font-size: 20px;}' +
  '.dayPlaceholder {font-size: 20px;}' +
  '</style>' +
  '<div id="content">' +
  '<div id="poi1">' +
  "</div>" +
  '<h1 id="firstHeading" class="firstHeading ">The Quaff</h1>' +
  "<h2 id='secondHeading'>Deals of the Day:</h2>" +
  "<h3 class='dayPlaceholder'><i>*day of the week here*</i></h3>" +
  "<ul id='dailyDeals'>" +
  "<li class='li'>Deal 1</li>" +
  "<li class='li'>Deal 2</li>" +
  "<li class='li'>Deal 3</li></ul>" +
  '<a class="btn windowButtonMenu" href="#" role="button">Full Menu</a>' +
  '<a class="btn windowButtonSub" href="#" role="button">View Subscription</a>' +
  "</div>";

  const contentString5 = 
  '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">' +
  '<style>' +
  '.windowButtonMenu {display:inline-block; text-align:center; verticle-align: center; padding:10px; width: 50%; transition: background-color 0.3s;} .windowButtonMenu:hover, .clickable-container:hover{background-color: #f0f0f0;}' +
  '.windowButtonSub {display:inline-block; text-align:center; verticle-align: center; padding:10px; width: 50%; transition: background-color 0.3s;} .windowButtonSub:hover, .clickable-container:hover{background-color: #f0f0f0;}' +
  '.li {list-style-type: none; margin: 20px; text-align: left; font-size: 18px}' +
  '#dailyDeals {background-color: #f0f0f0; border-radius: 8px; padding: 0.1px;}' +
  '.firstHeading {font-family: "Trebuchet MS", Calibri, Tahoma, sans-serif; font-weight: 1000;}' +
  '.secondHeading {font-family: "Trebuchet MS", Calibri, Tahoma, sans-serif; font-size: 20px;}' +
  '.dayPlaceholder {font-size: 20px;}' +
  '</style>' +
  '<div id="content">' +
  '<div id="poi1">' +
  "</div>" +
  '<h1 id="firstHeading" class="firstHeading ">Lidia\'s</h1>' +
  "<h2 id='secondHeading'>Deals of the Day:</h2>" +
  "<h3 class='dayPlaceholder'><i>*day of the week here*</i></h3>" +
  "<ul id='dailyDeals'>" +
  "<li class='li'>Deal 1</li>" +
  "<li class='li'>Deal 2</li>" +
  "<li class='li'>Deal 3</li></ul>" +
  '<a class="btn windowButtonMenu" href="#" role="button">Full Menu</a>' +
  '<a class="btn windowButtonSub" href="#" role="button">View Subscription</a>' +
  "</div>";

  const contentString6 = 
  '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">' +
  '<style>' +
  '.windowButtonMenu {display:inline-block; text-align:center; verticle-align: center; padding:10px; width: 50%; transition: background-color 0.3s;} .windowButtonMenu:hover, .clickable-container:hover{background-color: #f0f0f0;}' +
  '.windowButtonSub {display:inline-block; text-align:center; verticle-align: center; padding:10px; width: 50%; transition: background-color 0.3s;} .windowButtonSub:hover, .clickable-container:hover{background-color: #f0f0f0;}' +
  '.li {list-style-type: none; margin: 20px; text-align: left; font-size: 18px}' +
  '#dailyDeals {background-color: #f0f0f0; border-radius: 8px; padding: 0.1px;}' +
  '.firstHeading {font-family: "Trebuchet MS", Calibri, Tahoma, sans-serif; font-weight: 1000;}' +
  '.secondHeading {font-family: "Trebuchet MS", Calibri, Tahoma, sans-serif; font-size: 20px;}' +
  '.dayPlaceholder {font-size: 20px;}' +
  '</style>' +
  '<div id="content">' +
  '<div id="poi1">' +
  "</div>" +
  '<h1 id="firstHeading" class="firstHeading ">Parlor</h1>' +
  "<h2 id='secondHeading'>Deals of the Day:</h2>" +
  "<h3 class='dayPlaceholder'><i>*day of the week here*</i></h3>" +
  "<ul id='dailyDeals'>" +
  "<li class='li'>Deal 1</li>" +
  "<li class='li'>Deal 2</li>" +
  "<li class='li'>Deal 3</li></ul>" +
  '<a class="btn windowButtonMenu" href="#" role="button">Full Menu</a>' +
  '<a class="btn windowButtonSub" href="#" role="button">View Subscription</a>' +
  "</div>";

  const contentString7 = 
  '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">' +
  '<style>' +
  '.windowButtonMenu {display:inline-block; text-align:center; verticle-align: center; padding:10px; width: 50%; transition: background-color 0.3s;} .windowButtonMenu:hover, .clickable-container:hover{background-color: #f0f0f0;}' +
  '.windowButtonSub {display:inline-block; text-align:center; verticle-align: center; padding:10px; width: 50%; transition: background-color 0.3s;} .windowButtonSub:hover, .clickable-container:hover{background-color: #f0f0f0;}' +
  '.li {list-style-type: none; margin: 20px; text-align: left; font-size: 18px}' +
  '#dailyDeals {background-color: #f0f0f0; border-radius: 8px; padding: 0.1px;}' +
  '.firstHeading {font-family: "Trebuchet MS", Calibri, Tahoma, sans-serif; font-weight: 1000;}' +
  '.secondHeading {font-family: "Trebuchet MS", Calibri, Tahoma, sans-serif; font-size: 20px;}' +
  '.dayPlaceholder {font-size: 20px;}' +
  '</style>' +
  '<div id="content">' +
  '<div id="poi1">' +
  "</div>" +
  '<h1 id="firstHeading" class="firstHeading ">Kobe Q</h1>' +
  "<h2 id='secondHeading'>Deals of the Day:</h2>" +
  "<h3 class='dayPlaceholder'><i>*day of the week here*</i></h3>" +
  "<ul id='dailyDeals'>" +
  "<li class='li'>Deal 1</li>" +
  "<li class='li'>Deal 2</li>" +
  "<li class='li'>Deal 3</li></ul>" +
  '<a class="btn windowButtonMenu" href="#" role="button">Full Menu</a>' +
  '<a class="btn windowButtonSub" href="#" role="button">View Subscription</a>' +
  "</div>";

  const contentString8 = 
  '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">' +
  '<style>' +
  '.windowButtonMenu {display:inline-block; text-align:center; verticle-align: center; padding:10px; width: 50%; transition: background-color 0.3s;} .windowButtonMenu:hover, .clickable-container:hover{background-color: #f0f0f0;}' +
  '.windowButtonSub {display:inline-block; text-align:center; verticle-align: center; padding:10px; width: 50%; transition: background-color 0.3s;} .windowButtonSub:hover, .clickable-container:hover{background-color: #f0f0f0;}' +
  '.li {list-style-type: none; margin: 20px; text-align: left; font-size: 18px}' +
  '#dailyDeals {background-color: #f0f0f0; border-radius: 8px; padding: 0.1px;}' +
  '.firstHeading {font-family: "Trebuchet MS", Calibri, Tahoma, sans-serif; font-weight: 1000;}' +
  '.secondHeading {font-family: "Trebuchet MS", Calibri, Tahoma, sans-serif; font-size: 20px;}' +
  '.dayPlaceholder {font-size: 20px;}' +
  '</style>' +
  '<div id="content">' +
  '<div id="poi1">' +
  "</div>" +
  '<h1 id="firstHeading" class="firstHeading ">Garozzo\'s</h1>' +
  "<h2 id='secondHeading'>Deals of the Day:</h2>" +
  "<h3 class='dayPlaceholder'><i>*day of the week here*</i></h3>" +
  "<ul id='dailyDeals'>" +
  "<li class='li'>Deal 1</li>" +
  "<li class='li'>Deal 2</li>" +
  "<li class='li'>Deal 3</li></ul>" +
  '<a class="btn windowButtonMenu" href="#" role="button">Full Menu</a>' +
  '<a class="btn windowButtonSub" href="#" role="button">View Subscription</a>' +
  "</div>";

  const contentString9 = 
  '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">' +
  '<style>' +
  '.windowButtonMenu {display:inline-block; text-align:center; verticle-align: center; padding:10px; width: 50%; transition: background-color 0.3s;} .windowButtonMenu:hover, .clickable-container:hover{background-color: #f0f0f0;}' +
  '.windowButtonSub {display:inline-block; text-align:center; verticle-align: center; padding:10px; width: 50%; transition: background-color 0.3s;} .windowButtonSub:hover, .clickable-container:hover{background-color: #f0f0f0;}' +
  '.li {list-style-type: none; margin: 20px; text-align: left; font-size: 18px}' +
  '#dailyDeals {background-color: #f0f0f0; border-radius: 8px; padding: 0.1px;}' +
  '.firstHeading {font-family: "Trebuchet MS", Calibri, Tahoma, sans-serif; font-weight: 1000;}' +
  '.secondHeading {font-family: "Trebuchet MS", Calibri, Tahoma, sans-serif; font-size: 20px;}' +
  '.dayPlaceholder {font-size: 20px;}' +
  '</style>' +
  '<div id="content">' +
  '<div id="poi1">' +
  "</div>" +
  '<h1 id="firstHeading" class="firstHeading ">Aurther Bryant\'s</h1>' +
  "<h2 id='secondHeading'>Deals of the Day:</h2>" +
  "<h3 class='dayPlaceholder'><i>*day of the week here*</i></h3>" +
  "<ul id='dailyDeals'>" +
  "<li class='li'>Deal 1</li>" +
  "<li class='li'>Deal 2</li>" +
  "<li class='li'>Deal 3</li></ul>" +
  '<a class="btn windowButtonMenu" href="#" role="button">Full Menu</a>' +
  '<a class="btn windowButtonSub" href="#" role="button">View Subscription</a>' +
  "</div>";

  const contentString10 = 
  '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">' +
  '<style>' +
  '.windowButtonMenu {display:inline-block; text-align:center; verticle-align: center; padding:10px; width: 50%; transition: background-color 0.3s;} .windowButtonMenu:hover, .clickable-container:hover{background-color: #f0f0f0;}' +
  '.windowButtonSub {display:inline-block; text-align:center; verticle-align: center; padding:10px; width: 50%; transition: background-color 0.3s;} .windowButtonSub:hover, .clickable-container:hover{background-color: #f0f0f0;}' +
  '.li {list-style-type: none; margin: 20px; text-align: left; font-size: 18px}' +
  '#dailyDeals {background-color: #f0f0f0; border-radius: 8px; padding: 0.1px;}' +
  '.firstHeading {font-family: "Trebuchet MS", Calibri, Tahoma, sans-serif; font-weight: 1000;}' +
  '.secondHeading {font-family: "Trebuchet MS", Calibri, Tahoma, sans-serif; font-size: 20px;}' +
  '.dayPlaceholder {font-size: 20px;}' +
  '</style>' +
  '<div id="content">' +
  '<div id="poi1">' +
  "</div>" +
  '<h1 id="firstHeading" class="firstHeading ">Homesteader</h1>' +
  "<h2 id='secondHeading'>Deals of the Day:</h2>" +
  "<h3 class='dayPlaceholder'><i>*day of the week here*</i></h3>" +
  "<ul id='dailyDeals'>" +
  "<li class='li'>Deal 1</li>" +
  "<li class='li'>Deal 2</li>" +
  "<li class='li'>Deal 3</li></ul>" +
  '<a class="btn windowButtonMenu" href="#" role="button">Full Menu</a>' +
  '<a class="btn windowButtonSub" href="#" role="button">View Subscription</a>' +
  "</div>";

  const contentString11 = 
  '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">' +
  '<style>' +
  '.windowButtonMenu {display:inline-block; text-align:center; verticle-align: center; padding:10px; width: 50%; transition: background-color 0.3s;} .windowButtonMenu:hover, .clickable-container:hover{background-color: #f0f0f0;}' +
  '.windowButtonSub {display:inline-block; text-align:center; verticle-align: center; padding:10px; width: 50%; transition: background-color 0.3s;} .windowButtonSub:hover, .clickable-container:hover{background-color: #f0f0f0;}' +
  '.li {list-style-type: none; margin: 20px; text-align: left; font-size: 18px}' +
  '#dailyDeals {background-color: #f0f0f0; border-radius: 8px; padding: 0.1px;}' +
  '.firstHeading {font-family: "Trebuchet MS", Calibri, Tahoma, sans-serif; font-weight: 1000;}' +
  '.secondHeading {font-family: "Trebuchet MS", Calibri, Tahoma, sans-serif; font-size: 20px;}' +
  '.dayPlaceholder {font-size: 20px;}' +
  '</style>' +
  '<div id="content">' +
  '<div id="poi1">' +
  "</div>" +
  '<h1 id="firstHeading" class="firstHeading ">Baramee Thai Bistro</h1>' +
  "<h2 id='secondHeading'>Deals of the Day:</h2>" +
  "<h3 class='dayPlaceholder'><i>*day of the week here*</i></h3>" +
  "<ul id='dailyDeals'>" +
  "<li class='li'>Deal 1</li>" +
  "<li class='li'>Deal 2</li>" +
  "<li class='li'>Deal 3</li></ul>" +
  '<a class="btn windowButtonMenu" href="#" role="button">Full Menu</a>' +
  '<a class="btn windowButtonSub" href="#" role="button">View Subscription</a>' +
  "</div>";

  const contentString12 = 
  '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">' +
  '<style>' +
  '.windowButtonMenu {display:inline-block; text-align:center; verticle-align: center; padding:10px; width: 50%; transition: background-color 0.3s;} .windowButtonMenu:hover, .clickable-container:hover{background-color: #f0f0f0;}' +
  '.windowButtonSub {display:inline-block; text-align:center; verticle-align: center; padding:10px; width: 50%; transition: background-color 0.3s;} .windowButtonSub:hover, .clickable-container:hover{background-color: #f0f0f0;}' +
  '.li {list-style-type: none; margin: 20px; text-align: left; font-size: 18px}' +
  '#dailyDeals {background-color: #f0f0f0; border-radius: 8px; padding: 0.1px;}' +
  '.firstHeading {font-family: "Trebuchet MS", Calibri, Tahoma, sans-serif; font-weight: 1000;}' +
  '.secondHeading {font-family: "Trebuchet MS", Calibri, Tahoma, sans-serif; font-size: 20px;}' +
  '.dayPlaceholder {font-size: 20px;}' +
  '</style>' +
  '<div id="content">' +
  '<div id="poi1">' +
  "</div>" +
  '<h1 id="firstHeading" class="firstHeading ">Bristol Seafood + Steak + Social</h1>' +
  "<h2 id='secondHeading'>Deals of the Day:</h2>" +
  "<h3 class='dayPlaceholder'><i>*day of the week here*</i></h3>" +
  "<ul id='dailyDeals'>" +
  "<li class='li'>Deal 1</li>" +
  "<li class='li'>Deal 2</li>" +
  "<li class='li'>Deal 3</li></ul>" +
  '<a class="btn windowButtonMenu" href="#" role="button">Full Menu</a>' +
  '<a class="btn windowButtonSub" href="#" role="button">View Subscription</a>' +
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