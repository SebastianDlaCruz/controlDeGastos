import NavBar from "@components/NavBar";
import UserContext from "@context/UserContext.context";
import { FirebaseAuth } from "@fireBS/app";
import { getExpensesUser } from "@intercepts/getExpensesUser.intercepts";
import { setIdUser } from "@intercepts/setIdUser.intercepts";
import { signOutUser } from "@services/Auth/signOutUser.services";
import { onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContainServicesInfo from "./components/ContainServicesInfo";
import ContainerServices from "./components/ContainerServices";
import MonthlyExpenseList from "./components/MonthlyExpenseList";
const Home = () => {

  const { dispatch, state } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, (user) => {
      if (user !== null) {
        dispatch({
          type: "AUTH",
          payload: {
            uid: user.uid,
            email: user.email || "",
            name: user.displayName || "",
            photoUrl: user.photoURL || "",
          },
        })
        setIdUser(user.uid);
      } else {
        navigate('login')
      }
    })
  }, [])

  useEffect(() => {
    getExpensesUser(state.uid).then(res => {
      if (res?.response) {
        dispatch({
          type: "SET_USER_EXPENSES",
          payload: { ...res.data },
        })
      }
    });

  }, [state])

  return (
    <>
      <NavBar />
      <ContainServicesInfo />
      <p>Gráfico</p>
      <ContainerServices />
      <MonthlyExpenseList />
      <button onClick={signOutUser}> Cerrar Session</button>
    </>
  );
};

export default Home;
