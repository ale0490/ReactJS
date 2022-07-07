import { Link } from 'react-router-dom';
import './Styles.css'

const NotFound = () => {
    
    return(
        <>
        <div>
            <Link to="/" className='link-inico'> Volver a Inicio</Link>
        </div>
        <img src="../404.webp" className="notfound-image"/>
        </>
    )
}

export default NotFound;