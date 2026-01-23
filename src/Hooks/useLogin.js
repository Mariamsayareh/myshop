import { useState } from "react";
import { useMutation } from '@tanstack/react-query';
import axiosInstance from "../Api/axiosInstance.js";

import { useNavigate } from 'react-router-dom';
import useAuthStore from "../stor/authStore.js";
import { jwtDecode } from "jwt-decode";
export const useLogin = () => {

    const navigate = useNavigate();
    const setToken = useAuthStore(state => state.setToken);
    const setUser = useAuthStore(state => state.setUser);
    console.log("dddde;", setToken)
    const [serverErrors, setServerErrors] = useState([]);

    const loginMutation = useMutation({
        mutationFn: async(values) => {
            const response = await axiosInstance.post("/auth/Account/Login", values);
            return response.data;
        },
        onSuccess: (data) => {
            const decoded = jwtDecode(data.accessToken);
            const user = {
                name: decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'] || "Unknown",
                rote: decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] || "User"
            }

            setToken(data.accessToken);
            setUser(user);
            // console.log('jjjj', user)
            // console.log(data.accessToken)
            // console.log("Stored user:", localStorage.getItem("user"));
            // console.log("Stored token:", localStorage.getItem("token"));

            navigate('/');

        },
        onError: (error) => {
            //console.log('error')
            const messages = error.response.data.message || ["Login failed"];
            setServerErrors(Array.isArray(messages) ? messages : [messages]);
            //console.log(Array.isArray(messages) ? messages : [messages]);
        }
    });

    return { loginMutation, serverErrors };

}