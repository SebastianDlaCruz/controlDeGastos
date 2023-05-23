import { AuthModel, UserModel } from "../models/index.model";

export const initialState: UserModel = {
  id: "",
  name: "",
  email: "",
  photo: ""
}


export type Action = {
  type: 'SET_AUTH',
  payload: AuthModel
};


export const reducerUser = (state: UserModel, action: Action) => {
  switch (action.type) {

    case "SET_AUTH":
      return {
        ...state,
        ...action.payload
      }
    default:
      return {
        ...state
      }
  }
}