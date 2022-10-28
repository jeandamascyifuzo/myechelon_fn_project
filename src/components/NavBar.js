import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/image/myechelon-logo.png'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);
    return (
        <div className="Navbar">
            <span className="nav-logo px-3 sm:hidden"> <a href="#home-section">
                <img src={Logo} className="mr-3 h-6 sm:h-12" alt="Logo" />
            </a></span>
            <div className={`pl-0 md:pl-[7%]  lg:pl-[18%] xl:pl-[25%] 2xl:pl-[30%] fixed z-50 bg-[#010000] w-full nav-items ${isOpen && "open"}`}>
                <ul className="flex flex-col mt-4 sm:flex-row sm:space-x-8 sm:mt-0 md:text-sm sm:font-medium" onClick={handleClick}>
                    <li className="block py-2 pr-4 pl-3 text-lg text-white font-sans hover:text-gray-50 rounded sm:bg-transparent sm:p-0">
                        <a
                            href="#home-section"
                            className="text-white font-bold font-lexend"
                        >
                            Home
                        </a>
                    </li>
                    <li className="block py-2 pr-4 pl-3 text-lg text-white hover:text-gray-50 font-sans border-gray-50 md:hover:bg-transparent md:border-0 md:p-0">
                        <a
                            href="#portfolio-section"
                            className="text-white font-bold font-lexend"
                        >
                            Portfolios
                        </a>
                    </li>
                    <li className="block py-2 pr-4 pl-3 text-lg text-gray-200 hover:text-gray-50 font-sans border-gray-50 md:hover:bg-transparent md:border-0 md:p-0">
                        <a
                            href="#about-section"
                            className="text-white font-bold font-lexend"
                        >
                            About
                        </a>
                    </li>
                    <span className="hidden sm:block px-3"> <a href="#home-section">
                        <img src={Logo} className=" mr-3 h-6 sm:h-12" alt="Logo" />
                    </a></span>
                    <li className="block py-2 pr-4 pl-3 text-lg text-gray-200 hover:text-gray-50 font-sans border-gray-50 md:hover:bg-transparent md:border-0 md:p-0">
                        <a
                            href="#services-section"
                            className="text-white font-bold font-lexend"
                        >
                            Service
                        </a>
                    </li>
                    <li className="block py-2 pr-4 pl-3 text-lg text-gray-200 hover:text-gray-50 font-sans border-gray-50 md:hover:bg-transparent md:border-0 md:p-0">
                        <a
                            href="#contact-section"
                            className="text-white font-bold font-lexend"
                        >
                            Contact
                        </a>
                    </li>

                </ul>
            </div>
            <div
                className={`nav-toggle ${isOpen && "open"}`}
                onClick={handleClick}
            >
                <div className="bar" ></div>
            </div>
        </div>
    )
}

export default NavBar
