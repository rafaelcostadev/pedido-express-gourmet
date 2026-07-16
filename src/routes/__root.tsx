import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { CartProvider } from "../lib/cart";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-display text-brand-red">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-brand-brown">Página não encontrada</h2>
        <p className="mt-2 text-sm text-brand-brown/70">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-primary">Voltar para o início</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-brand-brown">Algo deu errado</h1>
        <p className="mt-2 text-sm text-brand-brown/70">Tente novamente ou volte para o início.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="btn-primary"
          >
            Tentar novamente
          </button>
          <a href="/" className="btn-secondary">Início</a>
        </div>
      </div>
    </div>
  );
}

const SITE_URL = "https://pedido-express-gourmet.lovable.app";
const SITE_TITLE = "Salgados Congelados e Mini Churros | Salgados Churros Fast | Taboão da Serra";
const SITE_DESC = "Salgados congelados artesanais e mini churros recheados para festas, empresas e eventos. Retirada em Taboão da Serra. Faça seu pedido pelo WhatsApp.";
const SOCIAL_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/E0o6F4lGTXQWDYstgSi3Et7p2Ro1/social-images/social-1784054910513-thumb.webp";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESC },
      { name: "author", content: "Salgados Churros Fast" },
      { name: "theme-color", content: "#c93a2a" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow" },
      { name: "format-detection", content: "telephone=no" },
      { name: "geo.region", content: "BR-SP" },
      { name: "geo.placename", content: "Taboão da Serra" },
      { name: "geo.position", content: "-23.6023;-46.7910" },
      { name: "ICBM", content: "-23.6023, -46.7910" },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Salgados Churros Fast" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESC },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "manifest", href: "/manifest.webmanifest" },
      { rel: "dns-prefetch", href: "https://fonts.googleapis.com" },
      { rel: "dns-prefetch", href: "https://fonts.gstatic.com" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${SITE_URL}/#organization`,
              name: "Salgados Churros Fast",
              url: SITE_URL,
              logo: `${SITE_URL}/favicon.png`,
              image: SOCIAL_IMAGE,
              telephone: "+55 11 96139-2248",
              sameAs: ["https://www.instagram.com/salgadosechurrosfast"],
            },
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              url: SITE_URL,
              name: "Salgados Churros Fast",
              description: SITE_DESC,
              inLanguage: "pt-BR",
              publisher: { "@id": `${SITE_URL}/#organization` },
            },
            {
              "@type": ["LocalBusiness", "FoodEstablishment"],
              "@id": `${SITE_URL}/#business`,
              name: "Salgados Churros Fast",
              image: SOCIAL_IMAGE,
              url: SITE_URL,
              telephone: "+55 11 96139-2248",
              priceRange: "$$",
              servesCuisine: ["Brazilian", "Salgados artesanais", "Churros"],
              "@additionalType": ["https://schema.org/Bakery"],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Rua Gabiroba, 83",
                addressLocality: "Taboão da Serra",
                addressRegion: "SP",
                postalCode: "06767-220",
                addressCountry: "BR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -23.6023,
                longitude: -46.7910,
              },
              areaServed: [
                { "@type": "City", name: "Taboão da Serra" },
                { "@type": "City", name: "Embu das Artes" },
                { "@type": "City", name: "São Paulo" },
                { "@type": "Place", name: "Campo Limpo" },
                { "@type": "Place", name: "Morumbi" },
              ],
              openingHoursSpecification: [{
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                opens: "09:00",
                closes: "20:00",
              }],
              sameAs: ["https://www.instagram.com/salgadosechurrosfast"],
              keywords: "salgados congelados, salgados para festa, mini salgados, churros congelado, salgados artesanais, kit festa, encomenda de salgados, salgados para aniversário, salgados para empresas, Taboão da Serra, São Paulo",
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Outlet />
      </CartProvider>
    </QueryClientProvider>
  );
}
