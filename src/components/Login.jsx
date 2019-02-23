import React, {Component} from 'react'
import {Col} from 'react-bootstrap'
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

         <Col  id="container1">
            <div className="frame-left">
                 <h1>Login</h1>
                 <input type="text" name="username" placeholder="Username"/>
                 <input type="password" name="password" placeholder="Password"/>
                <input type="submit1" name="signup-button" value="  Login "/>
                <button className="social facebook">Log in with Facebook</button>
                <button className="social twitter">Log in with Twitter</button>
             </div>
             <a className="text" href="/signup"><span>Do not has an acount? </span> SignUp</a>
          </Col>
           <FooterPage/>
   </div>
  );
 }
}


