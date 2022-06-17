import ItemList from './ItemList';
import {Grid} from '@mui/material';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import db from '../../Utils/firebaseConfig';
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  const { category } = useParams()

  useEffect( () => {
    setProducts([])
    getProducts()
    .then( (productos) => {
      category ?  filterFirebase() : setProducts(productos)
    })
  }, [category])

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

  const filterFirebase = async () => {
    const productRef = collection(db, 'jeweler')
    const queryResult = query(productRef, where("category", "==", category));
    const querySnapshot = await getDocs(queryResult);
    const productList = querySnapshot.docs.map((doc) => {
        let product = doc.data()
        product.id = doc.id
        return product
    })
    return setProducts(productList)
  }

  return (
    <Grid container>
       <ItemList data={products}/>
    </Grid>
  )
};

export default ItemListContainer;