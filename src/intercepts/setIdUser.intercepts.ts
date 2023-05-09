import { FirebaseDB } from '@fireBS/app';
import { collection, getDocs } from 'firebase/firestore';
import { setDataDocs } from './setDataDocs.intercepts';

export const setIdUser = async (idUser: string) => {
  try {
    const querySnapshot = await getDocs(collection(FirebaseDB, "userExpenses"));
    querySnapshot.forEach((doc) => {
      if (doc.data() && doc.data().id === "") {
        setDataDocs(doc.id, { idUser }, "userExpenses");
      }
    })

  } catch (error) {
    console.error('error: algo paso xd ')
  }

}