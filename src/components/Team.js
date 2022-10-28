import React, { useEffect, useState } from 'react'
import Divider from '../assets/image/divider.png'
import { axiosRequest } from '../api/index'
import { ToastContainer } from "react-toastify";
import Notify from "../functions/Notify";
import SpinnerLoading from './SpinnerLoading';
const Team_URL = "team"

const Team = () => {
    const [loading, setLoading] = useState(false)
    const [Data, setData] = useState([]);

    const GetTeamMembers = () => {
        setLoading(true)
        axiosRequest.get(Team_URL)
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
        GetTeamMembers();
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
            <div className="section-heading-wrap text-center mb-5 pt-10">
                <h4 className="md:heading-h2 heading-h3 text-center divider"><span className="gsap-reveal font-bold font-lexend">Get in touch with our team</span></h4>
                <span className="gsap-reveal">
                    <img src={Divider} alt="divider" width="76" />
                </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:px-[22%] sm:px-16 px-14">
                {loading && <SpinnerLoading />}
                {Data.map((item) => (
                    <div className="max-w-xs rounded overflow-hidden bg-clip-border bg-transparent border shadow-xl p-4" key={item._id}>
                        <img className="w-32 h-32 mx-auto rounded-full object-cover mb-24" src={item.image} alt="profile image" />
                        <div className="px-6 py-4">
                            <hr className="solid text-white" />
                            <div className="font-bold text-white text-xl mb-2 font-Inria">{item.names}</div>
                            <hr className="solid text-white" />
                            <p className="text-white text-base font-bold font-lexend">
                                {item.title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Team
