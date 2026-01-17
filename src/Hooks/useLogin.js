import { useState } from "react";
import { useMutation } from '@tanstack/react-query';
import axiosInstance from "../Api/axiosInstance.js";

import { useNavigate } from 'react-router-dom';
import useAuthStore from "../stor/authStore.js";

export const useLogin = () => {

    const navigate = useNavigate();
    const setToken = useAuthStore(state => state.setToken)
    console.log("dddde;", setToken)
    const [serverErrors, setServerErrors] = useState([]);

    const loginMutation = useMutation({
        mutationFn: async(values) => {
            const response = await axiosInstance.post("/auth/Account/Login", values);
            return response.data;
        },
        onSuccess: (data) => {
            setToken(data.accessToken);
            console.log(data.accessToken)
                //setAccessToken(data.accessToken);
            navigate('/home');

        },
        onError: (error) => {

            const messages = error.response.data.message || ["Login failed"];
            setServerErrors(Array.isArray(messages) ? messages : [messages]);
            console.log(Array.isArray(messages) ? messages : [messages]);
        }
    });

    return { loginMutation, serverErrors };

}