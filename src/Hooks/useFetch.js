import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../Api/axiosInstance";


export default function useFetch(queryKey, url) {

    const fetchData = async() => {
        try {
            const { data } = await axiosInstance.get(url);
            return data;
        } catch (error) {
            throw new Error('Failed to fetch categories');
        }
    };
    const query = useQuery({
        queryKey: [queryKey],
        queryFn: fetchData,
        staleTime: 1000 * 60 * 5,
    });
    return query;

}