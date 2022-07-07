//React
import { Link } from "react-router-dom";

const MapaSitio = () => {

    return(
        <>
        <h4>Mapa de Sitio</h4>
        <div>
            <ul>
                <li>
                    <p>
                        <Link to="/" className="text-footer">
                            Inicio 
                        </Link>
                    </p>
                </li>
                <li>
                    <p>
                        <Link to="/Joyeria" className="text-footer">
                            Joyeria 
                        </Link>
                    </p>
                </li>
                <li>
                    <p>
                        <Link to="/Accesorios" className="text-footer">
                            Accesorios 
                        </Link>
                    </p>
                </li>
                <li>
                    <p>
                        <Link to="/Contacto" className="text-footer">
                            Contactanos 
                        </Link>
                    </p>
                </li>
                <li>
                    <p>
                        <Link to="/Cart" className="text-footer">
                            Carrito 
                        </Link>
                    </p>
                </li>
            </ul>
        </div>
        </>
    )
}

export default MapaSitio;