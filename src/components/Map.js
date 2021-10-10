import React from 'react'
import { Map as LeafletMap, TileLayer } from "react-leaflet";



const Map = ({ center, zoom }) => {
    return (
        <div className="map" >
            <LeafletMap center={center} zoom={13}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
            </LeafletMap>
        </div>
    )
}

export default Map;
