import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axiosAuthInstance from '../Api/axiosAuthInstance';


const UseUpdateCaet = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async({ productId, count }) => {
            await axiosAuthInstance.patch(`/carts/${productId}`, { count })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['carts']
            });
        },
        onError: () => {
            console.log('update')
        }
    });
}

export default UseUpdateCaet;