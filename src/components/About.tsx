"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "clientes atendidos", value: "+50" },
  { label: "anos de experiência", value: "+3" },
  { label: "serviços especializados", value: "6" },
  { label: "Suporte próximo", value: "100%" },
];

export default function About() {
  return (
    <section id="sobre" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <div className="lg:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-8"
          >
            Sobre a Space-G
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6 text-neutral-400 text-lg leading-relaxed"
          >
            <p>
              A Space-G é uma agência de tecnologia e marketing digital focada em transformar negócios locais através de soluções digitais inteligentes. 
            </p>
            <p>
              Combinamos desenvolvimento de software, automação de processos e estratégias de marketing para entregar resultados reais e mensuráveis para nossos clientes.
            </p>
            <p>
              Nosso objetivo é simplificar a tecnologia para que você possa focar no que realmente importa: o crescimento do seu negócio.
            </p>
          </motion.div>
        </div>

        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 glass rounded-3xl text-center flex flex-col justify-center items-center group hover:border-accent/30 transition-colors"
            >
              <span className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-widest text-neutral-400 font-bold">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative background element */}
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] z-0"></div>
    </section>
  );
}
