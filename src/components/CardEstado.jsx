import './CardEstado.css'

function CardEstado(props){
    return(
        <div className='card'>
        <h3>{props.estado}</h3>
        <span>{props.quantidade}</span>
        </div>
    )
    
}
export default CardEstado 