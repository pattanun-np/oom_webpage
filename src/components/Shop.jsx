import React, {Component} from "react"
import {Button, Card, Carousel} from 'react-bootstrap';
import Navbar from './CustomNavbar';
import {Animated} from "react-animated-css";
import SnowStorm from 'react-snowstorm';
import FooterPage from './Footer';
import './Shop.css';
export default class Shop extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this
            .handleClick
            .bind(this);
        this.state = {
            Cart: 0
        };
    }
    handleClick() {
        this.setState({
            Cart: this.state.Cart + 1
        });
    }
    render() {
        return (
            <div>
                <SnowStorm/>
                <Navbar/>

                <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
                    <div>

                        <Card id="container8">
                            <h3 className="text4">เสื้อ 1 (ID:#001)</h3>
                            <img width={300} height={300} src="/Image/001.jpg" alt="Generic placeholder"/>

                            <Button name="ID: #001" href="shop001">BUY</Button>
                        </Card>

                    </div>
                </Animated>

                <FooterPage/>
            </div>
        );
    }
}
