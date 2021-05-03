import React, {Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowAltCircleRight, faAsterisk} from "@fortawesome/free-solid-svg-icons";
import eComImg from '../../../Images/Work-icon.png';
import NavbarTop from '../NavbarTop/NavbarTop';

const MyService = () => {
    return (
       
        <Fragment>
             <NavbarTop/>
            <Container className="text-center p-5">
                <Row>
                    <Col lg={10} md={6} sm={12} className="m-auto">
                        <div className="shadow-sm p-5">
                            <h4 className="text-justify webTitle">Greetings & Welcome!</h4>
                            <p className="text-justify textDes">
                                I focus on listening & understanding your needs and requirements and developing reliable and outstanding solutions. I don't stop till the time you are completely happy!
                                Web Development is my passion and I will leave no stone unturned in producing a masterpiece for you. I work with focus on Quality, Aesthetics and Professionalism.
                            </p>
                            <img src={eComImg} className="webImage" alt=""/>
                            <h3 className="text-justify webTitle">What I Offering :</h3>
                            <p className="text-justify textDes"> <FontAwesomeIcon className="listIcon" icon={faArrowAltCircleRight}/> Membership / subscription login / registration based website</p>
                            <p className="text-justify textDes"> <FontAwesomeIcon className="listIcon" icon={faArrowAltCircleRight}/> Management System Web Applications like ( Restaurant, Hotel, Shop,
                                Point of Sale,<br/><br/> <span className="ml-3">Inventory and Employee Management System) and many more</span> </p>
                            <p className="text-justify textDes"> <FontAwesomeIcon className="listIcon" icon={faArrowAltCircleRight}/> Payment gateway system.</p>
                            <p className="text-justify textDes"> <FontAwesomeIcon className="listIcon" icon={faArrowAltCircleRight}/> And much more.</p>

                            <h3 className="text-justify webTitle">You will get:</h3>
                            <p className="text-justify textDes"> <FontAwesomeIcon className="listIcon" icon={faArrowAltCircleRight}/> 100% satisfaction and complete refund if my work is not up-to your standard </p>
                            <p className="text-justify textDes"> <FontAwesomeIcon className="listIcon" icon={faArrowAltCircleRight}/> 100% safe work without any risk or tension </p>
                            <p className="text-justify textDes"> <FontAwesomeIcon className="listIcon" icon={faArrowAltCircleRight}/> Fast Delivery</p>
                            <p className="text-justify textDes"> <FontAwesomeIcon className="listIcon" icon={faArrowAltCircleRight}/> Always Available</p>
                            <p className="text-justify textDes"> <FontAwesomeIcon className="listIcon" icon={faArrowAltCircleRight}/> Free Consultation </p>

                            <p className="text-justify textDes"><FontAwesomeIcon className="starIcon" icon={faAsterisk}/> Please contact to discuss your project, finalize cost/time and discounts.</p>
                            <p className="text-justify"><Link to="/contact"><Button variant="success" className="ml-3">Contact Me</Button></Link></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default MyService;






