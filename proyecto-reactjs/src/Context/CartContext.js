//React
import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ( {children} ) => {

    const [ cartList, setCartList ] = useState(JSON.parse(localStorage.getItem('carrito')) || [])
    const [ cartCount, setCartCount] = useState(JSON.parse(localStorage.getItem('count')) || (0))
    const [ totalPrice, setTotalPrice ] = useState(JSON.parse(localStorage.getItem('total')) || (0))
    
    //Agrega el producto y lo compara para no duplicarlo
    //Guarda en localStorage 
    //"carrito" el carrito 
    //"total" el total de la compra 
    //"count" el count para el icon del navbar
    const addProductToCart = (product) =>{
        let isInCart = cartList.find(cartItem => cartItem.id === product.id)
        if(!isInCart) {
            setTotalPrice(totalPrice + product.price*product.cantidad)
            setCartCount(cartCount + product.cantidad)
            localStorage.setItem('carrito', JSON.stringify([...cartList, product]))
            localStorage.setItem('total', JSON.stringify(totalPrice + product.price*product.cantidad))
            localStorage.setItem('count', JSON.stringify(cartCount + product.cantidad))
            return setCartList(cartList => [...cartList, product])
        }
    }

    //Borrar el producto del carrtio y del localStorage
    const deleteProduct = (product) => {
        setCartList (cartList.filter( (cartProduct) => cartProduct.id !== product.id) )
        setTotalPrice(totalPrice - product.price*product.cantidad)
        setCartCount(cartCount - product.cantidad)
        localStorage.setItem('carrito', JSON.stringify(cartList.filter( (cartProduct) => cartProduct.id !== product.id) ))
        localStorage.setItem('total', JSON.stringify(totalPrice - product.price*product.cantidad))
        localStorage.setItem('count', JSON.stringify(cartCount - product.cantidad))
    }

    //Limpiar el carrito y local
    const cleanCart = () => {
        setTotalPrice(0)
        setCartList([])
        setCartCount(0)
        localStorage.clear()
    }

    const data = {
        cartList,
        addProductToCart,
        totalPrice,
        cartCount,
        cleanCart,
        deleteProduct
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;
export { CartProvider };