import './CardPontoColeta.css'
import DeleteIcon from '@mui/icons-material/Delete';
import PlaceIcon from '@mui/icons-material/Place';
import RecyclingIcon from '@mui/icons-material/Recycling';
function CardPontoColeta(props){
        return(
            <div className='containerPonto'>
              <div>
                <h3>{props.nome}</h3>
                <div className='iconeTexto'> 
                  <PlaceIcon></PlaceIcon>
                   <p>  {props.endereco.logradouro}, {props.endereco.bairro} - {props.endereco.localidade}/{props.endereco.uf}, CEP: {props.endereco.cep}</p></div>
                <div className='iconeTexto'>
                  <RecyclingIcon></RecyclingIcon> 
                  <p>{props.materiais}</p></div>
              </div> 
                <div className='botaoExcluir'>
                   <DeleteIcon></DeleteIcon>
              </div>
                
            </div>
        )
}export default CardPontoColeta