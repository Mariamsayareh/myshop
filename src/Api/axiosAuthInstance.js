import axios from "axios";
import useAuthStore from "../stor/authStore";

const axiosAuthInstance = axios.create({
    baseURL: 'https://knowledgeshop.runasp.net/api',
    withCredentials: true,
});
const axiosRefresh = axios.create({
    baseURL: 'https://knowledgeshop.runasp.net/api',
    withCredentials: true,
});
axiosAuthInstance.interceptors.request.use((config) => {
    const { token } = useAuthStore.getState();
    config.headers["Accept-Language"] = "en";
    config.headers["Authorization"] = `Bearer ${ token }`;
    //console.log(dnn);
    return config; //بحمل كل معلومات الريكوست
})

axiosAuthInstance.interceptors.response.use((response) => {
    return response;
}, async(error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
            const refreshResponse = await axiosRefresh.post('/auth/Account/RefreshToken', {});
            const newAccessTokes = refreshResponse.data.accessTokes;
            useAuthStore.getState().setToken(newAccessTokes);
            originalRequest.headers["Authorization"] = `Bearer ${ newAccessTokes }`;
            return axiosAuthInstance(originalRequest);
        } catch (refreshError) {
            useAuthStore.getState().logout();
            return Promise.reject(refreshError);
        }
    }
    return Promise.reject(error);
})
export default axiosAuthInstance;