import { useContext, useState } from "react"
import { AuthContext } from "../auth/context/AuthContext"
import { Navigate, useNavigate } from "react-router-dom"
import { carnetValidation } from "../helpers/carnetValidation"
import { Alert } from "../components/Alert"
import Swal from "sweetalert2"



export const ValidationPage = () => {
  
  const initialForm = {
    name:'',
    lastname:'',
    ti:'',
    ni:'',
    gs:''
  }

  const [form, setForm] = useState( initialForm )
  const [error, setError] = useState( null )
  const navigate = useNavigate();
  const { logout } = useContext( AuthContext )
  

  const onLogout = () => {

    logout();

    navigate('/login',{
      replace:true
    });
  }

  const onClick = () => {
    navigate('photo',{
      replace: true
      });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    let messageError = carnetValidation(form);
    if( messageError ){
      setError(messageError);
      return;
    }
    Swal.fire({
    title: 'Validación carnet',
    text: 'Datos enviados correctamente',
    icon: 'success',
    confirmButtonText: 'Aceptar'
  })
    messageError = null;
    setError( messageError );
    

  };

  const onInputChange = ({ target }) => {
    const { value, name } = target;
    setForm({
      ...form,
      [name]: value,
    })
  
  };
  

  return (
    <>
    
      <div className="validation animate__animated animate__fadeIn">

           {/* <WebCam/> */}
          <form className="validation-form" onSubmit={ onSubmit }>
          

            <div className="camera" onClick={ onClick }>Establecer fotografia</div>
            <div>
              <label>Nombres</label>
              <input type="text" name="name"  onChange={ onInputChange }/>
            </div>

            <div>
              <label>Apellidos</label>
              <input type="text" name="lastname" onChange={ onInputChange }/>
            </div>

            <div>   
              <label>Tipo de identificación</label>
              <select className="select-ti" name="ti" defaultValue='' onChange={ onInputChange }>
                  <option value='' disabled>Selecciona una opción</option>
                  <option value="ti">Tarjeta de identidad</option>
                  <option value="cc">Cédula de ciudadanía</option>
                  <option value="te">Tarjeta de extranjería</option>
                  <option value="ce">Cédula de extranjería</option>
              </select>
            </div>

            <div>
              <label>Número de identificación</label>
              <input type="text" name="ni" onChange={ onInputChange }/>
            </div>

            <div>
              <label>Grupo sanguíneo</label>
              <select className="select-gs" name="gs" defaultValue='' onChange ={ onInputChange }>
                  <option value='' disabled>Selecciona una opción</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
              </select>
            </div>

            <button className="btn-validation" type="submit">Enviar</button>
            <button className="btn-logout" onClick={ onLogout }>Salir</button>
            { error === null ? null : <Alert messageError={ error } className="error-validation"/>} 
  
          </form>
       

      </div> {/*validation */}
     
    </>
  )
}

