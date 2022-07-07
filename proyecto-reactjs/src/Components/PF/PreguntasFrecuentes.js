//React
import { Link } from "react-router-dom";

const PreguntasFrecuentes = () =>{

    return (
        <>
        <h4>¿Consultas?</h4>
        <div>
            <ul>
                <li>
                    <p>
                        <Link to="/Contacto" className="text-footer"> 
                            Contactanos 
                        </Link>
                    </p>
                </li>
                <li>
                    <p>
                        <Link to="/Sigue" className="text-footer"> 
                            Sigue tu pedido
                        </Link>
                    </p>
                </li>
                <li>
                    <p>
                        <Link to="/PF" className="text-footer"> 
                            Preguntas Frecuentes 
                        </Link>
                    </p>
                </li>
                <li>
                    <p>
                        <Link to="/Reembolso" className="text-footer"> 
                            Politica de Reembolso 
                        </Link>
                    </p>
                </li>
                <li>
                    <p>
                        <Link to="/Privacidad" className="text-footer"> 
                            Politica de Privacidad 
                        </Link>
                    </p>
                </li>
            </ul>
        </div>
        </>
    )
}
export default PreguntasFrecuentes;