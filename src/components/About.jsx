import React, {Component} from "react"
import {Image, Carousel, Card} from 'react-bootstrap';
import Navbar from './CustomNavbar';
import SnowStorm from 'react-snowstorm';
import FooterPage from './Footer';
import './About.css'
export default class About extends Component {
    render() {
        return (
            <div>

                <SnowStorm/>
                <Navbar/> {/* <Card id="container7">

                    <img
                        width={200}
                        height={150}
                        className="mr-3"
                        src="favicon.ico"
                        alt="Generic placeholder"/>
                    <h3 className="text">พวกเราคือชาวสวนดอกไม้ของคุณอุ้ม (Oomim Garden)</h3>
                    <h4 className="text">
                        ความเป็นมาของชื่อ:</h4>
                    <p className="text">
                        สมัยก่อนเราใช้ชื่อห้องไลน์ว่า Oom BNK48 Thailand Fans
                        จนกระทั่งมีการเปิดโหวตชื่อด้อม เพราะอยากให้น้องมีชื่อเรียกกลุ่มแฟนคลับของน้อง
                        เลยมีการเปิดโหวตชื่อด้อมขึ้น แต่ผลโหวตยังไม่ทันออก เราก็ได้ชื่อด้อมกันแล้ว
                        โดยเพื่อนน้องที่อยู่ในกลุ่มไลน์
                        เอาชื่อด้อมที่เปิดโหวตไปให้น้องเลือกและน้องก็เลือกชื่อ "อุ้มอิ้มการ์เด้น"
                        น้องบอกว่าน่ารักดีเราเลยมีชื่อด้อมกันใช้ทุกวันนี้จร้า</p>

                    <div className="contianer-fluid">
                        <a href="https://www.facebook.com/oomimgarden/">
                            <Image
                                className="BTN"
                                width={50}
                                height={50}
                                alt="50x50"
                                src="Image/FB.png"
                                rounded/>
                        </a>
                        <a href="https://www.instagram.com/oomimgarden/">
                            <Image
                                className="BTN"
                                width={60}
                                height={60}
                                alt="50x50"
                                src="Image/IG.png"
                                rounded/>
                        </a>
                        <a href="https://twitter.com/OomTHfans">
                            <Image
                                className="BTN"
                                width={50}
                                height={50}
                                alt="50x50"
                                src="Image/twitter.png"
                                rounded/>
                        </a>
                    </div>
                </Card>

                <Carousel>
                    <Carousel.Item>
                        <img alt="900x500" width={1600} height={900} src="Image/Oomim Garden Fanclub1.jpg" rounded/>
                        <Carousel.Caption>
                            <h1 className="text1">Oomim Garden Fanclub</h1>
                            <h2 className="text2">ภาพ ณ งานจับมือ</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img alt="900x500" width={1600} height={900} src="Image/นุ่มนิ่มกับสเตจแรก.jpg" rounded/>
                        <Carousel.Caption>
                            <h1 className="text1">การเเสดงในเทียร์เตอร์สเตจเเรกของของคุณอุ้ม</h1>
                            <h2 className="text2">ภาพ ณ BNK48 THE CAMPUS</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            class=""
                            width={1600}
                            height={900}
                            alt="900x500"
                            src="Image/1st 2Gether Concert.jpg"
                            rounded/>
                        <Carousel.Caption>
                            <Image
                                class=""
                                width={80}
                                height={80}
                                alt="900x500"
                                src="Image/1st 2Gether Concert 2.jpg"
                                circle/>
                            <h1 className="text1">1 st 2 Gether Concert</h1>
                            <h2 className="text2">ภาพ ณ CentralWorld</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
 */}
             {/* <FooterPage/> */}

            </div>
        );
    }
}
