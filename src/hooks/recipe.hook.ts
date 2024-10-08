import { useMutation, useQuery } from "@tanstack/react-query";
import { addComment, deleteRecipe, getMyRecipes, updateVote } from "../services/RecipeService";
import { toast } from "sonner";
import { FieldValues } from "react-hook-form";

export const useUpdateVote = () => {
    return useMutation<any, Error, { recipeId:string, vote: string; voterId: string; }>({
        mutationKey: ['UPDATE_VOTE'],
        mutationFn: async (voteData) => await updateVote(voteData),
        onSuccess: () => {
            toast.success("Vote updated successfully")
        },
        onError: (error) => {
            toast.error(error.message);
        }
    })
}

export const useAddComment = () => {
    return useMutation<any, Error, { author:string, content: string, postId: string }>({
        mutationKey: ['UPDATE_VOTE'],
        mutationFn: async (commentData) => await addComment(commentData),
        onSuccess: () => {
            toast.success("Comment added successfully")
        },
        onError: (error) => {
            toast.error(error.message);
        }
    })
}
export const useGetMyRecipes = (_id: string) => {
    return useQuery<any, Error>({
        queryKey: ['UPDATE_VOTE'],
        queryFn: async () => await getMyRecipes(_id), // Directly pass _id
        // onSuccess: () => {
        //     toast.success("Recipes fetched successfully");
        // },
        // onError: (error) => {
        //     toast.error(error.message);
        // }
    });
};

export const useDeleteRecipe = () => {
    return useMutation<any, Error, { _id:string}>({
        mutationKey: ['DELETE_RECIPE'],
        mutationFn: async (recipeData) => await deleteRecipe(recipeData),
        onSuccess: () => {
            toast.success("Recipe deleted successfully")
        },
        onError: (error) => {
            toast.error(error.message);
        }
    })
}