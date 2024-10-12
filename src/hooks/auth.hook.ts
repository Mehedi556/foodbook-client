import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { addFollow, blockOrUnblockUser, changePassword, deleteUser, loginUser, registerUser, resetPassword, updateUser } from "../services/AuthService";
import { IUserForUpdate } from "../types";
import { TUser } from "../types/user.type";


export const useUserRegistration = () => {
    return useMutation<any, Error, TUser>({
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

export const useUserChangePassword = () => {
    return useMutation<any, Error, { oldPassword: string, newPassword: string }>({
        mutationKey: ["USER_REGISTRATION"],
        mutationFn: async (passwordData) => await changePassword(passwordData),
        onSuccess: () => {
            toast.success("Password changed successfully");
        },
        onError: (error) => {
            toast.error(error?.message);
        },
    });
};

export const useUpdateUser = () => {
    return useMutation<any, Error, IUserForUpdate>({
        mutationKey: ["UPDATE_USER"],
        mutationFn: async (userData) => await updateUser(userData),
        onSuccess: () => {
        toast.success("User updated successfully.");
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

export const useBlockOrUnblockUser = () => {
    return useMutation<any, Error, { _id: string }>({
        mutationKey: ["BLOCK_USER"],
        mutationFn: async (userData) => await blockOrUnblockUser(userData),
        onSuccess: () => {
        toast.success("Action executed successfully.");
    },
        onError: (error) => {
        toast.error(error.message);
    },
    });
};

export const useDeleteUser = () => {
    return useMutation<any, Error, { _id: string }>({
        mutationKey: ["DELETE_USER"],
        mutationFn: async (userData) => await deleteUser(userData),
        onSuccess: () => {
        toast.success("User deleted successfully.");
    },
        onError: (error) => {
        toast.error(error.message);
    },
    });
};