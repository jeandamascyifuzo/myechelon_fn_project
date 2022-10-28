import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    ChartPieIcon,
    UsersIcon,
    GlobeAltIcon,
    InboxInIcon,

} from '@heroicons/react/solid';

const SideBar = ({ style }) => {
    return (
        <div
            className={`${style} flex-col fixed h-[100%] mt-[2px] xl:mt-[8vh] left-0 bg-[#191919] border-r px-4 pt-4`}
        >
            <div className="list-none pr-8">
                <li className="mb-4 hover:text-primary">
                    <NavLink
                        to="team"
                        className="flex flex-row text-white">
                        <UsersIcon className="w-5 mr-2 " />
                        <span className="text-base ">Team</span>
                    </NavLink>
                </li>
                <li className="mb-4 hover:text-primary">
                    <NavLink
                        to="portfolio"
                        className="flex flex-row text-white">
                        <GlobeAltIcon className="w-5 mr-2 " />
                        <span className="text-base ">Portfolio</span>
                    </NavLink>
                </li>
                <li className="mb-4 hover:text-primary">
                    <NavLink
                        to="service"
                        className="flex flex-row text-white">
                        <InboxInIcon className="w-5 mr-2 " />
                        <span className="text-base ">
                            Service
                        </span>
                    </NavLink>
                </li>
                <li className="mb-4 hover:text-primary">
                    <NavLink
                        to="message"
                        className="flex flex-row text-white">
                        <ChartPieIcon className="w-5 mr-2 " />
                        <span className="text-base ">
                            Message
                        </span>
                    </NavLink>
                </li>
            </div>
        </div>
    );
};

export default SideBar
