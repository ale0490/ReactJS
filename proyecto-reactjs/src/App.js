import './App.css';
import NavBar from './Components/NavBar/NavBar';
import CardList from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='section'>
        <h1 className='h1'>E-commerce ReacJS</h1>
        <div className='cards'>
          <h2>Anillos populares</h2>
          <div className='container-cards'>
            <CardList/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;