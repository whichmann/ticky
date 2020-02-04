import axios from 'axios';
import { GET_USERS } from './types';

//GET_USERS action goes here:
export const getUsers = () => dispatch => {
    axios.get('/api/majority/')
    .then(res => {
        dispatch({
            type: GET_USERS,
            payload: res.data
        })
    })
    .catch(err => console.log(err));
}