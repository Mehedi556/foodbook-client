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
  profilePicture?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}