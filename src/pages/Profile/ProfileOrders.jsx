import React from 'react';
import useProfile from '../../Hooks/useProfile.js';
import { useTranslation } from "react-i18next";
const ProfileOrders = () => {
    const {data, isLoading, isError}=useProfile();
    console.log(data)
    if (isLoading) return <CircularProgress />;
    if (isError) return <Typography>{t('error')}</Typography>;
    return (
        <div>
            jnnkm
        </div>
    );
}

export default ProfileOrders;
