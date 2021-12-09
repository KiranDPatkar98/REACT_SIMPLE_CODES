import React from "react"
import {Component} from "react"
import "./Task.css"
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class Task extends Component{
    // handle=(e)=>{
    //     console.log( e.target.value);
    //     this.props.handle(e.target.value)
    // }
    render(){
        return(
            <div className="container" style={{display:"flex",     margin: "20px 10px 10px 60px"}}>
                <div className="taskcontainer" title={this.props.list.text}>{this.props.list.text}</div>
              {this.props.action && <Button value={this.props.id} className="btn" onClick={(e)=>{this.props.handle(e.target.value)}} style={{marginLeft:"10px"}} >{this.props.action}</Button> }
            </div>
        )
    }
}
export default Task