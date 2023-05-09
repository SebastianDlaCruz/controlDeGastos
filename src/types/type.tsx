import AuthProp from "@models/auth.model";
import { UserExpensesModel } from "@models/userExpenses.model";
export type Actions = { type: "AUTH"; payload: AuthProp }
  | { type: "SET_AMOUNT"; payload: number }
  | { type: "SET_ID_USER"; payload: string }
  | { type: "SET_USER_EXPENSES"; payload: UserExpensesModel };

export enum Services_App {
  Alimentos = "alimentos",
  Facturas = "facturas",
  Educación = "educación",
  Tecnología = "tecnología",
  Ropa = "ropa",
  Mascotas = "mascotas",
}
