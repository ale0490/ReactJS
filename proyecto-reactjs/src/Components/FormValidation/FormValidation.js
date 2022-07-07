//react
import React from 'react';
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"
//material UI
import TextField from '@mui/material/TextField';
//firebase
import { addDoc, collection } from 'firebase/firestore'
import db from '../../Utils/firebaseConfig'
//propios
import CartContext from "../../Context/CartContext";
import "./form.css"

const FormValidation =({ state })=>{

    const { register, handleSubmit, formState: {errors} } = useForm ();
    const [formValue, setFormValue] = useState({name: '', phone: '', email: ''})
    const { cartList, cleanCart } = useContext(CartContext)
    const [success, setSuccess] = useState()
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormValue({...formValue, [e.target.name]: e.target.value})
    }

    const saveOrder = () => {
        setOrder({...order, buyer: formValue})
        saveData({...order, buyer: formValue})
    }
    const [order, setOrder] = useState({
        buyer: {},
        items: cartList.map( item => {
            return {
                id: item.id,
                title: item.title,
                price: item.price,
                cantidad: item.cantidad
            }
        } ),
    })
    
    const saveData = async (newOrder) => {
        const orderFirebase = collection(db, 'purchase-orders')
        const orderDoc = await addDoc(orderFirebase, newOrder)
        setSuccess(orderDoc.id)
    }

    const finCompra =()=>{
        cleanCart()
        navigate('/')
        state(false)
    }
    return (
        <>
         {success ? 
            (<div className='success'>
                <p className='txt'>Orden generada con exito!</p>
                <img src='./check.png' className='img-check'/>
                <p className='txt'>Codigo de orden:  
                    <span className='orden'> {success} </span>
                </p>
                <p className='txt'>Por favor revise su correo.</p>
                <button onClick={ finCompra } className="btn-success">Aceptar</button>
            </div>) :
            (<form className="form-contact" onSubmit={handleSubmit(saveOrder)}>
                <TextField 
                    id="outlined-basic"
                    name="name" 
                    label="Nombre y Apellido" 
                    variant="outlined" 
                    value={formValue.name}
                    type="text" 
                    {...register ("name",{required: true })}
                    onChange={handleChange}/>
                    
                {errors.name && <small>*Campo obligatorio.</small>}
                <TextField 
                    id="outlined-basic"
                    name="phone" 
                    label="Telefono" 
                    variant="outlined" 
                    value={formValue.phone}
                    type="number" 
                    {...register ("phone",
                    {required:true, minLength:10 })}
                    onChange={handleChange}/>
                {errors.phone?.type === 'required' && <small>*Campo obligatorio.</small>}
                {errors.phone?.type === 'minLength' && <small>Formato incorrecto, ej. 1101234567</small>}
                <TextField 
                    name="email"
                    label="Mail" 
                    value={formValue.email}
                    variant="outlined"
                    type="text" 
                    {...register ("email",
                    {required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i })} 
                    onChange={handleChange}/>
                {errors.email?.type === 'required' && <small>*Campo obligatorio.</small>}
                {errors.email?.type === 'pattern' && <small>*Email invalido. example@example.com </small>}
                <button type="submit" className='btn-form'>Enviar</button>
            </form>) 
            }
        </>
    )
}

export default FormValidation;