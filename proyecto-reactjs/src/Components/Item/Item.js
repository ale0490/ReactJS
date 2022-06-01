import "./Item.css"
import Card from '@mui/material/Card';

const Item =({title, image, price})=>{

    return (
        <Card variant="outlined">
            <img src={image} className="imagen-item"></img>
            <h3>{title}</h3>
        </Card>
    )
};

export default Item;