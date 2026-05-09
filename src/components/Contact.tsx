import { Mail, Phone, MapPin, Send, Instagram, Facebook, Linkedin } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<null | 'success' | 'loading'>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulating API call
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus(null), 5000);
    }, 1500);
  };

  return (
    <section id="contato" className="section-padding bg-industrial-blue text-white overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48 -mt-48 transition-colors"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-sm font-bold text-polish-blue uppercase tracking-widest mb-4">Contato</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">Vamos juntos construir algo incrível.</h3>
            <p className="text-lg text-white/70 mb-12 max-w-lg leading-relaxed">
              Solicite um orçamento personalizado para o seu projeto. Nossa equipe está pronta para tirar suas dúvidas e sugerir a melhor solução técnica.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-white/10 rounded-2xl group-hover:bg-white/20 transition-colors">
                  <Phone className="w-6 h-6 text-polish-blue" />
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase font-bold tracking-widest">Telefone</p>
                  <p className="text-xl font-medium">(14) 99628-4710</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-white/10 rounded-2xl group-hover:bg-white/20 transition-colors">
                  <Mail className="w-6 h-6 text-polish-blue" />
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase font-bold tracking-widest">E-mail</p>
                  <p className="text-xl font-medium">claudio.figram@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-white/10 rounded-2xl group-hover:bg-white/20 transition-colors">
                  <MapPin className="w-6 h-6 text-polish-blue" />
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase font-bold tracking-widest">Localização</p>
                  <p className="text-xl font-medium">Santa Cruz do Rio Pardo - SP</p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <p className="text-xs text-white/50 uppercase font-bold tracking-widest mb-6">Siga-nos</p>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-polish-blue transition-colors cursor-pointer">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-polish-blue transition-colors cursor-pointer">
                  <Facebook className="w-5 h-5" />
                </div>
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-polish-blue transition-colors cursor-pointer">
                  <Linkedin className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 text-graphite shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-concrete">Nome Completo</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-granilite border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-industrial-blue outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-concrete">E-mail</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-granilite border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-industrial-blue outline-none transition-all"
                    placeholder="email@exemplo.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-concrete">Assunto / Serviço</label>
                <select className="w-full bg-granilite border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-industrial-blue outline-none transition-all appearance-none">
                  <option value="">Selecione</option>
                  <option>Microcimento</option>
                  <option>Fulget Cimentício</option>
                  <option>Concreto Estampado</option>
                  <option>Granilite</option>
                  <option>Polimento</option>
                  <option>Outro</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-concrete">Mensagem</label>
                <textarea
                  rows={4}
                  required
                  className="w-full bg-granilite border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-industrial-blue outline-none transition-all resize-none"
                  placeholder="Conte-nos sobre o seu projeto..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full btn-primary py-5 rounded-2xl flex items-center justify-center gap-2 text-lg shadow-xl"
              >
                {status === 'loading' ? (
                  <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : status === 'success' ? (
                  'Mensagem Enviada!'
                ) : (
                  <>Enviar Mensagem <Send className="w-5 h-5" /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
