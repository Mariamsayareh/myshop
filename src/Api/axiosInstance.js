import axios from "axios";
import i18n from "../i18n";

const axiosInstance = axios.create({
    baseURL: 'https://knowledgeshop.runasp.net/api'
});
axiosInstance.interceptors.request.use((config) => {
    const lang =
        localStorage.getItem("lang") ||
        i18n.resolvedLanguage ||
        "en";

    config.headers["Accept-Language"] = lang;
    return config;
});
export default axiosInstance;