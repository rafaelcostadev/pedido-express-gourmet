import { createContext, useContext, useMemo, useReducer, useState, type ReactNode } from "react";
import type { Product } from "./products";
import { COMPANY, formatBRL } from "./products";

export type CartItem = Product & { qty: number };

type State = { items: CartItem[] };
type Action =
  | { type: "add"; product: Product }
  | { type: "inc"; id: string }
  | { type: "dec"; id: string }
  | { type: "remove"; id: string }
  | { type: "clear" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "add": {
      const existing = state.items.find((i) => i.id === action.product.id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === action.product.id ? { ...i, qty: i.qty + 1 } : i,
          ),
        };
      }
      return { items: [...state.items, { ...action.product, qty: 1 }] };
    }
    case "inc":
      return {
        items: state.items.map((i) => (i.id === action.id ? { ...i, qty: i.qty + 1 } : i)),
      };
    case "dec":
      return {
        items: state.items
          .map((i) => (i.id === action.id ? { ...i, qty: i.qty - 1 } : i))
          .filter((i) => i.qty > 0),
      };
    case "remove":
      return { items: state.items.filter((i) => i.id !== action.id) };
    case "clear":
      return { items: [] };
  }
}

type CartCtx = {
  items: CartItem[];
  count: number;
  total: number;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  add: (p: Product) => void;
  inc: (id: string) => void;
  dec: (id: string) => void;
  remove: (id: string) => void;
  clear: () => void;
  checkoutWhatsApp: (data: { name: string; phone: string; notes: string }) => void;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { items: [] });
  const [isOpen, setOpen] = useState(false);

  const value = useMemo<CartCtx>(() => {
    const count = state.items.reduce((s, i) => s + i.qty, 0);
    const total = state.items.reduce((s, i) => s + i.qty * i.price, 0);
    return {
      items: state.items,
      count,
      total,
      isOpen,
      open: () => setOpen(true),
      close: () => setOpen(false),
      toggle: () => setOpen((v) => !v),
      add: (p) => {
        dispatch({ type: "add", product: p });
        setOpen(true);
      },
      inc: (id) => dispatch({ type: "inc", id }),
      dec: (id) => dispatch({ type: "dec", id }),
      remove: (id) => dispatch({ type: "remove", id }),
      clear: () => dispatch({ type: "clear" }),
      checkoutWhatsApp: ({ name, phone, notes }) => {
        const lines = [
          "Olá! Gostaria de fazer esse pedido:",
          "",
          ...state.items.map(
            (i) => `• ${i.qty}x ${i.name} — ${formatBRL(i.qty * i.price)}`,
          ),
          "",
          `Total: ${formatBRL(total)}`,
          "",
          `Nome: ${name || "-"}`,
          `Telefone: ${phone || "-"}`,
          notes ? `Observações: ${notes}` : "",
        ]
          .filter(Boolean)
          .join("\n");
        const url = `https://wa.me/${COMPANY.whatsappRaw}?text=${encodeURIComponent(lines)}`;
        window.open(url, "_blank", "noopener,noreferrer");
      },
    };
  }, [state.items, isOpen]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
