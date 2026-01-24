import React from 'react';
import useFetch from './useFetch';

const useCategorie = (id) => {
    return useFetch(['product', id], `/products/${id}`);
}

export default useCategorie;