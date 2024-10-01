export interface TJwtUser {
  _id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  iat: number;
  exp: number;
}
