import { MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/products";

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${COMPANY.whatsappRaw}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-30 h-14 w-14 rounded-full bg-whatsapp text-white grid place-items-center shadow-elevated hover:scale-110 transition pulse-ring"
    >
      <MessageCircle className="h-7 w-7" fill="currentColor" strokeWidth={0} />
    </a>
  );
}
