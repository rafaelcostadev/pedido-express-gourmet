import { motion } from "framer-motion";
import { Award, Heart, Leaf } from "lucide-react";
const aboutUrl = "/assets/about.avif";

export function About() {
  return (
    <section id="sobre" className="py-20 lg:py-20 bg-white">
      <div className="container-x grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-brand-yellow/25 rounded-[2.5rem] blur-2xl -z-10" />
          <div className="rounded-[2rem] overflow-hidden shadow-elevated aspect-[4/5]">
            <img
              src={aboutUrl}
              alt="Empresária preparando salgados artesanais na cozinha de produção"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:block bg-brand-red text-white rounded-2xl p-5 shadow-brand max-w-[200px]">
            <div className="text-3xl font-extrabold leading-none">+10</div>
            <div className="text-xs uppercase tracking-widest font-semibold mt-1">
              anos preparando festas inesquecíveis
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-5"
        >
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-brand-red">Sobre nós</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-graphite tracking-tight leading-[1.05]">
            Feito com carinho em cada detalhe.
          </h2>
          <p className="text-brand-graphite-soft leading-relaxed text-lg font-medium">
            Nascemos do amor por produtos genuinamente artesanais. Ingredientes selecionados,
            massa leve, recheios cremosos — cada salgado é preparado com o mesmo cuidado que
            você teria na sua própria cozinha.
          </p>
          <p className="text-brand-graphite-soft leading-relaxed">
            Do preparo ao atendimento, tudo é pensado para transformar o seu evento em
            uma experiência memorável para família, amigos e clientes.
          </p>

          <div className="grid sm:grid-cols-3 gap-3 pt-4">
            {[
              { icon: Award, label: "Qualidade premium" },
              { icon: Heart, label: "Feito com carinho" },
              { icon: Leaf, label: "Ingredientes selecionados" },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-3 rounded-2xl bg-brand-cream/80 p-4">
                <b.icon className="h-5 w-5 text-brand-red shrink-0" />
                <span className="text-sm font-semibold text-brand-graphite leading-tight">{b.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
