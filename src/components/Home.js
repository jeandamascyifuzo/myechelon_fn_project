import React from 'react'
const Home = () => {
    return (
        <div className="cover-v1 jarallax" id="home-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-7 mx-auto text-center ">
                        <h1 className="text-white pb-4 font-bold font-lexend">Myechelon</h1>
                        <h2 className="text-white font-bold font-josefin">I’m Glenn Chapman Hoyer A Product Designer Based In San Francisco</h2>
                    </div>
                </div>
            </div>
            <a href="#portfolio-section" className="mouse-wrap smoothscroll">
                <span className="mouse">
                    <span className="scroll"></span>
                </span>
                <span className="mouse-label">Scroll</span>
            </a>
        </div>
    )
}

export default Home
