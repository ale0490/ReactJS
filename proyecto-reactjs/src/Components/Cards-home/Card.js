import '../Item/Item.css';
import Card from '@mui/material/Card';

const CardItem =({title, image, price, id})=>{
    return (
        <Card variant="outlined" className="card-item">
            <img src={image} className="imagen-item" alt="producto"></img>
            <h3 className="title-item">{title}</h3>
            <p className="price-item">$ {price}</p>
        </Card> 
    )
};

export default CardItem;