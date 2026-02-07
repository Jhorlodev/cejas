const NuestrosServicios = () => {
  const URL = "https://ejemplo.com/imagen-directa.jpg"; // Reemplaza con URL directa
  return (
    <>
      <h1>Bienvenidos servicios</h1>
      <img 
        src={URL}
        alt="Nuestros servicios"
        style={{ width: '300px' }}
      />
    </>
  );
};

export default NuestrosServicios;