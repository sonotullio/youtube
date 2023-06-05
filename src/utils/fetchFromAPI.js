import axios from 'axios';

const BASE_URL = 'https://youtube-v311.p.rapidapi.com';

const options = {
    params: {
        maxResults: '50'
    },
    mode: 'cors',
    withCredentials: true,
    credentials: 'same-origin',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v311.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url, params) => {
    options.params = { ...options.params, ...params };
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};