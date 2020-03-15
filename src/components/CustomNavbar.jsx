import React, {Component} from 'react'
import './CustomNavbar.css'
import {Animated} from "react-animated-css";
export default class CustomNavbar extends Component {
    render() {
        return (
            <div>
                <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
                    <div>
                        <nav className="navbar is-transparent">
                            <div className="navbar-brand">
                                <a className="navbar-item" href="/">
                                    <h1 className="navbar-item">Oom Bnk48 Thailand Fans</h1>
                                </a>
                                <div
                                    className="navbar-burger burger"
                                    data-target="navbarExampleTransparentExample">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>

                            <div id="navbarExampleTransparentExample" className="navbar-menu">
                                <div className="navbar-start">
                                    <a className="navbar-item" href="/">
                                        <span className="icon icon has-text-primary">
                                            <i className="fas fa-home"></i>
                                        </span>
                                        <span>Home</span>

                                    </a>

                                    <a className="navbar-item" href="/about">
                                        <span className="icon has-text-warning">
                                            <i className="fas fa-info-circle"></i>
                                        </span>
                                        <span>
                                            About Us</span>

                                    </a>
                                    <a className="navbar-item" href="/support">
                                        <span className="icon has-text-danger">
                                            <i className="fas fa-question-circle"></i>
                                        </span>
                                        <span>
                                            Support
                                        </span>

                                    </a>
                                    <a className="navbar-item" href="/gallery">
                                        <span className="icon has-text-link">
                                            <i className="fas fa-images"></i>
                                        </span>
                                        <span>
                                            gallery</span>

                                    </a>
                                    <a className="navbar-item" href="/news">
                                        <span className="icon has-text-info">
                                            <i className="fas fa-newspaper"></i>
                                        </span>
                                        <span>
                                            News</span>

                                    </a>
                                    <a className="navbar-item" href="/shop">
                                        <span className="icon has-text-success">
                                            <i className="fas fa-store"></i>
                                        </span>
                                        <span>
                                            Shop</span>

                                    </a>

                                </div>

                                <div className="navbar-end">
                                    <div className="navbar-item">
                                        <div className="field is-grouped">
                                            <p className="control">
                                                <a className="button is-danger" href="/signup">
                                                    <span className="icon">
                                                        <i className="fas fa-user-plus"></i>
                                                    </span>
                                                    <span>
                                                        SignUp
                                                    </span>
                                                </a>
                                            </p>
                                            <p className="control">
                                                <a className="button is-primary" href="/login">
                                                    <span className="icon">
                                                        <i className="fas fa-user-circle "></i>
                                                    </span>
                                                    <span>Login</span>
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </Animated>
            </div>
        );

    }
}