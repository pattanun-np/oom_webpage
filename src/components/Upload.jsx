import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import './Upload.css';
import Navbar from './CustomNavbar';
import SnowStorm from 'react-snowstorm';
import FooterPage from './Footer';
import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'
const Uppy = require('@uppy/core')
const Tus = require('@uppy/tus')
const { Dashboard} = require('@uppy/react')


export default class UploadImage extends Component {
  constructor (props) {
    super(props)
    this.uppy = Uppy()
    .use(Tus, {
      endpoint: 'https://master.tus.io/files/', // use your tus endpoint here
      resume: true,
      autoRetry: true,
      limit: 2,
      retryDelays: [0, 1000, 3000, 5000]
    })
  }

  componentWillUnmount () {
    this.uppy.close()
  }
  render() {
    return(
     <div>
     <Navbar />
     <SnowStorm />
     <Card id='container9'>
        <h2 className="text">Drag & Drop Your Payment Slip </h2>
        <p className="text4">** ถ้าไม่มีการส่งไฟล์หลักฐานการโอนเงิน จะถือว่าการส่งซื้อไม่สมบูรณ์ระบบจะทำการยกเลิกคำสั่งซื้ออัตโนมัติภายใน 5 วัน **</p>
        <Dashboard uppy={this.uppy}/>
       </Card>
     <FooterPage />
     </div>

   );
  }
}
