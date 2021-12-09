import React,{ createContext, useReducer } from 'react'
import ComponentA from './ComponentA'
 export const context=createContext()

const ContextwithReducer = () => {
    const initialState={
        name:"Kiran",
        role:"React Developer",
        age:22
    }
    const reducer=(state,action)=>{
        console.log(state,"im reducer");
   return{
    name:action.name,
    role:action.role,
    age:action.age
         }
    }
    const [state, dispatch] = useReducer(reducer, initialState)


    //  let change=()=>{
    //     console.log("I will change everything");
    //     dispatch()
    // }


    return (
        <context.Provider value={{state,dispatch}}>
        <div>
            <h1>Iam MAIN COMPONENt</h1>
            
           name--{state.name}
           <br/>
           age--{state.age}
           <br/>
           position--{state.role}
           <br/>

        {/* <button onClick={change}>Click me</button> */}
          
            <ComponentA />
        </div>
        </context.Provider>
    )
}

export default ContextwithReducer
