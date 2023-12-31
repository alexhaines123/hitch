'use client';
import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import 'leaflet-routing-machine';

interface Props {
  routing?: {
    origin: Interfaces.Location;
    destination: Interfaces.Location;
  };
  userLocation?: GeolocationPosition;
}

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x.src,
  iconUrl: markerIcon.src,
  shadowUrl: markerShadow.src,
});

const MAP_ID = 'leaflet-map';

const Map: React.FC<Props> = ({ routing, userLocation }) => {
  const [map, setMap] = useState<L.Map>();

  useEffect(() => {
    const mapInst = L.map(MAP_ID);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(mapInst);

    setMap(mapInst);
  }, []);

  useEffect(() => {
    if (routing && map) {
      L.Routing.control({
        waypoints: [
          L.latLng(routing.origin.lat, routing.origin.long),
          L.latLng(routing.destination.lat, routing.destination.long),
        ],
        routeWhileDragging: true,
      }).addTo(map);
    }
  }, [routing, map]);

  useEffect(() => {
    if (userLocation && map) {
      L.marker([
        userLocation.coords.latitude,
        userLocation.coords.longitude,
      ]).addTo(map);
    }
  });

  return <div id={MAP_ID} style={{ width: '100%', height: '100%' }}></div>;
};

export default Map;
