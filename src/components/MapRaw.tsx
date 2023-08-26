'use client';
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.js'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.png'

interface Props {
  children?: React.ReactNode;
}

const MAP_ID = 'leaflet-map';

const Component: React.FC<Props> = (props) => {
  useEffect(() => {
    var map = L.map(MAP_ID);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);
  
    L.Routing.control({
      waypoints: [L.latLng(57.74, 11.94), L.latLng(57.6792, 11.949)],
      routeWhileDragging: true,
    }).addTo(map);
  }, []);

  return <div id={MAP_ID} style={{ width: '100%', height: '100%' }}></div>;
};

export default Component;
