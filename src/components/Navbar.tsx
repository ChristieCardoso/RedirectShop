import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <div className="w-full h-20 bg-white borde-b-[1px] border border-b-gray-400">
      <nav className="h-full max-w-screen-xl mx-auto px-4 xl:px-0 flex items-center justify-between gap-2">
        <Link href={"/"}>
          <Image src={logo} alt="logo" className="w-20" />
        </Link>
        <div className="relative w-full hidden lg:inline-flex lg:w-[600px] h-10 text-base text-primeColor border-[1px] border-black items-center gap-2 justify-between px-6 rounded-md">
          <input
            type="text"
            placeholder="Pesquise seus produtos"
            className="flex-1 h-full outline-none bg-transparent placeholder:text-gray-600"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
