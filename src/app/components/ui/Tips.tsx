import Link from "next/link";
import React from "react";

const Tips = () => {
  const tips = [
    {
      title: "Troque para Painéis Solares",
      description:
        "Invista em energia solar e reduza até 95% da sua conta de luz. Além disso, aproveite créditos energéticos para abater custos em meses de menor produção e contribua para um futuro sustentável. Saiba mais no artigo da Sol Fácil.",
      linkName: "Saiba Mais",
      href: "https://blog.solfacil.com.br/energia-solar/economia-com-energia-solar/",
    },
    {
      title: "Invista em Lâmpadas LED",
      description:
        "Lâmpadas LED consomem até 80% menos energia e possuem maior durabilidade que lâmpadas tradicionais.",
      linkName: "Saiba Mais",
      href: "https://www.aecweb.com.br/revista/materias/led-alia-eficiencia-energetica-e-economia/9773",
    },
    {
      title: "Desligue Equipamentos em Standby",
      description:
        "Aparelhos em modo standby ainda consomem energia. Desligue-os completamente para evitar desperdício.",
      linkName: "Saiba Mais",
      href: "https://jmc.com.br/aparelhos-em-standby-consomem-energia/",
    },
    {
      title: "Utilize Ar-Condicionado com Consciência",
      description:
        "Ajuste a temperatura para valores entre 22-24°C para garantir conforto e eficiência energética.",
      linkName: "Saiba Mais",
      href: "https://www.mercadolivre.com.br/blog/qual-e-a-temperatura-ideal-do-ar-condicionado-descubra-tudo",
    },
  ];

  return (
    <div id="tips" className="py-16 bg-green-50">
      <h2 className="text-3xl font-bold text-center text-green-700">
        Dicas para Melhorar sua Eficiência Energética
      </h2>
      <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-4 container mx-auto px-4">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="p-6 bg-white text-center border rounded-lg shadow transition-transform duration-300 ease-in-out transform hover:scale-105 flex flex-col justify-center items-center"
          >
            <h3 className="text-xl font-semibold text-green-700">
              {tip.title}
            </h3>
            <p className="mt-2 text-gray-700 text-center">{tip.description}</p>
            <button className="bg-green-700 p-2 mt-2 rounded-md">
              <Link
                className="text-white font-bold"
                href={tip.href || "#"}
                target="_blank"
              >
                {tip.linkName}
              </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tips;
