export type TUser = {
    _id?: string;
    name: string;
    email: string;
    password: string;
    profilePicture: any;
    bio?: string;
    memberStatus?: {
        status?: 'premium' | 'non-premium';
        expiresIn?: string;
    };
    followers?: string[];
    following?: string[];
    role?: "admin" | "user";
    userStatus?: "active" | "blocked";
    isDeleted?: boolean;
}