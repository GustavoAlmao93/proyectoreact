import './App.css';
import NavBar from './assets/components/NavBar';
import ItemListContainer from './assets/components/ItemListContainer';

function App() {
  const bienvenidos = "Bienvenidos a mi e-commerce InforGA";

  return (
  <>
 <NavBar/>
 <ItemListContainer bienvenida={bienvenidos}/>
  </>
  );
}

export default App;
