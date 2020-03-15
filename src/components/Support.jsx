import React, {Component} from "react"
import {Image  } from 'react-bootstrap';
import {Animated} from "react-animated-css";
import Navbar from './CustomNavbar';
import SnowStorm from 'react-snowstorm';
import FooterPage from './Footer';
import './Support.css'
export default class Support extends Component {
  render() {
    return(
     <div>
       
    <SnowStorm />
    <Navbar />
  
  <Animated animationIn="bounceInLeft" animationOut="Jello" isVisible={true}>
       <div id="content">
       <h1 className="text">ผู้สนับสนุน</h1>
       <h1 className="textfanpage">FANPAGE</h1>
       <a className="page" href="https://www.facebook.com/Oom-BNK48-Thailand-Fans-1665294563562825/">
       <Image width={150} height={150} alt="50x50" src="Image/page.jpg" rounded/></a> 
 

      <a className="page" href="https://www.facebook.com/OomMoonLightCastle/">
        <Image width={150} height={150} alt="50x50" src="Image/moonlight.jpg" rounded/></a>
 

          <a className="page" href="https://www.facebook.com/oomimgarden/">
        <Image width={150} height={150} alt="50x50" src="Image/ommim.jpg" rounded/></a>
        <h1 className="textYT">FANSONG YOUTUBE CHANNEL</h1>
        <a className="page" href="https://www.youtube.com/channel/UCykpphkVPE2Q1qr44I-m0cw">
        <Image width={150} height={150} alt="50x50" src="Image/RSDP.jpg" rounded/></a>
        <a className="page" href="https://www.youtube.com/user/nawapon92">
        <Image width={150} height={150} alt="50x50" src="Image/Yoshineko.png" rounded/></a>
        <a className="page" href="https://www.youtube.com/channel/UCYS6qoWDDv7kRnROlySKTzg">
        <Image width={150} height={150} alt="50x50" src="Image/markmywords..jpg" rounded/></a>

        <h1 className="textWeb">WEB CREATOR FANPAGE</h1>
        <a className="page" href="https://www.facebook.com/StandUpCode/">
        <Image width={150} height={150} alt="50x50" src="Image/1.png" rounded/></a>
       </div>
       </Animated>
       <div>Icons made by <a href="https://www.flaticon.com/authors/chanut" title="Chanut">Chanut</a> from <a href="https://www.flaticon.com/" 		    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 		    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
  <FooterPage />
     </div>

   );
  }
}
