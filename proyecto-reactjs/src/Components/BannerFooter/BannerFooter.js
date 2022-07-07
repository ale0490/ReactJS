//Propio
import "./bannerFooter.css"

const BannerFooter = () =>{
    
    return(
        <div className="banner">
            <ul>
                <li className="li-footer">
                    <div>
                        <img className="img-footer" src="../footer/envio.png"/>
                        <h3 className="h3-footer">
                            <u>Envío gratis</u>
                        </h3>
                    </div>
                    <p></p>
                    <center>Recibe tu regalo de manera totalmente gratis!</center>
                    <p></p>
                </li>
                <li className="li-footer">
                    <div>
                        <img className="img-footer" src="../footer/seguimiento.png"/>
                        <h3 className="h3-footer">
                            <u>Seguimiento de pedidos</u>
                        </h3>
                    </div>
                    <p></p>
                    <center>No pierdas de vista tu pedido, síguelo cuando quieras.</center>
                    <p></p>
                </li>
                <li className="li-footer">
                    <div>
                        <img className="img-footer" src="../footer/satisfaccion.png"/>
                        <h3 className="h3-footer">
                            <u>100% satisfacción</u>
                        </h3>
                    </div>
                    <p></p>
                    <center>Si no te gustan tus regalos, te reembolsaremos el 100% en 14 días.</center>
                    <p></p>
                </li>
                <li className="li-footer">
                    <div>
                        <img className="img-footer" src="../footer/pago-seguro.png"/>
                        <h3 className="h3-footer">
                            <u>Pago seguro</u>
                        </h3>
                    </div>
                    <p></p>
                    <center>Con la certificación SSL estas protegido en tus compras!</center>
                    <p></p>
                </li>
            </ul>
        </div>
    )
}

export default BannerFooter;

