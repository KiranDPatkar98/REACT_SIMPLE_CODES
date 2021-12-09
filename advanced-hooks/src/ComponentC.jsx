import React,{useContext} from 'react'
import { context } from './ContextwithReducer'

const ComponentC = () => {
    const {state,dispatch} = useContext(context)
    // console.log(state,"iam c");
    let update=()=>{
      dispatch({...state,name:"pandu"});
    }
  
    return (
        <div style={{border:"2px solid red"}}>
           
        
            <h1>Iam component C </h1>
            <br/>
            The values I got from main components are 
          
            <br/>
            Name---{state.name}
            <br/>
            Age----{state.age}
            <br/>
            Position----{state.role}
            <div>If u want to update the parent's state please click me </div> 
             <button onClick={update}>Click ME</button>

        </div>
    )
}

export default ComponentC
