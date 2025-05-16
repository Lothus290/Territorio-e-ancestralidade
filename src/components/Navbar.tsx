import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-earth-100 shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <MapPin className="h-8 w-8 text-terracotta-500" />
            <span className="ml-2 text-2xl font-serif font-bold text-earth-900">
              Terra<span className="text-terracotta-500">Ancestral</span>
            </span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="#about">Sobre</NavLink>
            <NavLink href="#timeline">Linha do Tempo</NavLink>
            <NavLink href="#stories">Histórias</NavLink>
            <NavLink href="#gallery">Galeria</NavLink>
            <NavLink href="#map">Mapa</NavLink>
            <NavLink href="#resources">Recursos</NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-earth-900 hover:text-terracotta-500 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-earth-100 shadow-lg">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <MobileNavLink href="#about" onClick={toggleMenu}>Sobre</MobileNavLink>
            <MobileNavLink href="#timeline" onClick={toggleMenu}>Linha do Tempo</MobileNavLink>
            <MobileNavLink href="#stories" onClick={toggleMenu}>Histórias</MobileNavLink>
            <MobileNavLink href="#gallery" onClick={toggleMenu}>Galeria</MobileNavLink>
            <MobileNavLink href="#map" onClick={toggleMenu}>Mapa</MobileNavLink>
            <MobileNavLink href="#resources" onClick={toggleMenu}>Recursos</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => {
  return (
    <a
      href={href}
      className="text-earth-800 hover:text-terracotta-500 font-medium transition-colors duration-300"
    >
      {children}
    </a>
  );
};

const MobileNavLink: React.FC<{
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ href, onClick, children }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block px-3 py-2 text-base font-medium text-earth-800 hover:text-terracotta-500 hover:bg-earth-200 rounded-md transition-colors duration-300"
    >
      {children}
    </a>
  );
};

export default Navbar;