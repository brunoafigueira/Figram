import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen flex items-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541888941294-6b974868f760?auto=format&fit=crop&q=80&w=1920"
          alt="Modern Concrete Interior"
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-industrial-blue/80 to-transparent"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <img 
            src="/logo_figram_dark_rgb.png" 
            alt="Figram Logo" 
            className="h-16 md:h-20 w-auto mb-8"
          />
          <span className="inline-block px-3 py-1 bg-polish-blue text-white text-xs font-bold uppercase tracking-widest rounded mb-6">
            Especialistas em Revestimentos
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            <span className="text-polish-blue">Figram</span> no seu Projeto.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-light">
            Especialistas em fulget cimentício, microcimento, concreto estampado e polimento de pisos. Transformamos superfícies brutas em obras de arte modernas e duráveis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#servicos" className="btn-primary flex items-center justify-center gap-2">
              Ver Serviços <ChevronRight className="w-4 h-4" />
            </a>
            <a href="#portfolio" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 py-3 rounded-md font-medium transition-all hover:bg-white/20 text-center">
              Nosso Portfolio
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <div className="flex gap-10 text-white/40 text-xs font-mono tracking-widest uppercase">
          <div className="flex flex-col gap-2">
            <span className="text-white font-bold text-lg">15+</span>
            <span>Anos de Experiência</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-white font-bold text-lg">500+</span>
            <span>Projetos Entregues</span>
          </div>
        </div>
      </div>
    </section>
  );
}
