import { motion } from "framer-motion";
import { Plus, Sparkles, Snowflake } from "lucide-react";
import { churrosProduct, formatBRL } from "@/lib/products";
import { useCart } from "@/lib/cart";

export function Churros() {
  const { add } = useCart();
  return (
    <section
      id="churros"
      className="relative py-20 lg:py-20 overflow-hidden bg-brand-graphite text-white"
    >
      {/* subtle glow */}
      <div aria-hidden className="absolute inset-0 -z-0 pointer-events-none">
        <div className="absolute top-1/2 -translate-y-1/2 -right-40 h-[600px] w-[600px] rounded-full bg-brand-yellow/15 blur-[120px]" />
        <div className="absolute top-1/4 -left-40 h-[400px] w-[400px] rounded-full bg-brand-red/20 blur-[100px]" />
      </div>

      <div className="container-x relative grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative order-2 lg:order-1"
        >
          <div className="absolute inset-8 bg-brand-yellow/30 blur-3xl rounded-full" />
          <img
            src={churrosProduct.image}
            alt="Churros artesanal recheado com doce de leite"
            className="relative w-full max-w-[40rem] mx-auto drop-shadow-[0_25px_45px_rgba(0,0,0,0.55)]"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="order-1 lg:order-2"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/15 border border-brand-yellow/30 px-4 py-2 text-[11px] font-bold tracking-[0.25em] uppercase text-brand-yellow">
            <Sparkles className="h-3.5 w-3.5" /> Exclusivo da casa
          </span>
          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
            Churros recheado com <span className="text-brand-yellow">doce de leite</span>.
          </h2>
          <p className="mt-6 text-lg text-white/80 font-medium leading-relaxed max-w-lg">
            Crocante por fora, macio por dentro, recheio generoso e cremoso. O toque doce que
            todo mundo espera na sua festa — e ninguém esquece.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-3 max-w-lg">
            {[
              "Recheio artesanal de doce de leite",
              "Polvilhado com canela e açúcar",
              "Textura crocante, sabor cremoso",
              "Ideal para eventos e festas",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm text-white/85">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-yellow shrink-0" />
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-brand-yellow/40 bg-white/5 px-4 py-3 max-w-lg">
            <Snowflake className="h-6 w-6 text-brand-yellow shrink-0" />
            <div className="leading-tight">
              <div className="font-bold text-white">Vai congelado</div>
              <div className="text-sm text-white/70">Pronto para fritar.</div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <div>
              <div className="text-[11px] uppercase tracking-[0.25em] text-white/60 font-semibold">
                A partir de
              </div>
              <div className="text-4xl font-extrabold text-brand-yellow">
                {formatBRL(churrosProduct.price)}
              </div>
              <div className="text-xs text-white/60 font-medium">{churrosProduct.unit}</div>
            </div>
            <button
              onClick={() => add(churrosProduct)}
              className="btn-yellow font-semibold"
              aria-label="Adicionar churros ao carrinho"
            >
              <Plus className="h-5 w-5" />
              Adicionar ao pedido
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
