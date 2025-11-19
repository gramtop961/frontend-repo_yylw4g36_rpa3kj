import { Menu, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur supports-[backdrop-filter]:bg-white/30 bg-white/60 border-b border-slate-200/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-fuchsia-500 via-blue-500 to-cyan-400 blur-sm opacity-70 group-hover:opacity-100 transition" />
              <div className="relative grid place-content-center h-9 w-9 rounded-lg bg-slate-900 text-white">
                <Sparkles className="h-5 w-5" />
              </div>
            </div>
            <span className="text-slate-900 font-semibold tracking-tight">FlowForge Consulting</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-slate-700">
            <a href="#services" className="hover:text-slate-900 transition">Services</a>
            <a href="#process" className="hover:text-slate-900 transition">Process</a>
            <a href="#work" className="hover:text-slate-900 transition">Clients</a>
            <a href="#about" className="hover:text-slate-900 transition">About</a>
          </nav>

          <div className="hidden md:block">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-gradient-to-tr from-emerald-400 via-teal-300 to-cyan-300 text-slate-900 px-4 py-2 text-sm font-medium shadow hover:brightness-105 transition">
              Book free call
            </a>
          </div>

          <button onClick={() => setOpen(v => !v)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-slate-700 hover:bg-white/70">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in">
            <div className="flex flex-col gap-2 text-slate-800">
              <a href="#services" className="px-3 py-2 rounded-md hover:bg-white/70">Services</a>
              <a href="#process" className="px-3 py-2 rounded-md hover:bg-white/70">Process</a>
              <a href="#work" className="px-3 py-2 rounded-md hover:bg-white/70">Clients</a>
              <a href="#about" className="px-3 py-2 rounded-md hover:bg-white/70">About</a>
              <a href="#contact" className="px-3 py-2 rounded-md bg-slate-900 text-white text-center">Book free call</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
