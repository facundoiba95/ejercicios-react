import styled from 'styled-components'

export const NavbarStyle = styled.header`
width:100%;
height:50px;
background-color:#131415;
display:flex;
padding-left:0;
padding-right:10px;
justify-content:center;
position:sticky;
top:0;




@media (max-width:768px){
    justify-content:space-between;
}
`
export const SwitchContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
gap:8px;

small{
    color:white;
    width:100%;
}
`




