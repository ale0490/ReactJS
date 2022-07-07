//React
import { useContext,useState } from "react";
//Material UI
import Button from '@mui/material/Button';
//Propio
import CartContext from '../../Context/CartContext';
import "./ItemCount.css";

const ItemCount = ({state, data}) => {

    const [count, setCount] = useState(1);

    const less = () =>{
        if (count>1){
            setCount(count - 1)
        }
    };
    const plus = () =>{
        setCount(count + 1)
    };

    const stateTrue = () =>{
        return(
            state(true)
        )
    }

    const { addProductToCart } = useContext( CartContext )
    
    const add = () =>{
        return(
            addProductToCart({...data, cantidad: count})
        )
    }

    const addCart = () =>{
        add()
        stateTrue()
        {console.log(data)}
    }

    return (
        <>
        <h4 className='item-details-count'> Cantidad </h4>
        <div className="item-count-container">
            <div className="item-count">
                <Button onClick={less} className="button-count"> - </Button>
                <p className="count">{count}</p>
                <Button onClick={plus} className="button-count"> + </Button>
            </div>
            <Button className="add-item" onClick={addCart}> Agregar </Button>
        </div>
        </>
        
        );
        
};

export default ItemCount;