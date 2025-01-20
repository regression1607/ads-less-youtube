export const GOOGLE_API_KEY = localStorage.getItem('GOOGLE_API_KEY');

export const YOUTUBE_VIDEOS_API = 'https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key='+GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = 'https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';

export  const YOUTUBE_SEARCH = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=';

export const YOUTUBE_VIDEO_DETAILS_API = 'https://www.googleapis.com/youtube/v3/videos';

export const YOUTUBE_RELATED_VIDEOS_API = 'https://www.googleapis.com/youtube/v3/search';
