import { IUser } from ".";
import { TUser } from "./user.type";

export interface IComment {
    author: IUser;
    postId: string;
    content: string;
    createdAt?: Date;
}

interface IRating {
    totalRatings: number;
    ratingCount: number;
    averageRating: number;
}

export interface IRecipe {
    _id?: string;
    title: string;
    description: string;
    ingredients: string[];
    instructions: string;
    image: string[];
    tags?: string[];
    cookingTime: number;
    isPublished: boolean;
    isDeleted: boolean;
    postStatus: "premium" | "non-premium";
    author: TUser;
    rating: IRating;
    comments: IComment[];
    upvotes: any[];
    downvotes: any[];
    createdAt?: Date;
    updatedAt?: Date;
}