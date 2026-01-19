import React from 'react';
import useFetch from './useFetch';

const UseProduct = (id) => {
    return useFetch(['product', id], `/products/${id}`);
}

export default UseProduct;