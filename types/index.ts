/* eslint-disable @typescript-eslint/no-explicit-any */
export interface TJwtUser {
  _id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  iat: number;
  exp: number;
}

export type TUser = {
  _id: string;
  email: string;
  password?: string;
  profilePicture?: string;
  coverPhoto?: string;
  name: string;
  bio?: string;
  followers?: string[];
  following?: string[];
  passwordChangedAt?: Date;
  verified?: boolean;
  upvotesReceived?: number;
  posts?: string[];
  favorites?: string;
  role?: "ADMIN" | "USER";
  status?: "ACTIVE" | "BLOCKED";
  isDeleted?: boolean;
};

export interface TResetPassword {
  email: string | null;
  newPassword: string;
  token: string | null;
}

export interface IAuthor {
  downvotesReceived: number;
  _id: string;
  email: string;
  password: string;
  profilePicture: any;
  coverPhoto: any;
  name: string;
  bio: string;
  followers: any[];
  following: any[];
  verified: boolean;
  upvotesReceived: number;
  posts: string[];
  favorites: any[];
  status: string;
  role: string;
  isDeleted: boolean;
  __v: number;
}

export interface IPost {
  _id: string;
  author: IAuthor;
  title: string;
  content: string;
  category: string;
  images: string[];
  isPremium: boolean;
  upvotes: number;
  downvotes: number;
  comments: any[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  isDeleted: boolean;
  views: number;
  downvotedBy: any[];
  upvotedBy: any[];
}

export interface IComment {
  authorId: string | undefined;
  content: string;
  postId: string;
}
