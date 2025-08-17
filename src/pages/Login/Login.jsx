import { use, useEffect, useState } from 'react'
import axios from 'axios'
import './Login.css'
   import { Link, useNavigate } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import { toast, ToastContainer } from 'react-toastify';


function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const navigate = useNavigate()

  const login = {
    email: email,
    senha: senha
  }
  
  function save(event){
    event.preventDefault()

  if(!email.includes('@') || email.length<1){
    toast.error('Email inválido')
  }else if (senha.length < 5){
    toast.error('A senha precisa ter no mínimo 5 digitos')
  } else{ 
     axios.post("http://localhost:3000/login", login) //não esta funcionando :< descobrir o porque
    .then(() => {
      toast.success("Login feito com sucesso!");
      setTimeout(() => navigate('/dashboard'), 2000)
    })
    .catch(() => {
  
      toast.error("Houve um erro ao logar. Tente novamente mais tarde");
    })
     //TODO tratar erros  400 e 401
  }}
  return (
    
      <div className='login'>
        <ToastContainer></ToastContainer>
        <h1>Login</h1>
        <form action="" onSubmit={save}>
           <input type="email" name = 'email' value= {email} onChange={(event)=>{ setEmail(event.target.value)} } placeholder="Digite seu email" />
           <input type="password" name = 'senha' value = {senha} onChange={(event)=>{ setSenha(event.target.value)} } placeholder="Digite sua senha"/>
           <button type = 'submit'>Logar</button>
           <Link id= "cadastrese" to="/criar-conta">Criar conta</Link>
        </form>
      </div>
   
  )}
export default Login;