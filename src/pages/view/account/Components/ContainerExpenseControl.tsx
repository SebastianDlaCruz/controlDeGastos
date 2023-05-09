import UserContext from "@context/UserContext.context";
import { useContext } from "react";

const ContainerExpenseControl = () => {

  const { dispatch } = useContext(UserContext);

  const handleExpenseControl = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch({
      type: "SET_AMOUNT",
      payload: 23
    })

  }

  return (
    <form onSubmit={handleExpenseControl}>
      <h2>Importe de control de gasto</h2>
      <label htmlFor="name">Actualiza el importe:</label>
      <input type="text" placeholder="importe" id="name" />
      <button>Actualizar importe</button>
    </form>
  )
}

export default ContainerExpenseControl
