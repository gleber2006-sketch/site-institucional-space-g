import Link from "next/link";
import { MessageSquare, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-20 pb-10 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link href="#inicio" className="text-5xl font-bold tracking-tighter flex items-center mb-6 group">
              <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] hover:text-white transition-colors duration-300">SPACE-G</span>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed mb-8">
              Tecnologia e marketing digital para negócios que querem crescer. Desenvolvemos soluções sob medida para digitalizar sua empresa.
            </p>
            <div className="flex items-center space-x-4">
              <Link 
                href="https://wa.me/5515996584266" 
                target="_blank"
                className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <MessageSquare size={18} className="text-accent" />
              </Link>
              <Link 
                href="https://www.instagram.com/spacegraficadigital/" 
                target="_blank"
                className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Instagram size={18} className="text-accent" />
              </Link>
              <Link 
                href="mailto:spacegraf.graficadigital@gmail.com" 
                className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Mail size={18} className="text-accent" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Links Rápidos</h4>
            <ul className="space-y-4">
              {["Início", "Serviços", "Sobre", "Depoimentos", "Contato"].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase()}`} 
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Serviços</h4>
            <ul className="space-y-4">
              {[
                "Agendamentos Online",
                "Automações",
                "Desenvolvimento Web",
                "Tráfego Pago",
                "SEO Local",
                "Design Visual"
              ].map((item) => (
                <li key={item} className="text-neutral-400 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contato</h4>
            <ul className="space-y-4">
              <li className="flex flex-col space-y-1">
                <span className="text-[10px] uppercase text-neutral-500 font-bold tracking-widest">WhatsApp</span>
                <Link href="https://wa.me/5515996584266" target="_blank" className="text-neutral-200 hover:text-accent transition-colors text-sm">
                  (15) 99658-4266
                </Link>
              </li>
              <li className="flex flex-col space-y-1">
                <span className="text-[10px] uppercase text-neutral-500 font-bold tracking-widest">Email</span>
                <Link href="mailto:spacegraf.graficadigital@gmail.com" className="text-neutral-200 hover:text-accent transition-colors text-sm break-all">
                  spacegraf.graficadigital@gmail.com
                </Link>
              </li>
              <li className="flex flex-col space-y-1">
                <span className="text-[10px] uppercase text-neutral-500 font-bold tracking-widest">Atendimento</span>
                <span className="text-neutral-200 text-sm">Seg - Sex: 09h às 18h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-neutral-500 text-xs text-center md:text-left">
            © 2025 Space-G. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-[10px] uppercase tracking-widest font-bold text-neutral-500">
            <Link href="#" className="hover:text-white transition-colors">Termos de Uso</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
