import React, {Component} from 'react'
import './Home.css'
import {Animated} from "react-animated-css";
import SnowStorm from 'react-snowstorm';
import ReactPlayer from 'react-player';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import Navbar from './CustomNavbar';
export default class Home extends Component {

    render() {
        const images = [
            {
                original: 'Image/คุณอุ้มนุ่มนิ่ม2.jpg'

            }, {
                original: 'Image/คุณอุ้มนุ่มนิ่ม3.jpg'

            }
        ]
        return (

            <div>
                <SnowStorm/>

                <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
                    <div>
                        <section className="hero is-light is-fullheight is-hero-image">
                            <Navbar/>
                            <ImageGallery items={images} sizes={100}/>
                        </section>
                    </div>
                </Animated>
            </div>
        );
    }
}