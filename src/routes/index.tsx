import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Differentials } from "@/components/Differentials";
import { Products } from "@/components/Products";
import { Churros } from "@/components/Churros";
import { HowItWorks } from "@/components/HowItWorks";
import { About } from "@/components/About";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ScrollToTop } from "@/components/ScrollToTop";


const SITE_URL = "https://pedido-express-gourmet.lovable.app";
const SOCIAL_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/E0o6F4lGTXQWDYstgSi3Et7p2Ro1/social-images/social-1784054910513-thumb.webp";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    links: [
      { rel: "canonical", href: SITE_URL + "/" },
      { rel: "preload", as: "image", href: "/assets/hero-bg.avif", fetchpriority: "high" },
    ],
    meta: [
      { property: "og:url", content: SITE_URL + "/" },
      { property: "og:image", content: SOCIAL_IMAGE },
      { property: "og:image:alt", content: "Salgados congelados artesanais e mini churros da Salgados Churros Fast" },
      { name: "twitter:image", content: SOCIAL_IMAGE },
      { name: "twitter:image:alt", content: "Salgados congelados artesanais e mini churros da Salgados Churros Fast" },
      { name: "keywords", content: "salgados congelados Taboão da Serra, salgados para festa, mini salgados, churros congelado, salgados artesanais, kit festa, encomenda de salgados, salgados para aniversário, salgados para empresas, salgados congelados São Paulo" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL + "/" },
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Differentials />
        <Products />
        <Churros />
        <HowItWorks />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <CartDrawer />
      <WhatsAppFloat />
      <ScrollToTop />
    </>
  );
}
