import { useState } from "react";
import { createContext } from "react";

const CartContext = createContext ([])

export default function CartContextProvider ({children}){
    const [myCart, setMyCart] = useState 
    return <CartContextProvider
}