import React, { useState } from 'react'
import { FaArrowCircleLeft, FaRegEye } from 'react-icons/fa'
import { FiEyeOff } from 'react-icons/fi'
import { MdLockOutline } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { axiosRequest } from '../api'
import { Button, Spinner } from 'react-bootstrap';
import Notify from '../functions/Notify'

const ResetPassword = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    let [loading, setLoading] = useState(false);
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const tooglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    const userId = (window.location.href.split('/')[5])
    const Token = (window.location.href.split('/')[6])
    const handlResetPassword = (e) => {
        e.preventDefault()
        const url = `team/reset/password/${userId}/${Token}`
        const Credentials = { password }
        setLoading(true)
        axiosRequest.post(url, Credentials)
            .then(response => {
                setLoading(false)
                const result = response.data;
                Notify(result.message, "success");
                navigate("/login")
                const { status, message, data } = result;
                if (message !== 'SUCCESS') {
                    setPassword("");
                    Notify(message, "error");
                }
                else {
                    console.log(message)
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
                <div className="container mx-auto">
                    <div className='py-2 text-white'>
                        <Link to="/login" className="text-2xl text-white ">
                            <FaArrowCircleLeft />
                        </Link>
                    </div>
                    <div className="flex justify-center items-center h-screen px-6">
                        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                            <div
                                className="w-full h-auto bg-black hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
                            >
                                <img src='https://media.istockphoto.com/photos/rest-password-text-on-wooden-blocks-on-top-of-a-laptop-online-and-picture-id1390300398?b=1&k=20&m=1390300398&s=170667a&w=0&h=UbSlFEVBT-wRPz4sWLHVku_fFWClr8dthdWf4m56ehU='
                                    className='h-full object-cover'
                                    alt='images' />
                            </div>
                            <div className="w-full lg:w-1/2 bg-[#191919] p-5 rounded-lg lg:rounded-l-none">
                                <div className="px-8 mb-4 text-center">
                                    <h3 className="pt-4 mb-2 text-2xl text-white font-bold font-lexend">Change your Password</h3>
                                    <p className="mb-4 text-sm text-white font-bold font-sans">
                                        We're here to help you reset your password!
                                    </p>
                                </div>
                                <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded font-bold font-josefin">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                                        New Password
                                    </label>
                                    <div className="bg-white w-full p-2 shadow flex items-center rounded mb-2  ">
                                        <MdLockOutline className="text-gray-400 mr-2 " />
                                        <input
                                            placeholder="Password"
                                            type={passwordShown ? 'text' : 'password'}
                                            className="bg-white outline-none  text-sm flex-1 text-gray-400"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <div className="text-gray-400 cursor-pointer onClick= {()=> handleShowPassword}">
                                            {passwordShown ? (
                                                <FaRegEye onClick={tooglePassword} />
                                            ) : (
                                                <FiEyeOff onClick={tooglePassword} />
                                            )}
                                        </div>
                                    </div>

                                    <div className="my-6 text-center">
                                        <Link to="/login">
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
                                                    onClick={handlResetPassword}
                                                >
                                                    Confirm
                                                </button>
                                            )}
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

export default ResetPassword
