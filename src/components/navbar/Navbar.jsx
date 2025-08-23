import { NavLink } from 'react-router-dom';
import Login from '../../pages/Login/Login';
import Dashboard from '../../pages/Dashboard/Dashboard';
import Places from '../../pages/Places/Places';
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { toast } from 'react-toastify';
import RecyclingIcon from '@mui/icons-material/Recycling';

function Navbar(){
    const navigate = useNavigate()

    const locais = (event)=>{
        event.preventDefault()
        const usuario = localStorage.getItem('usuario')
        if(!usuario){
            toast.error('faça login antes de continuar')
            return;
        }else{navigate('/locais')}
    }
    const logout =()=>{
        localStorage.removeItem("usuario")
        toast.success("Logout realizado com sucesso!")
        setTimeout(() => navigate('/dashboard'), 2000)}
    

    return(
        <header className='navbar'>
            <div className='logo'>
                <RecyclingIcon sx={{ fontSize: 40 }}></RecyclingIcon>
                 <h1>Reciclaville</h1>
            </div>
           
            <nav className='links'>
                 <NavLink to = '/' component = {Login}>Login</NavLink>
                 <NavLink to='/dashboard' component = {Dashboard}>Dashboard</NavLink>
                 <NavLink to = '/locais' onClick={locais}>
                    Locais de coleta</NavLink>
                 <div className='sair' onClick={logout}>
                    <h3>Sair</h3>
                    <LogoutIcon></LogoutIcon>
                
                 </div>
                 
         
            </nav>
           
         
        </header>
    )
}
export default Navbar