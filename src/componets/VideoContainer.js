import React, { useEffect } from "react";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import { Link } from "react-router-dom";
const VideoContainer = () => {
    const [videos, setVideos] = React.useState([]);
    const searchResults = useSelector((state) => state.app.searchResults) ?? '';
    useEffect(() => {
        console.log(searchResults, "useEffect searchResults")

        if (searchResults) {
            console.log("search result video container useEffect if", searchResults);
            setVideos(searchResults);
        } else {
            console.log("search result video container searchResults useEffect", searchResults[1]);
            getVideos();
        }
    }, [searchResults]);

    const getVideos = async () => {
        const response = await fetch(YOUTUBE_VIDEOS_API);
        const json = await response.json();
        console.log("json.iteams", json.items);
        setVideos(json.items);
    }
    return (
        <div className='flex flex-wrap p-2 m-2 sm:p-4 sm:m-4 md:p-6 md:m-6 lg:p-8 lg:m-8'>
            {videos.map((video) => (
                video.id.videoId ? (
                    <Link to={"/watch?v=" + video.id.videoId} key={video.id.videoId}>
                        <VideoCard info={video} />
                    </Link>
                ) : (
                    <Link to={"/watch?v=" + video.id} key={video.id}>
                        <VideoCard info={video} />
                    </Link>
                )
            ))}
        </div>
    );
}
export default VideoContainer;
