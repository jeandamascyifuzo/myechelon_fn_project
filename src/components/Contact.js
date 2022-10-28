import React, { useState } from 'react'
import Divider from '../assets/image/divider.png'
import { ToastContainer } from "react-toastify";
import Notify from "../functions/Notify";
import { axiosRequest } from '../api/index'
const Contact_URL = "message/send"

const Contact = () => {
    const [names, setNames] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [telephone, setTelephone] = useState("")

    const handleSubmite = (e) => {
        e.preventDefault()
        const Credentials = { names, email, message, telephone }
        axiosRequest.post(Contact_URL, Credentials)
            .then(response => {
                const result = response.data;
                Notify(result.message, "success");
                const { status, message, data } = result;
                if (status !== 'SUCCESS') {
                    setNames(" ");
                    setEmail(" ");
                    setMessage(" ");
                    setTelephone(" ")

                }
                else {
                    console.log(message)
                }
            })
            .catch(error => {
                if (error.code !== "ERR_NETWORK") {
                    Notify(error.response.data.message, "error");
                }
                else {
                    Notify(error.message, "error");
                }
            })
    }
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
            <div className="unslate_co--section" id="contact-section">
                <div className="container">
                    <div className="section-heading-wrap text-center mb-5 pt-10">
                        <h2 className="heading-h2 text-center divider"><span className="gsap-reveal font-bold font-lexend">We're happy to hear from you</span></h2>
                        <span className="gsap-reveal"><img src={Divider} alt="divider" width="76" /></span>
                    </div>
                    <div className="row justify-content-between xl:px-24">
                        <div className="col-md-6">
                            <form method="post" className="form-outline-style-v1" id="contactForm">
                                <div className="form-group row mb-0">
                                    <div className="col-lg-6 form-group gsap-reveal">
                                        <input
                                            name="name"
                                            type="text"
                                            placeholder='Names'
                                            className="form-control"
                                            id="name"
                                            value={names}
                                            onChange={(e) => setNames(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-lg-6 form-group gsap-reveal">
                                        <input
                                            name="telephone"
                                            type="number"
                                            placeholder='Telephone number'
                                            className="form-control"
                                            id="telephone"
                                            value={telephone}
                                            onChange={(e) => setTelephone(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-lg-6 form-group gsap-reveal">
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder='Email'
                                            className="form-control" id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-lg-12 form-group gsap-reveal">
                                        <textarea
                                            name="message"
                                            id="message"
                                            cols="30"
                                            placeholder='Write your message...'
                                            rows="7"
                                            className="form-control"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                        >
                                        </textarea>
                                    </div>
                                </div>
                                <div className="form-group row gsap-reveal">
                                    <div className="col-md-12 d-flex align-items-center">
                                        <input
                                            onClick={handleSubmite}
                                            type="submit"
                                            className="btn btn-outline-pill btn-custom-light mr-3"
                                            value="Send Message"
                                        />
                                        <span className="submitting"></span>
                                    </div>
                                </div>
                            </form>
                            <div id="form-message-warning" className="mt-4"></div>
                            <div id="form-message-success">
                                Your message was sent, thank you!
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact-info-v1 xl:ml-6">
                                <div className="gsap-reveal d-block">
                                    <span className="d-block contact-info-label">Email</span>
                                    <a href="#s" className="contact-info-val">myechelonltd@gmail.com</a>
                                </div>
                                <div className="gsap-reveal d-block">
                                    <span className="d-block contact-info-label">Phone</span>
                                    <a href="#s" className="contact-info-val">0781917267</a>
                                </div>
                                <div className="gsap-reveal d-block">
                                    <span className="d-block contact-info-label">Address</span>
                                    <address className="contact-info-val">Kigali_Rwanda. <br /> Kicukiro</address>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
