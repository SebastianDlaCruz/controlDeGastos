import User from "@models/user.models";
import { UserExpensesModel } from "@models/userExpenses.model";
import { createContext } from "react";
import { Actions } from "../types/type";

const initialMoney: UserExpensesModel = {
  id: '',
  comida: 0,
  educacion: 0,
  facturas: 0,
  mascotas: 0,
  ropa: 0,
  tecnologia: 0,
  totalAmount: 0,
  totalExpense: 0
}

export const initialState: User = {
  email: "",
  name: "",
  photoUrl: "",
  uid: "",
  amount: 0,
  totalExpenditures: initialMoney,
};

const UserContext = createContext<{
  state: User;
  dispatch: React.Dispatch<Actions>;
}>({
  state: initialState,
  dispatch: () => null,
});
export default UserContext;
