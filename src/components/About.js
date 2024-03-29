import React, {Component} from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


class About extends Component{
    componentDidMount(){
        window.scroll(0, 0)
    }

    render(){
        return(
            <div>
                {/*================ Start About Us Area =================*/}
                <section className="about_area section_gap">
                    <div className="container">
                    <div className="row">
                            <div className="col-lg-12">
                                <div className="main_title text-center">
                                <h2>About Me </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row mx-5">
                            <div className="col-md-6 px-5">
                                <div className="about_img mx-5 px5">
                                <img className="rounded-pill" src="asset/img/banner/vic.jpg" alt="" width="300" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="text-left">
                                    <p>My name is <strong>Victoria Umoh, </strong> I am a skilled software developer with expertise in both front-end and back-end technologies.
                                        With a solid foundation in programming languages, 
                                        I craft seamless and intuitive user experiences using HTML, CSS, and JavaScript, 
                                        while on the back-end, my proficiency lies in PHP to build robust server-side applications.
                                        I take pride in my debugging skill and translating design concepts into responsive and dynamic web applications.
                                    </p>
                                    <p>
                                    </p>
                                    <p>I am familiar with database technologies such as MySQL, MongoDB, and SQL Server, and have experience working with version
                                        control system such as Git and GitHub.
                                    </p>
                                    <p>In addition to my technical skills, I have execellent problem solving abilities, strong communication skills, time management skills,
                                        and ability to work well in a team. 
                                        With a keen eye for detail, and a passion for clean, maintaninable code, 
                                        I am driven by a committment to delivering high-quality, scalable solutions from concept to completion and 
                                        can adapt to new technologies and methodologies.
                                    </p>
                                    <a className="primary_btn text-decoration-none" href="../asset/resume/victoria-umoh.pdf" target="_blank" rel="noopener noreferrer"><span>Download CV</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="container py-5">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="main_title text-center">
                                <h2>My Skills </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row py-3">
                                <div className="col-md-6">
                                    <div className="px-lg-3">
                                        <h4 className="wow fadeInUp">Front-end skills</h4>
                                        <div className="progress-wrapper wow fadeInUp">
                                        <span className="caption">HTML5</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{width: '86%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>86%</div>
                                        </div>
                                        </div>
                                        <div className="progress-wrapper wow fadeInUp">
                                        <span className="caption">CSS</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>80%</div>
                                        </div>
                                        </div>
                                        <div className="progress-wrapper wow fadeInUp">
                                        <span className="caption">BOOTSTRAP</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{width: '79%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>79%</div>
                                        </div>
                                        </div>
                                        <div className="progress-wrapper wow fadeInUp">
                                        <span className="caption">JAVASCRIPT</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{width: '70%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>70%</div>
                                        </div>
                                        </div>
                                        <div className="progress-wrapper wow fadeInUp">
                                        <span className="caption">REACT JS</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{width: '90%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>90%</div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="px-lg-3">
                                        <h4 className="wow fadeInUp">Back-end Skills</h4>
                                        <div className="progress-wrapper wow fadeInUp">
                                        <span className="caption">PHP</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{width: '90%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>90%</div>
                                        </div>
                                        </div>
                                        <div className="progress-wrapper wow fadeInUp">
                                        <span className="caption">LARAVEL</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>80%</div>
                                        </div>
                                        </div>
                                        <div className="progress-wrapper wow fadeInUp">
                                        <span className="caption">MYSQL</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{width: '79%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>79%</div>
                                        </div>
                                        </div>
                                        <div className="progress-wrapper wow fadeInUp">
                                        <span className="caption">RESTful API</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{width: '60%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>60%</div>
                                        </div>
                                        </div>
                                        <div className="progress-wrapper wow fadeInUp">
                                        <span className="caption">GIT & GITHUB</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{width: '65%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>65%</div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*================ End About Us Area =================*/}
                
                {/*================ Start Features Area =================*/}
                <section className="features_area">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className="main_title">
                                <h2>TECHNOLOGIES </h2>
                            </div>
                        </div>
                        </div>
                        <div className="row feature_inner justify-content-center">
                        <div className="col-lg-2 col-md-6">
                            <div className="feature_item">
                            <img src="asset/tech/html.png" alt="" />
                            <h4>HTML 5</h4>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="feature_item">
                            <img src="asset/tech/css.png" alt="" />
                            <h4>CSS 3</h4>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="feature_item">
                            <img src="asset/tech/jsx.png" alt="" />
                            <h4>JAVASCRIPT</h4>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="feature_item">
                            <img src="asset/tech/jquery.png" alt="" />
                            <h4>JQUERY</h4>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="feature_item">
                            <img src="asset/tech/bootstrap.png" alt="" />
                            <h4>BOOTSTRAP</h4>
                            </div>
                        </div>
                        </div>
                        <div className="row feature_inner justify-content-center">
                        <div className="col-lg-2 col-md-6">
                            <div className="feature_item">
                            <img src="asset/tech/react.png" alt="" />
                            <h4>REACT JS</h4>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="feature_item">
                            <img src="asset/tech/laravel.png" alt="" />
                            <h4>LARAVEL</h4>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="feature_item">
                            <img src="asset/tech/pphp.png" alt="" />
                            <h4>PHP</h4>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="feature_item">
                            <img src="asset/tech/sql.png" alt="" />
                            <h4>mySQL</h4>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="feature_item">
                            <img src="asset/tech/api.png" alt="" />
                            <h4>REST API</h4>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                {/*================ End Features Area =================*/}

                {/*================Start Portfolio Area =================*/}
                <section className="portfolio_area" id="portfolio">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="main_title text-center">
                                <h2>My Projects</h2>
                                </div>
                            </div>
                        </div>
                        <div className="filters portfolio-filter">
                            <ul>
                                <li className="active" data-filter="*">all</li>
                                <li data-filter=".popular">completed</li>
                                {/* <li data-filter=".upcoming">upcoming</li> */}
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
                                        <img className="img-fluid w-100 h-100" src="asset/projects/schoolhouse.png" alt="" />
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
                         

                            {/* <div className="col-lg-4 col-md-6 all upcoming">
                            <div className="portfolio_box">
                                <div className="single_portfolio">
                                <div style={{width: '400px', height:'200px'}}><img className="img-fluid w-100 h-100" src="asset/projects/ecommerce.jpg" alt="" /></div>
                                <div className="overlay" />
                                <a href="asset/projects/ecommerce.jpg" className="img-gal">
                                    <div className="icon">
                                    <span className="lnr lnr-cross" />
                                    </div>
                                </a>
                                </div>
                                <div className="short_info">
                                <h4>E-Commerce Website</h4><br></br>
                                <p><b>Technologies Used: </b> 
                                    <span>HTML5, CSS3, Bootstrap, JavaScript, mySQL, Ajax, jquery, Laravel</span>
                                </p>
                                <button class="primary_btn"><span>Visit Project</span></button>
                                </div>
                            </div>
                            </div>

                            <div className="col-lg-4 col-md-6 all upcoming">
                            <div className="portfolio_box">
                                <div className="single_portfolio">
                                <div style={{width: '400px', height:'200px'}}><img className="img-fluid w-100 h-100" src="asset/projects/realestate.jpg" alt="" /></div>
                                <div className="overlay" />
                                <a href="asset/projects/realestate.jpg" className="img-gal">
                                    <div className="icon">
                                    <span className="lnr lnr-cross" />
                                    </div>
                                </a>
                                </div>
                                <div className="short_info">
                                <h4>Real Estate Website</h4> <br></br>
                                <p><b>Technologies Used: </b> 
                                    <span>HTML5, CSS3, Bootstrap, JavaScript, mySQL, Ajax, jquery, Laravel</span>
                                </p>
                                <button class="primary_btn"><span>Visit Project</span></button>
                                </div>
                            </div>
                            </div> */}

                            
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

export default About