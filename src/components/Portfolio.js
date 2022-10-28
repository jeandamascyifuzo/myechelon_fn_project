import React, { useEffect, useState } from 'react'
import Zoom from 'react-reveal/Zoom';
import axios, { axiosRequest } from '../api/index'
import { ToastContainer } from "react-toastify";
import Notify from "../functions/Notify";
import { Link, NavLink } from 'react-router-dom';
import SpinnerLoading from './SpinnerLoading'
const Portfolio_URL = "portifolio"

const Portfolio = () => {
    const [loading, setLoading] = useState(false)
    const [Data, setData] = useState([]);

    const GetPortifolio = () => {
        setLoading(true)
        axiosRequest.get(Portfolio_URL)
            .then(response => {
                setLoading(false)
                const result = response.data;
                const { status, message, data } = result;
                if (status !== 'SUCCESS') {
                    setData(data)
                }
                else {
                    setData(data)
                }
            })
            .catch(error => {
                setLoading(false)
                Notify(error.message, "error");
            })
    }

    useEffect(() => {
        GetPortifolio();
    }, [])
    
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="unslate_co--section" id="portfolio-section">
                <div className="container">
                    <div className="relative"><div className="loader-portfolio-wrap"><div className="loader-portfolio"></div></div> </div>
                    <div id="portfolio-single-holder"></div>
                    <div className="portfolio-wrapper xl:px-24">
                        <div className="d-flex align-items-center mb-4 gsap-reveal gsap-reveal-filter">
                            <Zoom>
                                <h2 className="mr-auto heading-h2"><span className="gsap-reveal text-white font-bold font-lexend">Portfolio</span></h2>
                            </Zoom>
                        </div>
                        <div id="posts" className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-3 md:gap-0">
                            {loading && <SpinnerLoading />}
                            {Data.slice(0, 10).map((item) => (
                                <div className="item web branding isotope-mb-2" key={item._id}>
                                    <div className="portfolio-item ajax-load-page isotope-item gsap-reveal-img" data-id="1">
                                        <div className="overlay">
                                            <span className="wrap-icon icon-link2"></span>
                                            <div className="portfolio-item-content">
                                                <a href={item.link} target="_blank" rel="noreferrer" className='cursor-pointer'>
                                                    <h3>{item.title}</h3>
                                                </a>
                                                <p>{item.desc}</p>
                                            </div>
                                        </div>
                                        <img src={item.image} className="lazyload object-cover w-[400px] h-[100px] md:w-[100%] sm:h-[200px] xl:h-[300px]" alt="Images" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio
