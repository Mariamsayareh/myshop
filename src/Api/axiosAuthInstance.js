import axios from "axios";
import useAuthStore from "../stor/authStore";

const axiosAuthInstance = axios.create({
    baseURL: 'https://knowledgeshop.runasp.net/api'
});
axiosAuthInstance.interceptors.request.use((config) => {
    const { token } = useAuthStore.getState();
    config.headers["Accept-Language"] = "en";
    config.headers["Authorization"] = `Bearer ${ token }`;
    return config; //بحمل كل معلومات الريكوست
})
export default axiosAuthInstance;