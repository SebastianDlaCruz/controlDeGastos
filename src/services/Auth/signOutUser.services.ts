import { FirebaseAuth } from "@fireBS/app";
import { signOut } from "firebase/auth";

export const signOutUser = () => {
	signOut(FirebaseAuth)
		.then(() => {})
		.catch((error) => {
			console.log(error);
		});
};
