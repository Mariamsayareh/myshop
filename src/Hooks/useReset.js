import { useState } from "react";
import { useMutation } from '@tanstack/react-query';
import axiosInstance from "../Api/axiosInstance.js";
import { useNavigate } from 'react-router-dom';

export const useReset = () => {
    const navigate = useNavigate();

    const [serverErrors, setServerErrors] = useState([]);

    const resetMutation = useMutation({
        mutationFn: async(values) => {
            await axiosInstance.post("/Auth/Account/SendCode", values).then(res => res.data);

        },
        onSuccess: () => {
            localStorage.setItem("resetEmail", values.email);
            navigate("/new-password");

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

    return { resetMutation, serverErrors };

}