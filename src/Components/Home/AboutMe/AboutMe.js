import React, { useEffect } from "react";
import image from '../../../Images/About-img.png'
import "./AboutMe.css";
import Aos from 'aos';
import "aos/dist/aos.css"

const AboutMe = () => {
    useEffect(() => {
        Aos.init({duration:2000});
    },[]);
    return (
        <section className="container about-me " >
            <div className="text-center mt-5 pt-5">
                <small data-aos="fade-left" className="about-me-small">About Me</small>
                <h2 data-aos="fade-down" style={{ color: "#212529" }}>Know Me more</h2>
            </div>
            <div className="row d-flex align-items-center">
                <div className="col-md-8 lg-8 sm-12">
                    <h3 data-aos="fade-left" style={{ color: "#212529" ,paddingBottom:'20px'}}>Hi, I'm <span className='name'>Avi Mistry</span></h3>
                    <p data-aos="fade-right" style={{ color: "#212529" }}>I'm a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Delivering work within time and budget which meets client’s requirements is my motto . <br/>I am a very fast learner. I Always thrive on knowledge about next-generation technologies. And keep up the technology race.<br/>During my journey through the evolution of the technology, I picked my "Must Have" Technologies to work with that includes:<span style={{fontWeight:"600"}}> HTML5, CSS3, Bootstrap, javaScript, Es6, React Js, Node.js, Express Js, mySQL, mongodb & many more.</span> By Profession a Full Stack Web Developer.</p>
                 
                </div>
                <div data-aos="fade-left" className="col-md-4 lg-4 sm-12 text-center">
                    <img src={image}alt=""/>
                </div>
                <div className="d-flex">
                    <div data-aos="fade-up-right" className="col-md-2 sm-6 info" >
                        <p style={{ color: "#212529" }}>Name:</p>
                        <h6 style={{ color: "#212529" }}>Avi Mistry </h6>
                    </div>
                    <div data-aos="fade-up-right" className="col-md-4 sm-6 info" >
                        <p style={{ color: "#212529" }}>Email:</p>
                        <h6 style={{ color: "#212529" }}>Avimistry4800@gmail.com </h6>
                    </div>
                    <div data-aos="fade-up-left" className="col-md-3 sm-6 info" >
                        <p style={{ color: "#212529" }}>Phone:</p>
                        <h6 style={{ color: "#212529" }}>+8801829738668</h6>
                    </div>
                    <div data-aos="fade-up-left" className="col-md-3 sm-6 info" >
                        <p style={{ color: "#212529" }}>Form:</p>
                        <h6 style={{ color: "#212529" }}>Savar,Dhaka,Bangladesh. </h6>
                    </div>
                </div>
               
            </div>
        </section>
    );
};

export default AboutMe;
