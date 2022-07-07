//React
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
//Material UI
import {Grid} from '@mui/material';
//Firebase
import db from '../../Utils/firebaseConfig';
import { collection, getDocs, query, where } from "firebase/firestore";
//Propio
import Item from "../Item/Item";

const ItemListGral = ({data}) =>{

    const [products, setProducts] = useState([])
    const [productsListItem, setProductsListItem] = useState([])
    const { Collection } = useParams()

    useEffect( () => {
        setProducts([data])
        setProductsListItem([])
        searchCollection()
    }, [Collection]);

    const searchCollection = (productos) =>{
        Collection ?  filterFirebase() : setProducts(productos)
        };

    const filterFirebase = async () => {
        const productRef = collection(db, 'jeweler')
        const queryResult = query(productRef, where("Collection", "==", Collection))
        const querySnapshot = await getDocs(queryResult)
        const productList = querySnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
            })
        return setProductsListItem(productList);
    }

    {console.log(productsListItem)}
    {console.log(Collection)}

    return (
        <Grid container spacing={1}>
            {productsListItem.map( ({title, price, image, id, category}) => {
                return(
                    <Grid item md={2} key={id}>
                        <Item title={title} price={price} image={image} id={id} category={category}/>
                    </Grid>
                    )
                })
            }
        </Grid>
    );
};


export default ItemListGral;