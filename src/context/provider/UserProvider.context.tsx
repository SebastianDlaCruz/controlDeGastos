import { UserContext } from "@context/UserContext.context";
import { initialState, reducerUser } from "@utilities/index.utilitie";
import { useReducer } from "react";
import { ChildrenModel } from "../../models/index.model";

const UserProvider = ({ children }: ChildrenModel) => {

  const [state, dispatch] = useReducer(reducerUser, initialState);

  return (<UserContext.Provider value={{
    state,
    dispatch
  }}>
    {children}
  </UserContext.Provider>)
}

export default UserProvider;