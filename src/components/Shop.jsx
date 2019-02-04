import React, {Component} from "react"
import { Col,Button,Card,Media,ButtonGroup,Form } from 'react-bootstrap';
import Navbar from './CustomNavbar';
import SnowStorm from 'react-snowstorm';
import FooterPage from './Footer';
import './Shop.css'
export default class Shop extends Component {
  render() {
    return(
     <div>
       
    <SnowStorm />
    <Navbar />
    

 <Card >
   <Media>
         <img width={350} height={350} className="mr-3" src="/Image/shop2.jpg" alt="Generic placeholder" />
    
    <Media.Body>
    <h3 className="text4">เสื้อ 2</h3>
  <Card>
  <Form>
  <h5 className="text">กรุณาระบุจำนวนที่ต้องการ</h5>
    <input type="number" name="Quatity" placeholder="ใส่จำนวน" min="0"></input>
    <div className="size">
    <ButtonGroup size="lg">
    <Button>S</Button>
    <Button>M</Button>
    <Button>L</Button>
    <Button>XL</Button>
    <Button>XXL</Button>
  </ButtonGroup>
  </div>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="กรอก email สำหรับยืนยันคำสั่งซื้อ" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridName">
      <Form.Label>ชื่อ-นามสกุล</Form.Label>
      <Form.Control type="text" placeholder="ชื่อ-นามสกุล" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>ที่อยู่สำหรับจัดส่ง</Form.Label>
    <Form.Control placeholder="ตัวอย่าง1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>ที่อยู่สำหรับจัดส่งเพิ่มเติม</Form.Label>
    <Form.Control placeholder="อาพาร์เมนท์,คอนโด,ชั้นที่" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>อำเภอ</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>จังหวัด</Form.Label>
      <Form.Control as="select">
        <option>เลือกจังหวัด...</option>
        <option>กระบี่</option> 
          <option>กรุงเทพมหานคร</option>
          <option>กาญจนบุรี</option>
         <option>กาฬสินธุ์</option>
         <option>กำแพงเพชร</option>
         <option>ขอนแก่น</option>
         <option>จันทบุรี</option>
         <option>ฉะเชิงเทรา</option>
         <option>ชลบุรี</option>
         <option>ชัยนาท</option>
         <option>ชัยภูมิ</option>
          <option>ชุมพร</option>
          <option>เชียงราย</option>
          <option>เชียงใหม่</option>
          <option> ตรัง</option>
          <option>  ตราด</option>
          <option>ตาก</option>
          <option>  นครนายก</option>
          <option>  นครปฐม</option>
          <option>  นครพนม</option>
          <option>  นครราชสีมา</option>
          <option> นครศรีธรรมราช</option>
          <option>  นครสวรรค์</option>
          <option> นนทบุรี</option>
          <option>  นราธิวาส</option>
          <option> น่าน</option>
          <option>  บึงกาฬ</option>
          <option>  บุรีรัมย์</option>
          <option>  ปทุมธานี</option>
          <option> ประจวบ</option>
          <option> คีรีขันธ์</option>
          <option> ปราจีนบุรี</option>
          <option> ปัตตานี</option>
          <option> พระนครศรีอยุธยา</option>
          <option> พะเยา</option>
          <option> พังงา</option>
          <option> พัทลุง</option>
          <option>  พิจิตร</option>
          <option> พิษณุโลก</option>
          <option> เพชรบุรี</option>
          <option> เพชรบูรณ์</option>
          <option> แพร่</option>
          <option> ภูเก็ต</option>
          <option> มหาสารคาม</option>
          <option> มุกดาหาร</option>
          <option>  แม่ฮ่องสอน</option>
          <option> ยโสธร</option>
          <option> ยะลา</option>
          <option> ร้อยเอ็ด</option>
          <option>  ระนอง</option>
          <option>  ระยอง</option>
          <option> ราชบุรี</option>
          <option> ลพบุรี</option>
          <option>   ลำปาง</option>
          <option>ลำพูน</option>
          <option>ลย</option>
          <option>ศรีสะเกษ</option>
          <option>สกลนคร</option>
          <option>สงขลา</option>
          <option>สตูล</option>
          <option>สมุทรปราการ</option>
          <option>สมุทรสงคราม</option>
          <option>สมุทรสาคร</option>
          <option>สระแก้ว</option>
          <option>สระบุรี</option>
          <option>สิงห์บุรี</option>
          <option>สุโขทัย</option>
          <option>สุพรรณบุรี</option>
          <option>สุราษฎร์ธานี</option>
          <option>สุรินทร์</option>
          <option>หนองคาย</option>
          <option>หนองบัวลำภู</option>
          <option>อ่างทอง</option>
          <option>อำนาจเจริญ</option>
          <option>อุดรธานี</option>
          <option>อุตรดิตถ์</option>
          <option>อุทัยธานี</option>
          <option>อุบลราชธานี</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  
  </Form.Row>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>ข้อความเพิ่มเติม</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
  <Button variant="success" type="submit">
    Submit
  </Button>
</Form>
</Card>
  </Media.Body>
</Media>
   </Card>    
  <FooterPage />
     </div>

   );
  }
}
