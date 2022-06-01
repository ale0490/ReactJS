import CardItemList from './CardItemList';
import {Grid} from '@mui/material';
import { useEffect, useState } from "react";

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