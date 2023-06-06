import axios from 'axios';
import {Config} from "../Config";

export const getAllUsers = () => {
    let url = `${Config.BaseUrl}/users`;
    return dispatch => {
        return axios.get(url)
            .then(
                response => {
                    return response
                },
                error => {
                    return error
                }
            )
    }
}

export const getUser = (id) => {
    let url = `${Config.BaseUrl}/users/${id}`;
    return dispatch => {
        return axios.get(url)
            .then(
                response => {
                    return response
                },
                error => {
                    return error
                }
            )
    }
}

export const createUser = (data) => {
    let url = `${Config.BaseUrl}/users`;
    return dispatch => {
        return axios.post(url, data);
    }
}

export const editUser = (id, data) => {
    let url = `${Config.BaseUrl}/users/${id}`;
    return dispatch => {
        return axios.put(url, data)
            .then(
                response => {
                    return response
                },
                error => {
                    return error
                }
            )
    }
}

export const deleteUser = (id) => {
    let url = `${Config.BaseUrl}/users/${id}`;
    return dispatch => {
        return axios.put(url)
            .then(
                response => {
                    return response
                },
                error => {
                    return error
                }
            )
    }
}