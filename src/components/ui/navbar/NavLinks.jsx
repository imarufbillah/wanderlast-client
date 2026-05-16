import Link from "next/link";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Destinations", href: "/destinations" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const NavLinks = ({ pathname, getTextColor }) => {
  return (
    <div className="hidden lg:flex items-center gap-8">
      {NAV_LINKS.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`font-medium font-body transition-colors relative group ${getTextColor(isActive)}`}
          >
            {link.name}
            <span
              className={`absolute -bottom-0.5 left-0 h-0.5 bg-accent transition-all duration-200 ${
                isActive ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </Link>
        );
      })}
    </div>
  );
};

export { NAV_LINKS };
export default NavLinks;
