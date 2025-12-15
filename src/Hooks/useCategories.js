import { useQuery } from '@tanstack/react-query';
import axiosInstance from "../Api/axiosInstance.js";
export function useCategories() {
    const fetchCategories = async() => {
        try {
            const { data } = await axiosInstance.get('/Categories');
            return data;
        } catch (error) {
            throw new Error('Failed to fetch categories');
        }
    };
    const query = useQuery({
        queryKey: ['categories'],
        queryFn: fetchCategories,
        staleTime: 1000 * 60 * 5,
    });
    return query;
}