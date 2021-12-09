import React from 'react'
import {useState} from "react"
import axios from "axios"

const Postform = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    let authenticate=(e)=>{

        e.preventDefault();
        axios.post("https://reqres.in/api/login",{"email":email,"password":password}).then((res)=>{
            console.log(res);
        }).catch((err=>{
            console.log(err);
        }))
        setpassword("")
        setemail("")
                // console.log(email ,password);
    }
    return (
        <form>
            <h1>POST CALL</h1>
            <br/><br/>
            <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Enter email" />
            <br/>  <br/>
            <input type="text" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="Enter password" />
            <br/> <br/>
            
            <button onClick={(e)=>authenticate(e)}>Submit</button>
        </form>
    )
}

export default Postform
