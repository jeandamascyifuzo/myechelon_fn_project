import React from 'react'
import Divider from '../assets/image/divider.png'
import Person from '../assets/image/about_me_pic2.jpg'
import Zoom from 'react-reveal/Zoom';

const About = () => {
    return (
        <div className="unslate_co--site-wrap pl-0 xl:pl-36 overflow-x-hidden">
            <div className="unslate_co--section" id="about-section">
                <div className="container">
                    <div className="section-heading-wrap text-center mb-5 pt-10">
                        <Zoom>
                        <h2 className="heading-h2 text-center divider"><span className="gsap-reveal text-white font-bold font-lexend">About Us</span></h2>
                        </Zoom>
                        <span className="gsap-reveal">
                            <img src={Divider} alt="divider" width="76" />
                        </span>
                    </div>
                    <div className="row mt-5 justify-content-between xl:pr-36">
                        <div className="col-lg-7 mb-5 mb-lg-0">
                            <figure className="dotted-bg gsap-reveal-img ">
                                <img src={Person} alt="Images" className="img-fluid" />
                            </figure>
                        </div>
                        <div className="col-lg-4 pr-lg-5 text-white">
                            <h3 className="mb-4 heading-h3"><span className="gsap-reveal font-bold font-josefin">We can make it together</span></h3>
                            <p className="mb-4 gsap-reveal text-gray-300 text-lg font-bold font-sans"> Founded in 2019, <span className="text-xl text-white italic">Myechelon</span> is a provider of <span className="text-xl text-white italic">software development services and Graphic design.</span> we have helped companies improve business performance by providing custom made software solutions and services for our customers.With over 3 years in Information Technology, we have built up expertise in CRM, ERP, eCommerce, Mobile apps, websites and other areas.our headquarter are in Kigali.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

