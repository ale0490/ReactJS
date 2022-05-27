import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import "./CardItem.css";

const CardItem = ({image, title, price}) => {
  
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
          <img src={image} className="imagen-card"></img>
          <h3>{title}</h3>
          <p>$ {price}</p>
      </Card>
    </Box>
  );
};
export default CardItem;