import React from "react";
import { Menu, X } from "lucide-react";
import { siteData } from "../data/siteData.js";

const Navigation = ({
  activeSection,
  scrollToSection,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const NavigationMenu = ({ mobile = false }) => (
    <nav
      className={`${
        mobile ? "flex flex-col space-y-4" : "hidden md:flex space-x-8"
      }`}
    >
      {[
        { id: "home", label: "Home" },
        { id: "courses", label: "Lớp học" },
        { id: "team", label: "Our Team" },
        { id: "register", label: "Đăng ký" },
        { id: "contact", label: "Contact" },
      ].map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className={`transition-all duration-300 ${
            activeSection === id
              ? "text-blue-600 font-semibold"
              : "text-gray-700 hover:text-blue-600"
          } ${mobile ? "text-lg py-2" : ""}`}
        >
          {label}
        </button>
      ))}
    </nav>
  );

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl shadow-sm z-50 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {siteData.brand.name}
          </div>

          <NavigationMenu />

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t">
            <div className="pt-4">
              <NavigationMenu mobile />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;