import { useMutation, useQueryClient } from '@tanstack/react-query';
import axiosAuthInstance from '../Api/axiosAuthInstance';

const useClearCart = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async() => {
            await axiosAuthInstance.delete('/Carts/clear');
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['carts'] });
        },
        onError: () => {
            console.log('error clear cart');
        }
    });
};

export default useClearCart;