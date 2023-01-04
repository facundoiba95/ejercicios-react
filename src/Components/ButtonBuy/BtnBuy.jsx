import React, { useContext } from 'react'
import { DataContext } from '../../Data/Data'
import { BtnBuyStyle } from './BtnBuyStyle'

export const BtnBuy = (valor) => {
  return (
    <BtnBuyStyle {... valor}>Comprar</BtnBuyStyle>
  )
}
