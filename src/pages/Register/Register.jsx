import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from 'yup';
import './Register.css'
import { use, useEffect, useState } from 'react'
 import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
function Register() {
  const [nome, setNome] = useState('')
  const [genero, setGenero] = useState('')
  

  const [cpf, setCpf] = useState('')
  const [data, setData] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const navigate = useNavigate()
  const hoje = new Date();
  const d = new Date(data)

  const cadastro = {
    nome: nome,
    sexo: genero,
    cpf: cpf,
    nascimento: data,
    email: email,
    senha: senha
  }
  function save(event){
    event.preventDefault()
    if(nome.length<1){
      toast.error('O campo nome não pode ficar vazio')
    }else if(genero=== ''){
      toast.error('O campo gênero precisa ser selecionado')
    }
    else if(cpf.length !==  11){
        toast.error("digite um cpf válido")
    }else if (isNaN(d.getTime()) || d > hoje) { 
       toast.error('Digite uma data de nascimento válida');
    }else if(!email.includes('@')|| email.length<3){
      toast.error('digite um email válido')
    }else if(senha.length<5){ 
      toast.error('A senha precisa ter no mínimo 5 caracteres')
    }else{
       axios.post("http://localhost:3000/usuarios", cadastro)
    .then(() => {
      toast.success("Cadastro feito com sucesso!");
      setTimeout(() => navigate('/'), 2000)
    })
    .catch(() => {
      toast.error("Houve um erro ao cadastrar. Tente novamente mais tarde");
    });
      }
    
     //TODO validar se cpf existe na api
  } 
   
  return <>
        <div className="signup"> 
           <ToastContainer />
            <h1>Cadastro</h1>
            <form action="" onSubmit={save}>
              <label htmlFor="name">Nome completo:</label>
              <input type="text" name='name' placeholder='Seu nome completo' value={nome}  onChange={(event)=>{ setNome(event.target.value)}}/>

              <span>Gênero:</span>
               <select name="genero" id="genero" value={genero}  onChange={(event)=>{ setGenero(event.target.value)}}>
                <option value=''>Selecionar</option>
                <option value ='F'>F</option>
                <option value='M'>M</option>
               </select>

              <label htmlFor="cpf">CPF:</label>
              <input type="text" name='cpf' placeholder='Seu CPF'value={cpf} onChange={(event)=>{ setCpf(event.target.value)}} />
              <label htmlFor="dataNascimento">Data de Nascimento:</label>
              <input type="date" name='dataNascimento' placeholder='Sua data de nascimento'value={data}  onChange={(event)=>{ setData(event.target.value)}}/>
              <label htmlFor="email">Email:</label>
              <input type="email" name='email' placeholder='Seu email'value={email}  onChange={(event)=>{ setEmail(event.target.value)}} />
              <label htmlFor="senha">Crie uma senha:</label>
              <input type="password" name='senha' placeholder='Crie uma senha'value={senha}  onChange={(event)=>{ setSenha(event.target.value)}}/>
              <button type='submit'>Cadastrar</button>
            </form>
            
        </div>
        
        </>;
}

export default Register;

