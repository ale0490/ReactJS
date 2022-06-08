import "./ItemCount.css";
import Button from '@mui/material/Button';

const ItemCount = ({count, setCount, state}) => {

    const less = () =>{
        if (count>1){
            setCount(count - 1)
        }
    };

    const plus = () =>{
        setCount(count + 1)
    };

    return (
        <>
        <h4 className='item-details-count'> Cantidad </h4>
        <div className="item-count-container">
            <div className="item-count">
                <Button onClick={less} className="button-count"> - </Button>
                <p className="count">{count}</p>
                <Button onClick={plus} className="button-count"> + </Button>
            </div>
            <Button className="add-item" onClick={() => state(true)}> Agregar </Button>
        </div>
        </>
        );
};

export default ItemCount;