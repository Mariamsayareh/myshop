import React from 'react';
import { Box, Typography, Button } from "@mui/material";
import { Outlet, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Profile = () => {
    const { t } = useTranslation();

    return (
        <Box component="section" sx={{ p: 4 }}>
            <Typography variant="h4" mb={3}>{t("My Profile")}</Typography>
            
            <Box display="flex" gap={2} mb={4}>
                <Button component={NavLink} to="info" variant="outlined">{t("Info")}</Button>
                <Button component={NavLink} to="orders" variant="outlined">{t("Orders")}</Button>
            </Box>

            <Outlet />
        </Box>
    );
};

export default Profile;
