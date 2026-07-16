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
import { SmoothAnchors } from "@/lib/scroll";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    links: [{ rel: "canonical", href: "/" }],
    meta: [{ property: "og:url", content: "/" }],
  }),
});

function Index() {
  return (
    <>
      <SmoothAnchors />
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
