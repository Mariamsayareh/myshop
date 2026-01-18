import React from 'react';
import useFetch from './useFetch';

const UseProduct = (id) => {
    return useFetch(['product'], `/products/${id}`);
}

export default UseProduct;