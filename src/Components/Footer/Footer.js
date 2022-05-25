import React from "react";
import LOGO from "../../Assets/images/logo-main.png";
import LOGO_HORIZONTAL from "../../Assets/images/logo-horizontal.png";
import './Footer.scss';
export default function Footer() {
    return (
        <React.Fragment>
            <footer>
                <div className="d-flex justify-content-between footer-top">
                    <a className="navbar-brand" href="index.html">
                        <div className="logo">
                            <img src={LOGO} alt="" className="img-fluid" />
                        </div>
                        <div className="logo">
                            <img src={LOGO_HORIZONTAL} alt="" className="img-fluid" />
                        </div>
                    </a>
                    <ul className="d-flex align-items-lg-center align-items-sm-start footer-right">
                        <li><a href="careers.html"><span className="">Careers</span></a></li>
                        <li><a href="about-us.html"><span className="">About Us</span></a></li>
                        <li><a href="faq.html"><span className="">FAQ</span></a></li>
                        <li><a href="privacy-policy.html"><span className="">Privacy Policy</span></a></li>
                        <li><a href="terms-and-conditions.html"><span className="">Terms & Conditions</span></a></li>
                        <li><a href="help.html"><span className="">Help</span></a></li>
                    </ul>
                </div>
                <div className="d-flex justify-content-between footer-bottom">
                    <ul className="d-flex align-items-center social-icons">
                        <li>
                            <p>Follow us</p>
                        </li>
                        <li>
                            <a href=""><img src="images/Icon-Facebook.svg" alt="" /></a>
                        </li>
                        <li>
                            <a href=""><img src="images/Icon-Twitter.svg" alt="" /></a>
                        </li>
                        <li>
                            <a href=""><img src="images/Icon-Google plus.svg" alt="" /></a>
                        </li>
                        <li>
                            <a href=""><img src="images/Icon-Instagram.svg" alt="" /></a>
                        </li>
                    </ul>
                    <p className="copyright-text">Copyright 2022 @Dominion Prep</p>
                </div>

            </footer>
        </React.Fragment>
    )
}