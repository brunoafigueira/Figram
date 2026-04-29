import { motion } from 'motion/react';
import { Layers, Droplets, Grid, Sparkles, Building2, Paintbrush } from 'lucide-react';

const services = [
  {
    icon: <Layers className="w-10 h-10" />,
    title: 'Fulget Cimentício',
    description: 'Revestimento de alta resistência com agregados minerais. Ideal para áreas externas e contornos de piscina.',
    image: 'https://images.unsplash.com/photo-1620067925093-801122da1688?auto=format&fit=crop&q=80&w=800'
  },
  {
    icon: <Droplets className="w-10 h-10" />,
    title: 'Microcimento',
    description: 'Acabamento contínuo, moderno e sem juntas. Versátil para pisos, paredes e até mobiliário.',
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=800'
  },
  {
    icon: <Grid className="w-10 h-10" />,
    title: 'Concreto Estampado',
    description: 'Beleza da pedra ou madeira com a durabilidade do concreto. Perfeito para calçadas e garagens.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800'
  },
  {
    icon: <Building2 className="w-10 h-10" />,
    title: 'Piso em Granilite',
    description: 'Um clássico reinventado. Composto de pedras naturais e cimento, polido até atingir brilho intenso.',
    image: 'https://images.unsplash.com/photo-1594913785162-e6786b42de31?auto=format&fit=crop&q=80&w=800'
  },
  {
    icon: <Sparkles className="w-10 h-10" />,
    title: 'Polimento de Concreto',
    description: 'Transformação de pisos industriais em superfícies espelhadas, densas e de fácil manutenção.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
  },
  {
    icon: <Paintbrush className="w-10 h-10" />,
    title: 'Acabamentos Especiais',
    description: 'Restauração de granilite e selagem técnica para proteção contra infiltrações e manchas.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800'
  }
];

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
            <motion.div
              key={service.title}
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
                <div className="absolute inset-0 bg-industrial-blue/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <div className="p-4 bg-white/20 backdrop-blur-md rounded-full text-white">
                     {service.icon}
                   </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-graphite mb-4 flex items-center gap-3">
                  <span className="text-industrial-blue opacity-50">{index + 1}.</span> {service.title}
                </h3>
                <p className="text-concrete leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center text-sm font-bold text-industrial-blue group-hover:text-steel-blue cursor-pointer transition-colors">
                  Saiba mais <ChevronRight />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChevronRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
      <path d="m9 18 6-6-6-6"/>
    </svg>
  );
}
