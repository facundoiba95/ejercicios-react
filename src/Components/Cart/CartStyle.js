import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import styled from "styled-components";

export const CartContainerStyle = styled.div`
padding-left:-10px;
position:absolute;
width:100%;
top:50px;
transition:all 0.3s;
`

export const CartStyle = styled.div`
position:relative;
backdrop-filter: blur(5px);
background-color: ${props => props.checked ? '#69696990' : '#69696990'};
transition:all 0.3s ease-in-out;
height:${props => props.isOpenCart ? '100%' : '-100%'};
width:100%;
padding-bottom:${props => props.isOpenCart ? '20px': '0px'};


.closeCart__icon{
    display:${props => props.isOpenCart ? 'block': 'none'};
    position:absolute;
    left:15px;
    top:5px;
    font-size:1.3rem;
    cursor: pointer;
    transition:all 0.3s;
}
`

export const CartListStyle = styled.ul`
display:${props => props.isOpenCart ? 'flex': 'none'};
flex-direction:column;
justify-content:center;
align-items:center;
gap:10px;
padding-top:10px;

`
export const CartItemStyle = styled.li`
position:relative;
background-color:${props => props.checked ? '#313638' : '#f2f1f1'};
width:80%;
height:110px;
border-radius:10px;
display:flex;
justify-content:space-around;
align-items:center;
font-size:0.7rem;


.removeProduct__icon{
    position:absolute;
    left:10px;
    top:10px;
    font-size:1.2rem;
    cursor:pointer;

}
img{
    width:120px;
    border-radius:8px;
    object-fit:contain;

}
`


export const CartIconStyle = styled.div`
position:relative;

.cart__icon{
    color:white;
    font-weight:400;
    font-size:1.5rem;
    cursor:pointer;
}
.cart__counter{
    display:${props => props.existingProduct ? 'block' : 'none'};
    color:white;
    position: absolute;
    top:-10px;
    right:-10px;
    border-radius:8px;
    padding:0.5px 2px 0.5px 2px;
    line-height:15px;
    text-align:center;
    background-color:red;
    border:2px solid black;
    transition:all 0.3s ease-in-out;
}
`

export const CartQuantityStyle = styled.ul`
display:flex;
align-items:center;
gap:8px;

`
export const QuantityMinus = styled(GrFormPrevious)`
font-size:1.2rem;
background-color:${props => props.checked ? '#e63946' : '#fb8500'};
border-radius:9px;
border:none;
cursor:pointer;`

export const QuantityMore = styled(GrFormNext)`
font-size:1.2rem;
background-color:${props => props.checked ? '#e63946' : '#fb8500'};
border-radius:9px;
border:none;
cursor:pointer;
`

export const BtnRemoveAllStyle = styled.button`
display:${props => props.existingProduct && props.isOpenCart ? 'block' : 'none'};
width: 120px;
height:30px;
border:none;
border-radius: 10px;
margin:0 auto;
margin-top:10px;
cursor: pointer;
transition:all 0.3s ease-in-out;

:hover{
    background-color: yellowgreen;
    
    color:white;
}
`