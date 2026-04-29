import { useState, useEffect } from 'react';
import { Menu, X, Hammer } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img 
            src={scrolled ? "/logo_figram_light_rgb.png" : "/logo_figram_dark_rgb.png"} 
            alt="Figram Logo" 
            className="h-10 md:h-12 w-auto transition-all duration-300"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-polish-blue ${scrolled ? 'text-graphite' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a href="#contato" className="btn-primary py-2 px-5 text-sm">
            Fazer Orçamento
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={scrolled ? 'text-graphite' : 'text-white'} />
          ) : (
            <Menu className={scrolled ? 'text-graphite' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl py-6 flex flex-col items-center gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-graphite font-medium hover:text-industrial-blue"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contato"
            className="btn-primary w-11/12 text-center"
            onClick={() => setIsOpen(false)}
          >
            Fazer Orçamento
          </a>
        </div>
      )}
    </nav>
  );
}
