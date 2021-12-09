import React, { useState,useEffect } from 'react'
import axios from "axios"

const Hooksearch = () => {
    
    const [search, setsearch] = useState("");
    const [details, setdetails] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then((res)=>{
        
            setdetails(res.data)
            
        })
 

    },[]);
    let searching=(e)=>{
        setsearch(e.target.value)
        
    }
    

  
    return (
        <div >
            <input style={{width:"300px",padding:"10px"}} placeholder="Enter the title" onChange={(e)=> {searching(e)}}></input>
            <br/><br/>
            {/* <button onClick={search}>Search</button> */}
            <div >
             { search.length>0 && details.length>0 && details.filter((value)=>value.title.includes(search)).map((res,index)=><div key={index}>{res.title}</div>)}
        
            </div>

         
        </div>
    )
}

export default Hooksearch
