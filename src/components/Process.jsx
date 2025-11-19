import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Discovery & audit",
    desc: "We map your workflows, tools, and pain points to prioritize high-ROI opportunities.",
  },
  {
    title: "Design & prototype",
    desc: "Low-risk pilots to validate assumptions and get stakeholder buy-in fast.",
  },
  {
    title: "Build & integrate",
    desc: "Automations, assistants, and data flows implemented with strong governance.",
  },
  {
    title: "Train & iterate",
    desc: "Enable your team, monitor metrics, and refine based on real outcomes.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24">
      <div className="absolute inset-0 -z-10 opacity-[0.55] bg-[radial-gradient(700px_circle_at_80%_20%,rgba(56,189,248,0.15),transparent_55%),radial-gradient(900px_circle_at_10%_80%,rgba(99,102,241,0.15),transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">How we work</h2>
          <p className="mt-3 text-slate-600">Clear steps that keep projects moving and stakeholders aligned.</p>
        </div>

        <ol className="mt-10 grid gap-6 sm:grid-cols-2">
          {steps.map((s, i) => (
            <li key={s.title} className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm transition hover:shadow-xl">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-tr from-emerald-400 to-teal-400 opacity-20 blur-2xl" />
              <div className="relative flex items-start gap-4">
                <div className="h-9 w-9 rounded-full bg-slate-900 text-white grid place-content-center font-semibold">{i + 1}</div>
                <div>
                  <h3 className="font-semibold text-slate-900 flex items-center gap-2">{s.title} <CheckCircle2 className="h-4 w-4 text-emerald-500" /></h3>
                  <p className="mt-1 text-slate-600 text-sm">{s.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
