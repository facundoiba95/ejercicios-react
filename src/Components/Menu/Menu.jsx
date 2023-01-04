import React,{useContext} from 'react'
import { StyleContextProvider } from '../../Contextos/StylesContext'
import { ItemStyle, MenuContainerStyle } from './MenuStyles'

export const Menu = () => {
  const {isOpenMenu} = useContext(StyleContextProvider)

  return (
    <MenuContainerStyle clicked={isOpenMenu}>
        <ItemStyle to={'/'}>Home<hr/></ItemStyle>
        <ItemStyle to={'/productos'}>Productos<hr/></ItemStyle>
        <ItemStyle to={'/nosotros'}>Nosotros<hr/></ItemStyle>
        <ItemStyle to={'/contacto'}>Contacto<hr/></ItemStyle>
    </MenuContainerStyle>
  )
}
