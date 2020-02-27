import React, { createContext, useContext, useReducer } from "react";
import { Patient } from "../types";

import { ReducerAction } from "./reducer";

export type State = {
  patients: { [id: string]: Patient };
};

const initialState: State = {
  patients: {}
};

export const StateContext = createContext<
  [State, React.Dispatch<ReducerAction>]
>([initialState, () => initialState]);

type StateProviderProps = {
  reducer: React.Reducer<State, ReducerAction>;
  children: React.ReactElement;
};

export const StateProvider: React.FC<StateProviderProps> = ({
  reducer,
  children
}: StateProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
};
export const useStateValue = () => useContext(StateContext);
