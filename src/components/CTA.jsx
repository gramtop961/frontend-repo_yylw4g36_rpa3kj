export default function CTA() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-[0.35] bg-[radial-gradient(700px_circle_at_10%_10%,rgba(34,211,238,0.25),transparent_50%),radial-gradient(900px_circle_at_80%_20%,rgba(167,139,250,0.25),transparent_50%),radial-gradient(800px_circle_at_50%_90%,rgba(52,211,153,0.25),transparent_50%)]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/20 bg-gradient-to-br from-slate-900/90 to-slate-900/60 backdrop-blur-xl p-8 sm:p-10 shadow-[0_10px_40px_rgba(2,6,23,0.6)]">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Let’s identify 3 quick wins in your operations</h2>
            <p className="mt-3 text-white/80">Book a free consultation and we’ll map opportunities to cut manual work in under 2 weeks.</p>
          </div>
          <form className="mt-8 grid gap-3 sm:grid-cols-2">
            <input aria-label="Full name" type="text" placeholder="Full name" className="rounded-xl bg-white px-4 py-3 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/60" />
            <input aria-label="Work email" type="email" placeholder="Work email" className="rounded-xl bg-white px-4 py-3 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/60" />
            <input aria-label="Company" type="text" placeholder="Company" className="rounded-xl bg-white px-4 py-3 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 sm:col-span-2" />
            <textarea aria-label="Problem description" placeholder="What’s the main problem you want to solve?" className="rounded-xl bg-white px-4 py-3 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 sm:col-span-2 min-h-[120px]" />
            <button type="button" className="inline-flex items-center justify-center rounded-full bg-gradient-to-tr from-emerald-400 via-teal-300 to-cyan-300 px-6 py-3 font-medium text-slate-900 hover:brightness-105 transition sm:w-max">Request free consult</button>
          </form>
        </div>
      </div>
    </section>
  );
}
