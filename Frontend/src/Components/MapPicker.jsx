import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const MapPicker = ({ onLocationSelect }) => {
  const [position, setPosition] = useState([-6.917464, 107.619123]); // Default position

  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        setPosition([e.latlng.lat, e.latlng.lng]);
        onLocationSelect([e.latlng.lat, e.latlng.lng]);
      },
    });

    return position === null ? null : <Marker position={position}></Marker>;
  };

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "300px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <LocationMarker />
    </MapContainer>
  );
};

export default MapPicker;
