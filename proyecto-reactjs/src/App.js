import './App.css';
import NavBar from './Components/NavBar/NavBar';
import anillos from './Utils/anillos';
import brazaletes from './Utils/brazaletes';
import colgantes from './Utils/colgantes';
import CardItemContainer from './Components/Cards-home/CardItemContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetails.js/ItemDetailscontainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route/>
        </Routes>
        <div className='section'>
          <h1 className='h1'>E-commerce ReacJS</h1>
          <div className='cards'>
            <h2>Anillos populares</h2>
            <div className='container-cards'>
              <CardItemContainer item={anillos}/>
            </div>
            <h2>Brazaletes populares</h2>
            <div className='container-cards'>
              <CardItemContainer item={brazaletes}/>
            </div>
            <h2>Colgantes populares</h2>
            <div className='container-cards'>
              <CardItemContainer item={colgantes}/>
            </div>
          </div>
        </div>
      </BrowserRouter>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;