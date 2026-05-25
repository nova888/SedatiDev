import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

export function ScrollProgress() {
  const [w, setW] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setW(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-primary to-primary-glow transition-[width] duration-150"
        style={{ width: `${w}%` }}
      />
    </div>
  );
}

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/6281234567890"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 group inline-flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-primary to-primary-glow shadow-glow hover:scale-110 transition"
      aria-label="WhatsApp"
    >
      <span className="absolute inset-0 rounded-full animate-ping bg-primary/40" />
      <MessageCircle className="relative h-6 w-6 text-primary-foreground" />
    </a>
  );
}
