//Propio
import MapaSitio from "../MapaSitio/MapaSitio";
import Newsletter from "../Newsletter/Newsletter";
import PreguntasFrecuentes from "../PF/PreguntasFrecuentes";
import "./footer.css";

const Footer = () =>{
    
    return(
        <div className="footer">
            <div className="container">
                <div className="column left align-left width-33">
                    <MapaSitio/>
                </div>
                <div className="column left align-left width-33">
                    <PreguntasFrecuentes/>
                </div>
                <div className="column left align-left width-33">
                    <Newsletter/>
                </div>
            </div>
        </div>
    )
}

export default Footer;