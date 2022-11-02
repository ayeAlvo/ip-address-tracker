import React from 'react';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { IconLocation } from './IconLocation';

function ViewMap({ coordinates }) {
    console.log(coordinates);

    if (coordinates[0] === undefined || coordinates[1] === undefined)
        return 'cargando...';

    return (
        <>
            <MapContainer center={coordinates} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <Marker position={coordinates} icon={IconLocation}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </>
    );
}

export default ViewMap;
