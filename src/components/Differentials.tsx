import { motion } from "framer-motion";
import { Sparkles, ChefHat, Truck, MessageCircle, PartyPopper, CreditCard } from "lucide-react";

const items = [
  { icon: Sparkles, title: "Produtos sempre frescos", desc: "Feitos com ingredientes selecionados e muito cuidado." },
  { icon: ChefHat, title: "Produção diária", desc: "Massa e recheios preparados artesanalmente todo dia." },
  { icon: Truck, title: "Retirada rápida", desc: "Pedido pronto para você retirar no nosso endereço." },
  { icon: MessageCircle, title: "Atendimento pelo WhatsApp", desc: "Peça em minutos, direto com nossa equipe." },
  { icon: PartyPopper, title: "Ideal para festas", desc: "Aniversários, eventos e confraternizações memoráveis." },
  { icon: CreditCard, title: "Pagamento facilitado", desc: "Diversas formas de pagamento na retirada." },
];

export function Differentials() {
  return (
    <section className="py-20 lg:py-28 bg-brand-cream/60">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-brand-red">Diferenciais</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-display text-brand-brown">
            Por que escolher a Salgados & Churros Fast
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="surface-card p-7 flex flex-col gap-3"
            >
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-brand-red to-brand-red-dark grid place-items-center text-white shadow-brand">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-brand-brown">{it.title}</h3>
              <p className="text-brand-brown/70 leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
