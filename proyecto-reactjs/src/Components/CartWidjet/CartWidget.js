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
                <div className="cartwidget-container">
                    {cartList.length === 0 && (
                    <>
                        <p>No hay productos</p>
                        <Link to="/" >Volver al home</Link>
                    </>
                    )}
                    {cartList.map( (item) => {
                        return(
                            <div className='cartwidget-container-item' key={item.id}>
                                <div>
                                    <img className='cartwidget-image' src={`/${item.image}`}  />
                                </div>
                                <div className='cartwidget-details'>
                                    <p>{item.title}</p>
                                    <span>$ {item.price}</span>
                                </div>
                                <div>
                                    <p>Cantidad</p>
                                </div>
                                <div className='cartwidget-button-delete'>
                                    <button >
                                        <DeleteIcon />
                                    </button>
                                </div>
                            </div>
                        )
                    })} 
                    <button>
                        <Link to="/Cart">Continuar</Link>
                    </button>
                </div>
            </Menu>
        </div>
    )
}
export default CardWidget