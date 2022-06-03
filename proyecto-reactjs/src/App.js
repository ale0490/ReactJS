import './App.css';
import NavBar from './Components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Anillos from './Pages/Anillos';
import Brazaletes from './Pages/Brazaletes';
import Colgantes from './Pages/Colgantes';
import Contacto from './Pages/Contacto';
import NotFound from './Pages/NotFound';
import Details from './Pages/Details';
import anillos from './Utils/anillos';
import brazaletes from './Utils/brazaletes';
import colgantes from './Utils/colgantes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <h1>E-commerce ReacJS</h1>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/Anillos' element={<Anillos/>}/>
          <Route exact path='/Anillos/:id' element={<Details item={anillos}/>}/>
          <Route exact path='/Brazaletes' element={<Brazaletes/>}/>
          <Route exact path='/Brazaletes/:id' element={<Details item={brazaletes}/>}/>
          <Route exact path='/Colgantes' element={<Colgantes/>}/>
          <Route exact path='/Colgantes/:id' element={<Details item={colgantes}/>}/>
          <Route exact path='/Contacto' element={<Contacto/>}/>
          <Route exact path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;