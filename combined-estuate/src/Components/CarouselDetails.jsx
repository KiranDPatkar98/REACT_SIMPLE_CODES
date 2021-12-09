import React from 'react'

const CarouselDetails = (props) => {
    return (
        <>
            <p>{props.p}</p>
            <h4>{props.h4}</h4>
            <h1>{props.h1}</h1>
            <img
      
      src={props.img}
     
    />
        </>
    )
}

export default CarouselDetails
