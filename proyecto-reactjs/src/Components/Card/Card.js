import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import ItemCount from '../ItemCount/ItemCount';

const CardItem = ({image, title, price}) => {
  
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" className="card">
          <img src={image}></img>
          <h3>{title}</h3>
          <p>$ {price}</p>
          <ItemCount></ItemCount>
      </Card>
    </Box>
  );
};
export default CardItem;