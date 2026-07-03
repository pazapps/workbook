import { FileSearch, ClipboardCheck, BookOpen, Music, Users, FolderTree, ListTodo, Search, RotateCcw, FileEdit, CheckSquare } from 'lucide-react';
import { motion } from 'motion/react';

export default function CriteriaCheckup() {
  return (
    <section className="w-full bg-[#0A0A0A] border-b border-white/10 py-24 px-4 md:px-12 flex flex-col gap-32 overflow-hidden">
      
      {/* Page 4: Critérios */}
      <div className="max-w-6xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-[40px] md:text-[56px] font-serif italic text-white leading-[0.95] tracking-tight">
            Critérios de Escolha
          </h2>
        </motion.div>

        <div className="relative flex flex-col md:flex-row items-center justify-center gap-16 md:gap-8">
          
          {/* Central Hub */}
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, type: "spring" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-48 h-48 bg-[#0A0A0A] rounded-full border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
          >
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/70">Repertório</span>
          </motion.div>

          {/* Left Column (Conteúdo & Categorização) */}
          <div className="flex flex-col gap-16 md:gap-32 w-full md:w-1/3 z-20">
            {/* Conteúdo */}
            <motion.div 
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              className="p-6 border border-white/10 bg-white/[0.02] backdrop-blur-sm relative text-right"
            >
              <div className="absolute -top-5 -right-5 md:right-auto md:-right-5 w-10 h-10 border border-white/20 bg-[#0A0A0A] rounded-full flex items-center justify-center text-white/80 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                <FileSearch size={16} />
              </div>
              <div className="flex justify-end items-end gap-3 mb-4">
                <h3 className="text-xl font-serif italic text-white">Conteúdo</h3>
                <span className="text-[10px] uppercase tracking-widest text-white/30 border-b border-white/20 pb-1">01</span>
              </div>
              <p className="text-xs text-white/50 leading-relaxed font-light">
                Verifique se a letra é biblicamente fiel, teologicamente clara e coerente com a doutrina da igreja local. Observe o foco da canção: Deus no centro, linguagem reverente e mensagem edificante.
              </p>
            </motion.div>

            {/* Categorização */}
            <motion.div 
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-6 border border-white/10 bg-white/[0.02] backdrop-blur-sm relative text-right"
            >
              <div className="absolute -top-5 -right-5 md:right-auto md:-right-5 w-10 h-10 border border-white/20 bg-[#0A0A0A] rounded-full flex items-center justify-center text-white/80 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                <FolderTree size={16} />
              </div>
              <div className="flex justify-end items-end gap-3 mb-4">
                <h3 className="text-xl font-serif italic text-white">Categorização</h3>
                <span className="text-[10px] uppercase tracking-widest text-white/30 border-b border-white/20 pb-1">04</span>
              </div>
              <p className="text-xs text-white/50 leading-relaxed font-light">
                Classifique a canção dentro das categorias ministeriais e temáticas corretas, garantindo equilíbrio e organização do repertório.
              </p>
            </motion.div>
          </div>

          {/* Spacer for Center Hub on Desktop */}
          <div className="hidden md:block w-1/3" />

          {/* Right Column (Competência & Contexto) */}
          <div className="flex flex-col gap-16 md:gap-32 w-full md:w-1/3 z-20">
            {/* Competência */}
            <motion.div 
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="p-6 border border-white/10 bg-white/[0.02] backdrop-blur-sm relative text-left"
            >
              <div className="absolute -top-5 -left-5 md:left-auto md:-left-5 w-10 h-10 border border-white/20 bg-[#0A0A0A] rounded-full flex items-center justify-center text-white/80 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                <ClipboardCheck size={16} />
              </div>
              <div className="flex justify-start items-end gap-3 mb-4">
                <span className="text-[10px] uppercase tracking-widest text-white/30 border-b border-white/20 pb-1">02</span>
                <h3 className="text-xl font-serif italic text-white">Competência</h3>
              </div>
              <p className="text-xs text-white/50 leading-relaxed font-light">
                Avalie se o nível técnico da música está alinhado à realidade do ministério, considerando músicos, vocalistas, ensaios e estrutura disponível.
              </p>
            </motion.div>

            {/* Contexto */}
            <motion.div 
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="p-6 border border-white/10 bg-white/[0.02] backdrop-blur-sm relative text-left"
            >
              <div className="absolute -top-5 -left-5 md:left-auto md:-left-5 w-10 h-10 border border-white/20 bg-[#0A0A0A] rounded-full flex items-center justify-center text-white/80 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                <Users size={16} />
              </div>
              <div className="flex justify-start items-end gap-3 mb-4">
                <span className="text-[10px] uppercase tracking-widest text-white/30 border-b border-white/20 pb-1">03</span>
                <h3 className="text-xl font-serif italic text-white">Contexto</h3>
              </div>
              <p className="text-xs text-white/50 leading-relaxed font-light">
                Defina em quais momentos ministeriais a música funciona com naturalidade (abertura, louvor, adoração, etc.) e se ela dialoga com o perfil da congregação.
              </p>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white/10 max-w-6xl mx-auto" />

      {/* Page 5: Check-up Process */}
      <div className="max-w-6xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
           <h2 className="text-[40px] md:text-[56px] font-serif italic text-white leading-[0.95] tracking-tight">
             Check-up do Repertório
           </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {/* Flowchart Connector Line */}
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-[1px] bg-white/10 -z-10"></div>
          
          {[
            { id: '01', title: 'Mapeamento', desc: 'Faça uma lista completa das músicas utilizadas nos últimos meses', icon: Search },
            { id: '02', title: 'Avaliação', desc: 'Avalie se as músicas da lista estão de acordo com os critérios', icon: ListTodo },
            { id: '03', title: 'Recorrência', desc: 'Analise a frequência de uso das músicas listadas e sua relevância.', icon: RotateCcw },
            { id: '04', title: 'Classificação', desc: 'Indique se as músicas devem: Ser mantidas, revisadas, ou substituídas.', icon: CheckSquare },
            { id: '05', title: 'Ajuste', desc: 'Reescreva a lista de músicas do repertório após a revisão e avaliação', icon: FileEdit }
          ].map((step, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 mx-auto rounded-full border border-white/20 bg-white/[0.03] flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                <step.icon className="w-8 h-8 text-white/80" strokeWidth={1} />
              </div>
              <div className="text-sm font-serif italic mb-1 text-white">{step.id}. {step.title}</div>
              <p className="text-[10px] text-white/40 uppercase tracking-widest px-2 mt-3 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
