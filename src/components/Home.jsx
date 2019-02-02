import React, {Component} from 'react'
import {Grid,Carousel  } from 'react-bootstrap';
import './Home.css'
import {Animated} from "react-animated-css";
import SnowStorm from 'react-snowstorm';

export default class  Home extends Component {
  render() {
    return (
<div>
         <SnowStorm />
     

  <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
<div>
  <section className="intro">
  <Carousel>
    <Carousel.Item>
          <img  width={1600} height={900}alt="1600x900" src="Image/2.jpg"/>
          <Carousel.Caption>
          <img width={320} height={250} alt="" src="favicon.ico" align="center" href="/"/>
        <h1 className="text1">ยินดีต้อนรับสู่สวนดอกไม้ของคุณอุ้ม</h1>
        <a className="text1" href="/about">เข้าสู่เว็บไซต์</a>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={1600} height={900}alt="1600x900" src="Image/oom (4).jpg" />
      <Carousel.Caption>
      <h1 className="text1">Oomim Gallery </h1>
        <a className="text1" href="/gallery">ชม Gallery</a>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img class=""width={1600} height={900} alt="900x550" src="Image/oom (3).jpg" />
      <Carousel.Caption>
        <h1 className="text1">Oomim Goods</h1>
        <a className="text1" href="/shop">ซื้อGoods</a>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </section>
</div>
</Animated>  
</div>
  );
  }
}
