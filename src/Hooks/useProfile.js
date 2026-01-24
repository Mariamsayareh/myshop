 import React from 'react';
 import useFetch from './useFetch';
 import axiosAuthInstance from '../Api/axiosAuthInstance';

 const useProfile = () => {
     return useFetch(['profile'], '/Profile', {},
         axiosAuthInstance);
 }

 export default useProfile;