import React, {Component} from "react"
import {Grid, Row, Col,  Thumbnail,Image,  Carousel, Media,  } from 'react-bootstrap';
import {Animated} from "react-animated-css";
import Navbar from './CustomNavbar';
import SnowStorm from 'react-snowstorm';
import FooterPage from './Footer';
export default class Shop extends Component {
  render() {
    return(
     <div>
       
    <SnowStorm />
    <Navbar />

       
   <h1>ขออภัย Shop ยังไม่เปิด</h1>
       
  <FooterPage />
     </div>

   );
  }
}
