import { useMutation } from '@tanstack/react-query';
import React from 'react';
import axiosAuthInstance from '../Api/axiosAuthInstance.js';

const UseAddToCart = () => {
    const addToCartMuation = useMutation({
        mutationFn: async(ProductId, Count) => {
            return await axiosAuthInstance.post('/Carts', {
                request: {
                    productId: ProductId,
                    count: Count,
                }
            })

        }
    })
    return addToCartMuation;
}

export default UseAddToCart;