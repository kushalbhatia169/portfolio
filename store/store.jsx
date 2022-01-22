import React, { useReducer, createContext } from 'react';
import Reducer from './reducer';

const initialState = {
  userData: '',
};

export const context = createContext(initialState);

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <context.Provider value={ state, dispatch }>
      {children}
    </context.Provider>
  );
};

export default Store;
