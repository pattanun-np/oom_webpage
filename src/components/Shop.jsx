import React, {Component} from "react"
import {Button,Card } from 'react-bootstrap';
import Navbar from './CustomNavbar';
import SnowStorm from 'react-snowstorm';
import FooterPage from './Footer';
import './Shop.css'
export default class Shop extends Component {

  constructor() {
    super();
    this.state = {
    pictures: [] ,
    QuatityS:0,
    QuatityM:0,
    QuatityL:0  ,
    QuatityXL:0,
    QuatityXXL:0
    };
    this.onDrop = this.onDrop.bind(this);
  }
  onDrop(picture) {
    this.setState({
        pictures: this.state.pictures.concat(picture),
    });
}
  render() {
    return(
     <div>
       
    <SnowStorm />
    <Navbar />

    <Card id="container8" >
    <h3 className="text4">เสื้อ 2 (ID:#001)</h3>
    <img id="imageshop1" src="/Image/001.jpg" alt="Generic placeholder" />
     <Button  href="shop001">BUY</Button>
</Card>

  <FooterPage />
     </div>

   );
  }
}
