import React, {Component} from "react"
import { Col,Button,Card,Modal,ListGroup,Form } from 'react-bootstrap';
import Navbar from './CustomNavbar';
import SnowStorm from 'react-snowstorm';
import FooterPage from './Footer';
import './Shop.css'
import timestamp from 'time-stamp';
import {Animated} from "react-animated-css";
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
    Quatity2XL:0,
    Order:[],
    Email:null,
    Name:null,
    Adress:null,
    Tell:null,
    District:null,
    Province:null,
    ZipCode:null,
    ExternalComment:null,
    show: false,
    timestamp: timestamp,
    
    };
    
  }
handleClose(Order) {
  this.setState({ show: false });
}

handleShow() {
  
  this.setState({ show: true });
}
 
onChange1(event){
  this.setState({
    QuatityS:event.target.value
  });
}

onChange2(event){
  this.setState({
    QuatityM:event.target.value
  });
}
onChange3(event){
  this.setState({
    QuatityL:event.target.value
  });
}
onChange4(event){
  this.setState({
    QuatityXL:event.target.value
  });
}
onChange5(event){
  this.setState({
    Quatity2XL:event.target.value
  });
}
onChangeEmail(event){
  this.setState({
    Email:event.target.value
  });
}
onChangeAdress(event){
  this.setState({
    Adress:event.target.value
  });
}
onChangeName(event){
  this.setState({
    Name:event.target.value
  });
}

onChangeTell(event){
  this.setState({
    Tel:event.target.value
  });
}
onChangeDistrict(event){
  this.setState({
    District:event.target.value
  });
}
onChangeProvince(event){
  this.setState({
    Province:event.target.value
  });
}
onChangeZipCode(event){
  this.setState({
    ZipCode:event.target.value
  });
}
onChangeExternalComment(event){
  this.setState({
    ExternalComment:event.target.value
  });
}


  render() {
    const Email = this.state.Email;
    const Name = this.state.Name;
    const Adress = this.state.Adress;
    const Tel = this.state.Tell ;
    const District = this.state.District ;
    const Province = this.state.Province ;
    const ZipCode = this.state.ZipCode ;
    const ExternalComment = this.state.ExternalComment ;
    const Total = this.state.QuatityS*300+this.state.QuatityM*300+this.state.QuatityL*300+this.state.QuatityXL*300+this.state.Quatity2XL*300;
    const ShippingFee = this.state.QuatityS*50+this.state.QuatityM*50+this.state.QuatityL*50+this.state.QuatityXL*50+this.state.Quatity2XL*50;
    const SubTotal = Total+ShippingFee;
    
    return(
     <div>
       
    <SnowStorm />
    <Navbar />
    <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
    <Card id="container7" >
    
  <Form>
  <img width={150} height={150} className="mr-3" src="/Image/001.jpg" alt="Generic placeholder" />
    <h3 className="text4">เสื้อ 2 (ID:#001)</h3>
  <h5 className="text">กรุณาระบุจำนวน และ ขนาดที่ต้องการ</h5>
    <div>
    <input type="number" name="QuatityS"  min="0" placeholder="S" onChange={this.onChange1.bind(this)} step="any"/>
    <input type="number" name="QuatityL"  min="0"  placeholder="M" onChange={this.onChange2.bind(this)} step="any"/>
    <input type="number" name="QuatityXL"  min="0" placeholder="L"onChange={this.onChange3.bind(this)} step="any"/>
    <input type="number" name="QuatityXXL"  min="0" placeholder="XL"onChange={this.onChange4.bind(this)}step="any" />
    <input type="number" name="QuatityXXL"  min="0" placeholder="2XL"onChange={this.onChange5.bind(this)}step="any" />
  </div>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email"   placeholder="กรอก email สำหรับยืนยันคำสั่งซื้อ" onChange={this.onChangeEmail.bind(this)}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridName">
      <Form.Label>ชื่อ-นามสกุล</Form.Label>
      <Form.Control type="text" placeholder="ชื่อ-นามสกุล" onChange={this.onChangeName.bind(this)} />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>ที่อยู่สำหรับจัดส่ง</Form.Label>
    <Form.Control placeholder="ตัวอย่าง1234 Main St"onChange={this.onChangeAdress.bind(this)} />
  </Form.Group>

  <Form.Group controlId="formGridTel">
    <Form.Label>เบอร์มือถือ</Form.Label>
    <Form.Control type="tel" placeholder="08xxxxxxx" onChange={this.onChangeTell.bind(this)} />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>อำเภอ</Form.Label >
      <Form.Control onChange={this.onChangeDistrict.bind(this)} />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>จังหวัด</Form.Label>
      <Form.Control as="select" onChange={this.onChangeProvince.bind(this)}>
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
          <option>ตรัง</option>
          <option>ตราด</option>
          <option>ตาก</option>
          <option>นครนายก</option>
          <option>นครปฐม</option>
          <option>นครพนม</option>
          <option>นครราชสีมา</option>
          <option>นครศรีธรรมราช</option>
          <option>นครสวรรค์</option>
          <option>นนทบุรี</option>
          <option>นราธิวาส</option>
          <option>น่าน</option>
          <option>บึงกาฬ</option>
          <option>บุรีรัมย์</option>
          <option>ปทุมธานี</option>
          <option>ประจวบคีรีขันธ์</option>
          <option>คีรีขันธ์</option>
          <option>ปราจีนบุรี</option>
          <option>ปัตตานี</option>
          <option>พระนครศรีอยุธยา</option>
          <option>พะเยา</option>
          <option>พังงา</option>
          <option>พัทลุง</option>
          <option>พิจิตร</option>
          <option>พิษณุโลก</option>
          <option>เพชรบุรี</option>
          <option>เพชรบูรณ์</option>
          <option>แพร่</option>
          <option>ภูเก็ต</option>
          <option>มหาสารคาม</option>
          <option>มุกดาหาร</option>
          <option>แม่ฮ่องสอน</option>
          <option>ยโสธร</option>
          <option>ยะลา</option>
          <option>ร้อยเอ็ด</option>
          <option>ระนอง</option>
          <option>ระยอง</option>
          <option>ราชบุรี</option>
          <option>ลพบุรี</option>
          <option>ลำปาง</option>
          <option>เลำพูน</option>
          <option>เลย</option>
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

    <Form.Group as={Col} controlId="formGridZip" placeholder="11110" onChange={this.onChangeZipCode.bind(this)}>
      <Form.Label>รหัสไปรษณีย์</Form.Label>
      <Form.Control />
    </Form.Group>
  
  </Form.Row>
  <Form.Group controlId="exampleForm.ControlTextarea1"onChange={this.onChangeExternalComment.bind(this)}>
    <Form.Label>ข้อความเพิ่มเติม(optional)</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
  
</Form>
<h6 className="text4">**ค่าส่งสินค้า (EMS) ตัวละ 50 บาท**</h6>
<ListGroup>
  <ListGroup.Item><h3 className="text">ไซส์ (S) จำนวน : <span>{this.state.QuatityS} </span> ตัว</h3></ListGroup.Item>
  <ListGroup.Item><h3 className="text">ไซส์ (M) จำนวน : <span>{this.state.QuatityM} </span> ตัว</h3></ListGroup.Item>
  <ListGroup.Item><h3 className="text">ไซส์ (L) จำนวน: <span>{this.state.QuatityL} </span> ตัว</h3></ListGroup.Item>
  <ListGroup.Item><h3 className="text">ไซส์ (XL) จำนวน: <span>{this.state.QuatityXL} </span> ตัว</h3></ListGroup.Item>
  <ListGroup.Item><h3 className="text">ไซส์ (2XL) จำนวน 2XL: <span>{this.state.Quatity2XL} </span> ตัว</h3></ListGroup.Item>
  <ListGroup.Item><h3 className="text">ค่าสินค้า <span> {Total}</span> บาท</h3></ListGroup.Item>
  <ListGroup.Item><h4 className="text">+ ค่าจัดส่ง <span>{ShippingFee}</span> บาท</h4></ListGroup.Item>
  <ListGroup.Item><h1 className="text">เป็นเงิน: <span>{SubTotal}</span> บาท</h1></ListGroup.Item>
</ListGroup>



<Button variant="success" onClick={this.handleShow} >Submit</Button>
<Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>ยืนยันคำสั่งซื้อ</Modal.Title>
          </Modal.Header>
          <Modal.Body>กรุณาตรวจสอบข้อมูลให้ครับถ้วนก่อนกดยืนยัน
          <Card>

            <h6 className="text">Email: {Email}</h6>
            <h6 className="text">ชื่อ-นามสกุล: {Name}</h6>
            <h6 className="text">ที่อยู่: {Adress}</h6>
            <h6 className="text">เบอร์มือถือ: {Tel}</h6>
            <h6 className="text">อำเภอ: {District}</h6>
            <h6 className="text">จังหวัด: {Province}</h6>
            <h6 className="text">รหัสไปรษณีย์: {ZipCode}</h6>
            <h6 className="text">ข้อความเพิ่มเติม: {ExternalComment}</h6>
            <h2 className="text4">รวมเป็นเงิน: <span>{SubTotal} </span> บาท</h2>
           
          </Card>
          </Modal.Body>
          
          <Modal.Footer>
            <Button variant="danger" onClick={this.handleClose}>
              ยกเลิก
            </Button>
            <Button variant="success" onClick={this.handleClose}>
              ยืนยัน
            </Button>
          </Modal.Footer>
        </Modal>
</Card>
</Animated>
  <FooterPage />
 
     </div>

   );
  }
}
