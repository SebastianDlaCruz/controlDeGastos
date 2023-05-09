import UserContext from "@context/UserContext.context";
import { useContext } from "react";
const ContainServicesInfo = () => {
  const { state } = useContext(UserContext);
  return (
    <div>
      <h2>Total Importe</h2>
      <span>{state.totalExpenditures.totalAmount}$</span>
      <p>ver grafico</p>
    </div>
  );
};

export default ContainServicesInfo;
