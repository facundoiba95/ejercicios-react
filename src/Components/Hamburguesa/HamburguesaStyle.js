import styled from "styled-components";

export const MenuBarsStyle = styled.span`
width:100%;
height:2px;
background:${props => props.clicked ? 'transparent' : 'white'};
position:relative;
display:inline-block;
transition: all 0.2s ease-in-out;
border-radius:2px;
left: ${props => props.clicked ? '250px': '0px'};
z-index:30;

&::after,
&::before{
    height:2px;
    content:'';
    background: whitesmoke;
    width:100%;
    display: inline-block;
    position:absolute;
    left:0;
    transition:all 0.2s ease-in-out;
    border-radius:2px;
}

&::before{
    top:${props => props.clicked ? '0' : '-7px'};
    transform: ${props => props.clicked ? 'rotate(35deg)' : 'rotate(0)'};
    
}
&::after{
    top:${props => props.clicked ? '0' : '7px'};
    transform: ${props => props.clicked ? 'rotate(-35deg)' : 'rotate(0)'}
}

`
export const MenuBarsContainerStyle = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:30px;
height:100%;
padding-left:8px;
cursor:pointer;
display:none;

@media(max-width:768px){
    display:block;
    position:relative;
    left: 0;
}

`