import React, {Component} from "react"
import {Grid, Row, Col,  Thumbnail,Image,  Carousel, Media,  } from 'react-bootstrap';
import {Animated} from "react-animated-css";
import Navbar from './CustomNavbar';
import SnowStorm from 'react-snowstorm';
import FooterPage from './Footer';
export default class Support extends Component {
  render() {
    return(
     <div>
       
    <SnowStorm />
    <Navbar />

       

       <Carousel>
    <Carousel.Item>
          <img  width={1600} height={900}alt="900x500" src="Image/2.jpg"/>
    </Carousel.Item>
    <Carousel.Item>
      <img width={1600} height={900}alt="900x500" src="Image/6.jpg" />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img class=""width={1600} height={900} alt="900x500" src="Image/8.jpg" />
    </Carousel.Item>
  </Carousel>
  <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
           <div>
                    <h1 className="text">FANPAGE</h1>
           </div>
       </Animated>
       <div>
          <a href="https://www.facebook.com/Oom-BNK48-Thailand-Fans-1665294563562825/">
        <Image width={150} height={150} alt="50x50" src="Image/page.jpg" rounded/>
         </a>
       </div>
  <FooterPage />
     </div>

   );
  }
}
