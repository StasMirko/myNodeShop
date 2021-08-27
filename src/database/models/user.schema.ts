import {Document, Model, model, Schema} from 'mongoose';
import {IUser} from '../../models';

export type UserType = IUser & Document

export const UserSchema: Schema = new Schema<IUser>({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    default: 'User'
  },
  age: {
    type: Number,
    required: true
  },
  phone: {
    type: String,
    required: false
  },
  gender: {
    type: String,
    required: false
  },
  photo: {
    type: String,
    required: false
  },
  status: {
    type: String,
    required: true,
    default: 'pending'
  }
  // createdAt: {
  //   type: Date,
  //   default: Date.now()
  // }
});

export const UserModel: Model<any> = model<UserType>('users', UserSchema);
