import "./ItemCount.css";
import { useState } from "react";
import Button from '@mui/material/Button';

const ItemCount = () => {

    const [count, setCount] = useState(1);

    const less = () =>{
        if (count>0){
            setCount(count - 1)
        }
    };
    const plus = () =>{
        setCount(count + 1)
    };

    return (
        <div className="item-count">
        <Button onClick={less} className="button-count">-</Button>
        <p className="count">{count}</p>
        <Button onClick={plus} className="button-count">+</Button>
        </div>
        );
};

export default ItemCount;