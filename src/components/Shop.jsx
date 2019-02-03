import React, {Component} from "react"
import { Col,Carousel,Card } from 'react-bootstrap';
import Navbar from './CustomNavbar';
import SnowStorm from 'react-snowstorm';
import FooterPage from './Footer';
import './Shop.css'
export default class Shop extends Component {
  render() {
    return(
     <div>
       
    <SnowStorm />
    <Navbar />
    <Card id="container4">
       <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./Image/shop1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
    <h3 className="text">EXAMPLE 1</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./Image/shop2.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3 className="text">EXAMPLE 2</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./Image/shop3.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className="text">EXAMPLE 3</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./Image/shop4.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className="text">EXAMPLE 4</h3>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./Image/shop5.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3 className="text">EXAMPLE 5</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./Image/shop6.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className="text">EXAMPLE 6</h3>
    </Carousel.Caption>
  </Carousel.Item>
 

</Card >

 <Col id="container3" >
 
   <h1 className="text">ขออภัย Shop ยังไม่เปิดในบริการในขณะนี้</h1>
   <h1 className="text">สินค้าในภาพเป็นเพียงตัวอย่างเท่านั่น</h1>
   </Col>    
  <FooterPage />
     </div>

   );
  }
}
