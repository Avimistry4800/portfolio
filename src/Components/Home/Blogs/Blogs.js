import React, { Fragment, useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import react from '../../../Images/structure.png';
import node from '../../../Images/nodejs.png';
import css from '../../../Images/css.png';
import Aos from 'aos';
import "aos/dist/aos.css"

const serviceData=[
    {
        icon: react,
        name: 'React Js',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatum quas ea aliquam recusandae. Nulla, dolorum similique dignissimos facere natus odit itaque voluptatem perferendis molestiae. '
    },
    {
        icon: node,
        name: 'Node Tricks',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatum quas ea aliquam recusandae. Nulla, dolorum similique dignissimos facere natus odit itaque voluptatem perferendis molestiae. '
    },
    {
        icon: css,
        name: '#CSS3 Tricks',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatum quas ea aliquam recusandae. Nulla, dolorum similique dignissimos facere natus odit itaque voluptatem perferendis molestiae. '
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
                            <div data-aos="flip-down" className="blogCard text-center pb-2 my-5" style={{background:"#4d4d4d",borderRadius:"20px",height:"450px",}}>
                                <img data-aos="zoom-in-up" src={data.icon} style={{height:"150px",}} className="serviceIcon py-4 " alt="" />
                                <h2 data-aos="zoom-out-up" className="serviceName">{data.name}</h2>
                                <p data-aos="fade-left" className="textDes px-2">{data.description}</p>
                                <Link to="/blogs"> <Button data-aos="fade-up" variant="outline-success btn-sm">Read Details</Button></Link>
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
