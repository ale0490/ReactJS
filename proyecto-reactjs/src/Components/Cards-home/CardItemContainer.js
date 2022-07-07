//React
import { useEffect, useState } from "react";
//Materia UI
import {Grid} from '@mui/material';
//Propio
import CardItemList from './CardItemList';

const ItemListContainer = ({item}) => {

  const getProduct = () =>{
    return new Promise ((resolve) =>{
      resolve(item)
    })
  };

  const [product, setProduct] = useState([]);

  useEffect (()=>{
      getProduct()
      .then((response)=>{
          setProduct(response)
      })
  }, []);

  return (
    <Grid container>
      <CardItemList data={product}/>
    </Grid>
  );
};

export default ItemListContainer;