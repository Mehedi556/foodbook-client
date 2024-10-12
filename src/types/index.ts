import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface IUser {
  _id: string;
  name?: string;
  role: string;
  email: string;
  userStatus?: string;
  memberStatus?: {
    status: 'premium' | 'non-premium',
    expiresIn: Date
  };
  followers?: [];
  following?: [];
  bio?: string;
  profilePicture?: any;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}
export interface IUserForUpdate {
  _id: string;
  name?: string;
  role?: string;
  email?: string;
  bio?: string;
  followers?: [];
  following?: [];
  userStatus?: string;
  memberStatus?: {
    status: 'premium' | 'non-premium',
    expiresIn: Date
  };
  profilePicture?: any;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}