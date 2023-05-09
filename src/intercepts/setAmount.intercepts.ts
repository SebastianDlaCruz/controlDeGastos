import { FirebaseDB } from '@fireBS/app';
import { collection, getDocs } from 'firebase/firestore';
import { setDataDocs } from './setDataDocs.intercepts';

export const setAmount = async (totalAmount: string, idUser: string) => {
  try {
    const querySnapshot = await getDocs(collection(FirebaseDB, "userExpenses"));
    querySnapshot.forEach((doc) => {
      console.log(doc.data().id, idUser)
      if (doc.data().id === idUser) {
        console.log('si registro')
        setDataDocs(doc.id, { totalAmount }, "userExpenses");
      }
    })

  } catch (error) {
    console.error('error: algo paso xd ')
  }
}