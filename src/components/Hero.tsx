import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag } from "lucide-react";
import banner from "@/assets/banner-topo.png.asset.json";

export function Hero() {
  return (
    <section id="inicio" className="relative pt-28 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      {/* soft background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-brand-yellow/40 blur-3xl" />
        <div className="absolute top-40 -right-24 h-96 w-96 rounded-full bg-brand-red/20 blur-3xl" />
      </div>

      <div className="container-x grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <span className="inline-flex items-center gap-2 self-start rounded-full bg-white shadow-soft px-4 py-2 text-xs font-semibold uppercase tracking-widest text-brand-red">
            <span className="h-2 w-2 rounded-full bg-brand-red animate-pulse" />
            Produção artesanal diária
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] text-brand-brown">
            Salgados e Churros que fazem <span className="text-brand-red">sucesso</span> em qualquer festa.
          </h1>
          <p className="text-lg text-brand-brown/70 max-w-xl leading-relaxed">
            Ingredientes selecionados, produção artesanal e pedidos rápidos. Ideais para aniversários,
            empresas, confraternizações e eventos — com retirada fácil em Taboão da Serra.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#produtos" className="btn-primary">
              <ShoppingBag className="h-5 w-5" />
              Fazer Pedido
            </a>
            <a href="#produtos" className="btn-secondary">
              Ver Cardápio
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
          <div className="flex flex-wrap gap-6 pt-4 text-sm text-brand-brown/70">
            <div>
              <div className="font-display text-2xl text-brand-red">+10 anos</div>
              tradição na região
            </div>
            <div className="w-px bg-border" />
            <div>
              <div className="font-display text-2xl text-brand-red">100%</div>
              artesanal
            </div>
            <div className="w-px bg-border" />
            <div>
              <div className="font-display text-2xl text-brand-red">25un</div>
              por pacote
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="relative"
        >
          <div className="absolute inset-4 bg-gradient-to-br from-brand-yellow to-brand-red/70 blur-2xl opacity-40 rounded-[3rem]" />
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-elevated">
            <img
              src={banner.url}
              alt="Salgados artesanais Salgados e Churros Fast em uma mesa de festa"
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
