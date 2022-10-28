import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Logo from '../assets/image/myechelon-logo.png'
import Sidebar from './SideBar';
import { getUser, removeUserSession } from '../Utils/Common';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const DashboardHeader = () => {
    const navigate = useNavigate()
    const [userId, setUserId] = useState('')
    const [open, setOpen] = useState(false)
    const handleDropDown = () => setOpen(!open);
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const user = getUser()
    const handleLogout = () => {
        removeUserSession();
        navigate('/login');
    }

    const handleChangePassword = () => {
        setUserId(user[0]._id)
    }

    return (
        <div className="w-screen h-[8vh] z-10  bg-[#191919] fixed border-b">
            <div className="px-3 flex items-center w-full h-full justify-between">
                <div className="flex px-4 lg:hidden">
                    <div onClick={handleClick}>
                        {!nav ? (
                            <MenuIcon className="w-7 text-white" />
                        ) : (
                            <XIcon className="w-7 text-white" />
                        )}
                    </div>
                </div>
                <img src={Logo} alt="logo" className='absolute ml-[40%] md:ml-[50%] lg:ml-6 w-16 rounded' />
                <div className="flex items-center justify-center h-full lg:w-full">
                    <div className="relative">
                        <h1 className="hidden lg:flex text-center lg:ml-8 lg:mt-2 text-gray-400" >Myechelon.</h1>
                    </div>
                </div>
                {user ? (<img
                    onClick={handleDropDown}
                    className="w-10 cursor-pointer ml-4 mr-8 rounded-full"
                    src={user[0]?.image}
                    alt="avatar"
                />
                ) : (<img
                    onClick={handleDropDown}
                    className="w-10 cursor-pointer ml-4 mr-8 rounded-full"
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
                    alt="avatar"
                />)}
                <div className={!open ? 'hidden' : 'w-58 mt-48 rounded-lg shadow border absolute bg-[#191919] justify-end right-0'} onClick={handleDropDown}>
                    <ul className="space-y-3">
                        <li className="font-medium">
                            <a href="#link" className="flex text-white items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700">
                                <div className="mr-3">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                </div>
                                Update profile
                            </a>
                        </li>
                        <li className="font-medium">
                            {/* <NavLink to={`change/password/${userId}`} className="flex text-white items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700" */}
                            <NavLink to="#link" className="flex text-white items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700"
                            onClick={handleChangePassword}
                            >
                                <div className="mr-3">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                </div>
                                Change Password
                            </NavLink>

                        </li>
                        <hr className="text-white" />
                        <li className="font-medium">
                            <Link to={"/login"}
                                className="flex text-white items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-red-600"
                                onClick={handleLogout}
                            >
                                <div className="mr-3 text-red-600">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                </div>
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <ul
                onClick={handleClick}
                className={
                    !nav ? 'hidden' : 'bg-white cursor-pointer lg:hidden'
                }
            >
                <Sidebar style="flex pt-2 h-[92%]" />
            </ul>
        </div>
    );
};

export default DashboardHeader
