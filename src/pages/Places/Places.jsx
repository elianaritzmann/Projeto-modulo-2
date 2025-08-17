import CardPontoColeta from '../../components/CardPontoColeta';
import './Places.css'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
function Places() {
  return (
    <div className='containerPlaces'>
      <h1 className='seusPontos'>Seus pontos de Coleta</h1>
      <div className='alinharBotao'>
          <button className='novoPonto'> Novo
         <AddOutlinedIcon></AddOutlinedIcon>
        
      </button>
      </div>
      
     
      <div className='cardsPontos'>
          <CardPontoColeta></CardPontoColeta>
          <CardPontoColeta></CardPontoColeta>
          <CardPontoColeta></CardPontoColeta>
          <CardPontoColeta></CardPontoColeta>
           <CardPontoColeta></CardPontoColeta>
          <CardPontoColeta></CardPontoColeta>
          <CardPontoColeta></CardPontoColeta>
          <CardPontoColeta></CardPontoColeta>
           <CardPontoColeta></CardPontoColeta>
          <CardPontoColeta></CardPontoColeta>
        
        
      </div>
    </div>
  )
}

export default Places;

