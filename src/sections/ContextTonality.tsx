import { Users, LayoutTemplate, MessageSquare, Cog, CheckCircle2, Music4, Mic2, Users2, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContextTonality() {
  return (
    <section className="w-full bg-[#0A0A0A] border-b border-white/10 py-24 px-4 md:px-12 flex flex-col gap-32 overflow-hidden">
      
      {/* Page 8: Avaliação do Contexto */}
      <div className="max-w-6xl mx-auto w-full relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="text-[11px] uppercase tracking-[0.3em] text-white/30 mb-4">Adequação ao Contexto</div>
          <h2 className="text-[40px] md:text-[56px] font-serif italic text-white leading-[0.95] tracking-tight">Avaliação do Contexto</h2>
        </motion.div>

        <div className="flex flex-col items-center justify-center relative min-h-[600px] md:min-h-[500px]">
          {/* Center Title */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, type: "spring" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 p-6 border border-white/10 bg-[#0A0A0A] backdrop-blur-sm text-center w-64 md:w-80 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
          >
            <h3 className="text-xl md:text-2xl font-serif italic text-white">
              Adequação<br/>ao Contexto
            </h3>
          </motion.div>

          {/* Orbiting Elements (Grid layout for responsive) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[400px] w-full z-10">
            
            {/* Left Top */}
            <motion.div 
              initial={{ opacity: 0, x: -60, y: -40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex flex-col items-center md:items-end text-center md:text-right w-full max-w-xs mx-auto"
            >
              <div className="w-12 h-12 rounded-full border border-white/20 bg-white/[0.03] flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                <Users className="w-5 h-5 text-white/70" strokeWidth={1.5} />
              </div>
              <h4 className="font-serif italic text-white text-lg mb-3">Considere o perfil da congregação</h4>
              <p className="text-[10px] uppercase tracking-widest text-white/40 leading-relaxed">Avalie se a música dialoga com a realidade espiritual, cultural e etária da igreja local.</p>
            </motion.div>

            {/* Right Top */}
            <motion.div 
              initial={{ opacity: 0, x: 60, y: -40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center md:items-start text-center md:text-left w-full max-w-xs mx-auto"
            >
              <div className="w-12 h-12 rounded-full border border-white/20 bg-white/[0.03] flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                <Cog className="w-5 h-5 text-white/70" strokeWidth={1.5} />
              </div>
              <h4 className="font-serif italic text-white text-lg mb-3">Defina o uso</h4>
              <p className="text-[10px] uppercase tracking-widest text-white/40 leading-relaxed mb-2">Defina o uso adequado da música:</p>
              <ul className="text-[10px] uppercase tracking-widest text-white/40 leading-relaxed list-disc list-inside md:list-outside">
                <li>Uso frequente</li>
                <li>Uso ocasional</li>
                <li>Uso específico (datas ou temas)</li>
                <li>Não adequada ao contexto atual</li>
              </ul>
            </motion.div>

            {/* Left Bottom */}
            <motion.div 
              initial={{ opacity: 0, x: -60, y: 40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col items-center md:items-end text-center md:text-right w-full max-w-xs mx-auto"
            >
              <div className="w-12 h-12 rounded-full border border-white/20 bg-white/[0.03] flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                <LayoutTemplate className="w-5 h-5 text-white/70" strokeWidth={1.5} />
              </div>
              <h4 className="font-serif italic text-white text-lg mb-3">Verifique o momento litúrgico</h4>
              <p className="text-[10px] uppercase tracking-widest text-white/40 leading-relaxed mb-2">Analise se a canção é adequada para:</p>
              <ul className="text-[10px] uppercase tracking-widest text-white/40 leading-relaxed list-disc list-inside md:list-outside">
                <li>abertura do culto</li>
                <li>momento de celebração</li>
                <li>transição</li>
                <li>adoração profunda</li>
                <li>encerramento</li>
              </ul>
            </motion.div>

            {/* Right Bottom */}
            <motion.div 
              initial={{ opacity: 0, x: 60, y: 40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col items-center md:items-start text-center md:text-left w-full max-w-xs mx-auto"
            >
              <div className="w-12 h-12 rounded-full border border-white/20 bg-white/[0.03] flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                <CheckCircle2 className="w-5 h-5 text-white/70" strokeWidth={1.5} />
              </div>
              <h4 className="font-serif italic text-white text-lg mb-3">Verifique coerência com a identidade do ministério</h4>
              <p className="text-[10px] uppercase tracking-widest text-white/40 leading-relaxed">Avalie se a música reforça ou descaracteriza a identidade sonora e espiritual do ministério de louvor.</p>
            </motion.div>
          </div>

          {/* Bottom Center */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col items-center text-center w-full max-w-xs mx-auto mt-8 md:mt-0 md:absolute md:bottom-[-80px] md:left-1/2 md:-translate-x-1/2 z-10"
          >
            <div className="w-12 h-12 rounded-full border border-white/20 bg-white/[0.03] flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
              <MessageSquare className="w-5 h-5 text-white/70" strokeWidth={1.5} />
            </div>
            <h4 className="font-serif italic text-white text-lg mb-3">Avalie a linguagem utilizada</h4>
            <p className="text-[10px] uppercase tracking-widest text-white/40 leading-relaxed">Observe se a letra e a forma de cantar utilizam uma linguagem acessível, evitando termos excessivamente técnicos, poéticos ou abstratos.</p>
          </motion.div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white/10 max-w-6xl mx-auto mt-12 md:mt-24" />

      {/* Page 9: Definição das Tonalidades */}
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left: Graphic and Title */}
          <motion.div 
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            className="w-full md:w-5/12 relative flex items-center justify-center"
          >
             {/* Abstract shape representing a profile/head as seen in the PDF */}
             <div className="w-64 h-80 relative overflow-hidden border border-white/10 bg-white/[0.02] flex flex-col shadow-[0_0_30px_rgba(255,255,255,0.05)]">
               <div className="h-1/4 w-full border-b border-white/10 flex items-center justify-center text-white/30"><Music4 size={24} strokeWidth={1} /></div>
               <div className="h-1/4 w-full border-b border-white/10 flex items-center justify-center text-white/30"><Mic2 size={24} strokeWidth={1} /></div>
               <div className="h-1/4 w-full border-b border-white/10 flex items-center justify-center text-white/30"><Users2 size={24} strokeWidth={1} /></div>
               <div className="h-1/4 w-full flex items-center justify-center text-white/30"><ShieldCheck size={24} strokeWidth={1} /></div>
             </div>
             
             <div className="absolute -left-4 md:-left-12 p-6 border border-white/10 bg-[#0A0A0A] shadow-[0_0_20px_rgba(255,255,255,0.05)] text-center">
               <div className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-2">Definição das</div>
               <h2 className="text-3xl md:text-4xl font-serif italic text-white leading-tight">
                 Tonalidades
               </h2>
             </div>
          </motion.div>

          {/* Right: Steps */}
          <div className="w-full md:w-7/12 flex flex-col gap-6">
            {[
              { id: '01', title: 'Tom Original', desc: 'Registre a tonalidade da versão de referência da música e observe sua extensão melódica (notas mais graves e mais agudas).' },
              { id: '02', title: 'Conforto Vocal', desc: 'Teste a música cantando em diferentes tons e identifique aquele em que a voz flui com naturalidade, sem esforço ou tensão.' },
              { id: '03', title: 'Congregação', desc: 'Verifique se o tom escolhido permite que a maioria da igreja cante com facilidade e segurança, evitando extremos vocais.' },
              { id: '04', title: 'Decida o Tom', desc: 'Escolha o tom que melhor equilibra conforto vocal e acessibilidade, registrando-o como a tonalidade oficial.' }
            ].map((step, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex gap-6 items-start p-6 border border-white/10 bg-white/[0.02] backdrop-blur-sm"
              >
                <div className={`w-10 h-10 shrink-0 rounded-full border border-white/20 bg-[#0A0A0A] text-white/70 flex items-center justify-center font-serif italic text-sm mt-1`}>
                  {step.id}
                </div>
                <div>
                  <h3 className={`font-serif italic text-lg mb-2 text-white`}>{step.title}</h3>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
