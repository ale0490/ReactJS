import './Styles.css'
import { Link } from 'react-router-dom';
import CardItemContainer from '../Components/Cards-home/CardItemContainer';
import anillos from '../Utils/anillos';
import brazaletes from '../Utils/brazaletes';
import colgantes from '../Utils/colgantes';

const Home = () =>{
  return (
    <div>
      <h2>Anillos populares</h2>
      <Link to="/Anillos" className='link'>
        <CardItemContainer item={anillos}/>
      </Link>
      <h2>Brazaletes populares</h2>
      <Link to="/Brazaletes" className='link'>
        <CardItemContainer item={brazaletes}/>
      </Link>
      <h2>Colgantes populares</h2>
      <Link to="/Colgantes" className='link'>
        <CardItemContainer item={colgantes}/>
      </Link>
    </div>
  )
}

export default Home;