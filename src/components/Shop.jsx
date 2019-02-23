import React, {Component} from "react"
import {Button, Card} from 'react-bootstrap';
import Navbar from './CustomNavbar';
import SnowStorm from 'react-snowstorm';
import FooterPage from './Footer';
import './Shop.css';
export default class Shop extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
    Cart:0
    };
    }
    handleClick(){
      this.setState({
        Cart:this.state.Cart+1
      });
    }   
  render() {
    return(
      <div>
    <SnowStorm />
    <Navbar />
    <Card id="container8" >
    <h3 className="text4">เสื้อ 2 (ID:#001)</h3>
    <img width={200} height={150} src="/Image/001.jpg" alt="Generic placeholder" />
     <Button  href="shop001">BUY</Button>
    </Card>
  <FooterPage />
  </div>
   );
  }
}
