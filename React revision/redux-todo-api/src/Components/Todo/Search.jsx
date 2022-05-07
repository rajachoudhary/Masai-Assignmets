import React, { useState } from 'react'

export const Search = () => {
    const [query,setQuery] = useState("")
    const handleSearch = ()=>{
       fetch(`http://localhost:3000/todo?q=${query}`)
       .then(res => res.json())
       .then((res)=>{
           
       })

    }
  return (
    <div>
        <input type="text" placeholder="Product Name" onChange={(e)=>setQuery(e.target.value)} />
        <button onClick={handleSearch}>search</button>
    </div>
  )
}
