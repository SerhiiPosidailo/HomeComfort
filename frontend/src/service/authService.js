import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const authService = {
    register(data) {
        return apiService.post(urls.auth.register, data)
    },
    async login(data) {
        const {data:{access}} = await apiService.post(urls.auth.login, data)
        this.setToken(access)
    },

    me(){
        return apiService.get(urls.auth.me)
    },

    activateToken(token) {
         return  apiService.post(urls.auth.activate(token))
    },

    setToken(token) {
        localStorage.setItem('token', token)
    },
    getToken() {
        return localStorage.getItem('token')
    },
    deleteToken() {
        localStorage.removeItem('token')
    }
}

export {
    authService
}