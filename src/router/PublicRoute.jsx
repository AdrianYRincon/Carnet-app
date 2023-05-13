import { useContext } from "react"
import { AuthContext } from "../auth/context/AuthContext"
import { Navigate } from "react-router-dom"


export const PublicRoute = ({ children }) => {

  const { logged }  = useContext(AuthContext)
  
  //si logged = true muestra los componente hijos sino navega al login
  return ( !logged ) ? children : <Navigate to='/'/>
}
