import { Hammer } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-granilite py-20 border-t border-concrete/20">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <Hammer className="w-8 h-8 text-industrial-blue" />
              <span className="text-xl font-bold tracking-tighter text-industrial-blue">
                FIGRAM
              </span>
            </div>
            <p className="text-concrete max-w-md leading-relaxed mb-8">
              Desde 2011 transformando espaços com excelência técnica e design moderno. Nossa missão é entregar superfícies que combinam durabilidade extrema com beleza estética refinada.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-graphite mb-8">Navegação</h4>
            <ul className="space-y-4 text-concrete">
              <li><a href="#inicio" className="hover:text-industrial-blue transition-colors">Início</a></li>
              <li><a href="#servicos" className="hover:text-industrial-blue transition-colors">Serviços</a></li>
              <li><a href="#portfolio" className="hover:text-industrial-blue transition-colors">Portfolio</a></li>
              <li><a href="#sobre" className="hover:text-industrial-blue transition-colors">Sobre Nós</a></li>
              <li><a href="#contato" className="hover:text-industrial-blue transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-graphite mb-8">Serviços</h4>
            <ul className="space-y-4 text-concrete">
              <li className="hover:text-industrial-blue cursor-pointer">Fulget Cimentício</li>
              <li className="hover:text-industrial-blue cursor-pointer">Microcimento</li>
              <li className="hover:text-industrial-blue cursor-pointer">Concreto Estampado</li>
              <li className="hover:text-industrial-blue cursor-pointer">Granilite</li>
              <li className="hover:text-industrial-blue cursor-pointer">Polimento de Pisos</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-concrete/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-concrete">
            © {currentYear} Figram. Todos os direitos reservados.
          </p>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-concrete">
             <span className="hover:text-industrial-blue cursor-pointer">Política de Privacidade</span>
             <span className="hover:text-industrial-blue cursor-pointer">Termos de Uso</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
