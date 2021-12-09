import React from 'react';


function Button(props) {
  return (
    <div >
      <button className="ubtn" >{props.content}</button>
    </div>
  );
}

export default Button;
