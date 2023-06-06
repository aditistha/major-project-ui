import axios from 'axios';
import {Config} from "../Config";

export const getAllUsers = () => {

    let url = `${Config.BaseUrl}/users`;
    return axios.get(url);
}

export const getUser = (id) => {
    let url = `${Config.BaseUrl}/users/${id}`;
    return axios.get(url);
}

export const createUser = (data) => {
    let url = `${Config.BaseUrl}/users`;
    return axios.post(url, data);
}

export const editUser = (id, data) => {
    let url = `${Config.BaseUrl}/users/${id}`;
    return axios.put(url, data);
}

export const deleteUser = (id) => {
    let url = `${Config.BaseUrl}/users/${id}`;
    return axios.put(url);
}