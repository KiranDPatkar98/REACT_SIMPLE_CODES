import Button from "./Button";
import React from 'react';
import "../CSS/Card.css"

function Card(props){
    return(

        <div className = "card">
            <h2>{props.heading}</h2>
           
                <img src = {props.img} className = "card-image"/>
                <h2 className = "card_title">{props.title}</h2>
                <p>{props.description}</p>
        
            <Button content="Read More" />
          
            <br />
        </div>
       );

}
export default Card;