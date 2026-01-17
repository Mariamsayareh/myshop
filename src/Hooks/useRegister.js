import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../Api/axiosInstance.js";
import { useMutation } from "@tanstack/react-query";

export default function useRegister() {
    const [serverErrors, setServerErrors] = useState([]);
    const navigate = useNavigate();
    const registerMutation = useMutation({
        mutationFn: async(values) => {
            return await axiosInstance.post("/auth/Account/Register", values);
        },
        onSuccess: () => {
            navigate('/log in');
        },
        onError: (err) => {
            setServerErrors(err.response.data.errors || []);

        }
    });
    return { serverErrors, registerMutation }

}