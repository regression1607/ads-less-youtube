import React from 'react';

function VideoCard({ info }) {
    console.log("info : ", info);
    const { snippet, statistics } = info;
    const { title, channelTitle, thumbnails } = snippet;

    return (
        <div className="p-2 m-4 w-full md:w-80 shadow-lg rounded-lg hover:scale-105 transform transition duration-300 ease-out">
            {/* Thumbnail */}
            <img
                className="rounded-lg w-full h-44 object-cover"
                src={thumbnails.medium.url}
                alt="thumbnail"
            />
            {/* Video Details */}
            <div className="mt-3 flex">
                {/* Channel Avatar Placeholder */}
                <div className="w-10 h-10 rounded-full mr-3"></div>
                <div>
                    <h3 className="font-bold text-md line-clamp-2">
                        {title}
                    </h3>
                    <p className="text-sm text-gray-600">{channelTitle}</p>
                    <p className="text-sm text-gray-500">
                        {statistics?.viewCount
                            ? `${Number(statistics.viewCount).toLocaleString()} views`
                            : 'No views available'}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default VideoCard;
