var map;
var mapi = new google.maps.LatLng(19.412931,-99.180933);
function initialize() {

var mapaAzul = [
  {
    featureType: 'all',
    stylers: [
    {hue:'#C42795'},
    {saturation:100}
    ]},
  {
    featureType:'all',
    elementType:"labels.text",
    stylers: [
      {hue:"339A86"}
    ]},
  {
    featureType:'road',
    elementType: "geometry",
    stylers: [
      {hue:"#C42795"}
    ]},
  {
    featureType:'landscape',
    stylers: [
      {hue:'#FFBFE5'},
      {saturation:-50},
      {lightness:-5}
    ]},
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      { hue: "#c161a3" },
      { saturation: 60 },
      { lightness: -20 }
    ]},
  {
    featureType: "road.arterial",
    elementType: "all",
    stylers: [
      { hue: "#edbee3" },
      { lightness: 0 },
      { visibility: "simplified" },
      { saturation: -30 }
    ]},
  {
    featureType: "road.local",
    elementType: "label.icon",
    stylers: [
      { hue: "#026873" },
      { saturation: 50 },
      { gamma: 0.7 },
      { visibility: "simplified" }
    ]},
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {hue : '#DE52B4'},
      { saturation: 40 },
      { lightness: 40 }
    ]},
  {
    featureType: "administrative",
    elementType: "geometry.fill",
    stylers: [
      { hue: "#026873" },
      { saturation: 50 },
      { lightness: -10 },
      { gamma: 0.9 }
    ]},
  {
    featureType: "transit.line",
    elementType: "labels.icon",
    stylers: [
      { hue: "#A31180" },
      { visibility: "on" },
      { lightness: 100 }
    ]},
  {
    featureType: "poi.business",
    elementType: "labels",
    stylers: [
      { visibility: "on" },
      {hue:'#dd62ba'}
    ]}
];
var mapOptions = {
    zoom: 17,
    center: mapi,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'centraal']
    }
};
var map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);
var image = new google.maps.MarkerImage(
    themeURL+'/images/icon-maps.png', 
    new google.maps.Size(37, 37),
    new google.maps.Point(0,0),
    new google.maps.Point(19,37)
  );
var shape = {
  coords: [24,1,27,2,28,3,30,4,31,5,32,6,33,7,33,8,34,9,35,10,35,11,36,12,36,13,36,14,36,15,36,16,36,17,36,18,36,19,36,20,36,21,36,22,36,23,36,24,36,25,35,26,35,27,34,28,33,29,33,30,32,31,31,32,30,33,28,34,27,35,24,36,13,36,10,35,9,34,7,33,6,32,5,31,4,30,4,29,3,28,2,27,2,26,1,25,1,24,1,23,1,22,1,21,1,20,1,19,1,18,1,17,1,16,1,15,1,14,1,13,1,12,2,11,2,10,3,9,4,8,4,7,5,6,6,5,7,4,9,3,10,2,13,1,24,1],
  type:'poly'
};
var marker = new google.maps.Marker({
  icon: image,
  map: map, 
  shape: shape, 
  position:mapi
});
var styledMapOptions = {
  name: "centraal"
}
var jayzMapType = new google.maps.StyledMapType(mapaAzul, styledMapOptions);
    map.mapTypes.set('centraal', jayzMapType);
    map.setMapTypeId('centraal');
}