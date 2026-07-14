import { motion } from "framer-motion";
import { MousePointerClick, ShoppingBag, MessageCircle, MapPin } from "lucide-react";

const steps = [
  { icon: MousePointerClick, title: "Escolha os produtos", desc: "Navegue pelo cardápio e descubra seus favoritos." },
  { icon: ShoppingBag, title: "Monte seu pedido", desc: "Ajuste quantidades e personalize o combo." },
  { icon: MessageCircle, title: "Envie pelo WhatsApp", desc: "Um clique e sua mensagem está pronta." },
  { icon: MapPin, title: "Retire no endereço", desc: "Preparamos tudo com carinho para você levar." },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 lg:py-32 bg-brand-cream/70">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-brand-red">Como funciona</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold text-brand-graphite tracking-tight leading-[1.05]">
            Do cardápio à sua festa em 4 passos.
          </h2>
        </motion.div>

        <div className="relative grid md:grid-cols-4 gap-6 md:gap-4">
          {/* connector line */}
          <div aria-hidden className="hidden md:block absolute top-10 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent" />

          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex flex-col items-center text-center px-2"
            >
              <div className="relative h-20 w-20 rounded-full bg-white shadow-elevated grid place-items-center">
                <s.icon className="h-8 w-8 text-brand-red" strokeWidth={1.75} />
                <span className="absolute -top-1 -right-1 h-7 w-7 rounded-full bg-brand-red text-white text-xs font-bold grid place-items-center shadow-brand">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-bold text-brand-graphite">{s.title}</h3>
              <p className="mt-2 text-sm text-brand-graphite-soft leading-relaxed max-w-[220px]">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
