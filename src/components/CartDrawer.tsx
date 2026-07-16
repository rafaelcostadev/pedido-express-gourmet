import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, Trash2, X, MessageCircle, CreditCard, QrCode, Banknote, Store, Bike } from "lucide-react";
import { useState } from "react";
import { useCart, type PaymentMethod, type DeliveryMethod } from "@/lib/cart";
import { formatBRL } from "@/lib/products";

export function CartDrawer() {
  const { items, isOpen, close, inc, dec, remove, total, checkoutWhatsApp, count } = useCart();
  const [notes, setNotes] = useState("");
  const [payment, setPayment] = useState<PaymentMethod | null>(null);
  const [delivery, setDelivery] = useState<DeliveryMethod | null>(null);
  const [error, setError] = useState<"payment" | "delivery" | null>(null);

  const handleCheckout = () => {
    if (!payment) { setError("payment"); return; }
    if (!delivery) { setError("delivery"); return; }
    setError(null);
    checkoutWhatsApp({ notes, payment, delivery });
  };

  const paymentOptions: { id: PaymentMethod; label: string; Icon: typeof CreditCard }[] = [
    { id: "cartao", label: "Cartão", Icon: CreditCard },
    { id: "pix", label: "Pix", Icon: QrCode },
    { id: "dinheiro", label: "Dinheiro", Icon: Banknote },
  ];
  const deliveryOptions: { id: DeliveryMethod; label: string; Icon: typeof Store }[] = [
    { id: "retirada", label: "Retirar no local", Icon: Store },
    { id: "delivery", label: "Delivery", Icon: Bike },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Carrinho de pedido"
        >
          <div className="absolute inset-0 bg-black/60" onClick={close} />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 260 }}
            className="absolute right-0 top-0 h-full w-full sm:max-w-md bg-white flex flex-col shadow-elevated"
          >
            <header className="flex items-center justify-between px-6 py-5 border-b border-black/5">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-brand-red/10 grid place-items-center">
                  <ShoppingBag className="h-5 w-5 text-brand-red" />
                </div>
                <div>
                  <h2 className="text-lg font-extrabold text-brand-graphite tracking-tight">Seu pedido</h2>
                  <p className="text-xs text-brand-graphite-soft font-medium">
                    {count} {count === 1 ? "item" : "itens"}
                  </p>
                </div>
              </div>
              <button
                onClick={close}
                aria-label="Fechar carrinho"
                className="h-10 w-10 rounded-full bg-muted grid place-items-center hover:bg-brand-cream transition"
              >
                <X className="h-5 w-5" />
              </button>
            </header>

            <div className="flex-1 overflow-y-auto px-6 py-5">
              {items.length === 0 ? (
                <div className="h-full grid place-items-center text-center py-16">
                  <div>
                    <ShoppingBag className="h-14 w-14 text-brand-graphite/20 mx-auto" />
                    <p className="mt-4 text-brand-graphite-soft font-medium">Seu carrinho está vazio.</p>
                    <button onClick={close} className="btn-primary mt-6 text-sm">
                      Ver cardápio
                    </button>
                  </div>
                </div>
              ) : (
                <ul className="flex flex-col gap-3">
                  {items.map((it) => (
                    <li
                      key={it.id}
                      className="flex gap-4 items-center p-3 rounded-2xl bg-brand-cream/70 hover:bg-brand-cream transition"
                    >
                      <img
                        src={it.image}
                        alt=""
                        loading="lazy"
                        className="h-24 w-24 rounded-xl object-contain bg-white shadow-soft shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between gap-2">
                          <h3 className="text-sm font-bold text-brand-graphite leading-tight">
                            {it.name}
                          </h3>
                          <button
                            onClick={() => remove(it.id)}
                            aria-label={`Remover ${it.name}`}
                            className="text-brand-graphite/40 hover:text-brand-red transition shrink-0"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="text-xs text-brand-graphite-soft mt-0.5 font-medium">
                          {formatBRL(it.price)}
                        </p>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="inline-flex items-center rounded-full bg-white shadow-soft">
                            <button
                              onClick={() => dec(it.id)}
                              aria-label="Diminuir quantidade"
                              className="h-8 w-8 grid place-items-center text-brand-graphite hover:text-brand-red"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="w-7 text-center text-sm font-bold">{it.qty}</span>
                            <button
                              onClick={() => inc(it.id)}
                              aria-label="Aumentar quantidade"
                              className="h-8 w-8 grid place-items-center text-brand-graphite hover:text-brand-red"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          <span className="text-base font-extrabold text-brand-graphite">
                            {formatBRL(it.qty * it.price)}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-black/5 px-6 py-5 space-y-4 bg-white">
                <div className="grid gap-2">
                  <label className="text-xs font-bold text-brand-graphite">
                    Alguma observação sobre seu pedido? (opcional)
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Ex.: separar os produtos por pacote, informar horário aproximado da retirada..."
                    aria-label="Observação sobre o pedido"
                    rows={3}
                    className="w-full rounded-xl bg-brand-cream/60 border border-transparent px-4 py-3 text-sm font-medium placeholder:text-brand-graphite/40 focus:outline-none focus:bg-white focus:border-brand-red/40 focus:ring-2 focus:ring-brand-red/20 resize-none transition"
                  />
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-sm text-brand-graphite-soft font-medium">Total</span>
                  <span className="text-2xl font-extrabold text-brand-graphite">{formatBRL(total)}</span>
                </div>
                <button
                  onClick={() => checkoutWhatsApp({ notes })}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp text-white font-bold px-6 py-4 text-base shadow-[0_15px_40px_-15px_oklch(0.68_0.17_150/0.7)] hover:brightness-110 hover:-translate-y-0.5 transition"
                >
                  <MessageCircle className="h-5 w-5" />
                  Finalizar Pedido pelo WhatsApp
                </button>
                <p className="text-[11px] text-center text-brand-graphite-soft/70 font-medium">
                  Você será redirecionado para o WhatsApp com o pedido pronto.
                </p>
              </div>
            )}
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
