import React, { Fragment, useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ecommerce from '../../../Images/online-shopping.png';
import design from '../../../Images/web-design.png';
import development from '../../../Images/development.png';
import Aos from 'aos';
import "aos/dist/aos.css"

const serviceData=[
    {
        icon: ecommerce,
        name: 'Ecommerce',
        description: 'I will design and develop ecommerce online store website.'
    },
    {
        icon: design,
        name: 'Web Design',
        description: 'Qualified web design and attractive effects which catches visitor’s Eye.'
    },
    {
        icon: development,
        name: 'Web Development',
        description: 'Clean and fresh issue free code to make your website dynamic perfectly.'
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
                                <div data-aos="flip-up" className="serviceCard text-center pb-5 ">
                                    <img data-aos="zoom-in-up" src={data.icon} className="serviceIcon" alt="" />
                                    <h2 data-aos="zoom-out-up" className="serviceName">{data.name}</h2>
                                    <p data-aos="fade-left" className="textDes">{data.description}</p>
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