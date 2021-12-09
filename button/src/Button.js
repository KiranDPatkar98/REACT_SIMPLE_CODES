import React from 'react'

const Button = (props) => {
    return (
        <div>
           <button onMouseOver={props.hover} style={props.style}>{props.action}  </button> 
        </div>
    )
}

export default Button
