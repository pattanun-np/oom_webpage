import React, {Component} from 'react';
import {Card, OverlayTrigger} from 'react-bootstrap';
import './Upload.css';
import Navbar from './CustomNavbar';
import SnowStorm from 'react-snowstorm';
import FooterPage from './Footer';


export default class UploadImage extends Component {
    constructor(props) {
        super(props)
       
    }


    render() {
        return (
            <div>
                <Navbar/>
                <SnowStorm/>
                <Card id='container9'>
                    <h2 className="text">Drag & Drop Your Payment Slip </h2>
                    <p className="text">(ลากแล้ววางสลิปหลักฐานการชำระเงินได้เลย)</p>
                    <p className="text4">**
                        ถ้าไม่มีการส่งไฟล์หลักฐานการโอนเงินจะถือว่าการส่งซื้อไม่สมบูรณ์ระบบจะทำการยกเลิกคำสั่งซื้ออัตโนมัติภายใน     5 วัน **</p>
                    {/* <Dashboard uppy={this.uppy}/> */}
                </Card>
                <FooterPage/>
            </div>

        );
    }
}