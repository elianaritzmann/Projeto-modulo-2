 import { NavLink } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Dashboard from '../pages/Dashboard/Dashboard';
import Places from '../pages/Places/Places';
import './Navbar.css'
function Navbar(){
    return(
        <header className='navbar'>
            <h1>Nome do site</h1>
            <nav className='links'>
                 <NavLink to='/' component = {Login}>Login</NavLink>
                 <NavLink to='/dashboard' component = {Dashboard}>Dashboard</NavLink>
                 <NavLink to='/locais' component = {Places}>Locais de coleta</NavLink>
         
            </nav>
           
         
        </header>
    )
}
export default Navbar