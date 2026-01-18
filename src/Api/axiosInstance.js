import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://knowledgeshop.runasp.net/api'
});
axiosInstance.interceptors.request.use((config) => {
    config.headers["Accept-Language"] = "en"
    return config; //بحمل كل معلومات الريكوست
})
export default axiosInstance;