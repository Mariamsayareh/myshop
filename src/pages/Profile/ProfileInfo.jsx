import React, { useState } from 'react';
import { Box, Typography, TextField, Button, CircularProgress, Alert } from "@mui/material";
import useProfile from '../../Hooks/useProfile';
import useChangePassword from '../../Hooks/useChangePassword';
import { useTranslation } from "react-i18next";

const ProfileInfo = () => {
    const { t } = useTranslation();
    const { data, isLoading, isError } = useProfile();
   const { changePassword, isLoading: isUpdating, isError: updateError, success, warning } = useChangePassword();

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleUpdate = () => {
        const token = localStorage.getItem('token'); 
        changePassword({
            currentPassword,
            newPassword,
            confirmNewPassword: confirmPassword,
            token
        });
    };

    if (isLoading) return <CircularProgress />;
    if (isError) return <Typography color="error">{t('error')}</Typography>;

    return (
        <Box maxWidth={400}>
            <Typography variant="h6" mb={2}>{t("User Information")}</Typography>
            <TextField fullWidth label={t("Email")} value={data?.email || ''} disabled margin="normal" />

            <Typography variant="subtitle1" mt={3} mb={1}>{t("Change Password")}</Typography>
            <TextField
                fullWidth
                label={t("Current Password")}
                type="password"
                margin="dense"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <TextField
                fullWidth
                label={t("New Password")}
                type="password"
                margin="dense"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
            />
            <TextField
                fullWidth
                label={t("Confirm New Password")}
                type="password"
                margin="dense"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />

            {warning && <Alert severity="warning" sx={{ mt: 2 }}>{warning}</Alert>}
            {updateError && <Alert severity="error" sx={{ mt: 2 }}>{t('Failed to update password')}</Alert>}
            {success && <Alert severity="success" sx={{ mt: 2 }}>{t('Password updated successfully')}</Alert>}


            <Button
                variant="contained"
                sx={{ mt: 2 }}
                onClick={handleUpdate}
                disabled={isUpdating}
            >
                {isUpdating ? <CircularProgress size={24} /> : t("Update Password")}
            </Button>
        </Box>
    );
};

export default ProfileInfo;
