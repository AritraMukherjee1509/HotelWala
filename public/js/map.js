mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: "mapbox://styles/mapbox/streets-v12",
    center: [88.433889, 22.576944], // starting position [lng, lat]
    zoom: 9 // starting zoom
});