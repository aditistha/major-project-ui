import axios from 'axios';
import {Config} from "../Config";

// const getAllUsers = async (url) => {
//     try {
//         const res = await fetch(`${Config.BaseUrl}api/register`);
//         const data = await res.json();
//         if(data.length > 0){
//             setData(data);
//         }
//         console.log(data)
//     } catch (error) {
//       console.error(error);
//     }
// }

export const getAllUsers = () => {
    let url = `${Config.BaseUrl}/api/register`;
    return axios.get(url);
}

export const getUser = (id) => {
    let url = `${Config.BaseUrl}api/register/${id}`;
    return axios.get(url);
}

export const createUser = (data) => {
    let url = `${Config.BaseUrl}/api/register`;
    return axios.post(url, data);
}

export const editUser = (id, data) => {
    let url = `${Config.BaseUrl}api/register/${id}`;
    return axios.patch(url, data);
}

export const deleteUser = (id) => {
    let url = `${Config.BaseUrl}api/register/${id}`;
    return axios.delete(url);
}