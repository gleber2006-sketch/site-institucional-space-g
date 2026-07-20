"use client";

import { 
  Calendar, 
  Settings2, 
  Code2, 
  TrendingUp, 
  MapPin, 
  Palette, 
  ArrowUpRight 
} from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const services = [
  {
    id: 1,
    title: "Sistema de Agendamentos Space Grid",
    description: "Agendamento online 24h, confirmação automática por WhatsApp, painel de controle para gestão de agenda, lembretes automáticos e muito mais.",
    icon: Calendar,
    badge: "Lançamento",
    link: { label: "Inicie Grátis", href: "https://spacegrid.space-g.com.br/" },
    color: "accent"
  },
  {
    id: 2,
    title: "Automações Inteligentes",
    description: "Criamos fluxos de automação personalizados para otimizar seu atendimento e vendas, integrando sistemas via APIs e ferramentas como N8N.",
    icon: Settings2,
  },
  {
    id: 3,
    title: "Desenvolvimento Web",
    description: "Sites profissionais, mini sites, catálogos digitais e landing pages focadas em conversão, com design moderno e carregamento rápido.",
    icon: Code2,
  },
  {
    id: 4,
    title: "Gestão de Tráfego Pago",
    description: "Campanhas estratégicas no Google Ads e Facebook Ads focadas em resultados reais — mais clientes, menor custo por aquisição.",
    icon: TrendingUp,
  },
  {
    id: 5,
    title: "Otimização Local (SEO)",
    description: "Gerenciamento e otimização do Google Meu Negócio para destacar sua empresa na região e atrair mais clientes locais organicamente.",
    icon: MapPin,
  },
  {
    id: 6,
    title: "Design e Identidade Visual",
    description: "Criação de logotipos, banners, peças gráficas e gestão de mídias sociais com identidade visual consistente e profissional.",
    icon: Palette,
  }
];

export default function Services() {
  return (
    <section id="servicos" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <RevealOnScroll delay={0}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              O que fazemos
            </h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              Soluções completas para digitalizar, automatizar e escalar seu negócio.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <RevealOnScroll key={service.id} delay={(index % 3) * 0.1}>
              <div
                className={`group p-8 glass-dark rounded-3xl hover:bg-white/5 transition-all duration-500 flex flex-col h-full relative ${service.id === 1 ? 'border-primary/50 shadow-[0_0_30px_rgba(10,22,40,0.3)]' : ''}`}
              >
                <div className="mb-6 p-3 bg-primary/30 w-fit rounded-2xl group-hover:scale-110 transition-transform duration-500">
                  <service.icon size={28} className={service.badge ? "text-accent" : "text-white"} />
                </div>
                
                {service.badge && (
                  <span className="absolute top-8 right-8 text-[10px] font-bold uppercase tracking-widest bg-green-500 text-white px-2 py-1 rounded-md">
                    {service.badge}
                  </span>
                )}

                <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-neutral-400 text-sm leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                <a 
                  href={service.link?.href ?? "#"} 
                  target={service.link?.href ? "_blank" : undefined}
                  rel={service.link?.href ? "noopener noreferrer" : undefined}
                  className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest hover:translate-x-1 transition-transform"
                >
                  <span>{service.link?.label ?? "Saiba mais"}</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
      
      {/* Subtle background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] z-0"></div>
    </section>
  );
}
