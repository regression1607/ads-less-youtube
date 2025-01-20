import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';
import { YOUTUBE_VIDEO_DETAILS_API, YOUTUBE_RELATED_VIDEOS_API, GOOGLE_API_KEY } from '../utils/constant';
import { SiYoutubegaming } from "react-icons/si";

function WatchPage() {
    const [searchParams] = useSearchParams();
    const [videoDetails, setVideoDetails] = useState(null);
    const [relatedVideos, setRelatedVideos] = useState([]); // Initialize as an empty array
    const dispatch = useDispatch();

    const videoId = searchParams.get("v");

    // Fetch video details when `videoId` changes
    useEffect(() => {
        dispatch(closeMenu());
        fetchVideoDetails();
    }, [videoId]);

    // Fetch related videos when `videoDetails` is updated
    useEffect(() => {
        fetchRelatedVideos();
    }, [videoDetails]);

    const fetchVideoDetails = async () => {
        try {
            const response = await fetch(
                `${YOUTUBE_VIDEO_DETAILS_API}?part=snippet,statistics&id=${videoId}&key=${GOOGLE_API_KEY}`
            );
            const json = await response.json();
            setVideoDetails(json.items[0]); // Set video details
        } catch (error) {
            console.error("Error fetching video details: ", error);
        }
    };

    const fetchRelatedVideos = async () => {
        if (!videoDetails || !videoDetails.snippet?.title) return;

        try {
            // Use the title of the video for searching
            const response = await fetch(
                `${YOUTUBE_RELATED_VIDEOS_API}?part=snippet&type=video&q=${encodeURIComponent(
                    videoDetails.snippet.title
                )}&key=${GOOGLE_API_KEY}`
            );

            const json = await response.json();
            setRelatedVideos(json.items || []); // Default to an empty array if items is undefined
        } catch (error) {
            console.error("Error fetching related videos: ", error);
        }
    };

    return (
        <div className="flex flex-col md:flex-row p-4">
            {/* Main Video Section */}
            <div className="flex-1 p-4 bg-white shadow-lg rounded-lg">
                <iframe
                    width="100%"
                    height="600"
                    src={"https://www.youtube.com/embed/" + videoId}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="rounded-lg"
                ></iframe>

                {videoDetails && (
                    <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                        <h1 className="text-xl md:text-3xl font-bold text-gray-800">{videoDetails.snippet.title}</h1>
                        <p className="text-sm text-gray-500">
                            {new Date(videoDetails.snippet.publishedAt).toLocaleDateString()}
                        </p>
                        <div className="mt-4 flex items-center justify-between">
                            <p className="text-lg text-gray-700">
                                <strong>{videoDetails.statistics.viewCount}</strong> views
                            </p>
                            <p className="text-lg text-gray-700">
                                <strong>{videoDetails.statistics.likeCount}</strong> likes
                            </p>
                        </div>
                        <div className="mt-4 text-sm text-gray-600 flex items-center">
                            <SiYoutubegaming className="m-2 text-red-500" />
                            {videoDetails.snippet.channelTitle}
                        </div>
                    </div>
                )}
            </div>

            {/* Suggested Videos Section */}
            <div className="md:w-1/3 w-full p-4">
                <h2 className="text-lg font-semibold mb-4">Suggested Videos</h2>
                <div className="flex flex-col gap-4">
                    {relatedVideos.length > 0 ? (
                        relatedVideos.map((video) => (
                            <div key={video.id?.videoId || video.id} className="flex items-start gap-3">
                                <img
                                    src={video.snippet?.thumbnails?.medium?.url || ''}
                                    alt={video.snippet?.title || 'No Title'}
                                    className="w-40 h-24 rounded-lg object-cover"
                                />
                                <div className="flex flex-col">
                                    <h3 className="font-bold text-sm text-gray-800 line-clamp-2">
                                        {video.snippet?.title || 'No Title'}
                                    </h3>
                                    <p className="text-xs text-gray-500">{video.snippet?.channelTitle || 'Unknown Channel'}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-sm text-gray-500">No suggested videos available.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default WatchPage;
