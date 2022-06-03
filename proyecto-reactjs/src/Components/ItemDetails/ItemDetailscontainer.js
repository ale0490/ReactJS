import ItemDetails from './ItemDetails';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


const ItemDetailContainer = ({data}) => {

    const [product, setProduct] = useState({});
    const {id} = useParams();
    const navigate = useNavigate()

    useEffect (()=>{
        if(productFilter === undefined){
            navigate('/notFound')
        }else {
            setProduct(productFilter)
        }
    }, [id])

    const productFilter = data.find( (producto) => {
        return producto.id == id
    })

    return (
        <ItemDetails data={product}/>
    );
};

export default ItemDetailContainer;