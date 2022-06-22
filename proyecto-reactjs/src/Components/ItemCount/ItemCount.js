import "./ItemCount.css";
import Button from '@mui/material/Button';
import CartContext from '../../Context/CartContext';
import { useContext } from "react";

const ItemCount = ({count, setCount, state, data}) => {

    //Contador
    const less = () =>{
        if (count>1){
            setCount(count - 1)
        }
    };
    const plus = () =>{
        setCount(count + 1)
    };

    //State show
    const stateTrue = () =>{
        return(
            state(true)
        )
    }

    //Context 
    const { addProductToCart } = useContext( CartContext )
    
    const add = () =>{
        return(
            addProductToCart(data, count)
        )
    }

    //onClick   
    const addCart = () =>{
        add()
        stateTrue()
        {console.log (data, count)}
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