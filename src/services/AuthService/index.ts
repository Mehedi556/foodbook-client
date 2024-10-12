"use server";
import envConfig from "@/src/config/envConfig";
import axiosInstance from "@/src/lib/AxiosInstance"
import { IUserForUpdate } from "@/src/types";
import { TUser } from "@/src/types/user.type";
import { jwtDecode } from "jwt-decode";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form"

export const registerUser = async (userData: TUser) => {
    try {
      const { data } = await axiosInstance.post("/auth/signup", userData, {
        headers: {
          'Content-Type': 'application/json'
      }
      })
      revalidateTag('all-users');
      return data;
    } catch (error: any) {
      throw new Error(error);
    }
  };

export const loginUser = async (userData:FieldValues) => {
    try {
        const {data} = await axiosInstance.post('/auth/login', userData)

        if (data.success) {
          cookies().set("accessToken", data?.data?.accessToken);
          cookies().set("refreshToken", data?.data?.refreshToken);
        }
    return data;
    } catch (error:any) {
        throw new Error(error);
    }
}

export const logout = () => {
    cookies().delete('accessToken'),
    cookies().delete('refreshToken')
};

export const getCurrentUser = async () => {
  const accessToken = cookies().get("accessToken")?.value;

  let decodedToken = null;

  if (accessToken) {
      decodedToken = await jwtDecode(accessToken);
      return {
          _id: decodedToken._id,
          name: decodedToken.name,
          email: decodedToken.email,
          role: decodedToken.role,
          memberStatus: decodedToken?.memberStatus,
          profilePicture: decodedToken.profilePicture,
          userStatus: decodedToken.userStatus,
          isDeleted: decodedToken.isDeleted,
      };
  }

  return decodedToken;
};


export const getNewAccessToken = async () => {
try {
  const refreshToken = cookies().get('refreshToken')?.value;

  const res = await axiosInstance({
    url: '/auth/refresh-token',
    method: 'POST',
    withCredentials: true,
    headers: {
      cookies: `refreshToken=${refreshToken}`
    }
  })
  return res?.data;
} catch (error) {
  throw new Error("Failed to get new access token.")
}
}

export const addFollow = async (followerData: { _id:string}) => {
  console.log(followerData);
  try {
      const { data } = await axiosInstance.patch('/auth/follow', followerData, {
          headers: {
              'Content-Type': 'application/json'
          }
      })
      revalidateTag('recipes');
      return data
  } catch (error) {
      throw new Error("Failed to follow the user.")
  }
}

export const updateUser = async (userData:IUserForUpdate) => {
  console.log(userData);
  try {
      const { data } = await axiosInstance.patch(`/auth/${userData?._id}`, userData, {
          headers: {
              'Content-Type': 'application/json'
          }
      })
      revalidateTag('my-profile');
      return data
  } catch (error) {
      throw new Error("Failed to update the user.")
  }
}

export const forgetPassword = async ( body:{email:string}) => {
  try {
    const res = await fetch(`${envConfig.baseApi}/auth/forget-password`, {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    if (!res.ok) {
      throw new Error("Failed to send email for reset password.");
    }

    return await res.json();
  } catch (error) {
    throw new Error("Failed to send email for reset password.")
  }
}

export const resetPassword = async ( body:{ _id: string, password: string }, token:string) => {
  try {
    const res = await fetch(`${envConfig.baseApi}/auth/reset-password`, {
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify(body)
    })

    if (!res.ok) {
      throw new Error("Failed to reset password.");
    }

    return await res.json();
  } catch (error) {
    throw new Error("Failed to reset password.")
  }
}

export const getUserData = async (_id:string) => {
  const fetchOptions = {
      cache: "no-store",
      next: {
          tags: ["my-profile"]
      }
  } as any

  const res = await fetch(`${envConfig.baseApi}/auth/${_id}`, fetchOptions)
  return res.json()
}

export const getAllUsers = async () => {
  const fetchOptions = {
      cache: "no-store",
      next: {
          tags: ["all-users"]
      }
  } as any

  const res = await fetch(`${envConfig.baseApi}/auth/all-users`, fetchOptions)
  return res.json()
}

export const blockOrUnblockUser = async (userData: { _id: string }) => {
  console.log(userData);
  try {
    const { data } = await axiosInstance.put(`/auth/block-user`, userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    revalidateTag('all-users');
    
    return data;
  } catch (error) {
    throw new Error("Failed to block or unblock the user.");
  }
};

export const deleteUser = async (userData:{_id:string}) => {
  try {
    const { data } = await axiosInstance.delete(`/auth/${userData?._id}` )
    revalidateTag('all-users');
    return data
} catch (error) {
    throw new Error("Failed to delete the user.")
}
}

