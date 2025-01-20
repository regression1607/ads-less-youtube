import React from "react";
import { useSelector } from "react-redux";
import { IoIosHome, IoIosTrendingUp, IoIosSettings } from "react-icons/io";
import { SiYoutubeshorts, SiYoutubegaming, SiApplepodcasts, SiYoutubekids } from "react-icons/si";
import { MdSubscriptions, MdLocalMovies, MdOutlineSports } from "react-icons/md";
import { FaUserAlt, FaHistory, FaShoppingBag, FaMusic, FaHackerNews, FaBook, FaHandsHelping } from "react-icons/fa";
import { RiLiveFill } from "react-icons/ri";
import { GiShintoShrineMirror } from "react-icons/gi";
import { TbPremiumRights } from "react-icons/tb";
import { MdBugReport, MdFeedback } from "react-icons/md";

const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
    if (!isMenuOpen) return null;
    return (
        <div className="pl-8 shadow-lg w-full md:w-64 h-screen bg-gray-100">
            <ul className="pb-3">
                <li className="flex items-center p-2 hover:bg-gray-200 rounded-md"><IoIosHome className="mr-2" /> Home</li>
                <li className="flex items-center p-2 hover:bg-gray-200 rounded-md"><SiYoutubeshorts className="mr-2" /> Shorts</li>
                <li className="flex items-center p-2 hover:bg-gray-200 rounded-md"><MdSubscriptions className="mr-2" /> Subscriptions</li>
            </ul>
            <hr className="pb-3"></hr>
            <ul className="pb-3">
                <li className="flex items-center p-2 hover:bg-gray-200 rounded-md"><FaUserAlt className="mr-2" /> You</li>
                <li className="flex items-center p-2 hover:bg-gray-200 rounded-md"><FaHistory className="mr-2" /> History</li>
            </ul>
            <hr></hr>
            <h5 className="font-bold pt-5 pl-2">Explore</h5>
            <ul className="pb-3">
                <li className="flex items-center p-2 hover:bg-gray-200 rounded-md"><IoIosTrendingUp className="mr-2" /> Trending</li>
                <li className="flex items-center p-2 hover:bg-gray-200 rounded-md"><FaShoppingBag className="mr-2" /> Shopping</li>
                <li className="flex items-center p-2 hover:bg-gray-200 rounded-md"><FaMusic className="mr-2" /> Music</li>
                <li className="flex items-center p-2 hover:bg-gray-200 rounded-md"><MdLocalMovies className="mr-2" /> Movies</li>
                <li className="flex items-center p-2 hover:bg-gray-200 rounded-md"><RiLiveFill className="mr-2" /> Live</li>
                <li className="flex items-center p-2 hover:bg-gray-200 rounded-md"><SiYoutubegaming className="mr-2" /> Gaming</li>
                <li className="flex items-center p-2 hover:bg-gray-200 rounded-md"><FaHackerNews className="mr-2" /> News</li>
                <li className="flex items-center p-2 hover:bg-gray-200 rounded-md"><MdOutlineSports className="mr-2" /> Sports</li>
                <li className="flex items-center p-2 hover:bg-gray-200 rounded-md"><FaBook className="mr-2" /> Courses</li>
                <li className="flex items-center p-2 hover:bg-gray-200 rounded-md"><GiShintoShrineMirror className="mr-2" /> Fashion & Beauty</li>
                <li className="flex items-center p-2 hover:bg-gray-200 rounded-md"><SiApplepodcasts className="mr-2" /> Podcasts</li>
            </ul>
            <hr></hr>
            <h5 className="font-bold pt-5 pl-2">More from YouTube</h5>
            <ul className="pb-3">
                <li className="flex items-center p-2 hover:bg-gray-200 rounded-md"><TbPremiumRights className="mr-2" /> YouTube Premium</li>
                <li className="flex items-center p-2 hover:bg-gray-200 rounded-md"><FaMusic className="mr-2" /> YouTube Music</li>
                <li className="flex items-center p-2 hover:bg-gray-200 rounded-md"><SiYoutubekids className="mr-2" /> YouTube Kids</li>
            </ul>
            <hr className="pb-3"></hr>
            <ul className="pb-3">
                <li className="flex items-center p-2 hover:bg-gray-200 rounded-md"><IoIosSettings className="mr-2" /> Settings</li>
                <li className="flex items-center p-2 hover:bg-gray-200 rounded-md"><MdBugReport className="mr-2" /> Report history</li>
                <li className="flex items-center p-2 hover:bg-gray-200 rounded-md"><FaHandsHelping className="mr-2" /> Help</li>
                <li className="flex items-center p-2 hover:bg-gray-200 rounded-md"><MdFeedback className="mr-2" /> Send feedback</li>
            </ul>
        </div>
    );
}
export default Sidebar;
