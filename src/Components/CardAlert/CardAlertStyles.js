import styled from "styled-components";

export const CardAlertContainerStyle = styled.div`
width:100%;
height:${props => props.clicked ? '100vh': '0'};
position:absolute;
z-index:50;
top: 50px;
backdrop-filter: blur(9px);
display:flex;
justify-content:center;
align-items:center;
transition: all 0.3s ease-in-out;

`

export const CardAlertModalStyle = styled.div`
width:300px;
height:200px;
border-radius:10px;
background-color: #aaaaaa90;
border: 1px solid black;
display:${props => props.clicked ? 'flex' : 'none'};
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;

`
export const BtnCardAlert = styled.button`
width:120px;
height:30px;
border-radius:9px;
border:none;
cursor:pointer;
`

