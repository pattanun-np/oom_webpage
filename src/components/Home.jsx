import React, {Component} from 'react'
import {Carousel, Card,} from 'react-bootstrap';
import './Home.css'
import {Animated} from "react-animated-css";
import SnowStorm from 'react-snowstorm';
import YouTube from 'react-youtube';
export default class  Home extends Component {
  
  render() {
    const opts = {
      height: '240',
      width: '340',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    const opts1 = {
      height: '240',
      width: '340',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };
    return (
   
<div>
  <SnowStorm />
 
  <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
<div>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./Image/2.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h4 className="text1">ยินดีต้อนรับสู่สวนดอกไม้ของคุณอุ้ม</h4>
      <a className="text1" href="/about">เข้าสู่เว็บไซต์</a>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./Image/oom (3).jpg"
      alt="3"
    />

    <Carousel.Caption>
      <h3><h1 className="text1">Oomim Gallery </h1>
        <a className="text1" href="/gallery">ชม Gallery</a></h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./Image/oom (4).jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    <h1 className="text1">Oomim Goods</h1>
        <a className="text1" href="/shop">ซื้อGoods</a>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
</Animated> 
 <Card Home>
 <YouTube
        videoId="2d5ATnB5Pp4"
        opts={opts}
        onReady={this._onReady}/>

 <YouTube
        videoId="hsLcQGUxxs0&t=81s"
        opts={opts1}
        onReady={this._onReady}/>
 </Card>
 
</div>

  );
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
