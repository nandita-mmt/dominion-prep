import React from "react";
// import OwlCarousel from 'react-owl-carousel';
// import $ from 'jquery';
// import ReactOwlCarousel from "react-owl-carousel";
// import Img from '../../Assets/
import './Body.scss';

import BANNER_IMG1 from "../../Assets/images/01.png";
import BANNER_IMG2 from "../../Assets/images/02.png";
import PLUSICON from "../../Assets/images/Logo-dominion-icon.svg";
import PLUSICON_WHITE from "../../Assets/images/Logo-dominion-icon-white.svg";
import YELLOWSVG from "../../Assets/images/Ellipse 1-yellow.svg";
import BLUESVG from "../../Assets/images/Ellipse 3-blue.svg";
import ACCL_LEARN from "../../Assets/images/Icon-accl-learning.svg";
import HIGH_ACHVMNT from "../../Assets/images/Icon-high-achvmnt.svg";
import EXTRA_ORD from "../../Assets/images/Icon-xetraordinary.svg";
import PRESIDENT_GREET from "../../Assets/images/Image-president-greetings.png";
import OUR_METHODS from "../../Assets/images/Kid-our-methods.png";
import VIDEO_IMG1 from "../../Assets/images/Video-video-1-img.png";
import VIDEO_IMG2 from "../../Assets/images/Videovideo-2-img.png";
import VIDEO_IMG3 from "../../Assets/images/Videovideo-3-img.png";
import YOUTUBE_ICON from "../../Assets/images/Youtube-video-youtube-icon.svg";
import TEAM_IMG1 from "../../Assets/images/Image-our-team-img-1.png";
import TEAM_IMG2 from "../../Assets/images/Image-our-team-img-2.png";
import TEAM_IMG3 from "../../Assets/images/Image-our-team-img-3.png";


export default function Body(){
    // const responsiveTxt = { 1920:{items:3}, 1440:{items:3},1024:{items:3},0: { items: 1 }, 992: { items: 1 } ,767: { items: 1 },575: { items: 1 },480: { items: 1 }};
    return(
        <React.Fragment>
            <section className="banner">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-8 col-md-12 col-sm-12 banner-left">
                    <div className="image-container">                        
                        <img src={BANNER_IMG1} alt="" />
                    </div>
                    <div className="banner-heading">
                        <big_h1>Online Learning</big_h1>
                        <h1>You can access anywhere</h1>
                        <big_h1>Easily ...</big_h1>
                    </div>
                    <p>
                        A solutions for easy and flexible online learning, you can study
                        anywhere through this platform
                    </p>
                     <a href="" className="orange-button">Get started</a>
                    <ul className="banner-list">
                        <li>
                            <span className="plus-icon">
                                <img src={PLUSICON} alt="" />
                            </span>
                            <span>
                                Experienced Teachers
                            </span>
                        </li>
                        <li>
                            <span className="plus-icon">
                                <img src={PLUSICON} alt="" />
                            </span>
                            <span>
                                Quality Videos
                            </span>
                        </li>
                        <li>
                            <span className="plus-icon">
                                <img src={PLUSICON} alt="" />
                            </span>
                            <span>
                                Affordable Prices
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 banner-right">
                    <div className="yellow-eclipse svg-1" id="1">
                        <img className="img-fluid" src={YELLOWSVG} alt="" />
                    </div>
                    <div className="blue-eclipse svg-2" id="2">
                        <img className="img-fluid" src={BLUESVG} alt="" />
                    </div>
                    <div className="image-container svg-3" id="3">
                        <img className="img-fluid" src={BANNER_IMG2} alt="" />
                    </div>
                    <div className="yellow-eclipse svg-4" id="4">
                        <img className="img-fluid" src={YELLOWSVG} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="key-benefits">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 key-benefits-left">
                    <h2>Key Benefits</h2>
                    <p>
                        Studying online teaches important time management
                        skills, which makes it easier for you to find a good work
                        stydy balance.
                    </p>
                     <a href="" className="orange-button">Get started</a>
                    <div className="yellow-eclipse">
                        <img src={YELLOWSVG} alt="" />
                    </div>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 key-benefits-right">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <img src={ACCL_LEARN} alt="" />
                            <h4>Accelerated Learning</h4>
                            <p>
                                Studying online teaches important time management skills, which makes it easier for you
                                to find a good work study balance.
                            </p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <img src={HIGH_ACHVMNT} alt="" />
                            <h4>Higher Achievement</h4>
                            <p>
                                Studying online teaches important time management skills, which makes it easier for you
                                to find a good work study balance.
                            </p>
                        </div>
                        <div className="col-sm-12">
                            <img src={EXTRA_ORD} alt="" />
                            <h4>
                                Extraordinary opportunities for better Colleges, Scholarships, Jobs,
                                Careers and life
                            </h4>
                            <p>
                                Ultrices in augue commodo, habitasse nibh sed laoreet. Hac elit velit est condimentum
                                aliquet neque ante dolor.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="president-greetings">
        <div className="container-fluid">
            <div className="row">
                <div
                    className="col-lg-5 col-md-12 col-sm-12 order-lg-1 order-1 d-flex align-items-center justify-content-center">
                    <div className="section-img-yellow-bg">
                        <img className="img-fluid" src={PRESIDENT_GREET} alt="" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 order-lg-2 order-2">
                    <h2>About Dominion Prep</h2>
                    <p className="">
                        Dominion Prep’s Founder set out on a mission to help people lead more fulfilling lives and
                        create a
                        better world. The best way to accomplish this for current and future generations is by creating
                        better
                        educational institutions, especially in the K-12 life years, which he has done for more than a
                        decade.
                        Our Founder started in the education reform movement in 2004, and opened his first school in
                        2008.
                    </p>
                    <p>

                        The goal was to reform the government (public and charter) and traditional private school
                        systems. The
                        idea was simple: Make the school fit the student with personalized education, instead of the
                        one-size-fits-all traditional school model. The Founder has now started a second school,
                        Dominion Prep
                        in 2022.
                    </p>
                    <div className="d-flex justify-content-end know-more-link"><a href="about-us.html">Read more</a></div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-5 order-lg-1 order-2">
                    <h2>Our Methods</h2>
                    <p>
                        Since it can be accessed easlily, children can carry out the learning process in the bedroom to
                        other places where the atmosphere is more comfortable.
                    </p>
                    <ul className="methods-list">
                        <li>
                            <span className="plus-icon">
                                <img src={PLUSICON_WHITE} alt="" />
                            </span>
                            <span>
                                Most affortable cost
                            </span>
                        </li>
                        <li>
                            <span className="plus-icon">
                                <img src={PLUSICON_WHITE} alt="" />
                            </span>
                            <span>
                                The insight gained is much wider
                            </span>
                        </li>
                        <li>
                            <span className="plus-icon">
                                <img src={PLUSICON_WHITE} alt="" />
                            </span>
                            <span>
                                More flexible study time
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-7 d-flex justify-content-center order-lg-2 order-1">
                    <div className="section-img-orange-bg">
                        <img className="img-fluid" src={OUR_METHODS} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <section className="watch">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 text-center watch-heading">
                    <h2>Watch our Videos</h2>
                    <p>Vestibulum tellus augue est adipiscing nibh scelerisque. Aliquet senectus nunc arcu auctor
                        fermentum dui.
                    </p>
                </div>
                <div className="cascade-slider_container" id="cascade-slider">
                    <div className="cascade-slider_slides">
                        <div className="cascade-slider_item">
                            <div className="video-container">
                                <div className="image-container">
                                    <img src={VIDEO_IMG1} alt="" />
                                </div>
                                <div className="video-text">
                                    <a href="" className="youtube-icon" target="blank">
                                        <img className="img-fluid" src={YOUTUBE_ICON} alt="" />
                                    </a>

                                    <h4>Lorem ipsum dolor sit amet</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas vulputate
                                        tellus integer diam et eros a ...
                                    </p>
                                    <div className="d-flex ml-2 mr-2 justify-content-between align-items-center">
                                        <span className="name">Peter Alex</span>
                                        <span className="date">Apr 20 2022 - 03 : 06 pm</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cascade-slider_item">
                            <div className="video-container">
                                <div className="image-container">
                                    <img src={VIDEO_IMG2} alt="" />
                                </div>
                                <div className="video-text">
                                    <a href="" className="youtube-icon" target="blank">
                                        <img className="img-fluid" src={YOUTUBE_ICON} alt="" />
                                    </a>
                                    <h4>Lorem ipsum dolor sit amet</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas vulputate
                                        tellus integer diam et eros a ...
                                    </p>
                                    <div className="d-flex ml-2 mr-2 justify-content-between align-items-center">
                                        <span className="name">Peter Alex</span>
                                        <span className="date">Apr 20 2022 - 03 : 06 pm</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cascade-slider_item">
                            <div className="video-container">
                                <div className="image-container">
                                    <img src={VIDEO_IMG3} alt="" />
                                </div>
                                <div className="video-text">
                                    <a href="" className="youtube-icon" target="blank">
                                        <img className="img-fluid" src={YOUTUBE_ICON} alt="" />
                                    </a>

                                    <h4>Lorem ipsum dolor sit amet</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas vulputate
                                        tellus integer diam et eros a ...
                                    </p>
                                    <div className="d-flex ml-2 mr-2 justify-content-between align-items-center">
                                        <span className="name">Peter Alex</span>
                                        <span className="date">Apr 20 2022 - 03 : 06 pm</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <span className="cascade-slider_arrow cascade-slider_arrow-left" data-action="prev"></span>
                    <span className="cascade-slider_arrow cascade-slider_arrow-right" data-action="next" id="next"></span>
                </div>
            </div>
        </div>
    </section> */}
    {/* <section className="our-team dark-mode">
        <div className="container">
            <div className="text-center team-heading">
                <h2>Our Team</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ut velit, magna enim parturient ut
                    nunc, interdum at. Malesuada risus sit lobortis ac sem cras ut ut non. Leo nisl malesuada tellus ut
                    imperdiet.</p>
            </div>
            <OwlCarousel  items={3} dots={false} autoplay={false} loop={true} margin={0} nav={true} className="owl-carousel owl-theme our-team-carousel">
                <div className="item">
                    <div className="team-cards">
                        <div className="card-img">
                            <img className="img-fluid" src={TEAM_IMG1} alt="" />
                        </div>
                        <div className="card-text">
                            <h4>Augustine Beaumont</h4>
                            <div className="card-paragraph">
                                <span>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ut velit, magna enim
                                    parturient ut nunc ...
                                </span>
                            </div>
                            <a href="" className="white-button">Know more</a>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="team-cards">
                        <div className="card-img">
                            <img className="img-fluid" src={TEAM_IMG2} alt="" />
                        </div>
                        <div className="card-text">
                            <h4>Augustine Beaumont</h4>
                            <div className="card-paragraph">
                                <span>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ut velit, magna enim
                                    parturient ut nunc ...
                                </span>
                            </div>
                            <a href="" className="white-button">Know more</a>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="team-cards">
                        <div className="card-img">
                            <img className="img-fluid" src={TEAM_IMG3} alt="" />
                        </div>
                        <div className="card-text">
                            <h4>Augustine Beaumont</h4>
                            <div className="card-paragraph">
                                <span>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ut velit, magna enim
                                    parturient ut nunc ...
                                </span>
                            </div>
                            <a href="" className="white-button">Know more</a>
                        </div>
                    </div>
                </div>

            </OwlCarousel>
            
            
        </div>

    </section> */}
        </React.Fragment>
    )
}