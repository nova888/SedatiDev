import { ArrowUp } from "lucide-react";
import logo from "@/assets/sedati-logo.png";

export function Footer() {
  return (
    <footer className="relative pt-16 pb-8 border-t border-border">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img src={logo} alt="Sedati Dev" className="h-9 w-9" />
              <span className="text-base font-bold">Sedati<span className="text-primary">Dev</span></span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Studio teknologi yang berfokus pada solusi website, web app, dan implementasi AI
              untuk membantu bisnis berkembang di era digital.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Home", "Tentang", "Layanan", "Portfolio", "Kontak"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-primary-glow transition">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Layanan</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Web Development", "AI Implementation", "Machine Learning", "Data Science", "Automation"].map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Sedati Dev. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary-glow transition"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
