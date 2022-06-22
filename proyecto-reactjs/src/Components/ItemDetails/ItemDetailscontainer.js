import ItemDetails from './ItemDetails';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import db from '../../Utils/firebaseConfig';
import { doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});
    const {id} = useParams();

    useEffect (()=>{
        getProduct()
        .then ((data)=>{
            setProduct(data)
        })
    }, [id])

    const getProduct = async() => {
        const docRef = doc(db, "jeweler", id)
        const docSnaptshop = await getDoc(docRef)
        let product = docSnaptshop.data()
        product.id = docSnaptshop.id
        return product
    }

    return (
        <ItemDetails data={product}/>
    );
};

export default ItemDetailContainer;