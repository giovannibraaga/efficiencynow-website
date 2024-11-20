import React from "react";

const AboutUs = () => {
  return (
    <div id="about" className="py-16 bg-green-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-8">Sobre Nós</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          O <strong>Efficiency Now</strong> é uma iniciativa que busca promover
          a eficiência energética e a sustentabilidade. Nosso objetivo é
          conscientizar e capacitar pessoas e empresas a reduzirem sua pegada de
          carbono, economizando energia por meio de escolhas inteligentes e
          práticas inovadoras.
        </p>
        <p className="mt-4 text-gray-700 text-lg leading-relaxed">
          Combinamos tecnologia e conscientização para criar um impacto positivo
          no meio ambiente, tornando o consumo de energia mais eficiente e
          acessível para todos.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
