import { useContext } from 'react';
import './App.css';
import { StyleContextProvider } from './Contextos/StylesContext';

import GlobalStyle from './GlobalStyles/GlobalStyles';
import { Contacto } from './Pages/Contacto';
import { Home } from './Pages/Home';
import { Nosotros } from './Pages/Nosotros';
import { Productos } from './Pages/Productos';
import { Rutas } from './Routes/Rutas';

function App() {
const {isCheck} = useContext(StyleContextProvider)

return (
    <>
    <GlobalStyle checked={isCheck} />
    <Rutas>
      <Home/>
      <Contacto/>
      <Productos/>
      <Nosotros/>
    </Rutas>
    </>
  );
}

export default App;
