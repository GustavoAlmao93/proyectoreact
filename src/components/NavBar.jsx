import CardWidget from './CartWidget';
import { Link } from 'react-router-dom';
import './NavBar.css';


export default function NavBar(){
    return (
        <nav className='navbarr'>
            
            <button className="navbar-logo">
            <Link to="/">
        <img src="../src\assets\multimedia/logo.png" alt="Logo" className='img-logo' />
        </Link>
      </button>
           
      <div className="navbar-botones">

        <button>
          <Link to="/category/home">Home</Link>
        </button>
        <button>
          <Link to="/category/office">Office</Link>
        </button>
        <button>
          <Link to="/category/gaming">Gaming</Link>
        </button>
      </div>

    <div className="carrito-logo">
        <CardWidget />
      </div>

    </nav>
);
}