import { Users, BookOpen, FileEdit, ClipboardList, BarChart, PenTool } from 'lucide-react';
import { motion } from 'motion/react';

export default function ConstructionAuthor() {
  return (
    <section className="w-full bg-[#0A0A0A] flex flex-col overflow-hidden">
      
      {/* Page 12: Construção do Caderno */}
      <div className="w-full py-24 px-4 md:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <div className="text-[11px] uppercase tracking-[0.3em] text-white/30 mb-4">Construção do</div>
            <h2 className="text-[40px] md:text-[56px] font-serif italic text-white leading-[0.95] tracking-tight">Caderno de Repertório</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Organizar por artistas e tema",
                desc: "Organize as músicas por artista/ministério e reúna canções que tratam do mesmo tema.",
                icon: Users
              },
              {
                title: "Anotar a função ministerial",
                desc: "Indique claramente para que momento aquela música serve (abertura, transição, clímax, etc).",
                icon: ClipboardList
              },
              {
                title: "Categorias fixas",
                desc: "Separe o repertório em seções permanentes (louvor, adoração e especiais).",
                icon: BookOpen
              },
              {
                title: "Nível de exigência",
                desc: "Marque se a música exige nível básico, intermediário ou avançado do grupo.",
                icon: BarChart
              },
              {
                title: "Ficha completa",
                desc: "Para cada canção, crie uma ficha com: Artista, Título, Tonalidade e Versão adotada.",
                icon: FileEdit
              },
              {
                title: "Atualização contínua",
                desc: "Defina revisões periódicas para incluir novas músicas e retirar canções inativas.",
                icon: PenTool
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-6 border border-white/10 bg-white/[0.02] flex gap-6 items-start relative hover:bg-white/[0.05] transition-colors"
              >
                <div className={`w-12 h-12 shrink-0 rounded-full border border-white/20 bg-[#0A0A0A] flex items-center justify-center text-white/70`}>
                  <item.icon size={20} strokeWidth={1} />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif italic text-white text-lg mb-3">{item.title}</h3>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Page 13: Sobre o Autor */}
      <div className="w-full bg-[#0A0A0A] py-24 px-4 md:px-12 text-white relative">
        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, type: "spring" }}
            className="w-full md:w-[40%] flex justify-center z-10"
          >
            <div className="relative p-2 border border-white/10 bg-white/[0.02]">
              <img 
                src="/autor.png" 
                alt="Paz Júnior"
                className="w-full max-w-sm object-cover grayscale opacity-80"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            className="w-full md:w-[60%] flex flex-col z-20"
          >
            <h2 className="text-[48px] md:text-[64px] font-serif italic text-white mb-8 tracking-tight leading-[0.9]">
              Sobre o Autor
            </h2>
            
            <p className="text-[11px] uppercase tracking-widest text-white/50 leading-[2] mb-12 text-justify">
              PAZ JÚNIOR, F. G. é casado com Jéssica Paz. É saxofonista e Líder do Ministério de Louvor da Paz Church Castanhal. Atua como Educador Musical, Instrumentista, Pesquisador, Escritor e Palestrante. É Membro da Federação de Arte-Educadores do Brasil (FAEB), tendo sido Representante Estadual de Música da Instituição. Especialista em Metodologia do Ensino de Artes (Música). Graduado em Música (UEPA). Técnico em Instrumentista de Banda Sinfônica com habilitação em Saxofone (EMUFPA/ICA). Autor da Coleção <span className="italic">Os Segredos do Ministro de Louvor de Excelência</span>.
            </p>

            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <div className="flex flex-col border-l border-white/20 pl-4">
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/30 mb-2">E-mail</span>
                <a href="mailto:contato@pazjunior.com.br" className="text-xs font-serif italic text-white hover:text-white/70 transition-colors">contato@pazjunior.com.br</a>
              </div>
              <div className="flex flex-col border-l border-white/20 pl-4">
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/30 mb-2">Instagram</span>
                <a href="https://instagram.com/pazjunioroficial" className="text-xs font-serif italic text-white hover:text-white/70 transition-colors">@pazjunioroficial</a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
