import { Button } from "react-bootstrap";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import cleanzo from "../../../Images/cleanzo.png";
import kakuRider from "../../../Images/kaku-riders.png";
import FoodVally from "../../../Images/food-vally.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faHtml5, faCss3Alt, faReact,faNode, faBootstrap,faStripe } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons'
import logo1 from "../../../Images/logo1.png"
import logo2 from "../../../Images/logo2.png"
import logo3 from "../../../Images/logo3.png"
import Aos from 'aos';
import "aos/dist/aos.css"

const Projects = () => {
    useEffect(() => {
        Aos.init({duration:2000});
    },[]);
    return (
        <section  className="project py-5 " style={{background:"#1a1919", borderRadius:"10px"}}>
            <div data-aos="fade-down" className="text-center project-header">
                <h1 className="pb-5">My Recent Projects</h1>
                
            </div>
             <div data-aos="fade-down" className="row px-5 mx-3"> 
                
                  <div className="row d-flex project-img inline-block">
                  <div data-aos="fade-down-right" className="col-md-4 lg-4 sm-12 ">
                        <img style={{width:"30%"}} src={logo1}/>
                        <h1>Cleanzo</h1>
                        <h3>Cleaning Service</h3>
                    </div>
                    <div data-aos="fade-down" className="col-md-4 lg-4 sm-12 py-4">
                        <h4>Features</h4>
                    <p className="px-2">
                         A Full-Stack cleaning service website where users can book any service , manage bookings, write reviews & make payment.In admin pannel , admin can manage & update services & also make another admins.
                        </p>
                        <h3>
                            
                            <FontAwesomeIcon icon={faHtml5}/> <span> </span>
                            <FontAwesomeIcon icon={faCss3Alt} /> <span> </span>
                            <FontAwesomeIcon icon={faBootstrap} /> <span> </span>
                            <FontAwesomeIcon icon={faReact} /> <span> </span>
                            <FontAwesomeIcon icon={faNode} /> <span> </span>
                            <FontAwesomeIcon icon={faStripe} /> <span> </span>
                            <FontAwesomeIcon icon={faGithub} /> <span> </span>
                        </h3>
                        <div style={{fontSize:"2rem", color:'#212529',textDecoration:"none"}} className="d-flex justify-content-center ">
                            <br/>
                            <h4 style={{color:"white"}}>visit now</h4>
                                        <a href="https://github.com/Avimistry4800/cleanzo" title="Github Repository" target="_blank">
                                            <div className="text px-4"> <FontAwesomeIcon icon={faGithub} /></div>
                                            
                                        </a>
                                        <a href="https://cleanzo-401d6.web.app/" title="Visit Live Site." target="_blank">
                                            <div className="text px-4"> <FontAwesomeIcon icon={faExternalLinkSquareAlt} /></div>
                                            
                                        </a>
                                    </div>
                    </div>
                    <div data-aos="fade-down-left" className="col-md-4 lg-4 sm-12 project-img inline-block">
                    <p><img src={cleanzo} style={{borderRadius:"10px"}} alt="Example2" width="100%" height="100%"/></p>
                    </div>
                    
                </div>
                <div className="row d-flex project-img inline-block py-4">
                    <div data-aos="fade-right" className="col-md-4 lg-4 sm-12">
                    <h4>Features</h4>
                        <p className="px-2">
                        A Full-Stack online food item shopping website. User can add product & remove product, Admin can manage products, GoogleAuth, Private Route, API data oad,User info update & more
                        </p>
                        <h3>
                            
                            <FontAwesomeIcon icon={faHtml5}/> <span> </span>
                            <FontAwesomeIcon icon={faCss3Alt} /> <span> </span>
                            <FontAwesomeIcon icon={faBootstrap} /> <span> </span>
                            <FontAwesomeIcon icon={faReact} /> <span> </span>
                            <FontAwesomeIcon icon={faNode} /> <span> </span>
                            <FontAwesomeIcon icon={faGithub} /> <span> </span>
                        </h3>
                        <div style={{fontSize:"2rem", color:'#212529'}} className="d-flex justify-content-center">
                        <h4 style={{color:"white"}}>visit now</h4>
                                        <a href="https://github.com/Avimistry4800/food-vally" title="Github Repository" target="_blank">
                                            <div className="text px-4"> <FontAwesomeIcon icon={faGithub} /></div>
                                            
                                        </a>
                                        <a href="https://foodvally-b4177.web.app/" title="Visit Live Site." target="_blank">
                                            <div className="text px-4"> <FontAwesomeIcon icon={faExternalLinkSquareAlt} /></div>
                                            
                                        </a>
                                    </div>
                    </div>
                    <div  className="col-md-4 lg-4 sm-12 project-img">
                        {/* <img src={cleanzo} alt="" /> */}
                        <p data-aos="flip-left"><img src={FoodVally} style={{borderRadius:"10px"}} alt="Example2" width="100%" height="100%"/></p>
                    </div>
                    <div data-aos="fade-left" className="col-md-4 lg-4 sm-12">
                    <img style={{width:"30%"}} src={logo2}/>
                        <h1>Food Haven</h1>
                        <h3>Online Shopping Service</h3>
                    </div>
                </div>
                <div className="row d-flex project img-fluid py-4">
                    <div className="col-md-4 lg-4 sm-12 project-img ">
                    <p data-aos="fade-up-right" className=""><img src={kakuRider} style={{borderRadius:"10px"}} alt="Example2" width="100%" height="100%"/></p>
                    </div>
                    <div data-aos="fade-up" className="col-md-4 lg-4 sm-12">
                    <img style={{width:"30%"}} src={logo3}/>
                        <h1>Kaku Riders</h1>
                        <h3>Ride Booking Service</h3>
                    </div>
                    <div data-aos="fade-up-left" className="col-md-4 lg-4 sm-12">
                    <h4>Features</h4>
                        <p className="px-2">
                        Website for book a Ride like Bus , Train or Byke ride.User can place a booking after Login using Google Auth or after Create User Account.
                        </p>
                        <h3>
                            
                            <FontAwesomeIcon icon={faHtml5}/> <span> </span>
                            <FontAwesomeIcon icon={faCss3Alt} /> <span> </span>
                            <FontAwesomeIcon icon={faBootstrap} /> <span> </span>
                            <FontAwesomeIcon icon={faReact} /> <span> </span>
                            <FontAwesomeIcon icon={faGithub} /> <span> </span>
                            
                        </h3>
                        <div  style={{fontSize:"2rem", color:'#212529'}} className="d-flex justify-content-center">
                        <h4 style={{color:"white"}}>visit now</h4>
                                        <a href="https://github.com/Avimistry4800/kaku--riders" title="Github Repository" target="_blank">
                                            <div className="text px-4"> <FontAwesomeIcon icon={faGithub} /></div>
                                            
                                        </a>
                                        <a href="https://kaku-riders.web.app/" title="Visit Live Site." target="_blank">
                                            <div className="text px-4"> <FontAwesomeIcon icon={faExternalLinkSquareAlt} /></div>
                                            
                                        </a>
                                    </div>
                    </div>
                </div>
                
            </div>
            <div className='d-flex justify-content-center py-5' >
                <Link  to="/projects"> <Button data-aos="flip-left" variant="outline-success btn-lg">View All</Button></Link>

                </div>
        </section>
    );
};

export default Projects;
