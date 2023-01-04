import React, { useContext } from 'react'
import {AiOutlineClose, AiOutlineCloseCircle} from 'react-icons/ai'
import { GrFormNext } from 'react-icons/gr'
import { CartContextProvider } from '../../Contextos/CartContext'
import { StyleContextProvider } from '../../Contextos/StylesContext'
import { BtnRemoveAllStyle, CartContainerStyle, CartItemStyle, CartListStyle, CartQuantityStyle, CartStyle, QuantityMinus, QuantityMore } from './CartStyle'


export const Cart = () => {
    const {isOpenCart,setIsOpenCart,isCheck} = useContext(StyleContextProvider)
    const {cart,removeProduct,BtnMinus,BtnPlus,removeAllProduct} = useContext(CartContextProvider);

    const CartItem = (array) => {
        return array.map(products => (     
            <CartItemStyle key={products.id} checked={isCheck}>
                <AiOutlineCloseCircle className='removeProduct__icon'  onClick={(e)=> removeProduct(e)} data-id={products.id}/>
                <div>
                   <h2>{products.title}</h2>
                   <h2>{products.price}</h2>
                   <CartQuantityStyle checked={isCheck}>
                    <QuantityMinus data-id={products.id} onClick={(e) => BtnMinus(e)} checked={isCheck}/>
                    <h3>{products.quantity}</h3>
                    <QuantityMore data-id={products.id} onClick={(e)=> BtnPlus(e)} checked={isCheck}/>
                   </CartQuantityStyle>
                </div>
                <img src={products.images} alt={products.title} loading="lazy"/>
            </CartItemStyle>
        )
        )
    }

    const CartItemEmpty = () => {
        return <h2>You cart is empty!</h2>
    }


  return (
    <CartContainerStyle>
        <CartStyle isOpenCart={isOpenCart} checked={isCheck}>
        <AiOutlineClose onClick={() => setIsOpenCart(!isOpenCart)} className='closeCart__icon'/>
        <CartListStyle isOpenCart={isOpenCart}>
            {cart.length ? CartItem(cart) : <CartItemEmpty/>}
        </CartListStyle>
        <BtnRemoveAllStyle existingProduct={cart.length} isOpenCart={isOpenCart} onClick={()=> removeAllProduct()}>Borrar tareas</BtnRemoveAllStyle>
        </CartStyle>
    </CartContainerStyle>
  )
}
