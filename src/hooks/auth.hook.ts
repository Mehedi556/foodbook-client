import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { addFollow, loginUser, registerUser, resetPassword } from "../services/AuthService";


export const useUserRegistration = () => {
    return useMutation<any, Error, FieldValues>({
        mutationKey: ["USER_REGISTRATION"],
        mutationFn: async (userData) => await registerUser(userData),
        onSuccess: () => {
            toast.success("User registration successfully");
        },
        onError: (error) => {
            toast.error(error?.message);
        },
    });
};

export const useUserLogin = () => {
    return useMutation<any, Error, FieldValues>({
        mutationKey: ["USER_LOGIN"],
        mutationFn: async (userData) => await loginUser(userData),
        onSuccess: () => {
        toast.success("User login successful.");
    },
        onError: (error) => {
        toast.error(error.message);
    },
    });
};

export const useAddFollow = () => {
    return useMutation<any, Error, { _id:string }>({
        mutationKey: ['ADD_FOLLOW'],
        mutationFn: async (followerData) => await addFollow(followerData),
        onError: (error) => {
            toast.error(error.message);
        }
    })
}

export const useResetPassword = () => {
    return useMutation<any, Error, { body:{ _id: string, password: string }, token:string }>({
        mutationKey: ['RESET_PASSWORD'],
        mutationFn: async ({body, token}) => await resetPassword(body, token),
        onSuccess: () => {
            toast.success("Password reset successful.");
        },
        onError: (error) => {
            toast.error(error.message);
        }
    })
}