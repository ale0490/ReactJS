import './CartWidget.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState, useContext } from 'react';
import Menu from '@mui/material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
import CartContext from '../../Context/CartContext'
import { Link } from 'react-router-dom';

const CardWidget = () => {

    const { cartList } = useContext(CartContext);

    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <ShoppingCartIcon color={'primary'} aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}/>
            <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{'aria-labelledby':'basic-button'}}>
                <div className="cart-container">
                    {cartList.length === 0 && (
                    <>
                        <p>No hay productos</p>
                        <Link to="/" >Volver al home</Link>
                    </>
                    )}
                    {cartList.map( (item) => {
                        return(
                            <div className='cart-container-item' key={item.id}>
                                <div>
                                    <img className='cart-image' src={`/${item.image}`}  />
                                </div>
                                <div className='cart-details'>
                                    <p>{item.title}</p>
                                    <span>$ {item.price}</span>
                                </div>
                                <div>
                                    <p>Cantidad</p>
                                </div>
                                <div className='cart-button-delete'>
                                    <button >
                                        <DeleteIcon />
                                    </button>
                                </div>
                            </div>
                        )
                    })} 
                </div>
            </Menu>
        </div>
    )
}
export default CardWidget