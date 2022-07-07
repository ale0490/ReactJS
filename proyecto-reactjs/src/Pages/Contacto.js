//React
import { Link } from 'react-router-dom';
//Propio
import './Styles.css'

const Contacto = () =>{

    return (
        <>  
        <img src='./construccion.webp' className='contacto-image'/>
        <div>
            <Link to="/" className='link-inicio'>Volver al inicio</Link>
        </div>
        </>
    )
};

export default Contacto;