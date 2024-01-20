import axios from 'axios';

export default axios.create({
    baseURL: 'http://84.237.52.214:4002/temperature'
})