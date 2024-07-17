import axios from 'axios';

export const fetchUserData = async () => {
    const response = await axios.get('/api/users');
    return response.data;
};

export const fetchPostData = async () => {
    const response = await axios.get('/api/posts');
    return response.data;
};
