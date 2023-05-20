import { Action, initialState } from '@utilities/index.utilitie';
import { createContext } from 'react';
import { UserModel, } from '../model/index.model';

export const UserContext = createContext<{
  state: UserModel,
  dispatch: React.Dispatch<Action>
}>({
  state: initialState,
  dispatch: () => null
});