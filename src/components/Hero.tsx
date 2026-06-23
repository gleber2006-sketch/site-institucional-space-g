"use client";

import Link from "next/link";
import { ArrowRight, MessageSquare, Zap, Target, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(10,22,40,1)_0%,rgba(13,13,13,1)_100%)]"></div>
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: "radial-gradient(circle, #FFFFFF 1px, transparent 1px)", 
            backgroundSize: "40px 40px" 
          }}
        ></div>
        {/* Animated Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-primary rounded-full blur-[140px]"
        ></motion.div>
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/20 rounded-full blur-[100px]"
        ></motion.div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full glass border border-white/10 text-xs font-semibold tracking-wider text-accent mb-6">
            TECNOLOGIA & MARKETING DIGITAL
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Tecnologia que faz sua empresa <br className="hidden md:block" />
            <span className="text-gradient">crescer de verdade.</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Desenvolvemos sistemas, automatizamos processos e gerenciamos sua presença digital: do site ao anúncio, do agendamento ao atendimento automatizado.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            href="#servicos"
            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white text-black hover:bg-neutral-200 px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 active:scale-95"
          >
            <span>Conheça nossos serviços</span>
            <ArrowRight size={18} />
          </Link>
          <Link
            href="https://wa.me/5515996584266"
            target="_blank"
            className="w-full sm:w-auto flex items-center justify-center space-x-2 glass hover:bg-white/10 px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 active:scale-95"
          >
            <MessageSquare size={18} className="text-accent" />
            <span>Falar com especialista</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 md:gap-12"
        >
          <div className="flex items-center space-x-2 text-neutral-400">
            <Zap size={16} className="text-accent" />
            <span className="text-sm font-medium">Atendimento personalizado</span>
          </div>
          <div className="flex items-center space-x-2 text-neutral-400">
            <Target size={16} className="text-accent" />
            <span className="text-sm font-medium">Soluções sob medida</span>
          </div>
          <div className="flex items-center space-x-2 text-neutral-400">
            <BarChart3 size={16} className="text-accent" />
            <span className="text-sm font-medium">Resultados mensuráveis</span>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
