import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import GridBackground from "@/components/GridBackground";

export const metadata: Metadata = {
  title: "Space-G | Tecnologia e Marketing Digital",
  description: "Desenvolvimento de software, automações, sites, tráfego pago e SEO local. Soluções digitais completas para seu negócio crescer.",
  openGraph: {
    title: "Space-G | Tecnologia e Marketing Digital",
    description: "Soluções completas para digitalizar, automatizar e escalar seu negócio.",
    type: "website",
    locale: "pt_BR",
    url: "https://space-g.com.br", // Ajustar se necessário
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden relative">
      <GridBackground />
      <Header />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}
