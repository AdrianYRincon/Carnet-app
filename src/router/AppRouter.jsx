import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../auth/pages/LoginPage';
import { ValidationPage } from '../pages/ValidationPage';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { PhotoPage } from '../pages/PhotoPage';



export const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* Ruta pública */}
        <Route path='login' 
          element={
            <PublicRoute>
              <LoginPage/>
            </PublicRoute>
          }
        />
        {/* Ruta privada */}
        <Route path='/*' element={ 
          <PrivateRoute>
            <ValidationPage/>
          </PrivateRoute> 
        }/>

        <Route path='photo' element={ 
          <PrivateRoute>
            <PhotoPage/>
          </PrivateRoute> 
        }/> 

      </Routes>
    </>
  )
}
