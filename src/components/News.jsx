import React, {Component} from "react"
import {Grid, Row, Col,Card,Button  } from 'react-bootstrap';
import {Animated} from "react-animated-css";
import Navbar from './CustomNavbar';
import SnowStorm from 'react-snowstorm';
import FooterPage from './Footer';
import './News.css'
export default class News extends Component {
  render() {
    return(
     <div>
       
    <SnowStorm />
    <Navbar />
    <div id="content-news">
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="./Image/election.jpg" />
  <Card.Body>
    <Card.Title>ร่วมยินดีกับผลเลือกตั้งของคุณอุ้ม【อันดับที่ 27】</Card.Title>
    <Card.Text>
    เมื่อ 26 มกราคมที่ผ่านมาในงานประการผลการเลือกตั้ง BNK48GenneralElection 
    คุณอุ้มของพวกเราคว้า อันดับที่ 27 ขอบคุณทุกคะแนนโหวตทั้งจากกิจกรรมปาสลิป และ การโหวตแบบปกติ              
    </Card.Text>
    <Button variant="success">อ่านเพิ่มเติม</Button>
  </Card.Body>
</Card>
      
  </div>
  
  <FooterPage />
     </div>

   );
  }
}
