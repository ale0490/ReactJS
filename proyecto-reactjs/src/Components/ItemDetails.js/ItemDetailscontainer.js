import {productDetail} from '../../Utils/anillos';
import ItemDetails from './ItemDetails';
import { useEffect, useState } from 'react';

const ItemDetailContainer = () => {

    const getProduct = () =>{
        return new Promise ((resolve, reject) =>{
            setTimeout(() => {
                resolve(productDetail)
            }, 2000)
        })
    };

    const [product, setProduct] = useState({});

    useEffect (()=>{
        getProduct()
        .then((response)=>{
            setProduct(response)
        })
    }, {});

    return (
        <ItemDetails data={product}/>
    );
};

export default ItemDetailContainer;