 import React from 'react';
 import useFetch from './useFetch';
 import axiosAuthInstance from '../Api/axiosAuthInstance';

 const UseCart = () => {
     return useFetch(['carts'], '/Carts', {}, axiosAuthInstance);
 }

 export default UseCart;