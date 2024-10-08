import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface IUser {
  _id: string;
  name?: string;
  role: string;
  email: string;
  status?: string;
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
  status?: string;
  profilePicture?: any;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}