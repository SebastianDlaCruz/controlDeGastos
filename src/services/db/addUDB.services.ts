import { FirebaseDB } from "@fireBS/app";
import { EntityModel } from "@models/entity.model";
import { addDoc, collection } from "firebase/firestore";

export const addUDB = async (nameDB: string, entity: EntityModel) => {
  try {
    const response = await addDoc(collection(FirebaseDB, nameDB), entity);
    return {
      status: true,
      message: "agregado con éxito",
    };
  } catch (error) {
    return {
      status: false,
      message: "Ops Algo salio mal",
    };
  }
};
