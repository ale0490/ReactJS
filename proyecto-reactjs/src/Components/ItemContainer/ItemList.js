import Item from "../Item/Item";
import {Grid} from '@mui/material';

const ItemList = ({data}) =>{
    return (
        <Grid container spacing={1}>
            {data.map( ({title, price, image, id}) => {
                return(
                    <Grid item md={2} key={id}>
                        <Item title={title} price={price} image={image}/>
                    </Grid>
                    )
                })
            }
        </Grid>
    );
};

export default ItemList;