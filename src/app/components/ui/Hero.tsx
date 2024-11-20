const Hero = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center bg-green-100 bg-[url('/images/hero-image-2.png')] bg-cover bg-center">
        <h1 className="text-4xl font-extrabold text-green-700">
          Juntos, pela Eficiência Energética e Sustentabilidade
        </h1>
        <p className="mt-4 text-xl text-white">
          Ajudamos você a economizar energia e reduzir sua pegada de carbono.
        </p>
        <button className="px-6 py-3 mt-6 text-lg text-white bg-green-700 rounded hover:bg-green-800">
          Iniciar Agora
        </button>
      </div>
    );
  };
  
  export default Hero;