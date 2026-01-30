import { useMutation } from "@tanstack/react-query";
import axiosAuthInstance from "../Api/axiosAuthInstance";

const useAddReview = (productId) => {
    return useMutation({
        mutationFn: async({ Rating, Comment }) => {
            const response = await axiosAuthInstance.post(
                `/Products/${productId}/reviews`, {
                    Rating,
                    Comment
                }
            );
            return response.data;
        }
    });
};

export default useAddReview;