"use server"
import envConfig from "@/src/config/envConfig"
import axiosInstance from "@/src/lib/AxiosInstance"
import { IRecipe } from "@/src/types/recipe.type"
import { revalidateTag } from "next/cache"
import { cookies, headers } from "next/headers"



export const getRecipes = async (searchTerm:string) => {
    console.log(searchTerm);
    
    const queryString = new URLSearchParams({ 
        isDeleted: 'false',
        ...(searchTerm ? { searchTerm: searchTerm } : {}),
    }).toString();

    const fetchOptions = {
        cache: "no-store",
        next: {
            tags: ["recipes"]
        }
    } as any;

    console.log(queryString);

    const res = await fetch(`${envConfig.baseApi}/recipes?${queryString}`, fetchOptions)
    return res.json()
}

export const getMyRecipes = async (_id:string) => {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("accessToken")?.value;
    const fetchOptions = {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/json"
        },
        cache: "no-store",
        next: {
            tags: ["my-recipes"]
        }
    } as any

    const res = await fetch(`${envConfig.baseApi}/recipes/my-recipes/${_id}`, fetchOptions)
    return res.json()
}

export const getRecipeDetails = async (_id:string) => {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("accessToken")?.value;
    const fetchOptions = {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/json"
        },
        cache: "no-store",
        next: {
            tags: ["recipe-details"]
        }
    } as any

    const res = await fetch(`${envConfig.baseApi}/recipes/${_id}`, fetchOptions)
    return res.json()
}

export const updateVote = async (voteData: { recipeId:string, vote: string, voterId: string }) => {
    try {
        const { data } = await axiosInstance.patch('recipes/update-vote', voteData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        revalidateTag('recipes');
        return data
    } catch (error) {
        throw new Error("Failed to update vote")
    }
}

export const addComment = async (commentData: { author:string, content: string, postId: string }) => {
    try {
        const { data } = await axiosInstance.patch('/recipes/add-comment', commentData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        revalidateTag('recipes');
        return data
    } catch (error) {
        throw new Error("Failed to add comment")
    }
}

export const updateComment = async (commentData: { commentId:string, content: string, postId: string }) => {
    try {
        const { data } = await axiosInstance.patch('/recipes/update-comment', commentData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        revalidateTag('recipes');
        return data
    } catch (error) {
        throw new Error("Failed to update comment")
    }
}

export const deleteComment = async ( commentData: {postId:string, commentId: string} ) => {
    try {
        const { data } = await axiosInstance.put(`/recipes/delete-comment`, commentData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        revalidateTag('recipes');
        return data
    } catch (error) {
        throw new Error("Failed to delete comment")
    }
}

export const createPost = async (postData:IRecipe) => {
    try {
        const { data } = await axiosInstance.post('/recipes', postData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        revalidateTag('recipes');
        return data
    } catch (error:any) {
        throw new Error(error?.response?.data?.message)
    }
}

export const updatePost = async (postData:IRecipe) => {
    try {
        const { data } = await axiosInstance.put('/recipes', postData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        revalidateTag('recipes');
        return data
    } catch (error) {
        throw new Error("Failed to update post")
    }
}


export const deleteRecipe = async (recipeData: { _id:string }) => {
    try {
        const { data } = await axiosInstance.delete(`/recipes/${recipeData?._id}` )
        revalidateTag('recipes');
        return data
    } catch (error) {
        throw new Error("Failed to delete recipe")
    }
}