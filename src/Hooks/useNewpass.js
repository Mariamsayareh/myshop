import { useState } from "react";
import { useMutation } from '@tanstack/react-query';
import axiosInstance from "../Api/axiosInstance.js";
import { useNavigate } from 'react-router-dom';

export const useNewpass = () => {
    const navigate = useNavigate();

    const [serverErrors, setServerErrors] = useState([]);

    const newpassMutation = useMutation({
        mutationFn: async(values) => {
            const res = await axiosInstance.patch("/auth/Account/ResetPassword", values);
            return res.data;

        },
        onSuccess: (data) => {
            //console.log("accessToken");
            //setToken(data.accessToken);
            //console.log(data);
            //setAccessToken(data.accessToken);
            navigate("/log in", {
                state: {
                    message: "Change your password successfully.",
                },
            });
            //console.log("onSuccess2");

        },
        onError: (error) => {
            const msg = error.response.data.message;

            setServerErrors(
                msg ? Array.isArray(msg) ? msg : [msg] : ["Invalid code or expired reset request"]
            );
        }
    });

    return { newpassMutation, serverErrors };

}