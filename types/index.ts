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
