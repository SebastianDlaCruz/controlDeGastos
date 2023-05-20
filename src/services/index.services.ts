import { FirebaseAuth } from "@fireFB/index.firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

export const registerUser = async (name: string, email: string, password: string) => {
  try {
    const useCredential = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
    await updateProfile(useCredential.user, { displayName: name })
    return {
      ok: true,
    }
  } catch (error) {

    return {
      ok: true,
      message: 'Ocurrió un error al regístrate'
    }
  }
}

export const login = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(FirebaseAuth, email, password);
    return {
      ok: true
    }
  } catch (error) {
    return {
      ok: true,
      message: 'Erro al ingresar'
    }
  }

}


