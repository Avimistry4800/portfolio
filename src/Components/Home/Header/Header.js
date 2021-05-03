import React from 'react';
import NavbarTop from '../NavbarTop/NavbarTop';
import image from '../../../Images/profile.jpg'

import './Header.css'

const Header = () => {
    var TxtType = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = "";
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) {
            delta /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === "") {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    };

    window.onload = function () {
        var elements = document.getElementsByClassName("typewrite");
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute("data-type");
            var period = elements[i].getAttribute("data-period");
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
    return (<section className="header">
        

      <div className='row'>
      <div className='col-md-6 lg-6 sm-12 d-flex'>
      
      </div>
      <div className='col-md-6 lg-6 sm-12 '>
      <h2 className="main-header ">
         
      <h1>Hi There </h1>
      <br/>
          <h1><big>I am AVI MISTRY</big></h1>
                <a
                    href
                    className="typewrite"
                    style={{color: 'white'}}
                    data-period={2000}
                    data-type='[ "DEVELOPER", "DESIGNER", " RELIABLE", "FRESHER" ]'
                >
                    <span className="wrap" />
                </a>
                    <div>
                    <img style={{maxWidth:"30%",borderRadius:'30%',paddingTop:"40px"}} src={image} alt=""/>
                    </div>
                    <div>
                    <a href="https://drive.google.com/uc?export=download&id=1WmAH_Zr1WURjTL6ZVq_h3FtPYILXwITI">  <button data-aos="fade-up"  style={{background:'none',borderRadius:'20px',fontSize:'16px',color:'white',padding:"10px",marginTop:"50px"}}>Download Resume</button></a>
                    </div>
            </h2>
            
            
      </div>
      </div>
            <div className="ripple-background">
                <div className="circle xxlarge shade1" />
                <div className="circle xlarge shade2" />
                <div className="circle large shade3" />
                <div className="circle mediun shade4" />
                <div className="circle small shade5" />
            </div>
        
</section>
      
    );
};

export default Header;