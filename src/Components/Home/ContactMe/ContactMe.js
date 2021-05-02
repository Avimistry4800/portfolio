import React from "react";
import emailjs from "emailjs-com";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faGithub,faLinkedin,faTwitter } from '@fortawesome/free-brands-svg-icons';

const ContactMe = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_3k3tv9d",
                "template_tpjtksj",
                e.target,
                "user_MGklGhFVv6mLCpCTmcVp2"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    };
    return (
        <section style={{ background: "#F5DF4E" }} className="contact">
            <div className="container">
                <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-6  mx-auto text-left">
                            <h2>Let's get in touch</h2>
                            <br />
                            <div className="col-10  mx-auto text-left">
                                <p>
                                    <big>
                                    I enjoy discussing new projects and design
                                    challenges. Please share as much info, as
                                    possible so we can get the most out of our
                                    first catch-up.
                                    </big>
                                </p>
                            </div>
                            <div className="col-10  mx-auto pt-2 text-left">
                                <h4>Living In:</h4>
                                <p>Savar,Dhaka,Bangladesh.</p>
                            </div>
                            <div className="col-10  mx-auto pt-2 text-left">
                                <h4>Call:</h4>
                                <p>+8801829738668</p>
                            </div>
                            <div className="col-10  mx-auto pt-2 text-left">
                            <h3>
                            <div style={{fontSize:"2rem", color:'#F5DF4E'}} className="d-flex justify-content-start">
                                        <a href="https://www.facebook.com/avi.mistry.48/" title="Github Repository" target="_blank">
                                            <div className="text px-1"> <FontAwesomeIcon icon={faFacebook} /></div>
                                            
                                        </a>
                                        <a href="https://github.com/Avimistry4800" title="Github" target="_blank">
                                            <div className="text px-1"> <FontAwesomeIcon icon={faGithub} /></div>
                                            
                                        </a>
                                        <a href="https://www.linkedin.com/in/avi-mistry-52232a132/" title="Linkedin" target="_blank">
                                            <div className="text px-1"> <FontAwesomeIcon icon={faLinkedin} /></div>
                                            
                                        </a>
                                        <a href="https://twitter.com/Avi_mistry48" title="Twitter" target="_blank">
                                            <div className="text px-1"> <FontAwesomeIcon icon={faTwitter} /></div>
                                            
                                        </a>
                                    </div>

                           
                            
                        </h3>
                            </div>
                        </div>
                        <div className="col-6  mx-auto">
                            <div className="col-12 form-group mx-auto">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    name="name"
                                    
                                />
                            </div>
                            <div className="col-12 form-group mx-auto">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Email"
                                    name="email"
                                />
                            </div>
                            <div className="col-12 form-group mx-auto">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Subject"
                                    name="subject"
                                />
                            </div>
                            <div className="col-12 form-group mx-auto">
                                <textarea
                                    className="form-control"
                                    id=""
                                    cols="30"
                                    rows="8"
                                    placeholder="Your Message"
                                    name="message"
                                ></textarea>
                            </div>
                            <div className="col-8 form-group mx-auto float-left">
                                <input
                                    type="submit"
                                    className="btn btn-info"
                                    value="Send Message"
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactMe;
