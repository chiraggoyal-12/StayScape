mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: 'map', // container ID
  center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 8 // starting zoom
});


const marker = new mapboxgl.Marker({color: "red"})
  .setLngLat(listing.geometry.coordinates) //Listing.geometry.coordinates
  // .setPopup(new mapboxgl.Popup({offset: 25}) //I found it useless
  // .setHTML("<p>Hello to WanderLust</p>"))
  .addTo(map);