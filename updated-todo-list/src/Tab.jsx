import React from "react";
import {Component} from "react"
import Todolist from "./Components/Todolist"
import "./App.css"


class Tab extends Component{
  constructor(props)
  {
    super(props)
    this.state={
      task:"",
      details:[]
  }
}
change=(e)=>{
let x=e.target.value;
this.setState({task:x})
}
add=()=>{
  if(this.state.task.length<3){
    alert("atleast 3 characters required")
    return
  }
  let newitem={
    id:this.state.details.length+1,
    text:this.state.task,
    status:"new"
  }
  this.setState((state)=>({details:state.details.concat(newitem),task:""})

  )
}
done=(id)=>{
  console.log(id);
 let newArray=[...this.state.details]
 newArray[id-1] = {...newArray[id-1], status: "done"}
 this.setState({
  details: newArray,
  });
}
delete=(id)=>{
  console.log(id);
  let newArray=[...this.state.details]
  newArray[id-1] = {...newArray[id-1], status: "delete"}
  this.setState({
   details: newArray,
   });

}
  render(){
    return(
      <div className="maindiv">
        <Todolist  handler={(index)=>{this.done(index)}} title="TO-DO LIST"  action ="DONE" list={this.state.details.filter(item=>item.status==="new")} />
        
        <input id="input" value={this.state.task} onChange={this.change} placeholder="What to do ?" />
        <button id="add" onClick={this.add}>ADD</button>
        <Todolist handler={(index)=>{this.delete(index)}} title="COMPLETED LIST" action="DELETE" list={this.state.details.filter(item=>item.status==="done")} newlist={this.state.details.filter(item=>item.status==="new")} />
        {/* <Todolist title="Deleted list" list={this.state.details.filter(item=>item.status==="delete")} /> */}
      </div>
    )
    
    
  }
}

export default Tab