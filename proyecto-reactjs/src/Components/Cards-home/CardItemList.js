import CardItem from './Card';
import {Grid} from '@mui/material';

const CardItemList = ({data}) => {
  return (
    <Grid container spacing={1}>
      {data.map( ({title, image, id, price}) => {
        if (id<7) {
          return(
            <Grid item md={2} key={id}>
              <CardItem title={title} image={image} price={price}/>
            </Grid>
          )
        }
      })}
    </Grid>
  );
};

export default CardItemList;