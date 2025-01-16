import ButtonComponent from './ButtonComponent';
import CardWidget from './CartWidget';
import './NavBar.css';


export default function NavBar(){
    return (
        <nav className='navbarr'>
            
            <div className="navbar-logo">
        <img src="../src\assets\multimedia/logo1.png" alt="Logo" className='img-logo' />
      </div>
           
<div className='navbar-botones'>
    <ButtonComponent texto="Home"/>
    <ButtonComponent texto="Productos"/>
    <ButtonComponent texto="Contactos"/>
    </div>

    <div className="carrito-logo">
        <CardWidget />
      </div>

    </nav>
);
}