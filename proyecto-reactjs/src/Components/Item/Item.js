import "./Item.css"
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';

const Item =({title, image, price, id, category})=>{

    return (
        <Card variant="outlined" className="card-item">
            <img src={image} className="imagen-item" alt="producto"></img>
            <h3 className="title-item">{title}</h3>
            <p className="price-item">$ {price}</p>
            <Link to={`/${category}/${id}`} className="link"> Detalle </Link>
        </Card> 
    )
};

export default Item;