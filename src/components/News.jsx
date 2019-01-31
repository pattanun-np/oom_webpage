import React, {Component} from "react"
import {Grid, Row, Col,  Thumbnail  } from 'react-bootstrap';
import {Animated} from "react-animated-css";
import Navbar from './CustomNavbar';
import SnowStorm from 'react-snowstorm';
import FooterPage from './Footer';
export default class News extends Component {
  render() {
    return(
     <div>
       
    <SnowStorm />
    <Navbar />

       <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
           <div>
                    <h1 className="text"> OOMIM NEWS</h1>
           </div>
       </Animated>

        <Grid>
    <Row>

      <Animated animationIn="bounceInUp" animationOut="fadeOut" isVisible={true}>
          <div>
            <Col xs={6} md={4}>
              <Thumbnail src="Image/ooom ham.jpg" alt="242x200">
                <h3 className="text">คุณนุ่มนิ่มกับการถ่ายแบบ HAMBURGER</h3>
                <p>คุณอุ้ม ของพวกเราได้มีโอกาสถ่ายแบบนิตยาสาร HAMBURGER </p>
              </Thumbnail>
            </Col>
          </div>
      </Animated>

      <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>
          <div>
            <Col xs={6} md={4}>
              <Thumbnail src="Image/te.jpg" alt="242x200">
                <h3 className="text">การแสดงวันที่ 28 ก.ย. 2561</h3>
                <p>【BNK48 The Campus Stage Performance】</p>
                <p>28 กันยายน 2561 (ศุกร์) เวลา 19:00น. : BNK48 Trainee Stage「PARTY ga Hajimaru yo」
                  สมาชิกที่ขึ้นแสดง New / Natherine / Bamboo / Kheng / View / Maira / Maysa / Oom / Gygee / Fifa / Nine / Deenee / Ratah / Stang / Niky / Izurina</p>
              </Thumbnail>
            </Col>
          </div>
      </Animated>

      <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
          <div>
            <Col xs={6} md={4}>
              <Thumbnail src="Image/te2.jpg" alt="242x200">
                <h3 className="text">การแสดงวันที่ 29 ก.ย. 2561</h3>
                <p>【BNK48 The Campus Stage Performance】</p>
                <p>29 กันยายน 2561 (เสาร์) เวลา 13:00น. : BNK48 Team BⅢ 1st Stage「PARTY ga Hajimaru yo」
                    สมาชิกที่ขึ้นแสดง Cherprang / Tarwaan / Jennis / Pupe / Noey / Jane / Miori / Jaa / Mind / Orn / Namsai / Music / Pun / Satchan / Jib / Korn</p>
              </Thumbnail>
            </Col>
          </div>
      </Animated>


      <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
          <div>
            <Col xs={6} md={4}>
              <Thumbnail src="Image/Congrat Oom 100K_04.jpg" alt="242x200">
                <h3 className="text">Instagram อุ้มแสนเเตกแล้ว</h3>
                <p>Instagram ของ น้องอุ้ม หรือ อุ้มBNK48 ครบ 100K Followers แล้วจ้า!!</p>
              </Thumbnail>
            </Col>
          </div>
      </Animated>

      <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>
          <div>
            <Col xs={6} md={4}>
              <Thumbnail src="Image/election.jpg" alt="242x200">
                <h3 className="text">ร่วมยินดีกับผลเลือกตั้งของคุณอุ้ม</h3>
                <p>【อันดับที่ 27】</p>
                <p>เมื่อ 26 มกราคมที่ผ่านมาในงานประการผลการเลือกตั้ง BNK48GenneralElection 
                  คุณอุ้มของพวกเราคว้า อันดับที่ 27 ขอบคุณทุกคะแนนโหวตทั้งจากกิจกรรมปาสลิป และ การโหวตแบบปกติ 
                </p>
              </Thumbnail>
            </Col>
          </div>
      </Animated>

    </Row>
  </Grid>;
  <FooterPage />
     </div>

   );
  }
}
