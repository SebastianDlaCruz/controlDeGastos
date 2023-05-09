import UserContext from "@context/UserContext.context";
import { FirebaseAuth } from "@fireBS/app";
import { setIdUser } from "@intercepts/setIdUser.intercepts";
import { onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const useRedirect = () => {

  const { state, dispatch } = useContext(UserContext);
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


  return {
    state
  }
}

export default useRedirect
