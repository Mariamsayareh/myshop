import { useState } from "react";
import { useMutation } from '@tanstack/react-query';
import axiosInstance from "../Api/axiosInstance.js";
import { useNavigate } from 'react-router-dom';

export const useNewpass = () => {
    const navigate = useNavigate();

    const [serverErrors, setServerErrors] = useState([]);

    const newpassMutation = useMutation({
        mutationFn: async(values) => {
            await axiosInstance.patch("/Auth/Account/ResetPassword", values).then(res => res.data);

        },
        onSuccess: (data) => {
            setToken(data.accessToken);
            setAccessToken(data.accessToken);
            navigate("/log in", {
                state: {
                    message: "Change your password successfully.",
                },
            });

        },
        onError: (error) => {
            console.log(error.response);
            setServerErrors(
                error.response.data.message ?
                Array.isArray(error.response.data.message) ?
                error.response.data.message : [error.response.data.message] : ["Something went wrong. Please try again."]
            );
        }
    });

    return { newpassMutation, serverErrors };

}