// import { render } from "@testing-library/react";
import React from "react";
import "./Header.scss";
import LOGO from "../../Assets/images/logo-main.png";
import LOGO_HORIZONTAL from "../../Assets/images/logo-horizontal.png";
export default function Header(){
    return(
        <React.Fragment>
               <header>
        <nav className="navbar navbar-light navbar-expand-lg">
            <a className="navbar-brand" href="index.html">
                <div className="logo">
                    <img src={LOGO} alt="" className="img-fluid" />                   
                </div>
                <div className="logo">
                    <img src={LOGO_HORIZONTAL} alt="" className="img-fluid" />                   
                </div>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="hamburger"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                <ul className="d-flex align-items-lg-center align-items-sm-start header-right">
                    <li><a href="our-story.html"><span className="">Our Story</span></a></li>
                    <li><a href="for-parents.html"><span className="">For Parents</span></a></li>
                    <li><a href="for-teachers.html"><span className="">For Teachers</span></a></li>
                    <li><a href="pages/curriculum/curriculum.html"><span className="">Curriculum</span></a></li>
                    <li><a href="pages/admission/admission.html"><span className="">Admission</span></a></li>
                    <li><a href="pages/application/application.html"><span className="">Application</span></a></li>
                    <li className="login-signup"><a href=""><span className="">Login/Signup</span></a></li>

                </ul>
            </div>
        </nav>
    </header>
        </React.Fragment>
    )
}