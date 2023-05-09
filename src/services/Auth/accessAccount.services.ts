import { FirebaseAuth } from "@fireBS/app";
import { Auth, UserCredential, updateProfile } from "firebase/auth";

export const accessAccount = async (
  nameUser: string,
  emailUser: string,
  passwordUser: string,
  method: (auth: Auth, e: string, p: string) => Promise<UserCredential>,
) => {
  try {
    const result = await method(FirebaseAuth, emailUser, passwordUser);
    const user = result.user;

    if (nameUser !== "") {
      await updateProfile(user, {
        displayName: nameUser,
      });
    }

    return {
      ok: true,
      message: "Bienvenido",
    };
  } catch (error) {
    const message =
      "Verifique el email y contraseña. Si nada de eso funciona asegúrese que esa cuenta este registrada ";
    return {
      ok: false,
      message,
    };
  }
};
