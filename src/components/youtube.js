import axios from 'axios';
const KEY = 'AIzaSyAEjZYFIgvG7Fi5zaY5V7UfZQsxhbsIfVU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 11,
        key: KEY
    }
})