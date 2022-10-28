import React from 'react'
import Divider from '../assets/image/divider.png'
import { clientsData } from '../dummyData/Data'
import Zoom from 'react-reveal/Zoom';

const Clients = () => {
    return (
        <div className="unslate_co--section" id="testimonial-section">
            <div className="container">
                <div className="section-heading-wrap text-center mb-5">
                    <Zoom>
                    <h2 className="heading-h2 text-center divider"><span className="gsap-reveal text-white">My Happy Clients</span></h2>
                    </Zoom>
                    <span className="gsap-reveal"><img src={Divider} alt="divider" width="76" /></span>
                </div>
            </div>

            <div className="owl-carousel testimonial-slider px-24" data-aos="fade-up">
                <div>
                    {clientsData.map((item) => (
                        <div className="testimonial-v1 text-white" key={item.id}>
                            <div className="testimonial-inner-bg">
                                <span className="quote">&ldquo;</span>
                                <blockquote>
                                    {item.message}
                                </blockquote>
                            </div>
                            <div className="testimonial-author-info">
                                <img src={item.image} alt="Images" />
                                <h3>{item.name}</h3>
                                <span className="d-block position">{item.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Clients
