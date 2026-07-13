import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ShoppingBag, X } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { useCart } from "@/lib/cart";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#produtos", label: "Produtos" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const { count, open } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-white/85 backdrop-blur-xl shadow-[0_8px_30px_-15px_rgba(0,0,0,0.15)]" : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-20">
        <a href="#inicio" className="flex items-center gap-2" aria-label="Salgados e Churros Fast - Início">
          <img src={logo.url} alt="Salgados e Churros Fast" className="h-14 w-auto" loading="eager" />
        </a>

        <nav aria-label="Menu principal" className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-brand-brown/80 hover:text-brand-red transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-brand-red after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={open}
            aria-label={`Abrir carrinho, ${count} itens`}
            className="relative h-11 w-11 rounded-full bg-white shadow-soft hover:shadow-elevated transition grid place-items-center"
          >
            <ShoppingBag className="h-5 w-5 text-brand-brown" />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 h-5 min-w-5 px-1 rounded-full bg-brand-red text-white text-[11px] font-bold grid place-items-center">
                {count}
              </span>
            )}
          </button>
          <a href="#produtos" className="btn-primary hidden sm:inline-flex text-sm">
            Peça Agora
          </a>
          <button
            type="button"
            onClick={() => setOpenMobile(true)}
            aria-label="Abrir menu"
            className="lg:hidden h-11 w-11 rounded-full bg-white shadow-soft grid place-items-center"
          >
            <Menu className="h-5 w-5 text-brand-brown" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {openMobile && (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/40" onClick={() => setOpenMobile(false)} />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white p-6 flex flex-col gap-6 shadow-elevated"
            >
              <div className="flex justify-between items-center">
                <img src={logo.url} alt="" className="h-12 w-auto" />
                <button
                  onClick={() => setOpenMobile(false)}
                  aria-label="Fechar menu"
                  className="h-10 w-10 rounded-full bg-muted grid place-items-center"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex flex-col gap-1">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpenMobile(false)}
                    className="px-3 py-3 rounded-xl text-lg font-medium text-brand-brown hover:bg-muted transition"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>
              <a
                href="#produtos"
                onClick={() => setOpenMobile(false)}
                className="btn-primary mt-auto"
              >
                Peça Agora
              </a>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
