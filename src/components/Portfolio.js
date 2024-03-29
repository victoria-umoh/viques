import React, {Component} from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

class Portfolio extends Component{

    componentDidMount(){
        window.scroll(0, 0)
    }
    render(){
        return(
            <div>
                
                {/*================Start Portfolio Area =================*/}
                <section className="portfolio_area" id="portfolio">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div  className="main_title text-center mb-5">
                                <h2>My Projects</h2>
                                </div>
                            </div>
                        </div>
                        <div className="filters portfolio-filter">
                        <div className="row">
                            <div className="col-lg-12">
                                <div  className="main_title text-center mb-5">
                                <h2>My Projects</h2>
                                </div>
                            </div>
                        </div>
                            <ul>
                                <li className="active" data-filter="*">all</li>
                                <li data-filter=".popular">completed</li>
                            </ul>
                        </div>
                        <div className="filters-content">
                        <div className="row portfolio-grid justify-content-center">
                            <div className="col-lg-4 col-md-6 all popular">
                                <div className="portfolio_box">
                                    <div className="single_portfolio">
                                        <img className="img-fluid w-100 h-100" src="asset/projects/careapp.png" alt="" />
                                        <div className="overlay" />
                                        <a href="asset/projects/earlycare.png" className="img-gal">
                                            <div className="icon">
                                            <span className="lnr lnr-cross" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="short_info">
                                        <h4>Personal health monitor app</h4><br></br>
                                        <p><b>Technologies Used: </b> 
                                            <span>HTML5, CSS3, Bootstrap, JavaScript, Ajax, mySQL, jquery, PHP</span>
                                        </p>
                                        <a href="https://early-care.netlify.app" target="_blank" rel="noopener noreferrer" className="primary_btn text-decoration-none"><span>Visit Project</span></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 all popular">
                            <div className="portfolio_box">
                                <div className="single_portfolio">
                                <img className="img-fluid w-100 h-100" src="asset/projects/chow.png" alt="" />
                                <div className="overlay" />
                                <a href="asset/projects/chow.png" className="img-gal">
                                    <div className="icon">
                                    <span className="lnr lnr-cross" />
                                    </div>
                                </a>
                                </div>
                                <div className="short_info">
                                <h4>Restaurant Management App</h4><br></br>
                                <p><b>Technologies Used: </b> 
                                    <span>HTML5, CSS3, Bootstrap, JavaScript, mySQL, jquery, Laravel</span>
                                </p>
                                <a href="https://github.com/victoria-umoh/chow" class="primary_btn text-decoration-none"><span>Visit Project</span></a>
                                </div>
                            </div>
                            </div>

                            <div className="col-lg-4 col-md-6 all popular">
                                <div className="portfolio_box w-100 h-100">
                                    <div className="single_portfolio">
                                    <div style={{width: '400px', height:'200px'}}><img className="img-fluid w-100 h-100" src="asset/projects/schoolhouse.png" alt="" /></div>
                                    <div className="overlay" />
                                    <a href="asset/projects/schoolhouse.png" className="img-gal">
                                        <div className="icon">
                                        <span className="lnr lnr-cross" />
                                        </div>
                                    </a>
                                    </div>
                                    <div className="short_info">
                                    <h4>School Registration Website</h4><br></br>
                                    <p><b>Technologies Used: </b> 
                                        <span>HTML5, CSS3, Bootstrap, JavaScript, Jquery, React</span>
                                    </p>
                                    <a href="https://school-house.netlify.app/" class="primary_btn text-decoration-none"><span>Visit Project</span></a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        </div>
                    </div>
                </section>
                {/*================End Portfolio Area =================*/}

                {/* <!--================Contact Area =================--> */}
                <section class="">
                    <div class="container">
                        <footer class="footer_area">
                            <div className="row pb-0 mb-0">
                                    <div className="col-lg-12">
                                        <div className="main_title text-center">
                                        <h2>Contact Me </h2>
                                        </div>
                                    </div>
                                </div>

                                <div class="row justify-content-center pt-0 mt-0" id="footer-row-social">
                                    <div class="col-lg-12">
                                        <div class= "flex-column">
                                            <div className="footer_social">
                                                <a href="mailto:victoriasuave07@gmail.com" target="_self" rel="noopener noreferrer"><FontAwesomeIcon size="2xl" icon={faEnvelope} /></a>
                                                <a href="https://github.com/victoria-umoh" target="_self" rel="noopener noreferrer"><FontAwesomeIcon size="2xl" icon={faGithub} /></a>
                                                <a href="https://facebook.com/vickygurero" target="_self" rel="noopener noreferrer"><FontAwesomeIcon size="2xl" icon={faFacebook} /></a>
                                                <a href="https://x.com/vickee571" target="_self" rel="noopener noreferrer"><FontAwesomeIcon size="2xl" icon={faTwitter} /></a>
                                                <a href="https://instagram.com/st.victoria_" target="_self" rel="noopener noreferrer"><FontAwesomeIcon size="2xl" icon={faInstagram} /></a>
                                                <a href="https://linkedin.com/in/victoria-umoh-1a78a3108" target="_self" rel="noopener noreferrer"><FontAwesomeIcon size="2xl" icon={faLinkedin} /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </footer>   
                    </div>
                </section>
                {/* <!--================Contact Area =================--> */}
            </div>
        )
    }
}

export default Portfolio