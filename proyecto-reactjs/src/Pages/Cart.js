//react
import { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
//material
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
//firebase
import { addDoc, collection } from 'firebase/firestore'
import db from '../Utils/firebaseConfig'
//propio
import CartContext from "../Context/CartContext";
import Modal from '../Components/Modal/Modal'
import "./Styles.css";

const Cart = () =>{

    const { cartList, totalPrice, cleanCart, count } = useContext(CartContext)
    const [showModal, setShowModal] = useState(false)
    const [formValue, setFormValue] = useState({name: '', phone: '', email: ''})
    const [success, setSuccess] = useState()
    const navigate = useNavigate()

    const [order, setOrder] = useState({
        buyer: {},
        items: cartList.map( item => {
            return {
                id: item.id,
                title: item.title,
                price: item.price,
            }
        } ),
        total: totalPrice
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        setOrder({...order, buyer: formValue})
        saveData({...order, buyer: formValue})
    }

    const handleChange = (e) => {
        setFormValue({...formValue, [e.target.name]: e.target.value})
    }

    const saveData = async (newOrder) => {
        const orderFirebase = collection(db, 'purchase-orders')
        const orderDoc = await addDoc(orderFirebase, newOrder)
        setSuccess(orderDoc.id)
        cleanCart()
    }
    
    const finishOrder = () => {
        navigate('/')
    }

    return(
        <div className="cart-view-container"> 
            <h1>Carrito </h1>
            {cartList.length === 0 ? 
                (<div className="column width">
                    <div className="cart-empy">
                        <p className="text-empy">Aun no hay productos en tu carrito</p>
                        <Link to="/" className="link button-empy" >Agregalos →</Link>
                    </div>
                </div>) 
                :
                    (<div className='cart-section'>
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
                                                <span>{count}</span>
                                                <p>Total: $ {item.price}</p>
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
                                <Button className='btn-custom' onClick={() => setShowModal(true)}> Completar Compra </Button>
                            </div>
                            <div>imagenes tarjetas</div>
                            <div>
                                <Button className='btn-custom'> 
                                    <Link to="/"> Seguir Comprando </Link>
                                </Button>
                            </div>
                        </div>
                    
                    <Modal 
                        title={success ? 'Compra exitosa' : 'Datos de Facturacion'} 
                        open={showModal} 
                        handleClose={() => setShowModal(false)}>
                        {success ? 
                            (<div>
                                Orden generada con exito!
                                Numero de orden: {success}
                                <button onClick={finishOrder}>Aceptar</button>
                            </div>) 
                            : 
                            (<form 
                                className="form-contact" 
                                onSubmit={handleSubmit}>
                                <TextField 
                                    id="outlined-basic" 
                                    name="name" 
                                    label="Nombre y Apellido" 
                                    variant="outlined" 
                                    value={formValue.name} 
                                    onChange={handleChange}/>
                                <TextField 
                                    id="outlined-basic" 
                                    name="phone" 
                                    label="Telefono" 
                                    variant="outlined" 
                                    value={formValue.phone}
                                    onChange={handleChange}/>
                                <TextField 
                                    id="outlined-basic" 
                                    name="email"
                                    label="Mail" 
                                    value={formValue.email}
                                    variant="outlined" 
                                    onChange={handleChange}/>
                                <button type="submit">Enviar</button>
                            </form>)
                        }
                    </Modal>
                </div>)
            }
        </div>
    )
}

export default Cart;