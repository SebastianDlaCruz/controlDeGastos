import { FirebaseAuth, FirebaseStore } from "@fireFB/index.firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addDoc, collection, onSnapshot, query } from "firebase/firestore";
import { BillsModel, EntityModel } from "../models/index.model";

export const registerUser = async (name: string, email: string, password: string) => {
  try {
    const useCredential = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
    await updateProfile(useCredential.user, { displayName: name })
    return {
      ok: true,
      id: useCredential.user.uid
    }
  } catch (error) {

    return {
      ok: true,
      message: 'Ocurrió un error al regístrate'
    }
  }
}

export const login = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(FirebaseAuth, email, password);
    return {
      ok: true
    }
  } catch (error) {
    return {
      ok: true,
      message: 'Erro al ingresar'
    }
  }

}



export const addNewDocument = async (nameDocument: string, entity: EntityModel) => {
  await addDoc(collection(FirebaseStore, nameDocument), entity);
}

export const getAmount = (id: string) => {
  const q = query(collection(FirebaseStore, "bills"));
  let bills: BillsModel[] = [];
  onSnapshot(q, (querySnapshot) => {
    const template: BillsModel[] = [];
    querySnapshot.forEach((doc) => {
      if (doc.data().id === id) {
        template.push(doc.data() as BillsModel);
      }
    });

    bills = [...template];
  });
  return bills;
}