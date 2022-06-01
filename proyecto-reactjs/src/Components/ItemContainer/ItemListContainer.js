import ItemList from './ItemList';
import {Grid} from '@mui/material';
import { useEffect, useState } from "react";

const ItemListContainer = ({item}) => {

  const getProduct = () =>{
    return new Promise ((resolve, reject) =>{
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
      <ItemList data={product}/>
    </Grid>
  );
};

export default ItemListContainer;