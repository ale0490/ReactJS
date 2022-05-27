import {Grid} from '@mui/material';
import CardItem from '../Card/CardItem';
import productos from '../../Utils/productos';

const CardList = () => {
  return (
    <Grid container>
      {
        productos.map( ({title, price, image, id}) => {
          return(
            <Grid item md={2} key={id}>
              <CardItem title={title} price={price} image={image}/>
            </Grid>
          )
        })
      }
    </Grid>
  )
}

export default CardList;