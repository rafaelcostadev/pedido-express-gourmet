import { motion } from "framer-motion";
import { ChefHat, Leaf, PartyPopper, Zap } from "lucide-react";

const items = [
  { icon: ChefHat, title: "Produção diária", desc: "Massa e recheios preparados artesanalmente todos os dias." },
  { icon: Leaf, title: "Ingredientes selecionados", desc: "Só o melhor entra na receita — sabor autêntico em cada mordida." },
  { icon: PartyPopper, title: "Ideal para festas", desc: "Perfeitos para aniversários, eventos e confraternizações." },
  { icon: Zap, title: "Retirada rápida", desc: "Pedido pronto para você levar em minutos, sem espera." },
];

export function Differentials() {
  return (
    <section className="py-24 lg:py-28 bg-white">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-brand-red">Diferenciais</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold text-brand-graphite tracking-tight leading-[1.05]">
            Por que somos a escolha das melhores festas.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-3xl bg-brand-cream/60 hover:bg-white p-8 flex flex-col gap-4 border border-transparent hover:border-black/5 hover:-translate-y-1 hover:shadow-elevated transition-all duration-500"
            >
              <div className="h-14 w-14 rounded-2xl bg-white shadow-soft grid place-items-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors duration-500">
                <it.icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3 className="text-lg font-bold text-brand-graphite">{it.title}</h3>
              <p className="text-sm text-brand-graphite-soft leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
