import React, { useContext, useState } from 'react'
import {FiShoppingCart} from 'react-icons/fi'
import { Hamburguesa } from '../Hamburguesa/Hamburguesa'
import { Menu } from '../Menu/Menu'
import { NavbarStyle, SwitchContainer } from './NavbarStyles'
import {Switch} from '@mui/material'
import { StyleContextProvider } from '../../Contextos/StylesContext'
import { CartContextProvider } from '../../Contextos/CartContext'
import { CartIconStyle } from '../Cart/CartStyle'
import { Cart } from '../Cart/Cart'
import { CardAlert } from '../CardAlert/CardAlert'

export const NavbarHeader = () => {

  const {isCheck, setIsCheck,isOpenCart,setIsOpenCart} = useContext(StyleContextProvider)
  const {cantidades,isCartLength} = useContext(CartContextProvider)
  return (
    <NavbarStyle>
      <Hamburguesa/>
      <Menu/>
    
      <SwitchContainer>
        <CartIconStyle existingProduct={isCartLength}>
          <FiShoppingCart className='cart__icon' onClick={() => setIsOpenCart(!isOpenCart) }/>
          <span className='cart__counter'>{cantidades}</span>
        </CartIconStyle>
      <small>DarkMode<Switch checked={isCheck} onChange={()=>setIsCheck(!isCheck)}/></small>
      </SwitchContainer>
      <Cart/>
      <CardAlert/>
    </NavbarStyle>
  )
}
