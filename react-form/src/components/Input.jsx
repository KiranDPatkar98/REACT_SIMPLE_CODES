import React from "react"
function Input(props){
    return(<>
        <input placeholder={props.placeholder} type={props.type} ></input>
        <br/><br/>
        </>
    )
}
export default Input;