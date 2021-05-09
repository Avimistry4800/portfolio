import React, {Fragment, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import project1 from '../../../Images/cleanzo.png';
import project2 from '../../../Images/cleanzo.png';
import project3 from '../../../Images/cleanzo.png';
import './AllProjects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons'
import NavbarTop from '../NavbarTop/NavbarTop';
import Aos from 'aos';
import "aos/dist/aos.css"


const allProject =[
    {
        image: project1,
        url: 'https://cleanzo-401d6.web.app/',
        name:"Cleanzo",
        Details :" A Full-Stack cleaning service website where users can book any service , manage bookings, write reviews & make payment.In admin pannel , admin can manage & update services & also make another admins."
        
    },
    {
        image: project2,
        url: 'https://foodvally-b4177.web.app/',
        name:"Food-VAlly",
        Details :" A Full-Stack online food item shopping website. User can add product & remove product, Admin can manage products, GoogleAuth, Private Route, API data oad,User info update & more"
    },
    {
        image: project3,
        url: 'https://kaku-riders.web.app/',
        name:"KaKu Riders",
        Details :" Website for book a Ride like Bus , Train or Byke ride.User can place a booking after Login using Google Auth or after Create User Account."
    },
    
]

const AllProjects = () => {
    useEffect(() => {
        Aos.init({duration:2000});
    },[]);
    return (
        <section className="bg-dark full" >
            <Fragment >
            <NavbarTop />
            <Container  className="text-center mt-4 ">
                <Row>
                    {
                        allProject.map(data =>
                            <Col lg={4} md={6} sm={12}>
                                <div data-aos="flip-up" className="portfolioCard">
                                    <img data-aos="flip-down" className="projectImage" src={data.image} alt=""/>
                                    <div className="p-3">
                                        <h3>{data.name}</h3>
                                        <p>{data.Details}</p>
                                    </div>
                                    <div style={{fontSize:"2rem", color:'#F5DF4E'}} className="d-flex justify-content-center">
                                        <a href={data.url} title="Github Repository" target="_blank">
                                            <div className="text px-5"> <FontAwesomeIcon icon={faGithub} /></div>
                                            
                                        </a>
                                        <a href={data.url} title="Visit Live Site." target="_blank">
                                            <div className="text px-5"> <FontAwesomeIcon icon={faExternalLinkSquareAlt} /></div>
                                            
                                        </a>
                                    </div>
                                </div>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </Fragment>
        </section>
    );
};

export default AllProjects;