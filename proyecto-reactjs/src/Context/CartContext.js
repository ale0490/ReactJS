import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ( {children} ) => {

    const [ cartList, setCartList ] = useState([])
    const [ totalPrice, setTotalPrice ] = useState(0)
    
    const addProductToCart = (product) =>{
        let isInCart = cartList.find(cartItem => cartItem.id === product.id)
        if(!isInCart) {
            setTotalPrice(totalPrice + product.price)
            return setCartList(cartList => [...cartList, product])
        }
    }

    const deleteProduct = (product) => {
        setCartList(cartList.filter( (cartProduct) => cartProduct.id !== product.id) )
    }

    const cleanCart = () => {
        setTotalPrice(0)
        setCartList([])
    }

    const data = {
        cartList,
        addProductToCart,
        totalPrice,
        cleanCart,
        deleteProduct
    }

    return (
        <CartContext.Provider value={data}>
             {console.log(cartList)}
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;
export { CartProvider };