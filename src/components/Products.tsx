import { motion } from "framer-motion";
import { Plus, Snowflake } from "lucide-react";
import { salgados, formatBRL } from "@/lib/products";
import { useCart } from "@/lib/cart";

export function Products() {
  const { add } = useCart();
  return (
    <section id="salgados" className="py-20 lg:py-20 bg-white">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-brand-red">
            Nosso cardápio
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-graphite tracking-tight leading-[1.05]">
            Salgados artesanais que fazem a festa.
          </h2>
          <p className="mt-5 text-lg text-brand-graphite-soft font-medium leading-relaxed">
            Massa leve, recheios cremosos, feitos diariamente. Escolha os seus e monte o pedido.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {salgados.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col rounded-[2rem] bg-brand-cream/60 hover:bg-white shadow-soft hover:shadow-elevated transition-all duration-500 overflow-hidden hover:-translate-y-2"
            >
              {/* image ~70% of card */}
              <div className="relative h-[300px] sm:h-[340px] bg-gradient-to-br from-brand-yellow/25 to-brand-cream overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-contain p-6 transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col gap-4 flex-1">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-brand-graphite leading-tight">{p.name}</h3>
                  <p className="mt-2 text-sm text-brand-graphite-soft leading-relaxed line-clamp-2">
                    {p.description}
                  </p>
                  <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-red">
                    {p.unit}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#FFF7D6] px-3 py-1.5 shadow-sm ring-1 ring-brand-yellow/40">
                    <Snowflake className="h-3.5 w-3.5 text-brand-yellow shrink-0" strokeWidth={2.5} />
                    <span className="text-[11px] leading-tight text-brand-graphite">
                      <span className="font-bold">Vai congelado</span>
                      <span className="text-brand-graphite-soft"> · Pronto para fritar</span>
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-black/5">
                  <span className="text-2xl font-extrabold text-brand-graphite">{formatBRL(p.price)}</span>
                  <button
                    onClick={() => add(p)}
                    aria-label={`Adicionar ${p.name} ao carrinho`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-brand-red text-white px-4 py-2.5 text-sm font-semibold shadow-brand hover:brightness-110 hover:-translate-y-0.5 transition"
                  >
                    <Plus className="h-4 w-4" />
                    Adicionar
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="text-center text-xs text-brand-graphite-soft/70 mt-12 font-medium">
          Preços de referência. Confirme valores e disponibilidade pelo WhatsApp.
        </p>
      </div>
    </section>
  );
}
