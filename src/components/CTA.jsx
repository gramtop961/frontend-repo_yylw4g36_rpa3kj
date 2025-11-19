export default function CTA() {
  return (
    <section id="contact" className="relative bg-slate-900 py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(600px_circle_at_10%_10%,#22d3ee,transparent_50%),radial-gradient(800px_circle_at_80%_20%,#a78bfa,transparent_50%),radial-gradient(700px_circle_at_50%_90%,#34d399,transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 sm:p-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Let’s identify 3 quick wins in your operations</h2>
            <p className="mt-3 text-white/80">Book a free consultation and we’ll map opportunities to cut manual work in under 2 weeks.</p>
          </div>
          <form className="mt-8 grid gap-3 sm:grid-cols-2">
            <input type="text" placeholder="Full name" className="rounded-xl bg-white/90 px-4 py-3 text-slate-900 placeholder-slate-500 focus:outline-none" />
            <input type="email" placeholder="Work email" className="rounded-xl bg-white/90 px-4 py-3 text-slate-900 placeholder-slate-500 focus:outline-none" />
            <input type="text" placeholder="Company" className="rounded-xl bg-white/90 px-4 py-3 text-slate-900 placeholder-slate-500 focus:outline-none sm:col-span-2" />
            <textarea placeholder="What’s the main problem you want to solve?" className="rounded-xl bg-white/90 px-4 py-3 text-slate-900 placeholder-slate-500 focus:outline-none sm:col-span-2 min-h-[120px]" />
            <button type="button" className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-5 py-3 font-medium text-slate-900 hover:bg-emerald-300 transition sm:w-max">Request free consult</button>
          </form>
        </div>
      </div>
    </section>
  );
}
