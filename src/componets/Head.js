import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { toggleMenu , setSearchResults } from '../utils/appSlice';
import {YOUTUBE_SEARCH , GOOGLE_API_KEY} from '../utils/constant';


function Head() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const dispatch = useDispatch();
    // useEffect(() => {

    //    const timer = setTimeout(() => {
    //         getSearchSuggestions();
    //     }, 200);

    //     return () => clearTimeout(timer);

    //  }, [searchQuery]);
     
     const youtubeSearch = async() => {
        console.log('youtube searchQuery clicked',searchQuery);
        const data = await fetch(`${YOUTUBE_SEARCH}${searchQuery}&key=${GOOGLE_API_KEY}`);
        if(!data.ok){
            throw new Error(`HTTP error! status: ${data.status}`);
        }
        const json = await data.json();
        if (!json) {
            return;
        }
        console.log("youtube search result",json.items);
        dispatch(setSearchResults(json.items));
     };

    //  const getSearchSuggestions = async() => {
    //     console.log('searchQuery',searchQuery);
    //     const data = await fetch(`${YOUTUBE_SEARCH_API}${searchQuery}&key=${GOOGLE_API_KEY}`);
    //     const json = await data.json();
    //     console.log("searchSuggestions",json.items);
    // };

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            youtubeSearch();
        }
    };

    const redirect = () => {
        window.location.href = '/';
    };

    return (
        <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
            <RxHamburgerMenu size={30} onClick={() => { toggleMenuHandler() }} />
            <img className='h-8 w-16 bg-transparent ml-4' src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg" alt="youtube logo" onClick={redirect} />
            <div className='col-span-10 flex justify-center'>
                <input type="text" placeholder="search" className='pl-3 w-full md:w-1/2 border border-gray-800 rounded-l-full' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={handleKeyDown} />
                <button className='border border-gray-800 rounded-r-full p-2 bg-gray-300' onClick={youtubeSearch}><CiSearch /></button>
            </div>
            <FaUserCircle size={30} />
        </div>
    );
}

export default Head;