import React, {Component} from 'react'
import {Grid, Row,  Image,  Carousel, Media,  } from 'react-bootstrap';
import './Home.css'
import {Animated} from "react-animated-css";
import Navbar from './CustomNavbar';
import SnowStorm from 'react-snowstorm';
import FooterPage from './Footer';

export default class  Home extends Component {
  render() {
    return (
<div>
         <SnowStorm />
         <Navbar />
     

  <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
<div>
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
</div>
</Animated>
<Grid>
<Row>
  <div>
    <Media>
      <Animated animationIn="bounceInLeft"animationInDelay="2" animationOut="fadeOut" isVisible={true}>
    <div>
    <h1 className="head"> OOM BNK48</h1>
    </div>
</Animated>
<Media.Left>
<Animated animationIn="bounceInLeft" animationInDelay="2" animationOut="fadeOut" isVisible={true}>
            <div>
                <Image src="Image/oomm.jpg" alt=" "circle />
            </div>
        </Animated>

  </Media.Left>
      <Media.Body>
        <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true}>
        <div>
        <h2 className="text">Name: ณัชชา กฤษฎาสิมะ</h2>
        <h2 className="text">  Height : 163 cm</h2>
        <h2 className="text">  Province : Bangkok</h2>
        <h2 className="text">  Favourite Color : ขาว ชมพู</h2>
        <h2 className="text">  Like : ไอศครีม</h2>
        <h2 className="text">  Blood Group : O</h2>
        <h2 className="text">   Hobby : อ่านหนังสือ ทำสวน....
        </h2>
         <a href="https://www.facebook.com/bnk48official.oom/">
        <Image className="BTN" width={60} height={60} alt="50x50" src="Image/FB.png" rounded/>
         </a>
          <a href="https://www.instagram.com/oom.bnk48official/">
        <Image className="BTN"width={60} height={60} alt="50x50" src="Image/IG.png" rounded/>
         </a>
        </div>
    </Animated>
      </Media.Body>
    </Media>
  </div>
      </Row>
    </Grid>
    <FooterPage />
     
</div>
);
  }
}
