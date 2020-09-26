import { message } from 'antd';
import axios from 'axios';

const devBaseUrl = 'https://cnodejs.org/api/v1';
const prodBaseUrl = 'xx';

const isDev = process.env.NODE_ENV === 'development';

// setup the base url
const service = axios.create({
    baseURL: isDev ? devBaseUrl : prodBaseUrl,
});

// intercept request and response (error handling, token...)
service.interceptors.request.use(req => {
    console.log('req: ', req);
    return req;
});
service.interceptors.response.use(resp => {
    console.log('resp: ', resp);

    if (resp.status === 200) {
        return resp.data;
    } else {
        message.error('Something go wrong.');
        return resp;
    }

});

const getTopics = (page = 1, limit = 5) => {
    return service.get(`/topics?page=${page}&limit=${limit}`);
};

export {
    getTopics,
}
