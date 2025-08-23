
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Mapa.css'
import Marcador from './Marcador';
import { useEffect, useState } from 'react'
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

function Mapa() {
  const position = [-7.945236115447601, -55.318090142922316];
  const [pontos, setPontos]= useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/dashboard')
      .then((response) => {
        setPontos(response.data.locais);
      })
      .catch(() => {
        console.error("Erro ao carregar pontos do mapa");
      });
  }, []);

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
       {
              pontos.map((local,i)=>{
                return(
                    <Marcador
                     key={i}
                     nome = {local.nome}
                     estado={local.estado}
                     descricao= {local.descricao}
                     tipoMaterial = {local.tipoMaterial}
                     latitude = {local.latitude}
                     longitude = {local.longitude}
                    />
                ) } )
            }
    </MapContainer>
  );
}

export default Mapa;