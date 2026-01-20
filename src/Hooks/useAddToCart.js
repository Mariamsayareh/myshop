import { useMutation, useQueryClient } from '@tanstack/react-query';
import axiosAuthInstance from '../Api/axiosAuthInstance.js';

const UseAddToCart = () => {
    const queryClient = useQueryClient();
    const addToCartMuation = useMutation({
        mutationFn: async({ ProductId, Count }) => {
            return await axiosAuthInstance.post('/Carts', {

                productId: ProductId,
                count: Count,

            })

        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['carts']
            });
        },
        onError: () => {
            console.log('axxcdc')
        }

    })
    return addToCartMuation;
}

export default UseAddToCart;