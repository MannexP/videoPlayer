import axios from 'axios';




const KEY = 'AIzaSyBOkHq9w8LVIIMYpg1v197LDfVTh1UAvbE';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part:'snippet',
        maxResults: 5,
        key: KEY

    }
});


