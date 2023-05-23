import { getPercentageOfValue } from "@adapters/index.adapter";
import { UserContext } from "@context/UserContext.context";
import { FirebaseStore } from "@fireFB/index.firebase";
import { BillsModel } from "@models/index.model";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
export const UseGetSpent = () => {

  const { state } = useContext(UserContext);
  const [bills, setBills] = useState<BillsModel[]>([]);
  const [isPending, setIsPending] = useState(false);

  const data = () => {
    const q = query(collection(FirebaseStore, "bills"), where("id", "==", state.id));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const template: BillsModel[] = [];
      querySnapshot.forEach((doc) => {
        template.push(doc.data() as BillsModel);
      });
      setIsPending(true);
      setBills([...template]);
    });
    return unsubscribe;
  }

  useEffect(() => {
    const unsubscribe = data();
    return () => {
      unsubscribe()
    }
  }, [isPending])

  return {
    bills,
    isPending
  }
}

export const UseGetDataSpent = () => {

  const init = {
    labels: [
      "Mascotas",
      "Alimentos",
      "Limpieza",
      "Educación",
      "Ropa"],
    datasets: [
      {
        label: '%',
        data: [],
        backgroundColor: [
          'rgba(255, 99, 133, 0.733)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,

      },
    ],
  }

  const { bills, isPending } = UseGetSpent();
  const [data, setData] = useState(init);

  const totalAmount = () => {
    let totalAmount = 0;
    if (isPending) {
      for (let i = 0; i < bills.length; i++) {
        totalAmount = totalAmount + bills[i].amount;
      }
      return totalAmount;
    }
  }

  useEffect(() => {
    const amount = totalAmount();
    if (amount) {
      const percentageRopa = getPercentageOfValue('ropa', bills, amount);
      const percentageMascotas = getPercentageOfValue('mascotas', bills, amount);
      const percentageAlimentos = getPercentageOfValue('alimentos', bills, amount);
      const percentageEducacion = getPercentageOfValue('educacion', bills, amount);
      const percentageLimpieza = getPercentageOfValue('limpieza', bills, amount);
      console.log(amount)
      console.log(percentageRopa, percentageMascotas, percentageLimpieza, percentageAlimentos, percentageEducacion);
      setData(prevState => ({
        ...prevState,
        datasets: prevState.datasets.map(dataset => {
          return {
            ...dataset,
            data: [percentageMascotas, percentageAlimentos, percentageLimpieza, percentageEducacion, percentageRopa],
          };
        }),
      }));
    }
  }, [bills])

  return {
    data
  }
}
