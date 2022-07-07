//React 
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
//Material UI
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//Propio
import CartContext from '../../Context/CartContext';
import './CartWidget.css';

const CardWidget = () => {

    const { cartList, cartCount, deleteProduct } = useContext(CartContext);

    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    //agregado
    const [state, setState] = useState({right: false });

    const toggleDrawer = (anchor, open) => () => {
    setState({ ...state, [anchor]: open });
    }

    const anchor = "right";

    const list = (anchor) => (
        <Box 
          sx={{ width: 500, height: 300}} 
          role="presentation" 
          onClick={toggleDrawer(anchor, false)}>
            <div className="cartwidget-container">
                <h2 className="h2-cartwidget"> Tus productos </h2>
                    {cartList.length === 0 ? 
                        (<div className="empy-cart">
                            <p className="text-empy"> Aun no hay productos en tu carrito </p>
                            <Link to="/" className="decoration-none button-empy"> ← Volver al home</Link>
                        </div>)
                    :
                    (<>{cartList.map( (item) => {  
                        return(
                            <div className='cartwidget-container-item' key={item.id}>
                                <div className='container-img-cartwidget'>
                                    <img className='cartwidget-image' src={`/${item.image}`}  />
                                </div>
                                <div className='cartwidget-details'>
                                    <p className='p-cart'>{item.title}</p>
                                    <div className='cartwidget-container-price'>
                                            <p className='p-cart'> Precio Unid: 
                                                <span className="span"> $ {item.price} </span>
                                            </p>
                                            <p className='p-cart'> Cantidad: 
                                                <span className="span"> {item.cantidad} </span> 
                                            </p>
                                    </div>
                                </div>
                                <div className='cartwidget-button-delete'>
                                    <button onClick ={()=>{deleteProduct(item)}}>
                                        <DeleteIcon />
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                    <button className="btn-ir-carrito" onClick={handleClose}>
                        <Link to="/Cart" className="decoration-none button-empy">
                            Ir al carrito →
                        </Link>
                    </button></>)}
                </div>
        </Box>
    )

    return (
        <div className='container-cart-icon'>
            <ShoppingCartIcon color={'primary'} onClick={toggleDrawer(anchor, true)}/>

            <span>{cartCount}</span>

            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>

                {list(anchor)}

            </Drawer>

                {/* DE ACA PARA ABJO */}
                
        </div>
    )
}
export default CardWidget