import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import AllProjects from "../AllProjects/AllProjects";
import ContactMe from "../ContactMe/ContactMe";
import Expertise from "../Expertise/Expertise";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import Resume from "../Resume/Resume";
import Services from "../Services/Services";

import "./Home.css";

const Home = () => {

    return (
       <section>
           <Header></Header>
           <AboutMe></AboutMe>
           <Expertise/>
        <Services></Services>
        <Resume/>
        <Projects/>
        <ContactMe/>
       </section>

         
    );
};

export default Home;
