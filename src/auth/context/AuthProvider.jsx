//Componente que provee la informacion a toda la app

import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";


// funcion para inicializar mi estado
const init  = () => {
  
  const user =  JSON.parse( localStorage.getItem('user') );
  return {
    logged: !!user,
    user
  }
};


export const AuthProvider = ({ children }) => {

  const [ authState, dispatch ] =  useReducer( authReducer, {} ,init );

  const login = ( user ) => {

    const action = { 
      type: types.login,
      payload: user 
    }

    localStorage.setItem('user', JSON.stringify( user ) );

    dispatch( action )

  }

  const logout = () => {

    const action = { 
      type: types.logout 
    }

    localStorage.clear(); 
    dispatch( action )

  }

  return (
    <AuthContext.Provider value={ { ...authState, login, logout }}>
      { children }
    </AuthContext.Provider>
  );
}
