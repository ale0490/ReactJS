import './App.css';
import NavBar from './Components/NavBar/NavBar';
import CardList from './Components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemList from './Components/ItemListContainer/ItemList';

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
              <CardList/>
            </div>
          </div>
        </div>
      </BrowserRouter>
      <ItemList></ItemList>
    </div>
  );
}

export default App;