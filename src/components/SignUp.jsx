import React, {Component} from 'react'
import {Col} from 'react-bootstrap'
import SnowStorm from 'react-snowstorm';
import Navbar from './CustomNavbar';
import FooterPage from './Footer';
import auth from '../firebase'
import './SignUp.css'
export default class SignUP extends Component{
    
    render(){
        
        return (  
    <div>
        
       <Navbar />
       <SnowStorm />

         <Col  id="container">
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
             <a className="text" href="/login"><span>Already has an acount?</span>Login</a>
           </Col> 
           <FooterPage/>
   </div>
  );
 }
}


