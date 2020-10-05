import mapbox from "mapbox-gl";

const markerType = {
  activity: "http://i.imgur.com/WbMOfMl.png",
  hotel: "http://i.imgur.com/D9574Cu.png",
  restaurant: "http://i.imgur.com/cqR6pUI.png",
}

const buildMarker = (type, coordinates) => {
  const markerDomEl = document.createElement('div');
  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '39px';
  markerDomEl.style.backgroundImage = `url(${markerType[type]})`;
  return new mapboxgl.Marker(markerDomEl).setLngLat(coordinates);
}

export default buildMarker;
