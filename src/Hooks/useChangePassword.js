import { useState } from 'react';
import * as yup from 'yup';
import axiosAuthInstance from '../Api/axiosAuthInstance';
import useAuthStore from "../stor/authStore";

export default function useChangePassword() {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [warning, setWarning] = useState('');

    const schema = yup.object().shape({
        newPassword: yup.string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters")
            .matches(/[A-Z]/, "Must contain at least one uppercase letter")
            .matches(/[a-z]/, "Must contain at least one lowercase letter")
            .matches(/[@#$&?!]/, "Must contain at least one special character")
    });

    const changePassword = async({ currentPassword, newPassword, confirmNewPassword }) => {
        setIsLoading(true);
        setIsError(false);
        setSuccess(false);
        setWarning('');

        const token = useAuthStore.getState().token;

        try {
            // الفاليديشن العام للباسوورد الجديد
            await schema.validate({ newPassword });

            // فحص التحذيرات ً
            if (newPassword === currentPassword) {
                setWarning("New password cannot be the same as current password");
                setIsLoading(false);
                return;
            }

            if (newPassword !== confirmNewPassword) {
                setWarning("New password and confirm password do not match");
                setIsLoading(false);
                return;
            }

            // إذا كل شيء تمام، نرسل الريكوست
            await axiosAuthInstance.patch('/Profile/change-password', {
                CurrentPassword: currentPassword,
                NewPassword: newPassword,
                ConfirmNewPassword: confirmNewPassword,
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });

            setSuccess(true);
        } catch (err) {
            console.error(err);
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    return { changePassword, isLoading, isError, success, warning };
}