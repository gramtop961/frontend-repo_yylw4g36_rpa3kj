import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] grid place-items-center overflow-hidden" id="hero">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Readability overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_circle_at_70%_-10%,rgba(56,189,248,0.12),transparent_50%),radial-gradient(900px_circle_at_10%_10%,rgba(168,85,247,0.12),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950/90" />

      {/* Content card */}
      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/15 ring-1 ring-emerald-300/30 px-3 py-1 text-xs text-emerald-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              SMB Digitalization & Automation Experts
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white drop-shadow-[0_6px_20px_rgba(0,0,0,0.55)]">
              Streamline operations. Automate workflows. Grow faster.
            </h1>
            <p className="mt-4 text-white/85 text-lg leading-relaxed drop-shadow-[0_3px_12px_rgba(0,0,0,0.6)]">
              We help small and mid-sized businesses modernize processes with no-code, AI, and cloud tooling — reducing manual work and unlocking scalable growth.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-gradient-to-tr from-emerald-400 via-teal-300 to-cyan-300 text-slate-900 px-6 py-3 font-medium shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:brightness-105 transition">
                Get a free 30‑min consult
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-full px-6 py-3 font-medium text-white ring-1 ring-white/30 bg-white/5 hover:bg-white/10 transition">
                Explore services
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade for contrast with next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-slate-950" />
    </section>
  );
}
