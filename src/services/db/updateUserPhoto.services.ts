import { FirebaseAuth } from "@fireBS/app";
import { updateProfile } from "firebase/auth";


export const updateUserPhoto = (photoURL: string) => {
  const user = FirebaseAuth.currentUser;

  if (user) {
    updateProfile(user, { photoURL });
  }
}