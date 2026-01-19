import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../Api/axiosInstance";

export default function useFetch(queryKey, url, instance = axiosInstance) {
    const fetchData = async() => {

        const respose = await instance.get(url);
        return respose.data;

    };
    const query = useQuery({
        queryKey: queryKey,
        queryFn: fetchData,
        staleTime: 1000 * 60 * 5,
    });
    return query;
}