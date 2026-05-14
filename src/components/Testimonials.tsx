"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Eduardo",
    segment: "Barbearia",
    text: "Antes eu controlava tudo no papel e perdia muito cliente por falta de organização. Com o sistema de agendamentos da Space-G minha barbearia ficou muito mais profissional. Os clientes adoraram poder agendar pelo celular.",
    initials: "CE"
  },
  {
    name: "Rafael Mendes",
    segment: "Estética Automotiva",
    text: "A Space-G criou meu site e cuidou dos meus anúncios no Google. Em dois meses já estava recebendo clientes novos que me encontraram pela internet. Valeu muito o investimento.",
    initials: "RM"
  },
  {
    name: "Dra. Patrícia Souza",
    segment: "Clínica de Estética",
    text: "Implantaram o sistema de agendamentos na minha clínica e automatizaram as confirmações de consulta pelo WhatsApp. Reduziu muito as faltas e minha recepcionista ficou mais livre para outras tarefas.",
    initials: "PS"
  },
  {
    name: "Marcos Oliveira",
    segment: "E-commerce",
    text: "Precisava de um atendimento automático para minha loja online. A Space-G criou um fluxo completo no WhatsApp que responde dúvidas, envia rastreio e ainda encaminha para um atendente quando necessário. Profissional demais.",
    initials: "MO"
  }
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            O que nossos clientes dizem
          </motion.h2>
          <div className="flex justify-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="fill-accent text-accent" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 glass-dark rounded-3xl flex flex-col justify-between hover:border-white/10 transition-colors"
            >
              <p className="text-neutral-400 italic mb-8 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center font-bold text-white border border-white/5">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-xs text-accent uppercase tracking-widest font-semibold">
                    {testimonial.segment}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
