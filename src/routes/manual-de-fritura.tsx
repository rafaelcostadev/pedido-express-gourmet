import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Flame, Thermometer, Timer, Wind, AlertTriangle, CheckCircle2, ChefHat } from "lucide-react";

const SITE_URL = "https://pedido-express-gourmet.lovable.app";
const PAGE_URL = SITE_URL + "/manual-de-fritura";
const SOCIAL_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/E0o6F4lGTXQWDYstgSi3Et7p2Ro1/social-images/social-1784054910513-thumb.webp";
const TITLE = "Como Fritar Salgado Congelado: Manual de Fritura | Salgados Churros Fast";
const DESC = "Aprenda como fritar salgado congelado do jeito certo: temperatura ideal do óleo, tempo de fritura, dicas para coxinha congelada e alternativa na air fryer.";

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Como fritar salgado congelado",
  description: "Passo a passo para fritar salgados congelados artesanais mantendo a casquinha crocante e o recheio no ponto.",
  totalTime: "PT8M",
  image: SOCIAL_IMAGE,
  supply: [
    { "@type": "HowToSupply", name: "Salgados congelados" },
    { "@type": "HowToSupply", name: "Óleo vegetal (soja, girassol ou canola)" },
  ],
  tool: [
    { "@type": "HowToTool", name: "Panela funda ou fritadeira" },
    { "@type": "HowToTool", name: "Termômetro culinário (opcional)" },
    { "@type": "HowToTool", name: "Escumadeira" },
  ],
  step: [
    { "@type": "HowToStep", name: "Aqueça o óleo", text: "Aqueça o óleo a 170–180 °C. Use panela funda com óleo suficiente para cobrir os salgados." },
    { "@type": "HowToStep", name: "Não descongele", text: "Frite os salgados direto do congelador. Descongelar faz a casquinha soltar e o recheio vazar." },
    { "@type": "HowToStep", name: "Frite em pequenas porções", text: "Coloque poucos salgados por vez para não derrubar a temperatura do óleo." },
    { "@type": "HowToStep", name: "Tempo de fritura", text: "Frite por 3 a 5 minutos até dourar por igual, virando ocasionalmente." },
    { "@type": "HowToStep", name: "Escorra", text: "Retire com escumadeira e escorra sobre papel toalha antes de servir." },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Precisa descongelar o salgado antes de fritar?",
      acceptedAnswer: { "@type": "Answer", text: "Não. Salgados congelados artesanais devem ir direto do freezer para o óleo quente. Descongelar faz a massa amolecer, a casquinha se soltar e o recheio vazar durante a fritura." },
    },
    {
      "@type": "Question",
      name: "Qual a temperatura ideal do óleo para fritar salgado congelado?",
      acceptedAnswer: { "@type": "Answer", text: "Entre 170 °C e 180 °C. Óleo muito quente queima por fora e deixa cru por dentro; óleo frio encharca o salgado e faz absorver gordura." },
    },
    {
      "@type": "Question",
      name: "Dá para fritar coxinha congelada na air fryer?",
      acceptedAnswer: { "@type": "Answer", text: "Sim. Pincele um fio de óleo, pré-aqueça a air fryer a 200 °C e asse os salgados congelados por 10 a 14 minutos, virando na metade do tempo." },
    },
  ],
};

export const Route = createFileRoute("/manual-de-fritura")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "como fritar salgado congelado, como fritar coxinha congelada, temperatura ideal óleo fritura, fritar salgado na air fryer, manual de fritura, salgados congelados" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: PAGE_URL },
      { property: "og:image", content: SOCIAL_IMAGE },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: SOCIAL_IMAGE },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(howToJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL + "/" },
            { "@type": "ListItem", position: 2, name: "Manual de Fritura", item: PAGE_URL },
          ],
        }),
      },
    ],
  }),
  component: ManualFritura,
});

function ManualFritura() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 bg-background">
        <article className="container-x max-w-4xl">
          <nav aria-label="Breadcrumb" className="text-sm text-brand-brown/60 mb-6">
            <Link to="/" className="hover:text-brand-red transition">Início</Link>
            <span className="mx-2">/</span>
            <span className="text-brand-brown">Manual de Fritura</span>
          </nav>

          <header className="mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-red/10 text-brand-red px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-4">
              <ChefHat className="h-4 w-4" /> Guia completo
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-brand-brown leading-tight">
              Como fritar salgado congelado do jeito certo
            </h1>
            <p className="mt-4 text-lg text-brand-brown/75 leading-relaxed">
              Casquinha crocante por fora, recheio no ponto por dentro. Este manual reúne temperatura ideal do óleo,
              tempo de fritura, o passo a passo para <strong>coxinha congelada</strong> e a alternativa na <strong>air fryer</strong>.
            </p>
          </header>

          <section className="grid sm:grid-cols-3 gap-4 mb-12">
            <InfoCard icon={<Thermometer className="h-5 w-5" />} label="Temperatura" value="170 – 180 °C" />
            <InfoCard icon={<Timer className="h-5 w-5" />} label="Tempo" value="3 a 5 minutos" />
            <InfoCard icon={<Flame className="h-5 w-5" />} label="Óleo" value="Soja, girassol ou canola" />
          </section>

          <Section title="Passo a passo para fritar salgados congelados">
            <ol className="space-y-5">
              <Step n={1} title="Escolha a panela e a quantidade de óleo">
                Use uma panela funda ou fritadeira. O óleo precisa cobrir totalmente os salgados — em média 3 dedos de altura.
                Panela rasa faz o salgado fritar de forma desigual e absorver mais gordura.
              </Step>
              <Step n={2} title="Aqueça o óleo entre 170 °C e 180 °C">
                Essa é a faixa ideal. Sem termômetro? Jogue um pedacinho de massa ou pão: se subir dourando em cerca de 15 segundos,
                o óleo está no ponto. Se queimar rápido, está quente demais; se afundar, está frio.
              </Step>
              <Step n={3} title="Não descongele os salgados">
                Frite direto do freezer. Descongelar amolece a massa, faz a casquinha soltar e o recheio vazar no óleo.
              </Step>
              <Step n={4} title="Frite em pequenas porções">
                Coloque poucos salgados por vez. Encher a panela derruba a temperatura do óleo e deixa a fritura encharcada.
              </Step>
              <Step n={5} title="Vire ocasionalmente até dourar por igual">
                Em 3 a 5 minutos os salgados ficam com a cor dourada característica. Salgados maiores (como coxinha de 25 g)
                podem levar até 6 minutos.
              </Step>
              <Step n={6} title="Escorra bem antes de servir">
                Retire com escumadeira e coloque sobre papel toalha por 1 minuto. Sirva quente para preservar a crocância.
              </Step>
            </ol>
          </Section>

          <Section title="Como fritar coxinha congelada">
            <p className="text-brand-brown/80 leading-relaxed">
              A coxinha é o salgado que mais sofre com fritura errada — casca solta, recheio vazando ou centro gelado
              são sinais de temperatura fora do ponto. O segredo para a coxinha congelada é:
            </p>
            <ul className="mt-4 space-y-3">
              <Bullet>Óleo estabilizado a <strong>175 °C</strong> antes de colocar as coxinhas.</Bullet>
              <Bullet>Fritar <strong>3 a 4 unidades por vez</strong> em panela média.</Bullet>
              <Bullet>Não mexer nos primeiros 60 segundos — deixe a casquinha selar.</Bullet>
              <Bullet>Tempo total de <strong>4 a 6 minutos</strong>, dependendo do tamanho.</Bullet>
              <Bullet>Servir imediatamente para manter a casca crocante.</Bullet>
            </ul>
          </Section>

          <Section title="Como fritar salgado congelado na air fryer">
            <div className="flex items-start gap-3 rounded-2xl border border-brand-yellow/30 bg-brand-yellow/10 p-5">
              <Wind className="h-6 w-6 text-brand-red shrink-0 mt-0.5" />
              <div>
                <p className="text-brand-brown font-semibold">Passo a passo na air fryer</p>
                <ol className="mt-3 space-y-2 text-brand-brown/80 text-sm leading-relaxed list-decimal list-inside">
                  <li>Pré-aqueça a air fryer a <strong>200 °C</strong> por 3 minutos.</li>
                  <li>Pincele um fio de óleo em cada salgado (isso ajuda a dourar).</li>
                  <li>Distribua sem empilhar, deixando espaço para o ar circular.</li>
                  <li>Asse por <strong>10 a 14 minutos</strong>, virando na metade do tempo.</li>
                  <li>Confira a cor: dourada por igual = pronto.</li>
                </ol>
                <p className="mt-3 text-xs text-brand-brown/60">
                  A textura fica um pouco diferente da fritura tradicional, mas com muito menos gordura.
                </p>
              </div>
            </div>
          </Section>

          <Section title="Erros comuns na hora de fritar">
            <div className="grid md:grid-cols-2 gap-4">
              <ErrorCard title="Descongelar antes de fritar" desc="Faz a casquinha soltar e o recheio vazar." />
              <ErrorCard title="Óleo frio (abaixo de 160 °C)" desc="O salgado absorve gordura e fica encharcado." />
              <ErrorCard title="Óleo muito quente (acima de 190 °C)" desc="Doura por fora antes do centro esquentar." />
              <ErrorCard title="Muitos salgados de uma vez" desc="Derruba a temperatura e prejudica a fritura." />
            </div>
          </Section>

          <Section title="Perguntas frequentes">
            <FaqItem q="Precisa descongelar o salgado antes de fritar?" a="Não. Salgados congelados artesanais devem ir direto do freezer para o óleo quente." />
            <FaqItem q="Qual a temperatura ideal do óleo?" a="Entre 170 °C e 180 °C. Fora dessa faixa, o resultado sofre." />
            <FaqItem q="Dá para fritar salgado congelado na air fryer?" a="Sim. Pré-aqueça a 200 °C e asse por 10 a 14 minutos, virando na metade." />
            <FaqItem q="Posso reaproveitar o óleo?" a="Sim, se estiver limpo e sem cheiro forte, pode usar mais 1 ou 2 vezes. Coe antes de guardar." />
            <FaqItem q="Quantos salgados fritar por vez?" a="Em média 4 a 6 salgados por litro de óleo, para manter a temperatura estável." />
          </Section>

          <div className="mt-14 rounded-3xl bg-brand-red text-white p-8 md:p-10 text-center">
            <h2 className="font-display text-3xl md:text-4xl mb-3">Peça seus salgados congelados</h2>
            <p className="text-white/85 max-w-xl mx-auto">
              Salgados artesanais prontos para fritar, entregues congelados em Taboão da Serra e região.
            </p>
            <Link to="/" className="inline-flex mt-6 bg-brand-yellow text-brand-brown font-bold px-6 py-3 rounded-full hover:brightness-95 transition">
              Ver produtos
            </Link>
          </div>
        </article>
      </main>
      <Footer />
      <CartDrawer />
      <WhatsAppFloat />
      <ScrollToTop />
    </>
  );
}

function InfoCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-brand-brown/10 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2 text-brand-red">{icon}<span className="text-xs font-bold uppercase tracking-widest">{label}</span></div>
      <p className="mt-2 text-brand-brown font-display text-xl">{value}</p>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="font-display text-2xl md:text-3xl text-brand-brown mb-5">{title}</h2>
      {children}
    </section>
  );
}

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-4">
      <div className="shrink-0 h-9 w-9 rounded-full bg-brand-red text-white font-bold flex items-center justify-center">{n}</div>
      <div>
        <h3 className="font-bold text-brand-brown">{title}</h3>
        <p className="text-brand-brown/75 leading-relaxed mt-1">{children}</p>
      </div>
    </li>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2 items-start text-brand-brown/80">
      <CheckCircle2 className="h-5 w-5 text-brand-red shrink-0 mt-0.5" />
      <span>{children}</span>
    </li>
  );
}

function ErrorCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-brand-brown/10 bg-white p-5">
      <div className="flex items-center gap-2 text-brand-red mb-1"><AlertTriangle className="h-5 w-5" /><span className="font-bold text-brand-brown">{title}</span></div>
      <p className="text-sm text-brand-brown/70">{desc}</p>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="border-b border-brand-brown/10 py-4">
      <h3 className="font-bold text-brand-brown">{q}</h3>
      <p className="text-brand-brown/75 mt-1 leading-relaxed">{a}</p>
    </div>
  );
}
