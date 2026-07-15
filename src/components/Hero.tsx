import { motion } from "framer-motion";
import { MessageCircle, ArrowDown } from "lucide-react";
const heroUrl = "/assets/hero-bg.avif";
import { COMPANY } from "@/lib/products";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] w-full flex items-center overflow-hidden text-white"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroUrl}
          alt="Festa em quintal ao entardecer com salgados e churros artesanais na mesa"
          className="h-full w-full object-cover ken-burns"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
      </div>

      <div className="container-x pt-32 pb-16 lg:pt-40 lg:pb-24 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/20 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow animate-pulse" />
            Produção artesanal • Taboão da Serra
          </motion.span>

          <h1 className="mt-6 font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight">
            Salgados que transformam qualquer festa em um{" "}
            <span className="text-brand-yellow">momento inesquecível</span>.
          </h1>

          <p className="mt-6 text-lg sm:text-xl font-medium text-white/85 max-w-2xl leading-relaxed">
            Produção artesanal • Ingredientes selecionados • Retirada rápida em Taboão da Serra.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${COMPANY.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary font-semibold"
            >
              <MessageCircle className="h-5 w-5" />
              Peça pelo WhatsApp
            </a>
            <a href="#produtos" className="btn-ghost-light font-semibold">
              Ver Cardápio
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl">
            {[
              { n: "+10", l: "anos de tradição" },
              { n: "100%", l: "artesanal" },
              { n: "+5mil", l: "clientes satisfeitos" },
            ].map((s) => (
              <div key={s.l} className="border-l-2 border-brand-yellow/80 pl-3">
                <div className="text-2xl sm:text-3xl font-extrabold text-brand-yellow leading-none">
                  {s.n}
                </div>
                <div className="mt-1 text-[11px] sm:text-xs uppercase tracking-wider text-white/75 font-medium">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.a
          href="#produtos"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/70 hover:text-white transition"
          aria-label="Rolar para o cardápio"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-semibold">Explorar</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
