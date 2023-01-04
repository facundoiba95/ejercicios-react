import { Link } from "react-router-dom";
import styled from "styled-components";


export const MenuContainerStyle = styled.ul`
display:flex;
justify-content:center;
align-items:center;
gap:8px;
z-index:29;



@media (max-width: 768px){
    flex-direction:column;
    position:absolute;
    left:${props => props.clicked ? '0':'-100%'};
    background:#131415;
    width:100%;
    height:100vh;
    transition: all 0.3s ease-in-out;
    backdrop-filter: blur(7px)
}

`

export const ItemStyle = styled(Link)`
color:white;
cursor: pointer;
transition: all 0.3s;
border-bottom:2px;

hr{
border:1px solid yellowgreen;
width:0;
visibility:hidden;
transition:all 0.3s ease-in-out;

}

:hover{
    color:gainsboro;
}

:hover hr{
    width:100%;
    visibility:visible;
}
`