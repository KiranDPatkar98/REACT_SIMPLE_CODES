import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './Item';
import "./Carousel.css"



const Carousel1 = () => {
    return (
        <div id="carouseldiv">
<Carousel>
  <Carousel.Item>
  

<Item  img="https://i0.wp.com/www.estuate.com/wp-content/uploads/2020/02/Slider_2.jpg" />
<p>A market leader in high-performance golf equipment partners with Estuate to drive down IT operations cost & amp; Improve IT user experience.</p>

  </Carousel.Item>
  <Carousel.Item>
  <Item img="https://i0.wp.com/www.estuate.com/wp-content/uploads/2020/02/Slider_1.jpg"/>
  <p>A market leader in high-performance golf equipment partners with Estuate to drive down IT operations cost & amp; Improve IT user experience.</p>
</Carousel.Item>

   
  
</Carousel>
      </div>
    )
}

export default Carousel1
