import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] grid place-items-center overflow-hidden bg-slate-950" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 px-3 py-1 text-xs text-white backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              SMB Digitalization & Automation Experts
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              Streamline operations. Automate workflows. Grow faster.
            </h1>
            <p className="mt-4 text-white/80 text-lg">
              We help small and mid-sized businesses modernize processes with no-code, AI, and cloud tooling — reducing manual work and unlocking scalable growth.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-5 py-3 font-medium shadow hover:shadow-md transition">
                Get a free 30‑min consult
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-full bg-white/10 ring-1 ring-white/30 text-white px-5 py-3 font-medium hover:bg-white/20 transition">
                Explore services
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
    </section>
  );
}
