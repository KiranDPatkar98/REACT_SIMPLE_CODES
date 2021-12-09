import React,{useState,useEffect} from 'react'
import axios from "axios";
const Hookapi = () => {
    const [post, setPost] = useState([]);
    const [path, setpath] = useState("");
    

    

    let show=()=>{
              
axios.get(`https://jsonplaceholder.typicode.com/posts/${path}`)
.then ((res)=>{
    console.log(res.data);
    setPost(res.data)
})
    
        //  console.log(path);
      

        setpath("");
    }
    return (
        <>
             <input style={{padding:"10px",width:"300px"}} value={path} placeholder="Enter the Id" onChange={(e)=>setpath(e.target.value)}  />
     <br/><br/>
     
     <button onClick={show}>Submit</button>
     <div>

 <div>{post.id}</div>
  <div>{post.body}</div>
        </div>   
        </>
    )
}

export default Hookapi
