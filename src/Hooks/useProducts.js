import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../Api/axiosInstance";
export function useProducts() {
    const fetchproducts = async() => {
        const response = await axiosInstance.get(`/Products`);
        return response.data.response.data;
    }
    return useQuery({
        queryKey: ['products'],
        queryFn: fetchproducts,
        staleTime: 5 * 60 * 1000
    })
}