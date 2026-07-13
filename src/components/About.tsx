import { motion } from "framer-motion";
import { Award, Heart, Leaf } from "lucide-react";
import banner from "@/assets/banner-topo.png.asset.json";

export function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-6 bg-brand-yellow/40 rounded-[3rem] blur-2xl -z-10" />
          <div className="rounded-[2rem] overflow-hidden shadow-elevated">
            <img
              src={banner.url}
              alt="Ambiente Salgados e Churros Fast"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-5"
        >
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-brand-red">Sobre nós</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-brand-brown">
            Uma tradição artesanal em cada mordida
          </h2>
          <p className="text-brand-brown/70 leading-relaxed text-lg">
            A Salgados & Churros Fast nasceu do amor por produtos genuinamente artesanais. Com ingredientes
            selecionados, massa leve e recheios cremosos, entregamos qualidade, higiene e sabor para
            transformar qualquer evento em uma experiência memorável.
          </p>
          <p className="text-brand-brown/70 leading-relaxed">
            Do preparo ao atendimento, cada detalhe é pensado para você levar o melhor para sua família,
            amigos e clientes.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 pt-4">
            {[
              { icon: Award, label: "Qualidade premium" },
              { icon: Heart, label: "Feito com carinho" },
              { icon: Leaf, label: "Ingredientes selecionados" },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-3 rounded-2xl bg-brand-cream/70 p-4">
                <b.icon className="h-5 w-5 text-brand-red" />
                <span className="text-sm font-semibold text-brand-brown">{b.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
