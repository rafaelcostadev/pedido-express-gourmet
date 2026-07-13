import { motion } from "framer-motion";
import { MapPin, Phone, Instagram, Clock, Navigation } from "lucide-react";
import { COMPANY } from "@/lib/products";

export function Contact() {
  const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(COMPANY.mapsQuery)}&output=embed`;
  const mapsOpen = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(COMPANY.mapsQuery)}`;
  return (
    <section id="contato" className="py-20 lg:py-28 bg-brand-cream/60">
      <div className="container-x grid lg:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-5"
        >
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-brand-red">Contato</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-brand-brown">
            Fale com a gente
          </h2>
          <p className="text-brand-brown/70 leading-relaxed">
            Estamos prontos para atender seu pedido pelo WhatsApp ou receber você no nosso endereço.
          </p>

          <ul className="mt-4 flex flex-col gap-4">
            <li>
              <a
                href={`https://wa.me/${COMPANY.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="h-12 w-12 rounded-2xl bg-white shadow-soft grid place-items-center text-whatsapp">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-brand-brown/60">WhatsApp</div>
                  <div className="text-lg font-semibold text-brand-brown group-hover:text-brand-red transition">
                    {COMPANY.whatsappDisplay}
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href={COMPANY.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="h-12 w-12 rounded-2xl bg-white shadow-soft grid place-items-center text-brand-red">
                  <Instagram className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-brand-brown/60">Instagram</div>
                  <div className="text-lg font-semibold text-brand-brown group-hover:text-brand-red transition">
                    {COMPANY.instagramHandle}
                  </div>
                </div>
              </a>
            </li>
            <li className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-2xl bg-white shadow-soft grid place-items-center text-brand-red">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-brand-brown/60">Retirada</div>
                <div className="text-lg font-semibold text-brand-brown">{COMPANY.address}</div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-2xl bg-white shadow-soft grid place-items-center text-brand-red">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-brand-brown/60">Horário</div>
                <div className="text-lg font-semibold text-brand-brown">{COMPANY.hours}</div>
              </div>
            </li>
          </ul>

          <a
            href={mapsOpen}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary self-start mt-2"
          >
            <Navigation className="h-5 w-5" />
            Abrir rota
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-[2rem] overflow-hidden shadow-elevated min-h-[420px]"
        >
          <iframe
            title="Mapa da localização Salgados e Churros Fast"
            src={mapsEmbed}
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full min-h-[420px] border-0"
          />
        </motion.div>
      </div>
    </section>
  );
}
