export const validationForm = ( student = {}) => {

  const emailRegex = /\b[A-Za-z0-9._%+-]+@unal\.edu\.co\b/;

  
  if ( Object.values( student ).every( formField => formField === '' ) ){
    return 'Todos los campos son obligatorios';
  }

  if( student.email === ''){
    return 'El email es Obligatorio';
  }
  
  if( student.password === ''){
    return 'La contraseña es obligatoria';
  }

  if( !emailRegex.test( student.email) ){
    return 'Email inválido';
  }

  return;

}