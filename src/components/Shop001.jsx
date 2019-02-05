import React, {Component} from "react"
import { Col,Button,Card,Modal,ButtonGroup,Form } from 'react-bootstrap';
import Navbar from './CustomNavbar';
import SnowStorm from 'react-snowstorm';
import FooterPage from './Footer';
import ImageUploader from 'react-images-upload';
import './Shop.css'
export default class Shop001 extends Component {

  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
    pictures: [] ,
    QuatityS:0,
    QuatityM:0,
    QuatityL:0  ,
    QuatityXL:0,
    QuatityXXL:0,
    show: false,
    };
    this.onDrop = this.onDrop.bind(this);
  }
  onDrop(picture) {
    this.setState({
        pictures: this.state.pictures.concat(picture),
    });
}
handleClose() {
  this.setState({ show: false });
}

handleShow() {
  this.setState({ show: true });
}

  render() {
    return(
     <div>
       
    <SnowStorm />
    <Navbar />

    <Card id="container7" >
    
  <Form>
  <img width={150} height={150} className="mr-3" src="/Image/001.jpg" alt="Generic placeholder" />
    <h3 className="text4">เสื้อ 2 (ID:#001)</h3>
  <h5 className="text">กรุณาระบุจำนวน และ ขนาดที่ต้องการ</h5>
    <div>
    <ButtonGroup size="lg">
    <Button variant="outline-success"Size="S" >S <input type="number" name="QuatityS"  min="0"></input> </Button>
    <Button variant="outline-success"Size="M">L  <input type="number" name="QuatityL"  min="0"></input> </Button>
    <Button variant="outline-success"Size="XL" >XL<input type="number" name="QuatityXL"  min="0"></input> </Button>
    <Button variant="outline-success"Size="XXL">2XL <input type="number" name="QuatityXXL"  min="0"></input> </Button>
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

  <Form.Group controlId="formGridNumber">
    <Form.Label>เบอร์มือถือ</Form.Label>
    <Form.Control placeholder="08xxxxxxx" />
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
      <Form.Label>รหัสไปรษณีย์</Form.Label>
      <Form.Control />
    </Form.Group>
  
  </Form.Row>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>ข้อความเพิ่มเติม</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
  
</Form>
<h1 className="text">ค่าสินค้า <span> 900 </span> บาท</h1>
<h1 className="text">+ค่าจัดส่ง <span> 100 </span> บาท</h1>
<h1 className="text">รวมเป็นเงิน: <span> 1000 </span> บาท</h1>
<ImageUploader
                withIcon={true}
                buttonText='กรุณาส่งหลักฐานการโอนเงิน'
                onChange={this.onDrop}
                imgExtension={['.jpg',]}
                maxFileSize={5242880}
            />

<Button variant="success" onClick={this.handleShow}>Submit</Button>
<Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>ยืนยันคำสั่งซื้อ</Modal.Title>
          </Modal.Header>
          <Modal.Body>กรุณาตรวจสอบข้อมูลให้ครับถ้วนก่อนกดยืนยัน</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              ยกเลิก
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              ยืนยัน
            </Button>
          </Modal.Footer>
        </Modal>
</Card>

  <FooterPage />
     </div>

   );
  }
}
