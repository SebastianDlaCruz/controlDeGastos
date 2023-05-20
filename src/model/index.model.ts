export interface ChildrenModel {
  children: JSX.Element | JSX.Element[];
}

export interface AuthModel {
  id: string;
  name: string;
  email: string;
}
export interface UserModel extends AuthModel {
  photo: string;
}
