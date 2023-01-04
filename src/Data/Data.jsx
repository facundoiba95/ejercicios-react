import React, { createContext,useState } from 'react'

export const DataContext = createContext()

export const Data = ({children}) => {
    const [fetched, setFetched] = useState([])
    const [isLoading, setIsLoading] = useState(false);

  const FetchedApi = async() => {
    setIsLoading(true)

    const res = await fetch('https://api.escuelajs.co/api/v1/products')
    .then(res => res.json())

    setIsLoading(false)
    setFetched(res)
  }

  const targetProduct = (e) =>{
    e.preventDefault()
    
    const {id,category,description,images,price,title} = e.target.dataset;
    const product = {id,category,description,images,price,title}
    return product;
  }

  return (
    <DataContext.Provider value={{fetched,isLoading,FetchedApi,targetProduct}}>
        {children}
    </DataContext.Provider>
    )
}
