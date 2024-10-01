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
  name: string;
  role: "USER" | "ADMIN";
  status: "ACTIVE" | "INACTIVE";
  password?: string; // Optional
  followers?: string[]; // Optional
  following?: string[]; // Optional
  verified?: boolean; // Optional
  upvotesReceived?: number; // Optional
  posts?: string[]; // Optional
  favorites?: string[]; // Optional
  isDeleted?: boolean; // Optional
};

export interface TResetPassword {
  email: string | null;
  newPassword: string;
  token: string | null;
}
