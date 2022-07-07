//Material UI
import {Grid} from '@mui/material';
//Propio
import CardItem from './CardItem';

const CardItemList = ({data}) => {
  
  return (
    <Grid container spacing={1}>
      {data.map( ({title, image, id, price, category}) => {
        if (id<7) {
          return(
            <Grid item md={2} key={id}>
              <CardItem title={title} image={image} price={price} category={category}/>
            </Grid>
          )
        }
      })}
    </Grid>
  );
};

export default CardItemList;