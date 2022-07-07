//React
import { Link } from 'react-router-dom';
//Material UI
import Card from '@mui/material/Card';
//Propio
import '../Item/Item.css';

const CardItem =({ title, image, price, category })=>{

    return (
        <Link to={`/Cat/${category}`} className="decoration-none">
            <Card variant="outlined" className="card-item">
                <img src={image} className="imagen-item" alt="producto"></img>
                <h3 className="title-item">{title}</h3>
                <p className="price-item">$ {price}</p>
            </Card> 
        </Link>
    )
};

export default CardItem;