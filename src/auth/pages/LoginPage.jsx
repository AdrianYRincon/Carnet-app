
import { useContext, useState } from 'react'
import { Alert } from '../../components/Alert';
import { validationForm } from '../../helpers/validationForm';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


export const LoginPage = () => {

  
  const { login } = useContext( AuthContext );
  const navigate =  useNavigate();


  const initialState = {
    email:'',
    password:''
  }

  const [student, setStudent] = useState( initialState );
  const [error, setError] = useState(null);

  const onSubmit = (e) => {

    e.preventDefault();
    let messageError = validationForm( student );
    if( messageError ){
      setError( messageError );
      return;
    }
    messageError = null;
    setError( messageError );

    login( student.email );
    //Aqui dirigimos al usuario a otra ruta y la ruta actual es remplazada y no se agrega al historial de navegacion 
    navigate('/',{
    replace: true
    });

  }

  const onInputChange = ( { target } ) => {
  
    const { name , value} = target; 

    setStudent({
      ...student,
      [name]:value
    });
    
  }

  return (
   <>
   <div className='container animate__animated animate__fadeIn'>

    <div className='login'>

      <div className='unal'></div>

      <form className='login-form' onSubmit={ onSubmit }>
          
          <div className='info'>
            <p>Gestiona tú Carnet de manera virtual</p>
            <div className='info-carnet'></div>
          </div>
          
          { error === null ? null : <Alert messageError={ error }/>} 
          
          <input id='email' type='email' name='email' placeholder='Usuario' onChange={ onInputChange }/>
        
          <input id='password' type='password' name='password' placeholder='Contraseña' onChange={ onInputChange}/>

          <button type='submit' className='btn'>Ingresar</button>

      </form>

    </div>
   </div>
   </>
  )
}
