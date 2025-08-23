import CardEstado from '../../components/cardEstado/CardEstado';
import './Dashboard.css'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import Mapa from '../../components/mapa/Mapa.jsx'

function Dashboard() {
  const [coletas, setColetas]=useState([])
  useEffect(()=>{
      axios.get("http://localhost:3000/dashboard")
          .then((response) => {
           setColetas(response.data.estados)
          })
          .catch(() => {
            toast.error("Houve um erro ao carregar. Tente novamente mais tarde");
          })  },[])

  return (
        <div className='containerPai'>
          <ToastContainer></ToastContainer>
          <h1>Distribuição de pontos de coleta por estado</h1>
          <div className='container'>

           <div className='mapa'>
           <Mapa ></Mapa>
           </div>
           <div className='cards'>

            {coletas.length > 0 ?
              coletas.map((local,i)=>{
                return(
                    <CardEstado
                     key={i}
                     estado = {local.nome}
                     quantidade = {local.quantidade}
                    />
                ) } ): <p> Ainda não foi cadastrado nenhum ponto de coleta.</p>
            }
            
           </div>
       </div>
  </div>
  )
}

export default Dashboard;

