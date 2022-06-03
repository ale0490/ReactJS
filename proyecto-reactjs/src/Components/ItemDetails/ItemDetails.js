import ItemCount from '../ItemCount/ItemCount';
import './ItemDetails.css'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';

const ItemDetails =({data})=>{
    const {title, price, image, image2, image3, image4, image5} = data;

    const [size, setSize] = useState('');

    const handleChange = (event) => {
        setSize(event.target.value );
    };

    return (
        <div className='item-details-container'>
            <h3 className='item-title-details'> {title} </h3>
            <img src={image} className='item-image-details-main'/>
            <div className='item-container-price'>
                <p className='item-details-price'>$ {price} </p>
                <h4 className='item-details-size'>Tamaño</h4>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label"> Tamaño </InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={size} label="Tamaño" onChange={handleChange}>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={11}>11</MenuItem>
                        <MenuItem value={12}>12</MenuItem>
                        <MenuItem value={13}>13</MenuItem>
                    </Select>
                </FormControl>
                <h4 className='item-details-count'> Cantidad </h4>
                <ItemCount></ItemCount>
            </div>
            <div className='item-size'>
                <h4> Descripcion</h4>
                <p> ssssssssssssssssss ssssssssssssssssssss sssssssssssssssssssssssssssssssssssssssssss ssssssssssssssssssssss ssssssssssssssssssss</p>
                <img src='/medidas.webp'/>
            </div>
            <div className='item-image-detail-secondary'>
                <img src={image}/>
                <img src={image2}/>
                <img src={image3}/>
                <img src={image4}/>
                <img src={image5}/>
            </div>        
        </div>
    )
};

export default ItemDetails;
