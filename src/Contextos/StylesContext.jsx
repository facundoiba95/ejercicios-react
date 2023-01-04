import React, { createContext, useState } from 'react'

export const StyleContextProvider = createContext()

export const StylesContext = ({children}) => {
    const [isCheck, setIsCheck] = useState(false)
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const [isOpenCart, setIsOpenCart] = useState(false)


  return (
    <StyleContextProvider.Provider value={{ isCheck,setIsCheck,isOpenMenu,setIsOpenMenu,isOpenCart, setIsOpenCart}}>
      {children}
    </StyleContextProvider.Provider>
  )
}