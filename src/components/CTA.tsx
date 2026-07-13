import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 lg:py-24">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.5rem] px-8 py-16 lg:py-20 text-center bg-gradient-to-br from-brand-red via-brand-red to-brand-red-dark text-white shadow-brand"
        >
          <div aria-hidden className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-yellow/30 blur-3xl" />
          <div aria-hidden className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-brand-yellow/20 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl max-w-3xl mx-auto leading-tight">
              Pronto para deixar sua festa ainda mais saborosa?
            </h2>
            <p className="mt-4 text-white/85 max-w-xl mx-auto">
              Peça agora pelo WhatsApp — atendimento rápido, retirada fácil.
            </p>
            <a
              href="#produtos"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-brand-red font-bold px-8 py-4 text-lg hover:-translate-y-1 hover:shadow-elevated transition"
            >
              Fazer Pedido
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
