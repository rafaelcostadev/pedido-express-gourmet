import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { formatBRL } from "@/lib/products";

export function CartDrawer() {
  const { items, isOpen, close, inc, dec, remove, total, checkoutWhatsApp, count } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

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
          <div className="absolute inset-0 bg-black/50" onClick={close} />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 260 }}
            className="absolute right-0 top-0 h-full w-full sm:max-w-md bg-white flex flex-col shadow-elevated"
          >
            <header className="flex items-center justify-between px-6 py-5 border-b">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-brand-red/10 grid place-items-center">
                  <ShoppingBag className="h-5 w-5 text-brand-red" />
                </div>
                <div>
                  <h2 className="font-display text-xl text-brand-brown">Seu pedido</h2>
                  <p className="text-xs text-brand-brown/60">{count} {count === 1 ? "item" : "itens"}</p>
                </div>
              </div>
              <button
                onClick={close}
                aria-label="Fechar carrinho"
                className="h-10 w-10 rounded-full bg-muted grid place-items-center"
              >
                <X className="h-5 w-5" />
              </button>
            </header>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="h-full grid place-items-center text-center py-16">
                  <div>
                    <ShoppingBag className="h-12 w-12 text-brand-brown/30 mx-auto" />
                    <p className="mt-4 text-brand-brown/70">Seu carrinho está vazio.</p>
                    <button onClick={close} className="btn-primary mt-6">Ver cardápio</button>
                  </div>
                </div>
              ) : (
                <ul className="flex flex-col gap-4">
                  {items.map((it) => (
                    <li key={it.id} className="flex gap-3 items-center p-3 rounded-2xl bg-brand-cream/50">
                      <img src={it.image} alt="" loading="lazy" className="h-16 w-16 rounded-xl object-contain bg-white" />
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between gap-2">
                          <h3 className="text-sm font-semibold text-brand-brown truncate">{it.name}</h3>
                          <button
                            onClick={() => remove(it.id)}
                            aria-label={`Remover ${it.name}`}
                            className="text-brand-brown/50 hover:text-brand-red transition"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="text-xs text-brand-brown/60">{formatBRL(it.price)}</p>
                        <div className="mt-2 flex items-center justify-between">
                          <div className="inline-flex items-center rounded-full bg-white shadow-soft">
                            <button
                              onClick={() => dec(it.id)}
                              aria-label="Diminuir quantidade"
                              className="h-8 w-8 grid place-items-center text-brand-brown hover:text-brand-red"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="w-6 text-center text-sm font-semibold">{it.qty}</span>
                            <button
                              onClick={() => inc(it.id)}
                              aria-label="Aumentar quantidade"
                              className="h-8 w-8 grid place-items-center text-brand-brown hover:text-brand-red"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          <span className="text-sm font-bold text-brand-brown">
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
              <div className="border-t px-6 py-5 space-y-4 bg-white">
                <div className="grid gap-2">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome"
                    aria-label="Seu nome"
                    className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/40"
                  />
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Telefone (opcional)"
                    aria-label="Telefone"
                    className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/40"
                  />
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Observações (opcional)"
                    aria-label="Observações"
                    rows={2}
                    className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/40 resize-none"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-brand-brown/70">Total</span>
                  <span className="font-display text-2xl text-brand-brown">{formatBRL(total)}</span>
                </div>
                <button
                  onClick={() => checkoutWhatsApp({ name, phone, notes })}
                  className="btn-primary w-full text-base"
                >
                  Finalizar Pedido pelo WhatsApp
                </button>
                <p className="text-[11px] text-center text-brand-brown/50">
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
