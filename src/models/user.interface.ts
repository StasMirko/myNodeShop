export interface IUser {
  _id: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  role: string;
  age: number;
  phone?: string;
  gender?: string;
  photo?: string;
  status: string;
  // createdAt: string;
}
