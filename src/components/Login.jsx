import React, {Component} from 'react'
import {Row,Col, Container,Card} from 'react-bootstrap'
import SnowStorm from 'react-snowstorm';
import Navbar from './CustomNavbar';
import FooterPage from './Footer';
import './Login.css'
export default class Login extends Component{
    render(){
        return (  
    <div>
        
       <Navbar />
       <SnowStorm />
       <Card body>
        <h1 className="text">*ระบบอยู่ในระหว่างการพัฒนาหากพบปัญหาโปรดเเจ้ง*</h1>
         <div id="container">
            <div className="frame-left">
                 <h1>Sign Up</h1>
                 <input type="text" name="username" placeholder="Username"/>
                 <input type="email" name="email" placeholder="Email"/>
                 <input type="password" name="password" placeholder="Password"/>
                 <input type="password" name="password2" placeholder="Confrim your password"/>
                <input type="submit" name="signup-button" value="Sign Up"/>
                <button className="social facebook">Log in with Facebook</button>
             <button className="social twitter">Log in with Twitter</button>
        </div>
            <div className="frame-right"></div>
           
           </div></Card>;
       
    </div>
  );
 }
}


