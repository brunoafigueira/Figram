import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

const services = [
  {
    title: 'Fulget Cimentício',
    description: 'Revestimento de alta resistência com agregados minerais. Ideal para áreas externas e contornos de piscina.',
    image: '/fulgetcimenticio.png'
  },
  {
    title: 'Fulget Acrílico / Granilha Drenante',
    description: 'Revestimento permeável de alta durabilidade. Proporciona um visual natural com excelente capacidade de drenagem.',
    image: '/granilhadrenante.png'
  },
  {
    title: 'Microcimento',
    description: 'Acabamento contínuo, moderno e sem juntas. Versátil para pisos, paredes e até mobiliário.',
    image: '/3.png'
  },
  {
    title: 'Concreto Estampado',
    description: 'Beleza da pedra ou madeira com a durabilidade do concreto. Perfeito para calçadas e garagens.',
    image: '/4.png'
  },
  {
    title: 'Pisos e Divisórias em Granilite',
    description: 'Um clássico reinventado. Composto de pedras naturais e cimento, polido até atingir brilho intenso.',
    image: '/5.png'
  },
  {
    title: 'Polimento de Pisos em Concreto',
    description: 'Transformação de pisos industriais em superfícies espelhadas, densas e de fácil manutenção.',
    image: '/6.png'
  }
];

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-granilite rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-concrete/10"
    >
      <div className="h-64 overflow-hidden relative">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold text-graphite mb-4 flex items-center gap-3">
          <span className="text-industrial-blue opacity-50">{index + 1}.</span> {service.title}
        </h3>
        <p className="text-concrete leading-relaxed">
          {service.description}
        </p>
        <div className="mt-6 flex items-center text-sm font-bold text-industrial-blue group-hover:text-steel-blue cursor-pointer transition-colors">
          Saiba mais <ChevronRight size={16} className="ml-1" />
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="servicos" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-polish-blue uppercase tracking-widest mb-4">Nossas Soluções</h2>
          <p className="text-4xl md:text-5xl font-extrabold text-graphite mb-6">Excelência em cada detalhe do acabamento.</p>
          <div className="h-1.5 w-24 bg-industrial-blue mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
