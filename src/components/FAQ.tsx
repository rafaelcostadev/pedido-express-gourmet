import { useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs: { q: string; a: string }[] = [
  {
    q: "Os produtos são entregues prontos para consumo?",
    a: "Não. Todos os salgados e mini churros são entregues congelados e prontos para fritar. Assim, você prepara na hora que desejar e serve tudo fresquinho.",
  },
  {
    q: "Como devo preparar os salgados?",
    a: "Os produtos devem ser mantidos congelados até o preparo. Para fritar, siga as orientações fornecidas pela empresa e utilize óleo em temperatura adequada.",
  },
  {
    q: "Quantas unidades vêm em cada pacote?",
    a: "Cada produto possui uma quantidade específica informada no card. Os mini churros recheados com doce de leite são vendidos em pacotes com 25 unidades.",
  },
  {
    q: "Qual é o sabor do mini churros?",
    a: "Trabalhamos exclusivamente com mini churros recheados com doce de leite cremoso.",
  },
  {
    q: "Como faço meu pedido?",
    a: "Escolha os produtos, adicione ao carrinho e clique em “Finalizar Pedido pelo WhatsApp”. A mensagem será montada automaticamente com os itens, quantidades e valor total.",
  },
  {
    q: "Vocês fazem entrega?",
    a: "No momento, os pedidos são disponibilizados para retirada no endereço informado no site. O cliente pode confirmar outras possibilidades diretamente pelo WhatsApp.",
  },
  {
    q: "Onde é feita a retirada?",
    a: "A retirada é realizada na Rua Gabiroba, 83, Jardim Record, Taboão da Serra – SP.",
  },
  {
    q: "Preciso fazer o pedido com antecedência?",
    a: "Recomendamos consultar a disponibilidade e combinar a retirada com antecedência pelo WhatsApp, especialmente para festas, aniversários, empresas e grandes quantidades.",
  },
  {
    q: "Os produtos são indicados para festas e eventos?",
    a: "Sim. Os salgados congelados e os mini churros são ideais para aniversários, confraternizações, reuniões familiares, eventos corporativos e outras ocasiões.",
  },
  {
    q: "Como devo conservar os produtos?",
    a: "Mantenha os produtos congelados até o momento do preparo. Não recongele o produto depois de descongelado.",
  },
];

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" className="py-20 lg:py-20 bg-white">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-12 lg:mb-16"
        >
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-brand-red">
            FAQ
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold text-brand-graphite tracking-tight leading-[1.05]">
            Perguntas frequentes
          </h2>
          <p className="mt-5 text-base sm:text-lg text-brand-graphite-soft leading-relaxed">
            Tudo o que você precisa saber antes de fazer seu pedido.
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl flex flex-col gap-3 sm:gap-4">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            const buttonId = `${baseId}-faq-btn-${i}`;
            const panelId = `${baseId}-faq-panel-${i}`;
            return (
              <div
                key={i}
                className="rounded-2xl bg-brand-cream/50 ring-1 ring-black/5 shadow-soft overflow-hidden transition-colors"
              >
                <h3 className="m-0">
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-4 sm:py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-white transition-colors hover:bg-brand-cream"
                  >
                    <span className="text-base sm:text-lg font-semibold text-brand-graphite leading-snug">
                      {item.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`shrink-0 grid place-items-center h-9 w-9 rounded-full transition-colors ${
                        isOpen
                          ? "bg-brand-red text-white"
                          : "bg-brand-yellow/25 text-brand-red"
                      }`}
                    >
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 text-sm sm:text-base text-brand-graphite-soft leading-relaxed">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
