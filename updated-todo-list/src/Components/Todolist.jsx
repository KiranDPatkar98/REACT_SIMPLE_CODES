import React from "react"
import {Component} from "react"
import Task from "./Task.jsx"
import "./Todolist.css"
// class Todolist extends Component{
//     constructor(props){
//         super(props)
//       }
    //   handle=(id)=>{
    //       console.log("todo list " + id);
    //       this.props.handler(id)
    //   }
//     render(){
//         console.log(this.props.newlist);
//         return(
//             <div className="todolistcontainer">
                
//                 <h1 style={{textAlign:"center"}}>{this.props.title}</h1>
//                 {this.props.list.length===0 &&this.props.title==="TO-DO LIST"&&<h1 style={{textAlign:"center",marginTop:"50px"}}>No work enjoy</h1>}
//               {this.props.list.length===0 &&this.props.title==="COMPLETED LIST"  &&<h2 style={{textAlign:"center",marginTop:"50px"}}>Empty !</h2>}
//                 {this.props.newlist &&this.props.newlist.length>0 &&this.props.title==="COMPLETED LIST" && <h1 style={{color:"red", textAlign:"center",margin:"20px"}}>plz complete the task</h1>}
//                 {this.props.list.map((item,index)=>   <Task key={index} id={item.id}  action={this.props.action}
//                 handle={(id)=>{this.props.handler(id)}} list={item} /> )}
               
               
//             </div>
            
//         )
//     }
// }



 const Todolist =(props) => {
    return (
        <div className="todolistcontainer">
                 {props.newlist &&props.newlist.length>0 &&props.title==="COMPLETED LIST" && <h1 style={{color:"red", textAlign:"center",margin:"20px"}}>Plz complete the task</h1>}
        <h1 style={{textAlign:"center"}}>{props.title}</h1>
        {props.list.length===0 &&props.title==="TO-DO LIST"&&<h1 style={{textAlign:"center",marginTop:"50px"}}>No work enjoy</h1>}
      {props.list.length===0 &&props.title==="COMPLETED LIST"  &&<h2 style={{textAlign:"center",marginTop:"50px"}}>Empty !</h2>}
       
        {props.list.map((item,index)=>   <Task key={index} id={item.id}  action={props.action}
        handle={(id)=>{props.handler(id)}} list={item} /> )}
       
       
    </div>
    
    )
}
export default Todolist