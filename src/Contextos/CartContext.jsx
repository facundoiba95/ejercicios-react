import React, { createContext, useContext, useEffect, useState } from 'react'
import { GrWifiNone } from 'react-icons/gr';
import { DataContext } from '../Data/Data';

export const CartContextProvider = createContext();

export const CartContext = ({children}) => {
   const {targetProduct} = useContext(DataContext);
   const [cart, setCart] = useState([]);
   const [cantidades, setCantidades] = useState(0)
   const [isCartLength, setIsCart] = useState(false)


   const isCart = () => cart.length ? setIsCart(true) : setIsCart(false)

   const isExisting = array => {
    return cart.find(product => product.id == array.id)
   }

   const addProductUnity = (array) => {
   setCart([... cart.map(product => {
    return product.id === array.id 
    ? {... product, quantity: product.quantity +1}
    : product;
   })])
   }

    const addProduct = (e) => {
      e.preventDefault();

      isExisting(targetProduct(e))
       ? addProductUnity(targetProduct(e))
       : setCart([... cart, {... targetProduct(e),quantity:1}])
       console.log(cart)
   }

    const removeProduct = (e) => {
    const valor = e.target.dataset.id;
    setCart([...cart.filter(product => product.id !== valor)])
    }

    const removeProductUnit = (e) => {
      const valueID = e.target.dataset.id;

    setCart([... cart.map(product => {
      return product.id === valueID 
      ? {... product, quantity: product.quantity - 1}
      : product;
     }) ]) 
    }

    const BtnMinus = (e) => {
      const valueID = e.target.dataset.id;

      cart.forEach(product => {
        if(product.id === valueID){
          if(product.quantity === 1){
            window.confirm(`Desea eliminar el producto "${product.title}"?`)
            ? removeProduct(e)
            : product.quantity = 1
          } else {
          removeProductUnit(e);
          }
        }
      })
    }

    const BtnPlus = e => {
      const valueID = e.target.dataset.id;

      setCart([... cart.map(product => {
        return product.id === valueID
        ? {... product, quantity: product.quantity +1}
        : product;
       })])
     }
  
    const removeAllProduct = () => {
     window.confirm('Desea vaciar la carta ?')
     ?  setCart([])
     :  setCart(cart)
    }



useEffect(()=> {
  isCart()
  setCantidades(cart.reduce((acc, cur) => acc + cur.quantity, 0))
},[cart])

  return (
    <CartContextProvider.Provider value={{addProduct,BtnMinus,BtnPlus,isCartLength,cantidades,cart,removeProduct,removeAllProduct}}>
        {children}
    </CartContextProvider.Provider>
    )
}
