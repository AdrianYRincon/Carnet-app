import { AuthProvider } from "./auth"
import { AppRouter } from "./router/AppRouter"


export const CarnetApp = () => {
  
  return (
    <>
    <AuthProvider>
      <AppRouter/>
    </AuthProvider>     
    </>
  )
}
