//React
import { useContext, useState } from "react";
import { Link } from 'react-router-dom';
//Material UI
import DeleteIcon from '@mui/icons-material/Delete';
//Propio
import CartContext from "../Context/CartContext";
import Modal from '../Components/Modal/Modal'
import FormValidation from "../Components/FormValidation/FormValidation";
import "./Styles.css";

const Cart = () =>{

    const { cartList, totalPrice, cleanCart, deleteProduct } = useContext(CartContext)
    const [showModal, setShowModal] = useState(false)   

    return(
        <div className="cart-view-container"> 
            <h2 className="h2-cart"> Carrito </h2>
            {cartList.length === 0 ? 
                (<div className="column width left">
                    <div className="cart-empy">
                        <p className="text-empy">Aun no hay productos en tu carrito</p>
                        <Link to="/" className="button-empy decoration-none" > ← Agregalos </Link>
                    </div>
                </div>) 
                :
                (<><div className="cart-product">
                    <div className="width-1 column left" >
                        {cartList.map( (item) => {
                            return(
                                <div className='cart-container' key={item.id}>
                                    <div className="width-2 column left">
                                            <img className='cart-image' src={`${item.image}`}  />
                                    </div>
                                    <div className="width-1 column left">
                                            <h3 className="h3-cart">
                                                <span>{item.title}</span>
                                            </h3>
                                            <p className="p-cart"> Tamaño: 
                                                <span className="span"> tamaño </span>
                                            </p>
                                            <p className="p-cart"> Precio: 
                                                <span className="span"> ${item.price} </span>
                                            </p>
                                            <p className="p-cart"> Cantidad: 
                                                <span className="span"> {item.cantidad} </span>
                                            </p>
                                            <p className="p-cart">Total: 
                                                <span className="span"> ${item.price*item.cantidad} </span>
                                            </p>
                                            <button className='button-delete' onClick ={()=>{deleteProduct(item)}}>  
                                                <DeleteIcon/> 
                                            </button>
                                    </div>
                                </div>
                            )
                        })}
                        <div className="container-vaciar">
                            <div className="vaciar">
                                <button className="btn-vaciar" onClick ={()=>{cleanCart()}}>  
                                    <img src="./remove-cart.png"/>
                                </button>
                                <p className="p-cart right m0"> Vaciar </p>
                            </div>
                        </div>
                    </div>
                    <div className="width-2 column left">
                        <div>
                            <div className="total">
                                <p className='p-total'>
                                    <span className="right ">$ {totalPrice}</span>
                                    <span>Total</span>
                                </p>
                                <button className='button-cart button-completar' onClick={() => setShowModal(true)}> Completar Compra 
                                </button>
                                <img className="pagos-cart" src="./pago.webp"/>
                                <button className='button-cart button-seguir'> 
                                    <Link className="decoration-none seguir-comprando" to="/"> Seguir Comprando →</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    <Modal 
                        title={'Datos de Facturacion'} 
                        open={showModal} 
                        handleClose={() => setShowModal(false)}>
                        <FormValidation state={setShowModal}/>
                    </Modal>
                </div>
                </>)
            }
        </div>
    )
}

export default Cart;