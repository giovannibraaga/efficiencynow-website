const Features = () => {
  const features = [
    {
      title: "Economia de Lâmpadas",
      description:
        "Substitua lâmpadas tradicionais por LED e economize energia.",
    },
    {
      title: "Otimização de Consumo",
      description:
        "Reduza o uso excessivo de energia em aparelhos de ar condicionado.",
    },
    {
      title: "Impacto Ambiental",
      description: "Veja como suas escolhas impactam o meio ambiente.",
    },
  ];

  return (
    <div id="features" className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center text-green-700">
        Funcionalidades
      </h2>
      <div className="container mx-auto grid grid-cols-1 gap-4 mt-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 text-center border rounded-lg shadow transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            <h3 className="text-2xl font-bold text-green-700">
              {feature.title}
            </h3>
            <p className="mt-2 text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
