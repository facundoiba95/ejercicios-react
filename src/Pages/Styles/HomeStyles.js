import styled from "styled-components";

export const AllProductsContainerStyle = styled.ul`
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;
gap:8px;
width:100%;


.categoryTitleIcon{
    width:50px;
    height:50px;
    border-radius:50%;
    padding-left:5px;
}
.categoryName{
    letter-spacing:2px;
    display:flex;
    justify-content:center;
    align-items:center;

}
`
export const ItemProductStyle = styled.li`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:300px;
/* background-color:#f2f1f1; */
border-radius:8px;
gap:8px;
padding:10px;

small{
    width:200px;
    text-overflow:ellipsis;
    white-space:nowrap;
    overflow:hidden;
}


`
export const ImageProduct = styled.img`
width:150px;
height:130px;
border-radius:8px;
object-fit:contain;
`

export const ProductsContainer = styled.ul`
display:flex;
justify-content:center;
flex-wrap:wrap;
align-items:center;
gap:8px;
width:100%;
border:1px solid #bbb;
border-radius:8px;
padding:10px;
margin:0 20px 3rem 20px;
`
