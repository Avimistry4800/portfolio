import React, { useEffect } from 'react';
import './Expertise.css';
import Aos from 'aos';
import "aos/dist/aos.css"


const Expertise = () => {
    useEffect(() => {
        Aos.init({duration:2000});
    },[]);
    return (
        <section  id="expertise" className="pt-4 pb-5">
		<div class="expertise-area">
			<div class="container">
				<div class="row">
					<div class="col-xl-12">
						<div class="section-heading-1">
							<h3 data-aos="fade-left" data-aos-delay="200">Area of</h3>
							<h1 data-aos="fade-right" data-aos-delay="200">Experties</h1>
						</div>
					</div>
				</div>
				<div class="progress-bar-area">
					<div class="row">
						<div data-aos="flip-right" data-aos-delay="200" class="col-md-6 progress-pr mb-bot-55-mobile col-sm-12">
							<h4 class="progress-top">Web Development</h4>
							<h3 class="progressbar-title"><span class="progessbar-name">FRONTEND DEVELOPMENT</span><span class="progressbar-value">80%</span></h3>
							<div class="progress">
								<div class="progress-bar " role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={{width: '80%',background:"#F3D60E"}}></div>
							</div>
							<h4 class="progress-top">Web devlopment</h4>
							<h3 class="progressbar-title"><span class="progessbar-name">BACKEND DEVELOPMENT</span><span class="progressbar-value">40%</span></h3>
							<div class="progress">
								<div class="progress-bar " role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={{width: '40%',background:"#F3D60E"}}></div>
							</div>
						</div>
						<div data-aos="flip-left" data-aos-delay="200"class="col-md-6 progress-pl pt-2 col-sm-12">
							<h4 class="progress-top">programming Language</h4>
							<h3 class="progressbar-title"><span class="progessbar-name">javascript </span><span class="progressbar-value">70%</span></h3>
							<div class="progress">
								<div class="progress-bar " role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={{width: '70%' ,background:"#F3D60E"}}></div>
							</div>
							<h4 class="progress-top">graphic Design</h4>
							<h3 class="progressbar-title"><span class="progessbar-name">Illastrator,Photoshop</span><span class="progressbar-value">90%</span></h3>
							<div class="progress">
								<div class="progress-bar " role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={{width: '90%',background:"#F3D60E"}}></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    );
};

export default Expertise;