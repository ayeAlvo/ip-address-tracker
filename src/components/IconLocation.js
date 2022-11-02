import L from 'leaflet';
import iconMarker from '../assets/icon.svg';

export const IconLocation = L.icon({
    iconUrl: iconMarker,
    iconRetinaUrl: iconMarker,
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [35, 35],
    className: 'leaflet-venue-icon',
});
