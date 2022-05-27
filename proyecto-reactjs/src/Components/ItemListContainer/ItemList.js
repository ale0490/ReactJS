import {Grid} from '@mui/material';
import { useEffect, useState } from "react";
import Item from "../Item/Item";
import { producto } from '../../Utils/productos';

const ItemList = () =>{

    const getProduct = () =>{
        return new Promise ((resolve, reject) =>{
            setTimeout(()=>{
                resolve(producto)
            }, 2000)
        })
    };

    const [product, setProduct] = useState({});

    useEffect (()=>{
        getProduct()
        .then((response)=>{
            setProduct(response)
        })
    }, []);

    return (
        <Grid container>
            <Item data={product}></Item>
        </Grid>
    );
};

export default ItemList;