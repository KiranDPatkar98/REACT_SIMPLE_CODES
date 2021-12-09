import axios from 'axios'
import React, { useReducer ,useEffect} from 'react'
// import axios from "axios"

const Reducer = () => {

    const initialState={
        data:{},
        loading:true,
        error:""
    }
    const reducer=(state,action)=>{
 switch(action.type)
 {
     case "SUCESS":
         return{
             data:action.data,
             loading:false,
             error:""
         }
         case "FAILURE":
            return{
                data:{},
                loading:false,
                error:"Something went wrong"
            }
            default:return state;
 }
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
     axios.get("https://jsonplaceholder.typicode.com/posts/1")
     .then(res=>{
         setTimeout(()=>{
             dispatch({type:"SUCESS",data:res.data})
         },3000)
     })
     .catch((err)=>{
         dispatch({type:"FAILURE"})
     })
    }, []);
    return (
        <div>
          {state.loading?"LOading.....":state.data.title}  
          {state.error?state.error:null}
        </div>
    )
}

export default Reducer
