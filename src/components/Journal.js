import React from 'react'
import Divider from '../assets/image/divider.png'
import Post1 from '../assets/image/post_2.jpg'
import Post2 from '../assets/image/post_3.jpg'
import Post3 from '../assets/image/post_4.jpg'
import Post4 from '../assets/image/post_5.jpg'
import Post5 from '../assets/image/post_1.jpg'

const Journal = () => {
    return (
        <div className="unslate_co--section" id="journal-section">
            <div className="container">
                <div className="section-heading-wrap text-center mb-5">
                    <h2 className="heading-h2 text-center divider"><span className="gsap-reveal">My Journal</span></h2>
                    <span className="gsap-reveal"><img src={Divider} alt="divider" width="76" /></span>
                </div>
                <div className="row gutter-v4 align-items-stretch px-24">
                    <div className="col-sm-6 col-md-6 col-lg-8 blog-post-entry" data-aos="fade-up" data-aos-delay="0">
                        <a href="blog-single.html" className="grid-item blog-item w-100 h-100">
                            <div className="overlay">
                                <div className="portfolio-item-content">
                                    <h3>A Mounteering Guide For Beginners</h3>
                                    <p className="post-meta">By Joefrey <span className="small">&bullet;</span> 5 mins read</p>
                                </div>
                            </div>
                            <img src={Post1} className="lazyload" alt="Images" />
                        </a>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-4 blog-post-entry" data-aos="fade-up" data-aos-delay="100">
                        <a href="blog-single.html" className="grid-item blog-item w-100 h-100">
                            <div className="overlay">
                                <div className="portfolio-item-content">
                                    <h3>A Mounteering Guide For Beginners</h3>
                                    <p className="post-meta">By Joefrey <span className="small">&bullet;</span> 5 mins read</p>
                                </div>
                            </div>
                            <img src={Post2} className="lazyload" alt="Images" />
                        </a>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-4 blog-post-entry" data-aos="fade-up" data-aos-delay="0">
                        <a href="blog-single.html" className="grid-item blog-item w-100 h-100">
                            <div className="overlay">
                                <div className="portfolio-item-content">
                                    <h3>A Mounteering Guide For Beginners</h3>
                                    <p className="post-meta">By Joefrey <span className="small">&bullet;</span> 5 mins read</p>
                                </div>
                            </div>
                            <img src={Post3} className="lazyload" alt="Images" />
                        </a>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-4 blog-post-entry" data-aos="fade-up" data-aos-delay="100">
                        <a href="blog-single.html" className="grid-item blog-item w-100 h-100">
                            <div className="overlay">
                                <div className="portfolio-item-content">
                                    <h3>A Mounteering Guide For Beginners</h3>
                                    <p className="post-meta">By Joefrey <span className="small">&bullet;</span> 5 mins read</p>
                                </div>
                            </div>
                            <img src={Post4} className="lazyload" alt="Images" />
                        </a>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-4 blog-post-entry" data-aos="fade-up" data-aos-delay="200">
                        <a href="blog-single.html" className="grid-item blog-item w-100 h-100">
                            <div className="overlay">
                                <div className="portfolio-item-content">
                                    <h3>A Mounteering Guide For Beginners</h3>
                                    <p className="post-meta">By Joefrey <span className="small">&bullet;</span> 5 mins read</p>
                                </div>
                            </div>
                            <img src={Post5} className="lazyload" alt="Images" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Journal
