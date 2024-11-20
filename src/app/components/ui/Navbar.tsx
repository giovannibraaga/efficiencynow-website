import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="md:container mx-auto flex items-center justify-between p-4 bg-white">
      <div className="flex items-center">
        <Image
          src="/images/logo.png"
          alt="Efficiency Now logo"
          width={100}
          height={100}
        />
      </div>
      <div className="flex space-x-4">
        <ul className="flex row space-x-4 justify-between items-center font-bold">
          <li>
            <Link href="#about" className="text-gray-700 hover:text-green-700">
              Sobre
            </Link>
          </li>
          <li>
            <Link
              href="#features"
              className="text-gray-700 hover:text-green-700"
            >
              Funcionalidades
            </Link>
          </li>
          <li>
            <Link href="#tips" className="text-gray-700 hover:text-green-700">
              Dicas
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-green-700"
            >
              Contato
            </Link>
          </li>
          <li>
            <button className="px-4 py-2 text-white bg-green-700 rounded hover:bg-green-800">
              Login
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
