import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="unslate_co--footer unslate_co--section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7">
                        <div className="footer-site-logo"><a href="#s">Myechelon<span>.</span></a></div>
                        <ul className="footer-site-social">
                            <li><a href="#s">Facebook</a></li>
                            <li><a href="#s">Twitter</a></li>
                            <li><a href="#s">Instagram</a></li>
                            <li><a href="#s">Facebook</a></li>
                            <li><a href="#s">Twitter</a></li>
                        </ul>

                        <p className="site-copyright">
                            Copyright &copy;
                            <script>
                                document.write(new Date().getFullYear());
                            </script>  <a href="login">2022</a> All rights reserved |  <i className="icon-heart"
                                aria-hidden="true"></i> by Myechelon
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
