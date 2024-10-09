"use server"
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

interface DecodedUser {
    _id: string;
    name: string;
    email: string;
    role: string;
    profilePicture: string;
    memberStatus: string;
    userStatus: string;
    isDeleted: boolean;
  }

export const useToken = () => {
    const accessToken = cookies().get('accessToken')?.value;
    let decodedUser: DecodedUser | null = null;

    if (accessToken) {
        decodedUser = jwtDecode(accessToken);
    }

    return decodedUser
}