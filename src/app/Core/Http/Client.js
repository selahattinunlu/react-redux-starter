import { create } from 'apisauce'

// define the api
const HttpClient = create({
    baseURL: 'https://api.github.com',
    headers: {'Accept': 'application/vnd.github.v3+json'}
});

export default HttpClient;
