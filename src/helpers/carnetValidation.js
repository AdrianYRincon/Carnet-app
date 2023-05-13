
export const carnetValidation = ( form ) => {

  if ( Object.values( form).some( formField => formField === '')){
    return 'Todos los campos son obligatorios';
  }

  if(isNaN(Number(form.ni))){
    return 'Número de identificación inválido';
  }

  return;

};