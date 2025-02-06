import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Office from './components/Office';
import Gaming from './components/Gaming';
import ProductDetail from './components/ProductDetail';

function App() {
  
  return (

  <>
  <BrowserRouter>
 <NavBar/>
 <Routes>
 <Route exact path='/' element={<Home />} />
 <Route exact path='/category/:catId' element={<Home />} />
  <Route exact path='/category/:catId' element={<Office />} />
  <Route exact path='/category/:catId' element={<Gaming />} />
  <Route exact path="/product/:id" element={<ProductDetail />} />
 </Routes>
 </BrowserRouter>
  </>
  );
}

export default App;
