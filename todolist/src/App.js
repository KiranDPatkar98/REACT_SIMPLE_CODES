import React from "react";
import { Component } from "react";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      
      list: [],
      
    };
    this.add = this.add.bind(this);
    this.change = this.change.bind(this);
    this.remove=this.remove.bind(this)
    this.delete=this.delete.bind(this)
  }
  change(e) {
    // console.log(e);
    this.setState({
      task: e.target.value,
    });
  }
  add() {
    if (this.state.task.length === 0) {
      return;
    }
    let newItem = {
      text: this.state.task,
    };
    this.setState((state) => ({
      list: state.list.concat(newItem),
      task: "",
    }));
  }
    remove(index){
      console.log(index);
      // console.log(index.index);
      // let y=index.index
 let x=this.state.list 
 x.splice(index,1)
    // console.log("remove me");
    
    this.setState({
      list:this.state.list
     } )
  
    }
    delete(){
this.setState({list:[]})
    }
  render() {
    return (
      <div id="maindiv">
        <div id="subdiv">
          <h1>ToDoList</h1>
          {this.state.list.length === 0 && <h2>No Work</h2>}
          <div id="scrolldiv">
          <ul>
            {
            this.state.list.map((todo, index) => (
              
              <div key={index} id="uldiv">
                
              <li > {todo.text}</li>
              <button id="remove"  onClick={()=>this.remove(index)}>Done </button>
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
          <button id="add" onClick={this.add}  disabled={this.state.task.length<3}>Add</button>
           <button id="reset" onClick={this.delete} disabled={this.state.list.length===0}>Reset</button> 
        </div>
      </div>
    );
  }
}
export default App;
