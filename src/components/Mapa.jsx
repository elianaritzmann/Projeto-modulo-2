
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Mapa.css'

function Mapa() {
  const position = [-7.945236115447601, -55.318090142922316];

  return (
    <MapContainer
      center={position}
      zoom={5}
      scrollWheelZoom={true}
      className="map-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
            <Popup>teste teste teste</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Mapa;