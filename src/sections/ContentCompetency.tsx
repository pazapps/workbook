import { FileText, Book, MessageCircle, Target, ThumbsUp, Activity, Shuffle, Waves, Mic, Settings2, Clock, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContentCompetency() {
  return (
    <section className="w-full bg-[#0A0A0A] border-b border-white/10 py-24 px-4 md:px-12 flex flex-col gap-32 overflow-hidden">
      
      {/* Page 6: Avaliação do Conteúdo */}
      <div className="max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-[11px] uppercase tracking-[0.3em] text-white/30 mb-8 text-center"
        >
          Avaliação do Conteúdo
        </motion.div>

        <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 relative">
          {/* Curved connecting line (desktop) */}
          <div className="hidden md:block absolute top-[60%] left-[10%] right-[10%] h-[1px] bg-white/10 pointer-events-none" />

          {[
            {
              title: "Análise a letra",
              desc: "Leia a música como um texto escrito e observe se a mensagem se sustenta.",
              icon: FileText,
              margin: "md:mt-32"
            },
            {
              title: "Fidelidade bíblica",
              desc: "Identifique se as afirmações da letra estão alinhadas às Escrituras.",
              icon: Book,
              margin: "md:mt-16"
            },
            {
              title: "Clareza da mensagem",
              desc: "Observe se a letra comunica uma ideia clara para toda a congregação.",
              icon: MessageCircle,
              margin: "md:mt-0"
            },
            {
              title: "Foco da canção",
              desc: "Determine se o centro da canção é Deus ou está voltada para o \"eu\".",
              icon: Target,
              margin: "md:mt-16"
            },
            {
              title: "Permanência",
              desc: "Com base na análise do conteúdo, decida: Manter ou Remover.",
              icon: ThumbsUp,
              margin: "md:mt-32"
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: idx * 0.15, type: "spring" }}
              className={`flex flex-col items-center flex-1 z-10 ${item.margin}`}
            >
              <div className="p-6 border border-white/10 bg-white/[0.02] backdrop-blur-sm mb-6 text-center h-full w-full min-h-[200px] flex flex-col justify-start relative shadow-[0_0_20px_rgba(255,255,255,0.02)]">
                <h3 className="text-lg font-serif italic text-white mb-3">{item.title}</h3>
                <p className="text-[11px] uppercase tracking-widest text-white/40 leading-relaxed">{item.desc}</p>
              </div>
              <div className={`w-12 h-12 rounded-full border border-white/20 bg-[#0A0A0A] flex items-center justify-center text-white/80 shadow-[0_0_20px_rgba(255,255,255,0.05)]`}>
                <item.icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="w-full h-px bg-white/10 max-w-7xl mx-auto" />

      {/* Page 7: Avaliação da Competência Musical */}
      <div className="max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-[11px] uppercase tracking-[0.3em] text-white/30 mb-4">Avaliação da</div>
          <h2 className="text-[40px] md:text-[56px] font-serif italic text-white leading-[0.95] tracking-tight">Competência Musical</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
          {[
            {
              num: "01",
              title: "Executabilidade",
              desc: "Verifique se a música pode ser executada com qualidade.",
              icon: Activity
            },
            {
              num: "02",
              title: "Complexidade",
              desc: "Observe se a música exige mudanças ou ritmos complexos.",
              icon: Shuffle
            },
            {
              num: "03",
              title: "Estabilidade",
              desc: "Avalie se a equipe consegue manter pulso e andamento.",
              icon: Waves
            },
            {
              num: "04",
              title: "Afinação",
              desc: "Identifique se a música expõe fragilidades de afinação.",
              icon: Mic
            },
            {
              num: "05",
              title: "Equilíbrio",
              desc: "Evite músicas que criem disputa sonora ou confusão.",
              icon: Settings2
            },
            {
              num: "06",
              title: "Preparo",
              desc: "Analise se a música exige muitos ensaios e ajustes.",
              icon: Clock
            },
            {
              num: "07",
              title: "Viabilidade",
              desc: "Decida: Manter, Adequar, Retirar ou Adiar.",
              icon: CheckCircle
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 40, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`flex flex-col p-6 border border-white/10 bg-white/[0.02] backdrop-blur-sm text-center relative transition-colors hover:bg-white/[0.05]`}
            >
              <div className="text-[10px] uppercase tracking-widest text-white/30 mb-4 border-b border-white/10 pb-2">{item.num}</div>
              <div className="mx-auto w-10 h-10 rounded-full border border-white/20 bg-[#0A0A0A] flex items-center justify-center mb-6">
                <item.icon className="w-4 h-4 text-white/70" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif italic text-white text-sm mb-3">{item.title}</h3>
              <p className="text-[10px] text-white/40 uppercase tracking-widest leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
