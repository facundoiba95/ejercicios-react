import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    paddinG:0;
    box-sizing:border-box;
    list-style: none;
    text-decoration:none;
}

body{
    background-color:${props => props.checked ? '#202124': 'white'};
    color:${props => props.checked ? 'white': 'black'}
}
.item__product{
    background-color:${props => props.checked ? '#313638' : '#f2f1f1'};
}


`
export default GlobalStyle;