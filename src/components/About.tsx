import { CheckCircle2, Trophy, Users, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-polish-blue uppercase tracking-widest mb-4">Sobre Nós</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-graphite mb-6 transition-colors leading-tight">
            Tradição e Inovação em Revestimentos Cimentícios.
          </h3>
          <div className="h-1.5 w-24 bg-industrial-blue mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
                alt="Equipe Trabalhando"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-10 bg-industrial-blue text-white p-10 rounded-3xl shadow-2xl z-20 hidden md:block">
              <div className="text-6xl font-black mb-2 tracking-tighter">40+</div>
              <div className="text-xs font-bold uppercase tracking-widest leading-tight">Anos de<br />Experiência</div>
            </div>
            
            {/* Decorative Grid */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-polish-blue/10 rounded-full blur-3xl -z-10"></div>
          </div>

          <div className="text-graphite">
            <p className="text-lg text-concrete mb-8 leading-relaxed">
              Fundada com o objetivo de elevar o padrão dos acabamentos em cimento, a <strong className="text-industrial-blue">Figram</strong> combina técnicas artesanais com tecnologia de ponta para entregar superfícies impecáveis.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-granilite rounded-xl text-industrial-blue">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Garantia de Qualidade</h4>
                  <p className="text-sm text-concrete">Materiais selecionados e execução rigorosa.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-granilite rounded-xl text-industrial-blue">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Equipe Especializada</h4>
                  <p className="text-sm text-concrete">Profissionais treinados nos melhores fornecedores.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-granilite rounded-xl text-industrial-blue">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Referência no Mercado</h4>
                  <p className="text-sm text-concrete">Presente nos projetos mais sofisticados.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-granilite rounded-xl text-industrial-blue">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Sustentabilidade</h4>
                  <p className="text-sm text-concrete">Processos que minimizam resíduos no canteiro.</p>
                </div>
              </div>
            </div>

            <button className="btn-primary">
              Conheça Nossa História
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
