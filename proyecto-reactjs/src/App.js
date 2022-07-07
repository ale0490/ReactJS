import './App.css';
import NavBar from './Components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartProvider } from './Context/CartContext';
import Home from './Pages/Home';
import ProductsList from './Pages/ProductsList';
import NotFound from './Pages/NotFound';
import Details from './Pages/Details';
import Cart from './Pages/Cart';
import Contacto from './Pages/Contacto';
import Joyeria from './Pages/Joyeria';
import BannerFooter from './Components/BannerFooter/BannerFooter'
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <CartProvider>
      <div className="App">
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/Joyeria' element={<Joyeria/>}/>
            <Route exact path='/Cat/:category' element={<ProductsList />}/>  
            <Route exact path='/Cat/:category/:id' element={<Details/>}/>
            <Route exact path='/Cart' element={<Cart/>}/>
            <Route exact path='/Contacto' element={<Contacto/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
          <BannerFooter/>
          <Footer/>
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;