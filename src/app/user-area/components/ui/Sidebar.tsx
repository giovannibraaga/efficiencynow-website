"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import { TbAirConditioning } from "react-icons/tb";
import { PiSignOutBold } from "react-icons/pi";

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <aside className="w-64 h-full bg-white text-gray-800 flex flex-col shadow-lg">
      <div className="p-4 flex justify-center font-bold text-xl text-green-700">
        <Image
          src="/images/logo.png"
          alt="Efficiency Now Logo"
          width={100}
          height={100}
        />
      </div>
      <nav className="flex-1">
        <ul className="space-y-2 p-4">
          <li>
            <Link href="/user-area/lamp-economy">
              <button
                className={`flex items-center w-full p-2 rounded ${
                  pathname === "/user-area/lamp-economy"
                    ? "bg-gray-200"
                    : "hover:bg-gray-100"
                }`}
              >
                <TipsAndUpdatesIcon className="mr-2 w-6 h-6" />
                Economia de Lâmpadas
              </button>
            </Link>
          </li>
          <li>
            <Link href="/user-area/ac-economy">
              <button
                className={`flex items-center w-full p-2 rounded ${
                  pathname === "/user-area/ac-economy"
                    ? "bg-gray-200"
                    : "hover:bg-gray-100"
                }`}
              >
                <TbAirConditioning className="mr-2 w-6 h-6" />
                Economia de Ar Condicionado
              </button>
            </Link>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => router.push("/login")}
        className="flex items-center justify-center p-4 bg-red-700 text-white hover:bg-red-800"
      >
        <PiSignOutBold className="mr-2 w-6 h-6" />
        Sair
      </button>
    </aside>
  );
};

export default Sidebar;
