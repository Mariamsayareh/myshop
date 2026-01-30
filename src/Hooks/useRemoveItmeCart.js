import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axiosAuthInstance from '../Api/axiosAuthInstance';

const UseRemoveItmeCart = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (cartItmeId) => axiosAuthInstance.delete(`/carts/${cartItmeId}`),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['carts'] });
        },
        onError: () => {
            console.log("error remove")
        }
    });
}

export default UseRemoveItmeCart;