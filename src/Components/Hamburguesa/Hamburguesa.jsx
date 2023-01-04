import React, { useContext } from 'react'
import { StyleContextProvider } from '../../Contextos/StylesContext'
import { MenuBarsContainerStyle, MenuBarsStyle } from './HamburguesaStyle'

export const Hamburguesa = () => {
const {isOpenMenu,setIsOpenMenu} = useContext(StyleContextProvider)
  return (
    <MenuBarsContainerStyle onClick={()=> setIsOpenMenu(!isOpenMenu)}>
      <MenuBarsStyle clicked={isOpenMenu}/>
    </MenuBarsContainerStyle>
  )
}
