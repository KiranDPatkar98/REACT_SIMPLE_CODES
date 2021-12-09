import axios from 'axios';
import React from 'react'
import {useState} from 'react'
// import axios from "axios"
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainTable from './Table';


const Apicall = () => {
    const [details, setdetails] = useState([]);
    const [path, setpath] = useState("");
    const [comments, setcomments] = useState([]);
    const [error, seterror] = useState("");


    let show=(e)=>{
        e.preventDefault();

axios.get(`https://jsonplaceholder.typicode.com/posts/${path}`).then((res)=>{
    console.log(res);
    setdetails(res.data)
    seterror("")
    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${path}`).then((result)=>{
        console.log(result.data);
        setcomments(result.data)
        console.log("details", details);
        // console.log("Iam comment section");
    })
}).catch((err)=>{
    console.log(err);
    seterror(" OOPS 404 post not found")
   
    
})


    }
    return (
        <div>
            <form>
                <input onChange={(e)=>setpath(e.target.value)} placeholder="Enter the post ID"></input>
                <button onClick={(e)=>show(e)}>Submit</button>
            </form>
           
            {  error==="" &&
            <div >
               {details.title}
               </div> }

            <div>{error}</div> 
            
            {comments.length> 0 && error=="" && <MainTable comments={comments} />
            
            
            }
           
        </div>
    )
}

export default Apicall
