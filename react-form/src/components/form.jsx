import React from "react"
import Input from "./Input"

// import { Component } from "react"
function Form(){
    return (
        <form>
     <Input placeholder="Enter your name" type="text" />
     <Input placeholder="Enter your email address" type="email"/>
     <Input placeholder="Re-enter email address" type="email"/>
     <Input placeholder="Enter the mobile number" type="text"/>
     <button>Submit</button>
        </form>
    )
}
export default Form