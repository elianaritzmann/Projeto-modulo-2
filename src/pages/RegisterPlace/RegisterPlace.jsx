import './RegisterPlace.css'
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
function RegisterPlace() {
const [nomedoPonto, setNomedoPonto]= useState('')
const [descricao, setDescricao] = useState('')
const [cep, setCep]=useState('')
const[logradouro, setLogradouro]= useState('')
const[bairro, setBairro]=useState('')
const[estado,setEstado] = useState('')
const[cidade, setCidade]= useState('')
const[coordenadas, setCoordenadas]=useState({})
const navigate = useNavigate()
const [data, setData]=useState(null)
const [vidro, setVidro]=useState(false)
const [papel, setPapel]=useState(false)
const [plastico, setPlastico] =useState(false)
const [organico, setOrganico] = useState(false)
const [metal, setMetal] = useState(false)



useEffect(() => {
    setData(JSON.parse(localStorage.getItem('usuario')))
  }, []); 
  
  const checkCep =()=>{ 
    axios.get(`http://localhost:3000/cep/${cep}`)
    .then((response) => {
      const data = response.data
      setLogradouro(data.logradouro || '')
      setBairro(data.bairro || '')
      setCidade(data.localidade || '')
      setEstado(data.uf || '')
      setCoordenadas(data.coordenada ||{})
    }).catch(() => {
      toast.error("Digite um cep válido");
    });
  }
function save(event){
  event.preventDefault()
  const residuos = []
  
  if(vidro === true){
    residuos.push("vidro")
  }
   if(papel === true){
    residuos.push("papel")
  }
   if(plastico === true){
    residuos.push("plástico")
  }
  if(metal === true){
    residuos.push("metal")
  }
  if(organico === true){
    residuos.push("orgânico")
  }
    const novaRota = {
  nome: nomedoPonto,
  descricao: descricao,
  endereco: {
    cep: cep,
    logradouro: logradouro,
    bairro: bairro,
    localidade: cidade,
    uf: estado
  },
  coordenadas: {
     latitude: coordenadas.latitude,
     longitude: coordenadas.longitude
  },
  residuos:residuos,
  usuarioId: data.usuario.id
}

  
  axios.post("http://localhost:3000/coletas", novaRota, { 
    headers: {
        usuarioid: data.usuario.id,
        "Content-Type": "application/json"
      }}
  )
    .then(() => {
      toast.success("Cadastro feito com sucesso!");
      setTimeout(() => navigate('/locais'), 2000)
    }).catch(() => {
      toast.error("Houve um erro ao cadastrar. Tente novamente mais tarde");
    });
}
  return(
    <div className='coleta'>
      <h2>Cadastro de Pontos de Coleta</h2>
     
      <form action="" className='formColeta' onSubmit={save}>

        <div className='nomeDescricao'>
           <label htmlFor="nomeDoPonto">Nome do ponto: </label>
           <input type="text" name="nomeDoPonto" id="nomeDoPonto" required  value= {nomedoPonto} onChange={(event)=>{ setNomedoPonto(event.target.value)} }/>

           <label htmlFor="descricao">Descrição: </label>
           <textarea type="text" name="descricao" id="descricao" required   value= {descricao} onChange={(event)=>{ setDescricao(event.target.value)} }/>

        </div>
           <span>Selecione o tipo de material: </span>

          <div className='checkboxform' id='checkbox'>
             
               <input type="checkbox" name="vidro" id="vidro" checked={vidro} onChange={(event)=>{ setVidro(event.target.checked)} } />
                <label htmlFor="vidro">Vidro</label>

               <input type="checkbox" name="papel" id="papel" checked={papel} onChange={(event)=>{ setPapel(event.target.checked)} }/>
               <label htmlFor="papel">Papel</label>

               <input type="checkbox" name="plastico" id="plastico" checked={plastico} onChange={(event)=>{ setPlastico(event.target.checked)} }/>
                <label htmlFor="plastico">Plástico</label>
               
               <input type="checkbox" name="metal" id="metal" checked={metal} onChange={(event)=>{ setMetal(event.target.checked)} }/>
               <label htmlFor="metal">Metal</label>

               <input type="checkbox" name="organico" id="organico" checked={organico} onChange={(event)=>{ setOrganico(event.target.checked)} }/>
                <label htmlFor="organico">Orgânico</label>
          </div>
       
          <div className='endereco'>

            <div className='cep'>
                <label htmlFor="cep">Cep</label >
                <input type="text" name="cep" id="cep"required   value= {cep} onChange={(event)=>{ setCep(event.target.value)} } onBlur={checkCep}/>
            </div>
            
            <div className='logradouro'>
                 <label htmlFor="logradouro">Logradouro</label>
                 <input type="text" name="logradouro" required  id='logradouro' value= {logradouro}onChange={(event)=>{ setLogradouro(event.target.value)}}/>
            </div>

            <div className='estado'>
                  <label htmlFor="estado">Estado</label>
                  <input type="text" name="estado" required id='estado'value= {estado} onChange={(event)=>{ setEstado(event.target.value)} }/>
            </div>

            <div className='cidade'>
                  <label htmlFor="cidade">Cidade</label>
                  <input type="text" name="cidade" required  id='cidade' value= {cidade} onChange={(event)=>{ setCidade(event.target.value)} } />
            </div>

            <div className='bairro'>
                  <label htmlFor="bairro">Bairro</label>
                  <input type="text" name="bairro" required  id='bairro' value= {bairro} onChange={(event)=>{ setBairro(event.target.value)} }/>
            </div>
        
          </div>
       
        <button type="Submit">Adicionar</button>
      </form>
    </div>
  )
}

export default RegisterPlace;
