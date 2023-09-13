import './Navbar.scss';
import logo from '../assets/logo.png';

function Navbar(){
    return(
<nav className='Navbar'>
    <img src={logo} alt='Icone de la page accueil' className='Navbar-logo-sahra'/>
    <div className='Navbar-links'>
    <a className='Navbar-link'>A PROPOS</a>
    <a className='Navbar-link'>PROJETS</a>
    <a className='Navbar-link'>CONTACT</a>
    </div>
</nav>
    )
}
export default Navbar