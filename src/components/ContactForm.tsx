"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

type FormData = {
  nome: string;
  whatsapp: string;
  email: string;
  segmento: string;
  servico: string;
  mensagem?: string;
};

const services = [
  "Sistema de Agendamentos (Space Grid)",
  "Automações Inteligentes",
  "Desenvolvimento Web",
  "Gestão de Tráfego Pago",
  "Otimização Local (SEO)",
  "Design e Identidade Visual",
  "Não sei ainda"
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL;
      
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      } else {
        // Simulação caso não haja webhook
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Formulário submetido (simulação):", data);
      }

      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert("Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="section-padding relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Vamos conversar sobre seu negócio?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 text-lg"
          >
            Preencha o formulário e entraremos em contato em até 24 horas.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-dark p-8 md:p-12 rounded-[32px] border border-white/5"
        >
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 size={40} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Mensagem enviada!</h3>
              <p className="text-neutral-400">
                Obrigado pelo contato. Nossa equipe retornará em breve.
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="mt-8 text-sm font-bold uppercase tracking-widest text-accent hover:underline"
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-neutral-400">Nome completo *</label>
                <input
                  {...register("nome", { required: true })}
                  placeholder="Seu nome"
                  className={`w-full bg-white/5 border ${errors.nome ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors`}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-neutral-400">WhatsApp *</label>
                <input
                  {...register("whatsapp", { required: true })}
                  placeholder="(00) 00000-0000"
                  className={`w-full bg-white/5 border ${errors.whatsapp ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors`}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-neutral-400">Email *</label>
                <input
                  {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                  placeholder="seu@email.com"
                  className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors`}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-neutral-400">Segmento do negócio *</label>
                <input
                  {...register("segmento", { required: true })}
                  placeholder="Ex: Barbearia, Clínica, Loja..."
                  className={`w-full bg-white/5 border ${errors.segmento ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors`}
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-semibold text-neutral-400">Serviço de interesse *</label>
                <select
                  {...register("servico", { required: true })}
                  className={`w-full bg-white/5 border ${errors.servico ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors appearance-none`}
                >
                  <option value="" className="bg-secondary">Selecione uma opção</option>
                  {services.map((s) => (
                    <option key={s} value={s} className="bg-secondary">{s}</option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-semibold text-neutral-400">Mensagem (opcional)</label>
                <textarea
                  {...register("mensagem")}
                  rows={4}
                  placeholder="Conte-nos um pouco sobre seu projeto"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              <div className="md:col-span-2 mt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 bg-accent hover:bg-accent/90 text-black font-bold py-4 rounded-xl transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:scale-100"
                >
                  {isSubmitting ? (
                    <Loader2 className="animate-spin" size={20} />
                  ) : (
                    <>
                      <span>Enviar mensagem</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
    </section>
  );
}
