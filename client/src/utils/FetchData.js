import {axiosWithAuth} from './authAx';

export const fetchData = () => {
    return axiosWithAuth()
    .get('/colors')
    .then(res => {
        return res;
    });
}