import { useEffect, useState } from 'react';
import CardPontoColeta from '../../components/CardPontoColeta';
import RegisterPlace from '../RegisterPlace/RegisterPlace';
import './Places.css'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Link} from 'react-router-dom';
import axios from 'axios';
import { toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Places() {
  
  const [locais, setLocais] = useState([])

  useEffect(() => {
    const usuario = (JSON.parse(localStorage.getItem('usuario'))) || []
     axios.get('http://localhost:3000/coletas', { 
    headers: {
        usuarioid: usuario.usuario.id,
        "Content-Type": "application/json"
      }}
  ).then((response)=>{
      setLocais(response.data)
      console.log(response.data)
  })
  }, []);         

    const deleteRota =(id)=>{
        const usuario = (JSON.parse(localStorage.getItem('usuario'))) || []
        axios.delete(`http://localhost:3000/coletas/${id}`,{ 
    headers: {
        usuarioid: usuario.usuario.id,
        "Content-Type": "application/json"
      }}
        )
        .then(()=>{
          toast.success("Rota excluída com sucesso!")
        }).catch(()=>{
          toast.error("Houve um erro ao cadastrar. Tente novamente mais tarde")
        }
        )
        const novaLista = locais.filter((l) => l.id !== id); 
        setLocais(novaLista)
       }  

       
  return (
    <div className='containerPlaces'>
      <h1 className='seusPontos'>Seus pontos de Coleta</h1>
      <div className='alinharBotao'>
          <Link to= "/locais/novo" Component={RegisterPlace} className='novoPonto'>
          <h3>Novo</h3>
            <AddOutlinedIcon></AddOutlinedIcon>
         </Link>
      </div>

      <div className='cardsPontos'>
  {locais.length > 0 ? (
    locais.map((local) => {
      return (
        <CardPontoColeta
          key={local.id}
          nome={local.nome}
          endereco={local.endereco}
          materiais={local.residuos}
          deleteRota={() => deleteRota(local.id)}
        />
      )
    })
  ) : (
    <p>Você ainda não tem pontos de coleta cadastrados.</p>
  )}
</div>
    </div>
  )
}

export default Places;

