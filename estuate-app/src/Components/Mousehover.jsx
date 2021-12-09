import React  from "react";
import "./Mousehover.css"
 
 const Mousehover = (props) => {
     return (
         <div className="container">
            <img style={{width:"100%" ,height:"100%"}}  src={props.img}></img>
            <div className="overlay1">
                <span>{props.info}</span>
            </div>
            <div className="overlay2">
                <span>{props.info}</span>
                <br/><br/><br/>
                <p>{props.para}

                    <br/><br/>
                    Learn More
                </p>
            </div>
         </div>
     )
 }
 
 export default Mousehover
 