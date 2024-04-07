import { useRef, useState } from 'react';

const Page_IA = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [predictedClass, setPredictedClass] = useState(null);
  const [historyText, setHistoryText] = useState(null);
  const [cameraActive, setCameraActive] = useState(false);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
      videoRef.current.srcObject = stream;
      setCameraActive(true);
    } catch (err) {
      console.error('Error accessing camera:', err);
    }
  };

  const takePhoto = async () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, 640, 480);
    const dataURL = canvas.toDataURL('image/jpeg');

    const blob = await (await fetch(dataURL)).blob();

    const formData = new FormData();
    formData.append('image', blob, 'image.jpg');

    try {
      const response = await fetch('http://host.docker.internal:5000/predict', {
        method: 'POST',
        body: formData
      });
      console.log('conexion exitosa')
      const data = await response.json();
      setPredictedClass(data.predicted_class);
      if (data.history_text) {
        setHistoryText(data.history_text);
      } else {
        setHistoryText(null);
      }
      console.log(data);
    } catch (error) {
      console.error('Error sending image to server:', error);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen py-16">
      <div className="container mx-auto">
        <h1 className="text-white text-4xl font-bold text-center mb-8">Detector de Banderas</h1>
        {!cameraActive && (
          <div className="flex justify-center">
            <button className="px-6 py-3 text-white font-semibold bg-blue-500 rounded-lg hover:bg-blue-600" onClick={startCamera}>Activar Cámara</button>
          </div>
        )}

        {cameraActive && (
          <div className="flex justify-center mt-8">
            <button className="px-6 py-3 text-white font-semibold bg-blue-500 rounded-lg hover:bg-blue-600 sm:block md:hidden" onClick={takePhoto}>Tomar Foto</button>
          </div>
        )}
        
        <div className="md:grid md:grid-cols-2 gap-6 mt-8 sm:flex sm:flex-col">
          <div className='mb-5 sm:mb-0'>
            <video ref={videoRef} autoPlay muted className={`rounded-xl w-full ${cameraActive ? 'block' : 'hidden'}`}></video>
            <canvas ref={canvasRef} width="640" height="480" className="hidden"></canvas>
          </div>
          {cameraActive && (
            <div className="bg-gray-800 rounded-xl p-8">
              {!historyText && (
                <h1 className="text-[#ffb44c] text-4xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl font-semibold text-center mb-12 xl:mt-24 lg:mt-20 md:mt-14 sm:mt-10 mt-8">ESPERANDO BANDERA</h1>
              )}
              <h1 className="text-[#ffb44c] font-semibold text-center mb-8 text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl xl:mt-12 lg:mt-0 md:mt-0">{predictedClass}</h1>
              {historyText && <p className="text-white  font-medium text-center text-md sm:text-md md:text-md lg:text-lg xl:text-xl">{historyText}</p>}
            </div>
          )}
        </div>
        {cameraActive && (
          <div className="flex justify-center mt-8">
            <button className="px-6 py-3 text-white font-semibold bg-blue-500 rounded-lg hover:bg-blue-600 hidden md:block" onClick={takePhoto}>Tomar Foto</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page_IA;
