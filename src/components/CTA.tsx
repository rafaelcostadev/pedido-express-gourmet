import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
const ctaUrl = "/assets/cta-bg.avif";
import { COMPANY } from "@/lib/products";

export function CTA() {
  return (
    <section className="relative min-h-[70svh] flex items-center overflow-hidden text-white">
      <div className="absolute inset-0 -z-10">
        <img
          src={ctaUrl}
          alt="Família reunida em festa de aniversário com salgados e churros"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      <div className="container-x py-20 lg:py-28 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-brand-yellow">
            Sua festa começa aqui
          </span>
          <h2 className="mt-4 font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
            Pronto para deixar sua festa ainda mais{" "}
            <span className="text-brand-yellow">saborosa</span>?
          </h2>
          <p className="mt-5 text-lg text-white/85 font-medium max-w-xl">
            Atendimento rápido, retirada fácil. Envie seu pedido em segundos.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${COMPANY.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-yellow font-semibold text-base"
            >
              <MessageCircle className="h-5 w-5" />
              Peça pelo WhatsApp
            </a>
            <a href="#salgados" className="btn-ghost-light font-semibold">
              Ver Cardápio
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
