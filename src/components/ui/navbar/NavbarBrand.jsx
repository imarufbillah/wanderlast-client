import Image from "next/image";
import Link from "next/link";

const NavbarBrand = ({ colorClass }) => {
  return (
    <Link href="/" className="flex items-center gap-1 group">
      <div className="relative w-10 h-10 md:w-12 md:h-12">
        <Image
          src="/assets/logo.png"
          alt="Wanderlast Logo"
          fill
          sizes="48px"
          className="object-contain transition-transform group-hover:scale-105"
          priority
        />
      </div>
      <span
        className={`text-xl md:text-2xl font-bold font-heading transition-colors ${colorClass}`}
      >
        Wanderlast
      </span>
    </Link>
  );
};

export default NavbarBrand;
