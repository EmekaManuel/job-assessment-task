import { NavLink } from "react-router-dom";
import Logo from "./logo";
import { ModeToggle } from "./mode-toggle";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Shop", path: "/shop" },
  { name: "FAQS", path: "/faqs" },
];
const RoutingLinks = () => {
  return (
    <div className="ml-[200px] flex items-center gap-6">
      {links.map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          className={({ isActive }) =>
            isActive ? "text-customBlue font-bold" : "hover:text-customBlue"
          }
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  );
};

const NavBar = () => {
  return (
    <header className="sticky top-0 z-[50] w-full bg-transparent">
      <div className="container flex h-14 items-center justify-between md:justify-normal">
        <NavLink
          to="/"
          className="flex items-center justify-start transition-opacity h-[92px] w-[62px] duration-300 hover:opacity-85"
        >
          <Logo />
        </NavLink>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button className="hamburger-menu">☰</button>{" "}
          {/* Example Menu Icon */}
        </div>

        {/* Links for Large Screens */}
        <div className="hidden lg:flex">
          <RoutingLinks />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
