import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

function Marcador(props){
    return(
            <div>
                 <Marker position={[props.latitude,props.longitude]}>
                            <Popup>
                                <p><strong>Nome:</strong> {props.nome}</p>
                                <p><strong>Estado:</strong> {props.estado}</p>
                                <p><strong>Descrição:</strong> {props.descricao}</p>
                                <p><strong>Material:</strong> {props.tipoMaterial}</p>
                                </Popup>
                 </Marker>
            </div>
    )
}

export default Marcador