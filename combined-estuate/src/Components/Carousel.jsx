import Button from './Button'
import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import CarouselDetails from './CarouselDetails'


const Carouselcomp = (props) => {
    return (
        <div>
            <Carousel>
   <Carousel.Item>
       {/* <h1>{props.h1}</h1> */}
       {/* {<h3>{props.h4}</h3> */}
   <p>{props.p1}</p> 
       
  <CarouselDetails img={props.img1}  p={props.para1}  h1={props.h1} h4={props.h4}/>
  {props.h4 && <Button content="Read More" /> }
  {props.p1 && <Button  content ="Learn More"/>}
   </Carousel.Item>

   <Carousel.Item>
       
   <p>{props.p2}</p>
   <CarouselDetails img={props.img2}  h1={props.h1} h4={props.h4}/>
   {props.h4 && <Button content="Read More" /> }
   {props.p1 && <Button  content ="Learn More"/>}
      </Carousel.Item>


      {props.img3 &&
      <Carousel.Item>
      <p>{props.p3}</p>
      <CarouselDetails img={props.img3}  h1={props.h1} h4={props.h4} />
      {props.h4 && <Button content="Read More" /> }
      </Carousel.Item>
}
      {props.img4 && 
      <Carousel.Item>
         <p>{props.p4}</p>
      <CarouselDetails img={props.img4}  h1={props.h1} h4={props.h4}/>
      {props.h4 && <Button content="Read More" /> }
      </Carousel.Item>
          }
          {props.img5 &&
      <Carousel.Item>
           <p>{props.p5}</p>
      <CarouselDetails img={props.img5}  h1={props.h1} h4={props.h4}/>
      {props.h4 && <Button content="Read More" /> }
      </Carousel.Item>
}

   

  
 
</Carousel>
        </div>
    )
}

export default Carouselcomp
