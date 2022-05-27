import Card from '@mui/material/Card';
import ItemCount from '../ItemCount/ItemCount';

const Item =({data})=>{

    return (
        <Card variant="outlined">
            <img src={data.image}></img>
            <h3>{data.title}</h3>
            <p>$ {data.price}</p>
            <ItemCount></ItemCount>
        </Card>
    )
};

export default Item;