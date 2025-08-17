import './CardPontoColeta.css'
import DeleteIcon from '@mui/icons-material/Delete';
import PlaceIcon from '@mui/icons-material/Place';
import RecyclingIcon from '@mui/icons-material/Recycling';
function CardPontoColeta(){
        return(
            <div className='containerPonto'>
              <div>
                <h3>Nome do ponto</h3>
                <div className='iconeTexto'> <PlaceIcon></PlaceIcon> <p>rua tal tal tal</p></div>
                <div className='iconeTexto'><RecyclingIcon></RecyclingIcon> <p>Materiais</p></div>
              </div>  
                <div className='botaoExcluir'>
                   <DeleteIcon></DeleteIcon>
                </div>
                
            </div>
        )
}export default CardPontoColeta