import React, { Fragment, useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import react from '../../../Images/structure.png';
import js from '../../../Images/js.png';
import Aos from 'aos';
import "aos/dist/aos.css"

const serviceData=[
    {
        icon: react,
        url : "https://avimistry4800.medium.com/javascript-recap-3-49e464d84057",
        name: 'SOME CORE FUNDAMENTALS OF REACT',
        description: 'In this blog, I’ll try to clear your all confusion about React JS. And now I’m talking about what I think are the key points of React JS. Hope you’ll like...'
    },
    {
        icon: js,
        url : "https://avimistry4800.medium.com/javascript-recap-f6d2125971d1",
        name: 'JAVASCRIPT RECAP',
        description: 
        "JavaScript is a scripting or programming language that is the world’s most popular programming language that allows you to implement complex features on web pages. JavaScript can update and change both HTML and CSS. JavaScript can calculate, manipulate and validate data.... "
    },
    {
        icon: react,
        url : "https://avimistry4800.medium.com/how-to-use-aos-scroll-animation-effect-in-react-ed822190a644",
        name: 'ANIMATION EFFECT IN REACT',
        description: 'Hi, I am Avi & today I will share a simple but powerful animation effect on React Js . Its called AOS animations.Its simple to use like eating food & I’m not joking.lets start form installation.... '
    }
]

const Blogs = () => {
    useEffect(() => {
        Aos.init({duration:2000});
    },[]);
    return (
        <Fragment >
        <Container className="text-center pt-5 " style={{background:"none"}}>
            <h1 data-aos="zoom-out" className="titleText">My Recently Published <br/> Blogs
                    <div className="top"> </div> <br />
                <div className="bottom"> </div>
            </h1>
            <Row>
                {
                    serviceData.map(data =>
                        <Col lg={4} md={6} sm={12}>
                            <div data-aos="flip-down" className="blogCard text-center pb-2 my-5" style={{background:"#1a1919",borderRadius:"20px",height:"450px",}}>
                                <img data-aos="zoom-in-up" src={data.icon} style={{height:"150px",}} className="serviceIcon py-4 " alt="" />
                                <h2 data-aos="zoom-out-up" className="serviceName px-2">{data.name}</h2>
                                <p data-aos="fade-left" className="textDes text-left px-3 ">{data.description}</p>
                                {/* <Link to= {data.url}> <Button data-aos="fade-up" variant="outline-success btn-sm">Read Details</Button></Link> */}
                                <a href={data.url}  target="_blank"><Button data-aos="fade-up" variant="outline-success btn-sm">Read Details</Button></a>
                            </div>
                        </Col>
                    )
                }
            </Row>
        </Container>
    </Fragment>
    );
};

export default Blogs;
