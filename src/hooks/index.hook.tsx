import { UserContext } from "@context/UserContext.context";
import { FirebaseAuth } from "@fireFB/index.firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const UseAuth = () => {

  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, (user) => {
      if (user && user.uid && user.displayName && user.email) {
        dispatch({
          type: 'SET_AUTH',
          payload: {
            id: user.uid,
            name: user.displayName,
            email: user.email
          }
        })
      } else {
        navigate('/login');
      }
    })

  }, [])

  return {
    state,
  }
}