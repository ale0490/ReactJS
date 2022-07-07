//React
import { useEffect, useState } from "react";
//Material UI
import {Grid} from '@mui/material';
//Firebase
import db from '../../Utils/firebaseConfig';
import { collection, getDocs } from "firebase/firestore";
//Propio
import ItemListGral from "./ItemListGral";

const ItemListGralContainer = () => {

  const [products, setProducts] = useState([])
  
  useEffect( () => {
    setProducts([])
    getProducts()
    .then ( (productos)=>{
      setProducts(productos)
    })
  },[])

  const getProducts = async () => {
    const productCollection = collection (db, "jeweler");
    const productSnapshot = await getDocs(productCollection);
    const productList = productSnapshot.docs.map((doc) => {
        let product = doc.data()
        product.id = doc.id
        return product
    })
    return productList
  }

  return (
    <div className="container-card">
      <Grid container>
        <ItemListGral data={products} />
      </Grid>
    </div>
  )
};

export default ItemListGralContainer;