import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { products, formatBRL } from "@/lib/products";
import { useCart } from "@/lib/cart";

export function Products() {
  const { add } = useCart();
  return (
    <section id="produtos" className="py-20 lg:py-28">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-14"
        >
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-brand-red">Cardápio</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-display text-brand-brown">
            Nossos salgados artesanais
          </h2>
          <p className="mt-4 text-brand-brown/70">
            Congelados e prontos para assar ou fritar. Escolha os seus e monte o pedido.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="surface-card overflow-hidden flex flex-col"
            >
              <div className="relative aspect-square bg-gradient-to-br from-brand-yellow/40 to-brand-cream overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-contain p-3 transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-brand-brown">{p.name}</h3>
                  <p className="mt-1 text-sm text-brand-brown/70 leading-relaxed">{p.description}</p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-wider text-brand-red/80">
                    {p.unit}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="font-display text-2xl text-brand-brown">{formatBRL(p.price)}</span>
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

        <p className="text-center text-sm text-brand-brown/60 mt-10">
          * Preços de referência. Confirme valores e disponibilidade pelo WhatsApp.
        </p>
      </div>
    </section>
  );
}
