import React from 'react'
import { BtnCardAlert, CardAlertContainerStyle, CardAlertModalStyle } from './CardAlertStyles'

export const CardAlert = () => {
  return (
    <CardAlertContainerStyle>
    <CardAlertModalStyle>
        <h2>Desea eliminar este producto?</h2>    
        <div>
          <BtnCardAlert>Aceptar</BtnCardAlert>
          <BtnCardAlert>Cancelar</BtnCardAlert>
        </div>
     
    </CardAlertModalStyle>
    </CardAlertContainerStyle>
  )
}
