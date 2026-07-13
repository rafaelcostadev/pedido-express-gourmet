import { Instagram, MapPin, Phone, Clock } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { COMPANY } from "@/lib/products";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#produtos", label: "Produtos" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="bg-brand-brown text-white/85 pt-16 pb-8">
      <div className="container-x grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex flex-col gap-4">
          <img src={logo.url} alt="Salgados e Churros Fast" className="h-20 w-auto" loading="lazy" />
          <p className="text-sm text-white/70 leading-relaxed">
            Salgados e churros artesanais que fazem sucesso em qualquer festa. Feitos com carinho, prontos para você.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg text-white mb-4">Navegação</h4>
          <ul className="flex flex-col gap-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-brand-yellow transition">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-white mb-4">Contato</h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex gap-2">
              <Phone className="h-4 w-4 shrink-0 mt-0.5 text-brand-yellow" />
              <a href={`https://wa.me/${COMPANY.whatsappRaw}`} target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow transition">
                {COMPANY.whatsappDisplay}
              </a>
            </li>
            <li className="flex gap-2">
              <Instagram className="h-4 w-4 shrink-0 mt-0.5 text-brand-yellow" />
              <a href={COMPANY.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow transition">
                {COMPANY.instagramHandle}
              </a>
            </li>
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-brand-yellow" />
              <span>{COMPANY.address}</span>
            </li>
            <li className="flex gap-2">
              <Clock className="h-4 w-4 shrink-0 mt-0.5 text-brand-yellow" />
              <span>{COMPANY.hours}</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-white mb-4">Peça agora</h4>
          <p className="text-sm text-white/70 mb-4">
            Toque em um botão e envie seu pedido direto pelo WhatsApp.
          </p>
          <a
            href={`https://wa.me/${COMPANY.whatsappRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-yellow text-brand-brown px-5 py-3 font-semibold hover:-translate-y-0.5 transition"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>

      <div className="container-x mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
        <p>© {new Date().getFullYear()} Salgados & Churros Fast. Todos os direitos reservados.</p>
        <p>
          Desenvolvido por{" "}
          <a
            href="http://maisumjob.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white/80 hover:text-brand-yellow transition"
          >
            +1 JOB
          </a>
        </p>
      </div>
    </footer>
  );
}
