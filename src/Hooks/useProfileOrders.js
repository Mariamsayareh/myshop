import useFetch from './useFetch';
import axiosAuthInstance from '../Api/axiosAuthInstance';

const useProfileOrders = () => {

    return useFetch(['profile'], '/Profile', {}, axiosAuthInstance);
};

export default useProfileOrders;