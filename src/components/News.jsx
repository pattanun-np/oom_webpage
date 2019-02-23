import React, {Component} from "react"
import {Card } from 'react-bootstrap';
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
    <Card style={{ width: '16rem',margin:'10px', padding:'10px' }}>
  <Card.Img variant="top" src="./Image/election.jpg" />
  <Card.Body >
    <Card.Title className="text-new">ร่วมยินดีกับผลเลือกตั้งของคุณอุ้ม【อันดับที่ 27】</Card.Title>
    <Card.Text className="text-new">
    เมื่อ 26 มกราคมที่ผ่านมาในงานประการผลการเลือกตั้ง BNK48GenneralElection 
    คุณอุ้มของพวกเราคว้า อันดับที่ 27 ขอบคุณทุกคะแนนโหวตทั้งจากกิจกรรมปาสลิป และ การโหวตแบบปกติ              
    </Card.Text >
  </Card.Body>
</Card>
<Card style={{ width: '16rem',margin:'10px', padding:'10px'}}>
  <Card.Img variant="top" src="./Image/theater.jpg" />
  <Card.Body>
    <Card.Title className="text-new">
    【BNK48 The Campus Stage Performance】
8 กุมภาพันธ์ 2562 (ศุกร์) เวลา 19:00น. : BNK48 Trainee「PARTY ga Hajimaru yo」</Card.Title>
    <Card.Text className="text-new">
    
สมาชิกที่ขึ้นแสดง
Natherine / Bamboo / Panda / Kheng / Myyu / Oom / Cake / Gygee / Pakwan / Nine / Aom / Minmin / Phukkhom / Faii / Stang / Niky           
    </Card.Text>
  </Card.Body>
</Card>

  
  <FooterPage />
     </div>

   );
  }
}
