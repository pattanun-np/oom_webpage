import React, {Component} from 'react'
import {Grid, Row} from 'react-bootstrap'
import SnowStorm from 'react-snowstorm';
import Navbar from './CustomNavbar';
import FooterPage from './Footer';
import './Login.css'
export default class News extends Component{
    render(){
        return (  
    <div>
       <Navbar />
           <section className="container">
            <div className="frame">
            
            </div>
           </section>
       <FooterPage />
    </div>
  );
 }
}


