import React from 'react'
import Divider from '../assets/image/divider.png'

const Skills = () => {
    return (
        <div className="unslate_co--section section-counter" id="skills-section">
            <div className="container">
                <div className="section-heading-wrap text-center mb-5">
                    <h2 className="heading-h2 text-center divider"><span className="gsap-reveal">My Skills</span></h2>
                    <span className="gsap-reveal"><img src={Divider} alt="divider" width="76" /></span>
                </div>
                <div className="row pt-5">
                    <div className="col-6 col-sm-6 mb-5 mb-lg-0 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="0">
                        <div className="counter-v1 text-center">
                            <span className="number-wrap">
                                <span className="number number-counter" data-number="90">90</span>
                                <span className="append-text text-white">%</span>
                            </span>
                            <span className="counter-label text-white">WordPress</span>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 mb-5 mb-lg-0 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
                        <div className="counter-v1 text-center">
                            <span className="number-wrap">
                                <span className="number number-counter" data-number="99">99</span>
                                <span className="append-text text-white">%</span>
                            </span>
                            <span className="counter-label text-white">HTML/CSS</span>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 mb-5 mb-lg-0 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
                        <div className="counter-v1 text-center">
                            <span className="number-wrap">
                                <span className="number number-counter" data-number="95">95</span>
                                <span className="append-text text-white">%</span>
                            </span>
                            <span className="counter-label text-white">jQuery</span>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 mb-5 mb-lg-0 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
                        <div className="counter-v1 text-center">
                            <span className="number-wrap">
                                <span className="number number-counter" data-number="100">100</span>
                                <span className="append-text text-white">%</span>
                            </span>
                            <span className="counter-label text-white">Design</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
