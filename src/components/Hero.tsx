import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="
      relative
      h-screen
      flex
      items-center
      overflow-hidden
      bg-black">
      {/* Background Image with Overlay */}
      <div className="
        absolute
        inset-0
        z-0">
        <img
          src="https://images.unsplash.com/photo-1541888941294-6b974868f760?auto=format&fit=crop&q=80&w=1920"
          alt="Modern Concrete Interior"
          className="
            w-full
            h-full
            object-cover
            opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="
          absolute
          inset-0
          bg-linear-to-r
          from-industrial-blue/80
          to-transparent"></div>
      </div>          
      <div className="
        container-custom
        relative
        z-10">
        <div className="
          w-full
          flex
          justify-center">
          <span className="
            inline-block
            px-3
            py-1
            bg-polish-blue
            text-white
            text-xs
            font-bold
            uppercase
            tracking-widest
            rounded
            mb-6">
            Especialistas em Revestimentos
          </span>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="
            max-w-4xl
            text-white
            flex
            flex-col
            gap-8"
        >
          <div className="
            flex
            justify-center
            items-center
            gap-15">
            <img 
              src="/logo_figram_dark_rgb.png" 
              alt="Figram Logo" 
              className="
                h-40
                md:h-40
                lg:h-60
                w-auto
                shrink-0"
            />
            <h1 className="
              text-5xl
              md:text-7xl
              font-extrabold
              tracking-tight
              leading-tight">
              <span className="
                text-polish-blue">Figram</span> <p>no seu </p>Projeto.
            </h1>
          </div>

          <div className="
            flex
            flex-col">
            <p className="
              text-lg
              md:text-xl
              text-gray-200
              mb-10
              leading-relaxed
              font-light
              max-w-3xl
              text-justify
">
              Especialistas em fulget cimentício, fulget acrílico (granilha drenante), microcimento, concreto estampado e polimento de pisos. Transformamos superfícies brutas em obras de arte modernas e duráveis.
            </p>
            <div className="
              flex
              flex-row
              gap-4
              justify-center">
              <a href="#servicos" className="
                btn-primary
                flex
                items-center
                justify-center
                gap-2
                w-fit">
                Ver Serviços
              </a>
              <a href="#portfolio" className="
                bg-white/10
                backdrop-blur-md
                text-white
                border
                border-white/20
                px-6
                py-3
                rounded-md
                font-medium
                transition-all
                hover:bg-white/20
                text-center
                w-fit">
                Nosso Portfolio
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="
        absolute
        bottom-10
        left-10
        hidden
        lg:block">
        <div className="
          flex
          gap-10
          text-white/40
          text-xs
          font-mono
          tracking-widest
          uppercase">
          <div className="
            flex
            flex-col
            gap-2">
            <span className="
              text-white
              font-bold
              text-lg">40+</span>
            <span>Anos de Experiência</span>
          </div>
          <div className="
            flex
            flex-col
            gap-2">
            <span className="
              text-white
              font-bold
              text-lg">500+</span>
            <span>Projetos Entregues</span>
          </div>
        </div>
      </div>
    </section>
  );
}
