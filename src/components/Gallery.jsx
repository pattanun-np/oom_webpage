import React, {Component} from "react"
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import Navbar from './CustomNavbar';
import SnowStorm from 'react-snowstorm';
import FooterPage from './Footer';
import './Gallery.css'
import {Card} from 'react-bootstrap'

export default class News extends Component {
  render() {
    
    const images = [
    {
      original:  'Image/คุณอุ้มนุ่มนิ่ม1.jpg',
      thumbnail: 'Image/คุณอุ้มนุ่มนิ่ม1.jpg',
    },
    {
      original:  'Image/คุณอุ้มนุ่มนิ่ม2.jpg',
      thumbnail: 'Image/คุณอุ้มนุ่มนิ่ม2.jpg',
    },
    {
      original:  'Image/Oom Handshake Event 1.jpg',
      thumbnail: 'Image/Oom Handshake Event 1.jpg',
    },
    
    {
      original:  'Image/คุณอุ้มนุ่มนิ่ม3.jpg',
      thumbnail: 'Image/คุณอุ้มนุ่มนิ่ม3.jpg',
    },
    {
      original:  'Image/คุณอุ้มนุ่มนิ่ม4.jpg',
      thumbnail: 'Image/คุณอุ้มนุ่มนิ่ม4.jpg',
    },
    
    {
      original: 'Image/1.jpg',
      thumbnail: 'Image/1.jpg'
    },
    {
      original: 'Image/3.jpg',
      thumbnail: 'Image/3.jpg'
    },
    {
      original:  'Image/4.jpg',
      thumbnail: 'Image/4.jpg',
    },
    {
      original: 'Image/6.jpg',
      thumbnail: 'Image/6.jpg'
    },
    {
      original: 'Image/8.jpg',
      thumbnail: 'Image/8.jpg'
    },
    {
      original:  'Image/อุ้มมั้ยร่าาาา_180719_0036.jpg',
      thumbnail: 'Image/อุ้มมั้ยร่าาาา_180719_0036.jpg',
    },
    {
      original: 'Image/11.jpg',
      thumbnail: 'Image/11.jpg'
    },
    {
      original: 'Image/9.jpg',
      thumbnail: 'Image/9.jpg'
    },
    {
      original:  'Image/22.jpg',
      thumbnail: 'Image/22.jpg',
    },
    {
      original: 'Image/12.jpg',
      thumbnail: 'Image/12.jpg'
    },
    {
      original: 'Image/13.jpg',
      thumbnail: 'Image/13.jpg'
    },
    {
      original:  'Image/15.jpg',
      thumbnail: 'Image/15.jpg',
    },
    {
      original: 'Image/17.jpg',
      thumbnail: 'Image/17.jpg'
    },
    {
      original:  'Image/14.jpg',
      thumbnail: 'Image/14.jpg',
    },
    {
      original: 'Image/16.jpg',
      thumbnail: 'Image/16.jpg'
    },
    {
      original: 'Image/23.jpg',
      thumbnail: 'Image/23.jpg'
    },
    {
      original:  'Image/24.jpg',
      thumbnail: 'Image/24.jpg',
    },
    {
      original: 'Image/25.jpg',
      thumbnail: 'Image/25.jpg'
    },
    {
      original: 'Image/27.jpg',
      thumbnail: 'Image/27.jpg'
    },
    {
      original:  'Image/28.jpg',
      thumbnail: 'Image/28.jpg',
    },
    {
      original: 'Image/29.jpg',
      thumbnail: 'Image/29.jpg'
    },
    {
      original: 'Image/30.jpg',
      thumbnail: 'Image/30.jpg'
    },
    {
      original:  'Image/32.jpg',
      thumbnail: 'Image/32.jpg',
    },
    {
      original: 'Image/31.jpg',
      thumbnail: 'Image/31.jpg'
    },
    {
      original: 'Image/33.jpg',
      thumbnail: 'Image/33.jpg'
    },
    {
      original:  'Image/34.jpg',
      thumbnail: 'Image/34.jpg',
    },
    {
      original: 'Image/35.jpg',
      thumbnail: 'Image/35.jpg'
    },
    {
      original: 'Image/36.jpg',
      thumbnail: 'Image/36.jpg'
    },
    {
      original:  'Image/37.jpg',
      thumbnail: 'Image/37.jpg',
    },
    {
      original: 'Image/39.jpg',
      thumbnail: 'Image/39.jpg'
    },
    {
      original: 'Image/38.jpg',
      thumbnail: 'Image/38.jpg'
    },
    {
      original:  'Image/49.jpg',
      thumbnail: 'Image/40.jpg',
    },
    {
      original: 'Image/42.jpg',
      thumbnail: 'Image/42.jpg'
    },
    {
      original: 'Image/43.jpg',
      thumbnail: 'Image/43.jpg'
    },
    {
      original:  'Image/44.jpg',
      thumbnail: 'Image/44.jpg',
    },
    {
      original: 'Image/45.jpg',
      thumbnail: 'Image/45.jpg'
    },
    {
      original: 'Image/46.jpg',
      thumbnail: 'Image/46.jpg'
    },
    {
      original:  'Image/47.jpg',
      thumbnail: 'Image/47.jpg',
    },
    {
      original: 'Image/48.jpg',
      thumbnail: 'Image/48.jpg'
    },
    {
      original: 'Image/49.jpg',
      thumbnail: 'Image/49.jpg'
    },
    {
      original:  'Image/50.jpg',
      thumbnail: 'Image/50.jpg',
    },
    {
      original: 'Image/51.jpg',
      thumbnail: 'Image/51.jpg'
    },
    {
      original: 'Image/53.jpg',
      thumbnail: 'Image/53.jpg'
    },
    {
      original:  'Image/52.jpg',
      thumbnail: 'Image/52.jpg',
    },
    {
      original: 'Image/55.jpg',
      thumbnail: 'Image/55.jpg'
    },
    {
      original: 'Image/56.jpg',
      thumbnail: 'Image/56.jpg'
    },
    {
      original:  'Image/57.jpg',
      thumbnail: 'Image/57.jpg',
    },
    {
      original: 'Image/58.jpg',
      thumbnail: 'Image/58.jpg'
    },
    {
      original: 'Image/59.jpg',
      thumbnail: 'Image/59.jpg'
    },
    {
      original:  'Image/62.jpg',
      thumbnail: 'Image/62.jpg',
    },
    {
      original: 'Image/61.jpg',
      thumbnail: 'Image/61.jpg'
    },
    {
      original: 'Image/63.jpg',
      thumbnail: 'Image/63.jpg'
    },  {
        original: 'Image/64.jpg',
        thumbnail: 'Image/64.jpg'
    },  {
        original: 'Image/65.jpg',
        thumbnail: 'Image/65.jpg'
    },  {
        original: 'Image/66.jpg',
        thumbnail: 'Image/66.jpg'
    }
  ]
    return(
     <div>
       
    <SnowStorm />
    <Navbar />
    <Card>
       <div id="gallery">
       <ImageGallery items={images} />
       </div>
    </Card>
    <FooterPage />
     </div>

    );
  }
}
