import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  label?: string;
  message?: string;
}

const PHONE_NUMBER = "34711051071";

export function WhatsAppButton({
  label = "Chat with us",
  message = "Hi, I need help with leak detection in Lanzarote",
}: WhatsAppButtonProps = {}) {
  const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center justify-center w-14 h-14 min-w-[56px] min-h-[56px] bg-[#25D366] hover:bg-[#20BA5A] active:bg-[#1da851] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 animate-fade-in group touch-manipulation"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 fill-current" />
      <span className="hidden sm:block absolute right-full mr-3 px-3 py-2 bg-foreground text-background text-sm font-display tracking-wider uppercase whitespace-nowrap rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        {label}
      </span>
    </a>
  );
}
