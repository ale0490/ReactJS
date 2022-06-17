import './App.css';
import NavBar from './Components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartProvider } from './Context/CartContext';
import Home from './Pages/Home';
import ProductsList from './Pages/ProductsList';
import NotFound from './Pages/NotFound';
import Details from './Pages/Details';
import Cart from './Pages/Cart';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/products/:category' element={<ProductsList />}/>  
            <Route exact path='/product/:id' element={<Details/>}/>
            <Route exact path='/Cart' element={<Cart/>}/>
            <Route exact path='*' element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;