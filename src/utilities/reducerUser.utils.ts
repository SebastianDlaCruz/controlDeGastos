import User from "@models/user.models";
import { Actions } from "../types/type";

export const reducerUser = (state: User, action: Actions) => {
  switch (action.type) {
    case "AUTH":
      return {
        ...state,
        ...action.payload,
      };

    case "SET_AMOUNT":
      return {
        ...state,
        amount: action.payload
      };
    case "SET_ID_USER":
      return {
        ...state,
        totalExpenditures: {
          ...state.totalExpenditures,
          id: action.payload
        }
      }

    case "SET_USER_EXPENSES":
      return {
        ...state,
        totalExpenditures: action.payload
      }
  }
};
