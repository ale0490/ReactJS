import Item from '../Item/Item';
import {Grid} from '@mui/material';

const CardItemList = ({data}) => {
  return (
    <Grid container spacing={1}>
      {data.map( ({title, image, id}) => {
        if (id<7) {
          return(
            <Grid item md={2} key={id}>
              <Item title={title} image={image}/>
            </Grid>
          )
        }
      })}
    </Grid>
  );
};

export default CardItemList;