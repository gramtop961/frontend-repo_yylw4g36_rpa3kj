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
    <section id="process" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">How we work</h2>
          <p className="mt-3 text-slate-600">Clear steps that keep projects moving and stakeholders aligned.</p>
        </div>

        <ol className="mt-10 grid gap-6 sm:grid-cols-2">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-2xl border border-slate-200 p-6 bg-white">
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-emerald-100 text-emerald-700 grid place-content-center font-semibold">{i + 1}</div>
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
