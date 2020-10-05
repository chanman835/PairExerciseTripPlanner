console.log('Running Fine');

import mapboxgl from 'mapbox-gl';
import buildMarker from "./marker";

mapboxgl.accessToken =
  'pk.eyJ1IjoiY2hhbnc4MzUiLCJhIjoiY2tmd3BjNHh0MWZkaTJ3bTZkeDNzajdvdyJ9.B2kAdcNT2s-kvEF2pkhV1g';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});


const marker = buildMarker("activity", [-74.009151, 40.705086]);
marker.addTo(map);
// const markerDomEl = document.createElement('div');
// markerDomEl.style.width = '40px';
// markerDomEl.style.height = '40px';
// markerDomEl.style.backgroundImage = "url(https://i.imgur.com/WbMOfMl.png)";
// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009151, 40.705086]).addTo(map);
