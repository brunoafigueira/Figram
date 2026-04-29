import { motion } from 'motion/react';
import { useState } from 'react';

const projects = [
  { id: 1, category: 'Microcimento', title: 'Loft Industrial SP', image: 'https://images.unsplash.com/photo-1600607687940-4e5a994239b3?auto=format&fit=crop&q=80&w=800' },
  { id: 2, category: 'Granilite', title: 'Cozinha Gourmet Luxo', image: 'https://images.unsplash.com/photo-1556912177-c54038c396ef?auto=format&fit=crop&q=80&w=800' },
  { id: 3, category: 'Estampado', title: 'Área Externa Resort', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800' },
  { id: 4, category: 'Fulget', title: 'Borda de Piscina Residencial', image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=800' },
  { id: 5, category: 'Polimento', title: 'Galpão Logístico High-Tech', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800' },
  { id: 6, category: 'Microcimento', title: 'Banheiro Minimalista', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800' },
];

export default function Gallery() {
  const [filter, setFilter] = useState('Todos');
  
  const categories = ['Todos', 'Microcimento', 'Granilite', 'Estampado', 'Fulget', 'Polimento'];
  
  const filteredProjects = filter === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="section-padding bg-granilite">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-industrial-blue">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold text-polish-blue uppercase tracking-widest mb-4">Portfolio</h2>
            <p className="text-4xl md:text-5xl font-extrabold text-graphite mb-0">Nossos Projetos de Destaque.</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
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
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/90 via-graphite/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 flex flex-col justify-end">
                <span className="text-polish-blue text-xs font-bold uppercase tracking-widest mb-2 block transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {project.category}
                </span>
                <h3 className="text-white text-2xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {project.title}
                </h3>
                <div className="mt-4 w-12 h-1 bg-white rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
