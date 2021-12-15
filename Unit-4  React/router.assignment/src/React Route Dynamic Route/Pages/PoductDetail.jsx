import { useParams } from "react-router-dom"
import axios from "axios"
import React,{useEffect} from "react"
import { ProductCard } from "./ProductCard"
 export const ProductDetail = ()=>{
     const {id} = useParams()
     const [data,setData] = React.useState(null)
     const [isLoading,setIsLoading] = React.useState(false)
      const fetchData = ()=>{
          return axios.get("http://localhost:3000/product/"+id)
      }
      const handleFetchData = async()=>{
        try{
            setIsLoading(true)
            const getData = await fetchData(id)
            console.log(getData)
            setData(getData)
            setIsLoading(false)
            
        }
        catch(err){

        }
      }
      useEffect(() => {
         handleFetchData()
      }, [])
      if(isLoading){
          return <div>...Loading</div>
      }
     return(
         <div id={id}>
             <ProductCard
             productName = {data?.data?.name}
             price = {data?.data?.price}
             />
         </div>
     )
 }