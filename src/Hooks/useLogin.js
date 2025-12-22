import { useState, useContext } from "react";
import { useMutation } from '@tanstack/react-query';
import axiosInstance from "../Api/axiosInstance.js";
import { AuthContext } from '../Context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
    const { setToken, setAccessToken } = useContext(AuthContext);
    const navigate = useNavigate();

    const [serverErrors, setServerErrors] = useState([]);

    const loginMutation = useMutation({
        mutationFn: async(values) => {
            await axiosInstance.post("/Auth/Account/Login", values).then(res => res.data);

        },
        onSuccess: (data) => {
            setToken(data.accessToken);
            setAccessToken(data.accessToken);
            navigate('/home');

        },
        onError: (error) => {

            const messages = error.response.data.message || ["Login failed"];
            setServerErrors(Array.isArray(messages) ? messages : [messages]);
        }
    });

    return { loginMutation, serverErrors };

}