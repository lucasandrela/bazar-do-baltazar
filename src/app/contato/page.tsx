"use client";

import React, { useState } from "react";

export default function Contato() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    assunto: "Parceria",
    mensagem: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ nome: "", email: "", assunto: "Parceria", mensagem: "" });
    }, 1200);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="space-y-12 animate-fade-in select-none">
      
      {/* Header */}
      <div className="border-b border-brand-border pb-8 text-center sm:text-left space-y-2">
        <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-neutral-400 dark:text-neutral-500">
          fale conosco
        </span>
        <h1 className="font-editorial text-3xl sm:text-5xl text-black dark:text-white">
          Contatos & Informações
        </h1>
        <p className="text-[11px] opacity-60 max-w-md tracking-wide leading-relaxed font-normal">
          Para dúvidas sobre envios de produtos, visitas agendadas ao espaço ou parcerias de desapego.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Side: Editorial Info */}
        <div className="lg:col-span-5 space-y-12">
          
          <div className="space-y-6">
            <span className="text-[9px] uppercase tracking-[0.25em] font-bold text-neutral-400 block">o espaço físico</span>
            <h2 className="font-editorial text-2xl text-black dark:text-white leading-tight">
              Venha garimpar presencialmente em São Paulo.
            </h2>
            <div className="text-[11px] opacity-60 space-y-4 leading-relaxed font-normal tracking-wide">
              <p>
                Rua Augusta, 1342 — Consolação<br />
                São Paulo — SP, CEP 01304-001
              </p>
              <p>
                Terça a Sexta — 11h às 19h<br />
                Sábado — 10h às 18h
              </p>
              <p>
                info@bazardobaltazar.com.br<br />
                (11) 98765-4321
              </p>
            </div>
          </div>

          <div className="border-t border-brand-border pt-6 space-y-3">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em]">DESAPEGOS VINTAGE</h3>
            <p className="text-[10px] opacity-65 leading-relaxed font-normal tracking-wide">
              Tem vinis originais, jaquetas antigas de couro legítimo ou câmeras analógicas SLR para vender? Mande os detalhes pelo formulário e retornaremos com uma proposta de avaliação.
            </p>
          </div>

        </div>

        {/* Right Side: Clean Form */}
        <div className="lg:col-span-7">
          {submitted ? (
            <div className="p-8 border border-brand-border bg-neutral-50 dark:bg-neutral-900 text-center space-y-4">
              <span className="text-3xl">✉️</span>
              <h2 className="font-editorial text-2xl text-black dark:text-white">
                Mensagem enviada com sucesso
              </h2>
              <p className="text-[10px] opacity-65 leading-relaxed max-w-xs mx-auto tracking-wide">
                Agradecemos o contato. O Baltazar responderá sua mensagem por e-mail em até 24 horas úteis.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="zara-btn text-[9px] mt-4"
              >
                ESCREVER NOVA MENSAGEM
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">
                FORMULÁRIO DE CONTATO
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Nome */}
                <div className="flex flex-col space-y-1">
                  <label className="text-[9px] uppercase tracking-[0.15em] font-bold text-neutral-400">
                    Seu Nome
                  </label>
                  <input
                    type="text"
                    name="nome"
                    required
                    value={form.nome}
                    onChange={handleChange}
                    placeholder="DIGITE SEU NOME..."
                    className="bg-transparent border-b border-brand-border py-2 text-xs font-medium focus:outline-none focus:border-black dark:focus:border-white text-black dark:text-white uppercase tracking-wider placeholder:text-neutral-300 dark:placeholder:text-neutral-700"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col space-y-1">
                  <label className="text-[9px] uppercase tracking-[0.15em] font-bold text-neutral-400">
                    Seu E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="DIGITE SEU E-MAIL..."
                    className="bg-transparent border-b border-brand-border py-2 text-xs font-medium focus:outline-none focus:border-black dark:focus:border-white text-black dark:text-white uppercase tracking-wider placeholder:text-neutral-300 dark:placeholder:text-neutral-700"
                  />
                </div>
              </div>

              {/* Assunto */}
              <div className="flex flex-col space-y-1">
                <label className="text-[9px] uppercase tracking-[0.15em] font-bold text-neutral-400">
                  Assunto da Mensagem
                </label>
                <select
                  name="assunto"
                  value={form.assunto}
                  onChange={handleChange}
                  className="bg-transparent border-b border-brand-border py-2 text-xs font-medium focus:outline-none focus:border-black dark:focus:border-white text-black dark:text-white uppercase tracking-wider cursor-pointer"
                >
                  <option className="bg-white dark:bg-black" value="Parceria">QUERO VENDER DESAPEGOS (PARCERIA)</option>
                  <option className="bg-white dark:bg-black" value="Duvida">DÚVIDAS SOBRE COMPRAS / ENTREGAS</option>
                  <option className="bg-white dark:bg-black" value="Imprensa">IMPRENSA & COMUNICAÇÃO</option>
                  <option className="bg-white dark:bg-black" value="Outro">OUTROS ASSUNTOS</option>
                </select>
              </div>

              {/* Mensagem */}
              <div className="flex flex-col space-y-1">
                <label className="text-[9px] uppercase tracking-[0.15em] font-bold text-neutral-400">
                  Sua Mensagem
                </label>
                <textarea
                  name="mensagem"
                  required
                  rows={4}
                  value={form.mensagem}
                  onChange={handleChange}
                  placeholder="ESCREVA SUA MENSAGEM AQUI..."
                  className="bg-transparent border-b border-brand-border py-2 text-xs font-medium focus:outline-none focus:border-black dark:focus:border-white text-black dark:text-white uppercase tracking-wider placeholder:text-neutral-300 dark:placeholder:text-neutral-700 resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="zara-btn w-full py-4 text-[10px]"
              >
                {loading ? "ENVIANDO..." : "ENVIAR CORRESPONDÊNCIA"}
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
}
