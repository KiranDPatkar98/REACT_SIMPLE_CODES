import React, { createContext,useState } from 'react'
import Child from './Child';
 export const context=createContext();
const Context = () => {
   const [state, setState] = useState("Kiran");

    return (
       
        <context.Provider value={{state,setState}} >
          <h1>Hello {state} IAm parent component</h1>
          <Child />

        </context.Provider>
    )
}
export default Context
