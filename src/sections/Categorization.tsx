import { BookOpen, RefreshCw, Target, Folder, Layers, FileCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function Categorization() {
  return (
    <section className="w-full bg-[#0A0A0A] border-b border-white/10 py-24 px-4 md:px-12 flex flex-col gap-32 overflow-hidden">
      
      {/* Page 10: Categorização Ministerial */}
      <div className="max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-[40px] md:text-[56px] font-serif italic text-white leading-[0.95] tracking-tight">Categorização Ministerial</h2>
          <div className="text-[11px] uppercase tracking-[0.3em] text-white/40 mt-6">do Repertório</div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
          {[
            {
              step: "Passo 1",
              title: "Função ministerial",
              desc: "Defina claramente se a canção é de: Louvor, Adoração ou Especial."
            },
            {
              step: "Passo 2",
              title: "Momento litúrgico",
              desc: "Avalie em que momento do culto ou da ministração a música melhor se encaixa."
            },
            {
              step: "Passo 3",
              title: "Impacto espiritual",
              desc: "Determine se a música conduz à reflexão, celebração, quebrantamento, ensino ou proclamação da fé."
            },
            {
              step: "Passo 4",
              title: "Coerência",
              desc: "Confirme se a mensagem, linguagem e atmosfera da música estão alinhadas com a visão da comunidade local."
            },
            {
              step: "Passo 5",
              title: "Registrar a categoria",
              desc: "Documente a classificação para facilitar futuras decisões e planejamentos."
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex flex-col h-full items-center p-6 border border-white/10 bg-white/[0.02] text-center relative pt-12"
            >
              <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-[10px] uppercase tracking-widest text-black bg-white`}>
                {item.step}
              </div>
              <h3 className="font-serif italic text-white mb-4 text-base min-h-[48px]">{item.title}</h3>
              <p className="text-[10px] uppercase tracking-widest text-white/40 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="w-full h-px bg-white/10 max-w-7xl mx-auto" />

      {/* Page 11: Categorização Temática */}
      <div className="max-w-7xl mx-auto w-full relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-[40px] md:text-[56px] font-serif italic text-white leading-[0.95] tracking-tight">Categorização Temática</h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between relative gap-12 md:gap-0">
          
          {/* Central Hub */}
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, type: "spring" }}
            className="md:absolute top-1/2 left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-20 w-48 h-48 md:w-56 md:h-56 rounded-full border border-white/10 bg-[#0A0A0A] shadow-[0_0_30px_rgba(255,255,255,0.05)] flex flex-col items-center justify-center text-center"
          >
            <span className="text-lg md:text-xl font-serif italic text-white leading-tight">
              Categorias<br/>Temáticas
            </span>
          </motion.div>

          {/* Left Side (1, 2, 3) */}
          <div className="flex flex-col gap-8 w-full md:w-[40%] z-10">
            {[
              {
                id: 1,
                title: "Tema Central",
                desc: "Determine o assunto predominante da canção (graça, cruz, redenção, santidade, fé, esperança, missão, Espírito Santo, etc.).",
                icon: BookOpen
              },
              {
                id: 2,
                title: "Consistência temática",
                desc: "Avalie se o conteúdo é coerente, evitando mensagens fragmentadas ou confusas.",
                icon: RefreshCw
              },
              {
                id: 3,
                title: "Foco da mensagem",
                desc: "Classifique se a canção tem ênfase vertical (Deus) ou horizontal (comunidade).",
                icon: Target
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-right"
              >
                <div className={`hidden md:flex w-8 h-8 shrink-0 border border-white/20 text-white/50 items-center justify-center font-serif text-xs rounded-full`}>
                  0{item.id}
                </div>
                <div className="flex-1">
                  <h3 className="font-serif italic text-lg mb-3 text-white">{item.title}</h3>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 leading-relaxed">{item.desc}</p>
                </div>
                <div className={`w-12 h-12 shrink-0 rounded-full border border-white/20 bg-white/[0.03] flex items-center justify-center text-white/70 shadow-[0_0_20px_rgba(255,255,255,0.05)]`}>
                  <item.icon size={20} strokeWidth={1} />
                </div>
                <div className={`md:hidden w-8 h-8 mt-2 shrink-0 border border-white/20 text-white/50 flex items-center justify-center font-serif text-xs rounded-full`}>
                  0{item.id}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side (4, 5, 6) */}
          <div className="flex flex-col gap-8 w-full md:w-[40%] z-10">
             {[
              {
                id: 4,
                title: "Clareza e objetividade",
                desc: "Analise se o tema é facilmente compreendido pela congregação.",
                icon: FileCheck
              },
              {
                id: 5,
                title: "Relacionar ao contexto",
                desc: "Verifique se o assunto abordado dialoga com a realidade espiritual da comunidade.",
                icon: Layers
              },
              {
                id: 6,
                title: "Registrar a categoria",
                desc: "Documente o tema principal e secundário para facilitar organização.",
                icon: Folder
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left"
              >
                <div className={`w-12 h-12 shrink-0 rounded-full border border-white/20 bg-white/[0.03] flex items-center justify-center text-white/70 shadow-[0_0_20px_rgba(255,255,255,0.05)] order-2 md:order-1`}>
                  <item.icon size={20} strokeWidth={1} />
                </div>
                <div className="flex-1 order-1 md:order-2">
                  <h3 className="font-serif italic text-lg mb-3 text-white">{item.title}</h3>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 leading-relaxed">{item.desc}</p>
                </div>
                <div className={`hidden md:flex w-8 h-8 shrink-0 border border-white/20 text-white/50 items-center justify-center font-serif text-xs rounded-full order-3`}>
                  0{item.id}
                </div>
                <div className={`md:hidden w-8 h-8 mt-2 shrink-0 border border-white/20 text-white/50 flex items-center justify-center font-serif text-xs rounded-full order-3`}>
                  0{item.id}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
