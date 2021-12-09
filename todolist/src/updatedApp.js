import React from "react";
import { Component } from "react";
import "./updatedApp.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      list: [],
      date:[],
      completed:[],
      show:[],
      
    };
    this.add = this.add.bind(this);
    this.change = this.change.bind(this);
    this.done=this.done.bind(this)
    this.delete=this.delete.bind(this)
    this.compremove=this.compremove.bind(this)
    // this.showText=this.showText.bind(this)
  }
  change(e) {
    // console.log(e);
    this.setState({
      task: e.target.value
      
    });
  }
  add() {
    // if (this.state.task.length === 0) {
    //   return;
    // }
    if(this.state.task.length <3){
      window.alert("Atleast 3 characters required !!!")
      return 
    }
    
    let newItem = {
      text: this.state.task,
    };
    let x= new Date().toUTCString()
    this.setState((state) => ({
      list: state.list.concat(newItem),
      task: "",
      date:this.state.date.concat(x)
    }))
    console.log("created at "+x ) ;

    // console.log("whole list "+this.state.date);
  }
    done(value,index){
    //   console.log(index);
      // console.log(index.index);
      // let y=index.index
 let x=this.state.list 
//  let y=this.state.list
//  console.log(value.text);
 x.splice(index,1)
    // console.log("remove me");
    // console.log(value);
   let completedItem={
     comptext:value.text
   }
   let y=new Date().toUTCString()
   console.log("work done at "+y);

    
    this.setState((state)=>({
      list:this.state.list,
      completed:state.completed.concat(completedItem)
      
     } ))
  
    }
    delete(){
      // console.log("hi");
this.setState({completed:[]})
    }

    compremove(index){
      // console.log("hello");
let x=this.state.completed;
x.splice(index,1)
let y=new Date().toUTCString()
console.log("completed item removed at " +y);
this.setState({completed:this.state.completed})
    }

    // showText(value,index){


// if(value.text.length >10){
//   console.log("entered text is "+value.text)

// //       let x=value.text
// //    let abbr= document.createElement("abbr")
// // abbr.innerHTML=x;
// // let li=document.getElementById(index)    
// // li.appendChild(abbr)
// // alert("entered text is "+value.text)




//   }
// else{
//   return
// }

    // }
  render() {
    return (
      <div id="maindiv">
           
        <div className="subdiv" >
        <h1>ToDoList</h1>
          {/* {this.state.list.length === 0 && <h2>No Work</h2>} */}
          <div className="scrolldiv">
          {this.state.list.length === 0 && <h2>No Task</h2>}
         
          <ul>
        
            {
            this.state.list.map((todo, index) => (
              
              <div key={index} className="uldiv">
           
                
               <li >{todo.text.length>10 ? <abbr title={todo.text}>{todo.text}</abbr>:todo.text} </li> 

              
              <button id="remove"  onClick={()=>this.done(todo,index)}>Done </button>
              </div>
              
              
            ))
           
            }
            
          </ul>
         
          
          
            </div>
          <input 
          // onKeyPress={this.add}
            onChange={this.change}
            value={this.state.task}
            placeholder="What to do ?"
          ></input>

          <br /><br/><br/>
          <button id="add" onClick={this.add} >Add</button>
           {/* <button id="reset" onClick={this.delete} disabled={this.state.list.length===0}>Reset</button>  */}
        </div>
        <div className="subdiv"> 
        {this.state.list.length>0  && <h2>Please Complete the task</h2>}
        <h1>Completed-List</h1>
        <div className="scrolldiv">
        
            {this.state.list.length===0 && this.state.completed.length===0 &&<h2>No Tasks</h2>}
            {/* {this.state.list.length>0  && <h2>Please Complete the task</h2>} */}
            <ul>
            {
            this.state.completed.map((todo, index) => (
              
              <div key={index} className="uldiv">
                
              <li > {todo.comptext}</li>
              <button onClick={ ()=>this.compremove(index)}>Remove</button>
              
              </div>
              
            ))
           
            }
            </ul>
        </div>
        {this.state.completed.length>1 && <button onClick={this.delete}>Reset</button>}
        </div>
      </div>
    );
  }
}
export default App;
