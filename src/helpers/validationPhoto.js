import * as faceapi from 'face-api.js';

async function verifyFace(photoDataUrl) {
  const image = await faceapi.bufferToImage(photoDataUrl);

  // Carga de modelos
  await Promise.all([
    faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('/models')
  ]);

  // Detecta rostros en la imagen
  const detections = await faceapi.detectAllFaces(image).withFaceLandmarks().withFaceDescriptors();

  if (detections.length > 0) {
    // La foto es de un rostro humano
    console.log('La foto es de un rostro humano');
  } else {
    // La foto no es de un rostro humano
    console.log('La foto no es de un rostro humano');
  }
}