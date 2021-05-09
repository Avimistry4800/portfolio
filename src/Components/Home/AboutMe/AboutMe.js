import React, { useEffect } from "react";
import image from '../../../Images/About-img.png'
import "./AboutMe.css";
import Aos from 'aos';
import "aos/dist/aos.css"
import NavbarTop from "../NavbarTop/NavbarTop";

const AboutMe = () => {
    useEffect(() => {
        Aos.init({duration:2000});
    },[]);
    return (
        <main>
        <section className="container about-me mt-0 " >
            <div className="text-center mt-2 pt-5">
                {/* <small data-aos="fade-left" className="about-me-small">About Me</small> */}
                <h2 data-aos="fade-down" >Know Me more</h2>
            </div>
            <div className="row d-flex align-items-center">
                <div className="col-md-8 lg-8 sm-12">
                    <h3 data-aos="fade-left" style={{ paddingBottom:'20px'}}>Hi, I'm <span className='name'>Avi Mistry</span></h3>
                    <p data-aos="fade-right" >I'm a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Delivering work within time and budget which meets client’s requirements is my motto . <br/>I am a very fast learner. I Always thrive on knowledge about next-generation technologies. And keep up the technology race.<br/>During my journey through the evolution of the technology, I picked my "Must Have" Technologies to work with that includes:<span style={{fontWeight:"600"}}> HTML5, CSS3, Bootstrap, javaScript, Es6, React Js, Node.js, Express Js, mySQL, mongodb & many more.</span> By Profession a Full Stack Web Developer.</p>
                 
                </div>
                <div data-aos="fade-left" className="col-md-4 lg-4 sm-12 text-center">
                    <img src={image}alt=""/>
                </div>
                <div className="d-flex row">
                    <div className="col-md-6 sm-12 info">
                    <div data-aos="fade-up-right" className="col-md-3 sm-6 info" >
                        <p >Name:</p>
                        <h6 style={{ color: "white" }}>Avi Mistry </h6>
                    </div>
                    <div data-aos="fade-up-right" className="col-md-4 sm-6 info" >
                        <p >Email:</p>
                        <h6 style={{ color: "white" }}>Avimistry4800@gmail.com </h6>
                    </div>
                    </div>
                    <div className="col-md-6 sm-12 info">
                    <div data-aos="fade-up-left" className="col-md-3 sm-6 info" >
                        <p >Phone:</p>
                        <h6 style={{ color: "white" }}>+8801829738668</h6>
                    </div>
                    <div data-aos="fade-up-left" className="col-md-3 sm-6 info" >
                        <p >Form:</p>
                        <h6 style={{ color: "white" }}>Savar,Dhaka,Bangladesh. </h6>
                    </div>
                    </div>
                </div>
               
            </div>
        </section>
        </main>
    );
};

export default AboutMe;
