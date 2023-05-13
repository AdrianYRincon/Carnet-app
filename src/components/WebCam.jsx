import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

export const WebCam = () => {

  const webcamRef = useRef(null);
  const [photoDataUrl, setPhotoDataUrl] = useState(null);

  const capture = () => {
    const photoDataUrl = webcamRef.current.getScreenshot();
    setPhotoDataUrl(photoDataUrl);
  };

  return (
    <div> 
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <button onClick={capture}>Tomar foto</button>
      {photoDataUrl && <img src={photoDataUrl} />}
    </div>
  )
}
