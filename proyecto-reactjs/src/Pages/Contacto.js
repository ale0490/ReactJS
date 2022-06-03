import { Link } from 'react-router-dom';
import './Styles.css'
const Contacto = () =>{
    return (
        <>  
            <div className='container'>
                <Link to="/" className='links'>Volver al inicio</Link>
            </div>
            <img src='./construccion.webp' className='contacto-image'/>
        </>
    )
};

export default Contacto;