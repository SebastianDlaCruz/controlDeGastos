import { UserExpensesModel } from "./userExpenses.model";
interface User {
  id: string;
  name: string;
  email: string;
  uid: string;
  photoUrl: string;
  amount: number;
  totalExpenditures: UserExpensesModel
}

export default User;
