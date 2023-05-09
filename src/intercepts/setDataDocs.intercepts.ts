import { FirebaseDB } from "@fireBS/app";
import { EntityModel } from "@models/entity.model";
import { doc, updateDoc } from "firebase/firestore";

export const setDataDocs = async (idDoc: string, entityProper: EntityModel, nameDB: string) => {
  const userExpensesRef = doc(FirebaseDB, nameDB, idDoc);
  await updateDoc(userExpensesRef, { ...entityProper });

}