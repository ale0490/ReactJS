import { useContext } from "react";
import { Button } from "@mui/material";
import CartContext from "../Context/CartContext";
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import "./Styles.css";

const Cart = () =>{
    const { cartList, totalPrice } = useContext(CartContext)
    return(
        <div className="cart-view-container"> 
        <h1>Carrito </h1>
        {cartList.length === 0 ? (
                    <div className="column width">
                        <div className="cart-empy">
                        <p className="text-empy">Aun no hay productos en tu carrito</p>
                        <Link to="/" className="link button-empy" >Agregalos →</Link>
                        </div>
                    </div>
                    ) :
        <div className='cart-section'>
            <div className="container column" >
                {cartList.map( (item) => {
                    return(
                        <div className='cart-container' key={item.id}>
                            <div className="column">
                                <img className='cart-image' src={`/${item.image}`}  />
                            </div>
                            <div className="container column">
                                    <h2>{item.title}</h2>
                                    <span>$ {item.price}</span>
                                    <p>Cantidad</p>
                                    <p>Total: $ price*cant</p>
                            </div>
                            <div className='cart-button-delete'>
                                <button> <DeleteIcon /></button>
                            </div>
                        </div>
                    )
                })} 
            </div>
            <div>
                <div className='cart-total'>
                    <span className="right">$ {totalPrice}</span>
                    <p>Total</p>
                </div>
                <div>
                    <Button className='btn-custom'>Completar Compra</Button>
                </div>
                <div>imagenes tarjetas</div>
                <div>
                    <Button className='btn-custom'>Seguir Comprando</Button>
                </div>
            </div>
        </div>
        }
    </div>
    )
}

export default Cart;