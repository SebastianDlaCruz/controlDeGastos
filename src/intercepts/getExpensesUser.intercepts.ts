import { FirebaseDB } from "@fireBS/app";
import { collection, getDocs, query, where } from "firebase/firestore";


export const getExpensesUser = async (idUser: string) => {

  try {
    const q = query(collection(FirebaseDB, "userExpenses"), where("id", "==", idUser));
    const querySnapshot = await getDocs(q);

    let data: any = null;

    querySnapshot.forEach((doc) => {
      data = { ...doc.data() };
    });

    if (data !== null) {
      return {
        response: true,
        data
      }
    }
  } catch (error) {
    return {
      response: false,

    }
  }
} 