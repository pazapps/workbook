import { Music } from 'lucide-react';
import { motion } from 'motion/react';

export default function HeroIntro() {
  return (
    <section className="w-full flex flex-col">
      {/* Page 1: Hero */}
      <div className="relative w-full h-screen bg-[#0A0A0A] border-b border-white/10 flex flex-col items-center justify-center overflow-hidden">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="z-10 flex flex-col items-center mt-[-10vh]"
        >
          <h2 className="text-[11px] uppercase tracking-[0.3em] text-white/50 mb-4 text-center px-4">
            Repertório Musical
          </h2>
          <h1 className="text-white text-[12vw] md:text-[8vw] font-serif italic leading-[0.95] tracking-tight text-center">
            Workbook
          </h1>
        </motion.div>

        {/* Cassette Tape Image - Positioned Absolutely */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5, rotate: -30, y: 100 }}
          animate={{ opacity: 1, scale: 1, rotate: -15, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, type: "spring", bounce: 0.4 }}
          className="absolute top-[65%] md:top-[60%] left-1/2 -translate-x-1/2 rotate-[-15deg] z-20 hover:rotate-[-10deg] transition-transform duration-500"
        >
          <div className="p-2 border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.05)]">
            <img 
              src="/fita.png" 
              alt="Cassette Tape" 
              className="w-[200px] md:w-[320px] object-contain rounded-lg opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all grayscale"
            />
          </div>
        </motion.div>

        {/* Logo Bottom Right */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-10 right-10 z-30"
        >
          <img src="/logo_autor.png" alt="Paz Júnior Coach Musical" className="h-12 md:h-16 opacity-80" />
        </motion.div>
      </div>

      {/* Page 2: Copyright */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1 }}
        className="w-full bg-[#0A0A0A] border-b border-white/10 text-white/50 py-24 px-8 md:px-24 flex justify-end"
      >
        <div className="max-w-xl text-[11px] uppercase tracking-[0.1em] space-y-6 text-right leading-relaxed">
          <p className="font-medium text-white/80">©2026 — PAZ JÚNIOR, F. G.<br/>Todos os direitos reservados.</p>
          <p>
            Esta obra é protegida pela Lei de Direitos Autorais. É proibida a reprodução e/ou distribuição total ou parcial, por qualquer meio, sem autorização prévia e expressa do autor.
          </p>
          <p>
            Este material possui finalidade educacional e ministerial, destinado ao uso pessoal do leitor. É vedada sua utilização em cursos, treinamentos, mentorias ou produtos derivados sem autorização formal.
          </p>
        </div>
      </motion.div>

      {/* Page 3: Introduction */}
      <div className="w-full bg-[#0A0A0A] border-b border-white/10 text-[#E0E0E0] py-24 px-8 md:px-16 flex flex-col md:flex-row items-stretch gap-12 relative overflow-hidden">
        {/* Vertical Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          className="hidden md:flex items-center justify-center shrink-0 border-r border-white/10 pr-12"
        >
          <h2 className="text-[72px] font-serif italic text-white leading-none text-vertical">
            Introdução
          </h2>
        </motion.div>
        
        {/* Mobile Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:hidden text-5xl font-serif italic text-white mb-6"
        >
          Introdução
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1 max-w-4xl flex flex-col justify-center space-y-8 text-sm md:text-base font-light text-white/60 leading-relaxed"
        >
          <h3 className="text-xl md:text-2xl font-serif italic text-white mb-2">Querido(a) Ministro(a) de Adoração,</h3>
          <p>
            Este workbook foi desenvolvido para conduzir o ministro de louvor a um processo consciente, organizado e intencional de construção do repertório musical. Mais do que listar canções, este material propõe um <span className="italic font-serif text-white/80">check-up</span> ministerial, no qual cada música é avaliada à luz de critérios claros: conteúdo, contexto, competência e categorização.
          </p>
          <p>
            Em consonância direta com o livreto <span className="italic font-serif text-white/80">Repertório Musical — Muito Mais que um Setlist</span>, este workbook traduz fundamentos teóricos em prática aplicada, permitindo que o ministro tome decisões intencionais, evite escolhas aleatórias e construa um repertório coerente com a identidade do ministério, a realidade da comunidade local e os princípios da excelência no louvor.
          </p>
          <p>
            Ao final do processo, o leitor terá em mãos um caderno de repertório completo, organizado por categorias, temas, tonalidades e versões, pronto para servir como base segura para o planejamento ministerial, ensaios e ministrações.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
