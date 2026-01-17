import { useState } from "react";
import { useMutation } from '@tanstack/react-query';
import axiosInstance from "../Api/axiosInstance.js";
import { useNavigate } from 'react-router-dom';

export const useReset = () => {
    const navigate = useNavigate();

    const [serverErrors, setServerErrors] = useState([]);

    const resetMutation = useMutation({
        mutationFn: async(values) => {
            const res = await axiosInstance.post("/auth/Account/SendCode", values);
            return res.data;

        },
        onSuccess: (values) => {
            localStorage.setItem("resetEmail", values.email);
            navigate("/new-password");
            console.log("onSuccess");
        },
        onError: (error) => {
            console.log(error);
            console.log("error");
            // setServerErrors(
            //     error.response.data.message ?
            //     Array.isArray(error.response.data.message) ?
            //     error.response.data.message : [error.response.data.message] : ["Something went wrong. Please try again."]
            // );
        }
    });

    return { resetMutation, serverErrors };

}