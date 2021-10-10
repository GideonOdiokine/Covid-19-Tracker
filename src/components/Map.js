import React from 'react'
import { Map as LeafletMap, TileLayer, Marker } from "react-leaflet";
import L from 'leaflet'


L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('https://rawcdn.githack.com/colbyfayock/egghead-code-examples/master/add-marker-popup-to-map-react-leaflet/src/images/marker-icon-2x.png'),
    iconUrl: require('https://rawcdn.githack.com/colbyfayock/egghead-code-examples/master/add-marker-popup-to-map-react-leaflet/src/images/marker-icon.png'),
    shadowUrl: require('https://rawcdn.githack.com/colbyfayock/egghead-code-examples/master/add-marker-popup-to-map-react-leaflet/src/images/marker-shadow.png')
});

const Map = ({ center, zoom }) => {
    return (
        <div className="map" >
            <LeafletMap center={center} zoom={zoom}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={center}>
                </Marker>
            </LeafletMap>
        </div>
    )
}

export default Map;
