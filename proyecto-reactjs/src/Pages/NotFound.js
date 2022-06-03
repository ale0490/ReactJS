import { Link } from 'react-router-dom';
import './Styles.css'
const NotFound = () => {
    return(
        <>
        <div className='container'>
            <Link to="/" className='links'> Volver a Inicio</Link>
        </div>
        <img src="../404.webp" className="notfound-image"/>
        </>
    )
}

export default NotFound;