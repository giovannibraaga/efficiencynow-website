import Image from "next/image";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <Image
            src="/images/logo.png"
            alt="Efficiency Now"
            width={100}
            height={100}
            className="mx-auto md:mx-0"
          />
          <p className="mt-4 text-sm">
            © 2024 Efficiency Now. Todos os direitos reservados.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Links Úteis</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#about" className="hover:underline">
                Sobre
              </Link>
            </li>
            <li>
              <Link href="#features" className="hover:underline">
                Funcionalidades
              </Link>
            </li>
            <li>
              <Link href="#dicas" className="hover:underline">
                Dicas
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:underline">
                Contato
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Nos siga nas redes sociais</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <FacebookIcon className="w-6 h-6" />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <InstagramIcon className="w-6 h-6" />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <XIcon className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
