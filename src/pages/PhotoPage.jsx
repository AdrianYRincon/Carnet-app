import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam';
import Swal from 'sweetalert2';


export const PhotoPage = () => {

  const navigate = useNavigate();
  const webcamRef = useRef(null);
  const [photoDataUrl, setPhotoDataUrl] = useState(null);

  const capture = () => {
    setPhotoDataUrl(null)
    const photoDataUrl = webcamRef.current.getScreenshot();
    setPhotoDataUrl(photoDataUrl);
   
  };

  const validar = async() => {

    
    Swal.fire({
      title: 'Validación foto',
      text: 'Foto validada correctamente',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    })

    setTimeout(() => {
      navigate('/', {
        replace:true
      })
    }, 2000);
    
  }

  return (
    <div className="page-webcam validation animate__animated animate__fadeIn">
      { photoDataUrl ? 
        <div className='box-webcam'>
          <img src={photoDataUrl} />
          <div>
          <button className='btn' onClick={capture}>Tomar otra foto</button>
          <button className='btn' onClick={validar}>Válidar foto</button>
          </div>
        </div>
        : 
        <>
        <div className='box-webcam'>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className='webcam'
            />
            <button className='btn' onClick={capture}>Tomar foto</button>
        </div>
          
        </>
        
      }  
    </div>
  )
}
