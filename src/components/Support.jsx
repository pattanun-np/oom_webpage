import React, {Component} from "react"
import {Image,  Carousel,  } from 'react-bootstrap';
import {Animated} from "react-animated-css";
import Navbar from './CustomNavbar';
import SnowStorm from 'react-snowstorm';
import FooterPage from './Footer';
import './Support.css'
export default class Support extends Component {
  render() {
    return(
     <div>
       
    <SnowStorm />
    <Navbar />

       
      <div>
       <Carousel>
    <Carousel.Item>
          <img  width={1600} height={900}alt="1600x900" src="Image/2.jpg"/>
    </Carousel.Item>
    <Carousel.Item>
      <img width={1600} height={900}alt="1600x900" src="Image/6.jpg" />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img class=""width={1600} height={900} alt="1600x900" src="Image/oom (5).jpg" />
    </Carousel.Item>
  </Carousel>
  </div>

  <Animated animationIn="bounceInLeft" animationOut="Jello" isVisible={true}>
       <div id="content">
       
       <h1 className="textfanpage">FANPAGE</h1>
       <a className="page" href="https://www.facebook.com/Oom-BNK48-Thailand-Fans-1665294563562825/">
       <Image width={150} height={150} alt="50x50" src="Image/page.jpg" rounded/></a> 
 

      <a className="page" href="https://www.facebook.com/OomMoonLightCastle/">
        <Image width={150} height={150} alt="50x50" src="Image/moonlight.jpg" rounded/></a>
 

          <a className="page" href="https://www.facebook.com/oomimgarden/">
        <Image width={150} height={150} alt="50x50" src="Image/ommim.jpg" rounded/></a>
 
      
       </div>
       </Animated>
  <FooterPage />
     </div>

   );
  }
}
