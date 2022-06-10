import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ( {children} ) => {

    const [ cartList, setCartList ] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    
    const addProductToCart = (product) =>{
        let isInCart = cartList.find(cartItem => cartItem.id === product.id)
        if(!isInCart) {
            console.log("se agrego el producto:", product)
            setTotalPrice(totalPrice + product.price)
            return setCartList(cartList => [...cartList, product])
        }
    }

    const data = {
        cartList,
        addProductToCart,
        totalPrice
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export { CartProvider }