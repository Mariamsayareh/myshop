import { useMutation, useQueryClient } from '@tanstack/react-query';
import axiosAuthInstance from '../Api/axiosAuthInstance';

const useCheckout = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async({ paymentMethod }) => {
            return axiosAuthInstance.post('/Checkouts', {
                paymentMethod
            });
        },
        onSuccess: (response) => {
            if (response.data.url) {
                location.href = response.data.url;
            }
            queryClient.invalidateQueries({ queryKey: ['carts'] });
        },
        onError: (error) => {
            console.log("error.response ? .data");
        }
    });
};

export default useCheckout;