import { Instagram, MapPin, Phone, Clock } from "lucide-react";
const logoUrl = "/assets/logo.avif";
import { COMPANY } from "@/lib/products";
import { handleAnchorClick } from "@/lib/scroll";

const links = [
  { id: "inicio", label: "Início" },
  { id: "salgados", label: "Salgados" },
  { id: "churros", label: "Churros" },
  { id: "como-funciona", label: "Como Funciona" },
  { id: "sobre", label: "Sobre" },
  { id: "contato", label: "Contato" },
];

export function Footer() {
  const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(COMPANY.mapsQuery)}&output=embed`;
  return (
    <footer style={{ backgroundColor: "#1D1D1D" }} className="text-white/85 pt-20 pb-8">
      <div className="container-x grid md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
        <div className="lg:col-span-4 flex flex-col gap-5">
          <p className="text-sm text-white/65 leading-relaxed max-w-sm">
            Salgados e churros artesanais que fazem sucesso em qualquer festa.
            Feitos com carinho, prontos para o seu momento especial.
          </p>
          <a
            href={`https://wa.me/${COMPANY.whatsappRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary self-start text-sm mt-2"
          >
            <Phone className="h-4 w-4" />
            Falar no WhatsApp
          </a>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-5">Navegação</h4>
          <ul className="flex flex-col gap-3 text-sm">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={handleAnchorClick(l.id)}
                  className="text-white/70 hover:text-brand-yellow transition"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-5">Contato</h4>
          <ul className="flex flex-col gap-4 text-sm">
            <li className="flex gap-3">
              <Phone className="h-4 w-4 shrink-0 mt-0.5 text-brand-yellow" />
              <a href={`https://wa.me/${COMPANY.whatsappRaw}`} target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow transition">
                {COMPANY.whatsappDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Instagram className="h-4 w-4 shrink-0 mt-0.5 text-brand-yellow" />
              <a href={COMPANY.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow transition">
                {COMPANY.instagramHandle}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-brand-yellow" />
              <span className="text-white/70">{COMPANY.address}</span>
            </li>
            <li className="flex gap-3">
              <Clock className="h-4 w-4 shrink-0 mt-0.5 text-brand-yellow" />
              <span className="text-white/70">{COMPANY.hours}</span>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-5">Como chegar</h4>
          <div className="rounded-xl overflow-hidden aspect-video border border-white/10">
            <iframe
              title="Localização"
              src={mapsEmbed}
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0 grayscale"
            />
          </div>
        </div>
      </div>

      <div className="container-x mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/45">
        <p>© {new Date().getFullYear()} Salgados & Churros Fast. Todos os direitos reservados.</p>
        <p>
          Desenvolvido por{" "}
          <a
            href="http://maisumjob.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-white/90 hover:text-brand-yellow transition"
          >
            +1 JOB
          </a>
        </p>
      </div>
    </footer>
  );
}
