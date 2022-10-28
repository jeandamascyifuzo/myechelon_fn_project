import React, { useState } from 'react'
import { FaArrowCircleLeft } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { axiosRequest } from '../api'
import { ToastContainer } from "react-toastify";
import { Button, Spinner } from 'react-bootstrap';
import Notify from '../functions/Notify'
import { setUserSession } from '../Utils/Common';

const ForgetPassword = () => {
    let [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    const handleSubmite = (e) => {
        e.preventDefault()
        const url = 'team/forgot/password'
        const Credentials = { email }
        setLoading(true)
        axiosRequest.post(url, Credentials)
            .then(response => {
                setLoading(false)
                const result = response.data;
                const { status, message, data } = result;
                if (message !== 'Email Sent successfully 👍🏾') {
                    setEmail(" ");
                    Notify(status, "error");
                }
                else {
                    setEmail(" ");
                    Notify(result.message, "success");
                    // setUserSession(response.data.token, response.data.user)
                    // navigate("/dashboard")
                }
            })
            .catch(error => {
                setLoading(false)
                Notify(error, "error");
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
            <div className="bg-black">
                <div className="container mx-auto ">
                    <div className='py-2 text-white'>
                        <Link to="/login" className="text-2xl text-white ">
                            <FaArrowCircleLeft />
                        </Link>
                    </div>
                    <div className="flex justify-center items-center h-screen px-6">
                        <div className="w-full xl:w-3/4 lg:w-11/12 flex justify-center items-center">
                            <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg">
                                <div className="px-8 mb-4 text-center">
                                    <h3 className="pt-4 mb-2 text-2xl font-bold font-lexend">Forgot Your Password?</h3>
                                    <p className="mb-4 text-sm text-gray-700 font-bold font-sans">
                                        We get it, stuff happens. Just enter your email address below and we'll send you a
                                        link to reset your password!
                                    </p>
                                </div>
                                <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded font-bold font-josefin">
                                    <div className="mb-4">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                                            Email
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none "
                                            id="email"
                                            type="email"
                                            placeholder="Enter Email Address..."
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-6 text-center">
                                        {loading ? (
                                            <Button variant="dark" disabled className='w-[40%] md:w-1/2'>
                                                <Spinner
                                                    as="span"
                                                    variant="light"
                                                    size="sm"
                                                    role="status"
                                                    aria-hidden="false"
                                                    animation="border" />
                                                Processing...
                                            </Button>
                                        ) : (
                                            <button
                                                className="w-full px-2 py-2 font-bold text-gray-900 border bg-transparent rounded-full focus:outline-none"
                                                onClick={handleSubmite}
                                            >
                                                Reset Password
                                            </button>
                                        )}
                                    </div>
                                    <hr className="mb-6 border-t" />
                                    <div className="text-center">
                                        <Link to="/login"
                                            className="inline-block text-sm text-gray-900 align-baseline hover:text-gray-600"

                                        >
                                            Already remember password? Login!
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgetPassword
