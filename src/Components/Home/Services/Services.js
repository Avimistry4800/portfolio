import React, { Fragment, useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ecommerce from '../../../Images/online-shopping.png';
import design from '../../../Images/web-design.png';
import development from '../../../Images/seo.png';
import Aos from 'aos';
import "aos/dist/aos.css"

const serviceData=[
    {
        icon: ecommerce,
        name: 'Ecommerce',
        description: 'Design and develop any kind of online E-Commerce  website with best functionality .'
    },
    {
        icon: design,
        name: 'Web Design',
        description: 'I do qualified web design and attractive Eye catching design with pure fresh code.'
    },
    {
        icon: development,
        name: 'Full Stack Development',
        description: 'Everything from design to work is done beautifully, responsive Design & Web Application by FullStack Development.'
    }
]

const Services = () => {
    useEffect(() => {
        Aos.init({duration:2000});
    },[]);
    return (
        <Fragment >
            <Container className="text-center pt-5" style={{background:"#fff"}}>
                <h1 data-aos="zoom-out" className="titleText">My Services
                        <div className="top"> </div> <br />
                    <div className="bottom"> </div>
                </h1>
                <Row>
                    {
                        serviceData.map(data =>
                            <Col lg={4} md={6} sm={12}>
                                <div data-aos="flip-up" className="serviceCard text-center pb-5 " style={{background:"#F5DF4E",borderRadius:"20px",minHeight:"500px"}}>
                                    <img data-aos="zoom-in-up" style={{height:"150px"}} src={data.icon} className="serviceIcon my-5" alt="" />
                                    <h2 data-aos="zoom-out-up" className="serviceName">{data.name}</h2>
                                    <p data-aos="fade-left" className="textDes px-2">{data.description}</p>
                                    <Link to="/MyService"> <Button data-aos="fade-up" variant="outline-success btn-sm">Read Details</Button></Link>
                                </div>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </Fragment>
    );
};

export default Services;