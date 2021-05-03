import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import AllProjects from "../AllProjects/AllProjects";
import Blogs from "../Blogs/Blogs";
import ContactMe from "../ContactMe/ContactMe";
import Expertise from "../Expertise/Expertise";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NavbarTop from "../NavbarTop/NavbarTop";
import Projects from "../Projects/Projects";
import Resume from "../Resume/Resume";
import Services from "../Services/Services";

import "./Home.css";

const Home = () => {

    return (
       <section>
           <NavbarTop/>
           <Header></Header>
           <AboutMe></AboutMe>
           <Expertise/>
        <Services></Services>
        
        <Resume/>
        <Projects/>
        <Blogs/>
        <ContactMe/>
        <Footer/>
       </section>

         
    );
};

export default Home;
