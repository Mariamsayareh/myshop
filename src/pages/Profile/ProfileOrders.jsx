import React from 'react';
import { CircularProgress, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import useProfileOrders from '../../Hooks/useProfileOrders';
import { useTranslation } from "react-i18next";

const ProfileOrders = () => {
    const { t } = useTranslation();
    const { data, isLoading, isError } = useProfileOrders();
console.log(data, Array.isArray(data))
    if (isLoading) return <CircularProgress />;
    if (isError) return <Typography color="error">{t('error')}</Typography>;

    return (
        <TableContainer component={Paper}>
            <Typography variant="h6" p={2}>{t("My Orders")}</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>{t("Order ID")}</TableCell>
                        <TableCell>{t("Date")}</TableCell>
                        <TableCell>{t("Total")}</TableCell>
                        <TableCell>{t("Status")}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {Array.isArray(data?.orders) && data.orders.length > 0 ? (
                    data.orders.map(order => (
                    <TableRow key={order.id}>
                        <TableCell>#{order.id}</TableCell>
                        <TableCell>{new Date(order.orderDate).toLocaleDateString()}</TableCell>
                        <TableCell>${order.amountPaid.toFixed(2)}</TableCell>
                        <TableCell>{order.paymentStatus ?? 'Pending'}</TableCell>
                    </TableRow>
                    ))
                ) : (
                    <TableRow>
                    <TableCell colSpan={4}>{t('No orders found')}</TableCell>
                    </TableRow>
                )}
                </TableBody>

            </Table>
        </TableContainer>
    );
};

export default ProfileOrders;
