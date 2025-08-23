import './CardEstado.css'

function CardEstado(props){
    return(
        <div className='card'>
        <h3>{props.estado}</h3>
        <span>Pontos de coleta: {props.quantidade}</span>
        </div>
    )
    
}
export default CardEstado 