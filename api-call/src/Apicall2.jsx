import React from 'react'
import {useState} from 'react'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainTable from './Table';

const Apicall2 = () => {
    const [details, setdetails] = useState([]);
    const [path, setpath] = useState("");
    const [comments, setcomments] = useState([]);
    const [error, seterror] = useState("");


    let show= async (e)=>{
        e.preventDefault();


   const response1=await fetch(`https://jsonplaceholder.typicode.com/posts/${path}`).then((res)=>res.json()
   ).catch((err1)=>console.log(err1,"bhd"))
  
  

   const response2=await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${path}`).then((res)=>res.json())
   .catch((err2)=>console.log(err2,"dh"))
  
  Promise.all([response1,response2]).then((value)=>{
     let [pst,cmt]=value;
     
     setdetails(pst)
     setcomments(cmt)
  }).catch((err)=>
console.log(err,"hgfyufdw")
  )


    }
    return (
        <div>
            <form>
                <input  onChange={(e)=>setpath(e.target.value)} placeholder="Enter the post ID"></input>
                <button onClick={(e)=>show(e)}>Submit</button>
            </form>
            
            { error==="" &&
            <div >
               {details.title}
               </div>
}
               <div>{error}</div>
            
            {comments.length> 0 && error=="" &&
              <MainTable comments={comments} />
            
            
            }
           
        </div>
    )
}

export default Apicall2
