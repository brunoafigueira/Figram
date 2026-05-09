import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  { id: 1, category: 'Fulget', title: '', images: ['1.png', '1_1.png', '1_2.png', '1_3.png'] },
  { id: 2, category: 'Granilite Drenante', title: '', images: ['2.png', '2_1.png', '2_2.png', '2_3.png'] },
  { id: 3, category: 'Microcimento', title: '', images: ['3.png', '3_1.png', '3_2.png', '3_3.png'] },
  { id: 4, category: 'Concreto Estampado', title: '', images: ['4.png', '4_1.png', '4_2.png', '4_3.png'] },
  { id: 5, category: 'Pisos e Divisórias em Granilite', title: '', images: ['5.png', '5_1.png', '5_2.png', '5_3.png'] },
  { id: 6, category: 'Polimento de Pisos em Concreto', title: '', images: ['6.png', '6_1.png', '6_2.png', '6_3.png'] },
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <motion.div
      layout
      key={project.id}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="relative group h-[400px] overflow-hidden rounded-2xl bg-gray-200"
    >
      <img
        src={project.images[currentImage]}
        alt={`${project.title} - Imagem ${currentImage + 1}`}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      
      {/* Navigation arrows */}
      <div className="absolute inset-0 flex items-center justify-between p-3 opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none">
        <button 
          onClick={prevImage}
          className="pointer-events-auto p-1.5 rounded-full bg-black/40 text-white hover:bg-black/70 backdrop-blur-sm transition-all"
          aria-label="Foto anterior"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextImage}
          className="pointer-events-auto p-1.5 rounded-full bg-black/40 text-white hover:bg-black/70 backdrop-blur-sm transition-all"
          aria-label="Próxima foto"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-graphite/90 via-graphite/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 flex flex-col justify-end pointer-events-none z-10">
        <span className="text-polish-blue text-xs font-bold uppercase tracking-widest mb-2 block transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          {project.category}
        </span>
        <h3 className="text-white text-2xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
          {project.title}
        </h3>
        <div className="mt-4 w-12 h-1 bg-white rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const [filter, setFilter] = useState('Todos');
  
  const categories = ['Todos', 'Microcimento', 'Granilite', 'Estampado', 'Fulget', 'Polimento'];
  
  const filteredProjects = filter === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="section-padding bg-granilite">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-16 gap-8 text-industrial-blue">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-sm font-bold text-polish-blue uppercase tracking-widest mb-4">Portfolio</h2>
            <p className="text-4xl md:text-5xl font-extrabold text-graphite mb-6">Nossos Projetos de Destaque.</p>
            <div className="h-1.5 w-24 bg-industrial-blue mx-auto rounded-full"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  filter === cat 
                  ? 'bg-industrial-blue text-white shadow-lg' 
                  : 'bg-white text-graphite hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
