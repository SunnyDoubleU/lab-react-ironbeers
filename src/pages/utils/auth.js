import Axios from "axios";
import qs from "qs"
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();
debugger
const axios = Axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_API
});
debugger

export const setUser = function (user) {
    localStorage.setItem('user', JSON.stringify(user))
}

export const getUser = function () {
    return JSON.parse(localStorage.getItem("user"))
}

export const logout = function () {
    return axios.get("https://ih-beers-api.herokuapp.com/auth/logout")
        .then((res) => {
            localStorage.removeItem("user")
        })
        .catch((err) => {
            console.log(err)
        })
}

export const loggedIn = function () {
    const user = this.getUser()
    return !!user;
}

export const login = function (username, password) {
    debugger
    return axios({
        url: "/auth/login",
        data: qs.stringify({ username, password }),
        method: "POST",
        headers: { 'content-type': 'application/x-www-form-urlencoded' }
    })
        .then((res) => {
            console.log(res.data)
            setUser(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

export const signup = function ({ username, firstname, lastname, password, email }) {
    debugger
    return axios({
        method: "POST",
        data: qs.stringify({ username, firstname, lastname, password, email }),
        url: "/auth/signup",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
        .then((res) => {
            setUser(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

