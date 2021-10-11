import React from 'react'
import { Map as LeafletMap, TileLayer, Marker } from "react-leaflet";
import { Icon } from 'leaflet'
import { showDataOnMap } from './utili';


const icon = new Icon({
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Map_marker.svg/390px-Map_marker.svg.png",
    iconSize: [25, 25],
});

const Map = ({ center, zoom, casesType, countries }) => {
    return (
        <div className="map" >
            <LeafletMap center={center} zoom={zoom}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={center} icon={icon} />

                {showDataOnMap(countries, casesType)}
            </LeafletMap>
        </div>
    )
}

export default Map;
