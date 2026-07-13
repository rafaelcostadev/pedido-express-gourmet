import { motion } from "framer-motion";
import { MousePointerClick, ShoppingBag, MessageCircle, MapPin } from "lucide-react";

const steps = [
  { icon: MousePointerClick, title: "Escolha os produtos", desc: "Navegue pelo cardápio e selecione seus favoritos." },
  { icon: ShoppingBag, title: "Adicione ao carrinho", desc: "Ajuste as quantidades como preferir." },
  { icon: MessageCircle, title: "Envie pelo WhatsApp", desc: "Um clique gera a mensagem com todo o pedido." },
  { icon: MapPin, title: "Retire no endereço", desc: "Preparamos tudo pronto para você levar." },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 lg:py-28 bg-brand-brown text-white relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-brand-yellow">Como funciona</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-display">
            Do cardápio ao seu evento em 4 passos
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 relative">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-white/5 backdrop-blur rounded-3xl p-7 border border-white/10 hover:border-brand-yellow/40 transition"
            >
              <div className="absolute -top-5 left-6 h-10 w-10 rounded-full bg-brand-yellow text-brand-brown grid place-items-center font-display text-xl font-bold shadow-brand">
                {i + 1}
              </div>
              <s.icon className="h-8 w-8 text-brand-yellow mt-3" />
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-white/70 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
