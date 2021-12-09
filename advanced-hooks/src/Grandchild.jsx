import React,{useContext} from 'react'
import { context } from './Context';

const Grandchild = () => {
    const {state,setState} = useContext(context);
    let change=()=>{
        console.log("i want to update the value");
        setState("pandu")
    }
    return (
        <div>
            <h3> hello {state} , Iam  GRAND child component </h3>
            <button onClick={change}>CHANGE ME</button>
            
        </div>
    )
}

export default Grandchild
