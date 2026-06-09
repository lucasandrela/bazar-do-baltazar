import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white border-t border-brand-border py-16 px-6 select-none transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        
        {/* Editorial Text */}
        <div className="space-y-4">
          <span className="font-editorial text-xl uppercase tracking-[0.2em] block">
            BALTAZAR
          </span>
          <p className="text-[11px] opacity-60 leading-relaxed font-normal max-w-xs tracking-wide">
            Uma curadoria rigorosa de peças vintage selecionadas pela sua qualidade, história e design atemporal. Valorizamos a permanência e a sofisticação do vestuário e objetos históricos.
          </p>
        </div>

        {/* Address / Hours */}
        <div className="space-y-4">
          <h4 className="text-[11px] font-bold uppercase tracking-[0.2em]">
            ESPAÇO FÍSICO
          </h4>
          <p className="text-[11px] opacity-60 leading-relaxed tracking-wide font-normal">
            Rua Augusta, 1342 — Consolação<br />
            São Paulo, Brasil<br /><br />
            Terça a Sábado — 11h às 19h
          </p>
        </div>

        {/* Social / Contact */}
        <div className="space-y-4">
          <h4 className="text-[11px] font-bold uppercase tracking-[0.2em]">
            CONEXÕES
          </h4>
          <div className="flex flex-col gap-2">
            {["Instagram", "Pinterest", "WhatsApp"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-[10px] uppercase tracking-[0.15em] opacity-60 hover:opacity-100 hover:underline transition-all w-fit font-normal"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Copy / Legals */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4 text-[9px] opacity-40 uppercase tracking-[0.25em]">
        <p>© {new Date().getFullYear()} BALTAZAR BAZAR. TODOS OS DIREITOS RESERVADOS.</p>
        <p>EDITORIAL MINIMALISTA ☕</p>
      </div>
    </footer>
  );
}
