import React,{useContext, useEffect, useState} from 'react'
import { AllProductsContainerStyle, ImageProduct, ItemProductStyle, ProductsContainer } from './Styles/HomeStyles'
import { CircularProgress } from "react-cssfx-loading";
import { BtnBuy } from '../Components/ButtonBuy/BtnBuy';
import { DataContext } from '../Data/Data';
import { CartContextProvider } from '../Contextos/CartContext';


export const Home = () => {
  const {fetched,FetchedApi,isLoading} = useContext(DataContext)
  const {addProduct} = useContext(CartContextProvider)
  
  
  const render = (array) => {
   return array.map(product => (
      <ItemProductStyle key={product.id} className='item__product'>
        <h3 className='text__product'>{product.title}</h3>
        <ImageProduct src={product.images[0]} alt={product.title}/>
        <h4 className='text__product'>${product.price}</h4>
        <small className='text__product'>Description: {product.description}</small>
        <BtnBuy onClick={addProduct}
        data-id={product.id}
        data-category={product.category.name}
        data-description={product.description}
        data-images={product.images}
        data-title={product.title}
        data-price={product.price}/>
      </ItemProductStyle>
   ))
  }
 
  //OJO CON EL RETURN !! DEBE RETORNAR SINTAXIS REACT !!!
  const BestSellerProducts = (array) => {
    const nuevoArray = array.slice(0, 8)
    return render(nuevoArray)
  }

  const Category = (array,categoria) => {
    const category = array.filter(product => product.category.name == categoria).slice(0,4)
    return render(category);
  }

  

  //hice estas variables para saber cuantas categorias hay, ya que hay 203 productos y cada uno tiene una categoria
  // const categorias = fetched.map(category => category.category.name)
  // const data = new Set(categorias) //el metodo SET permite que las categorias no se repitan.
  // let result = [...data]
  // console.log(result)

useEffect(() => {
  FetchedApi()
},[])


  return (
<AllProductsContainerStyle>
  <li>h2BestSeller Products</li>
  <ProductsContainer>{isLoading ? <CircularProgress/> : BestSellerProducts(fetched)}</ProductsContainer>
  <br/><br/>
  <span><h2>Electronics</h2>{}</span>
  <ProductsContainer>{isLoading ? <CircularProgress/> : Category(fetched,'Electronics')}</ProductsContainer>
  <br/><br/>
  <h2>Clothes{}</h2>
  <ProductsContainer>{isLoading ? <CircularProgress/> : Category(fetched,'Clothes')}</ProductsContainer>
  <br/><br/>
  <h2>Shoes</h2>
  <ProductsContainer>{isLoading ? <CircularProgress/> : Category(fetched,'Shoes')}</ProductsContainer>
  <br/><br/>
  <h2>Furnitures</h2>
  <ProductsContainer>{isLoading ? <CircularProgress/> : Category(fetched,'Furniture')}</ProductsContainer>
  <br/><br/>
  <h2>Others</h2>
  <ProductsContainer>{isLoading ? <CircularProgress/> : Category(fetched,'Others')}</ProductsContainer>
</AllProductsContainerStyle>
 )
}
