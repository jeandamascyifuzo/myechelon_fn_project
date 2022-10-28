import React from 'react'
import Puma from '../assets/image/logo-puma.png'
import Adobe from '../assets/image/logo-adobe.png'
import Paypal from '../assets/image/logo-paypal.png'
import Google from '../assets/image/logo-google.png'

const Media = () => {
    return (
        <div className="unslate_co--section">
            <div className="container">
                <div className="owl-carousel logo-slider xl:px-20">
                    <div className="logo-v1 gsap-reveal">
                        <img src={Google} alt="Images" className="img-fluid w-40 xl:w-64" />
                    </div>
                    <div className="logo-v1 gsap-reveal">
                        <img src={Puma} alt="Images" className="img-fluid w-40 xl:w-64" />
                    </div>
                    <div className="logo-v1 gsap-reveal">
                        <img src={Paypal} alt="Images" className="img-fluid w-40 xl:w-64" />
                    </div>
                    <div className="logo-v1 gsap-reveal">
                        <img src={Adobe} alt="Images" className="img-fluid w-40 xl:w-64" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Media
