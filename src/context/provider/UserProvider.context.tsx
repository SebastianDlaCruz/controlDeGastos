import UserContext, { initialState } from "@context/UserContext.context";
import Children from "@models/children.models";
import { reducerUser } from "@utilities/reducerUser.utils";
import { useReducer } from "react";
const UserProvider = ({ children }: Children) => {
	const [state, dispatch] = useReducer(reducerUser, initialState);
	return (
		<UserContext.Provider
			value={{
				state,
				dispatch,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
