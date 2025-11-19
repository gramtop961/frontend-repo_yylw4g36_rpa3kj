import { Workflow, Bot, ServerCog, BarChart3 } from "lucide-react";

const items = [
  {
    icon: Workflow,
    title: "Process mapping & SOPs",
    desc: "Turn tribal knowledge into clear, scalable playbooks and define the right KPIs.",
    color: "from-fuchsia-500 to-violet-500",
  },
  {
    icon: Bot,
    title: "Automation & AI assistants",
    desc: "Eliminate busywork with Zapier/Make, RPA, and tailored AI copilots for your teams.",
    color: "from-emerald-400 to-cyan-400",
  },
  {
    icon: ServerCog,
    title: "System integration",
    desc: "Connect CRMs, ERPs, spreadsheets, and data silos into a reliable source of truth.",
    color: "from-blue-500 to-sky-400",
  },
  {
    icon: BarChart3,
    title: "Analytics & visibility",
    desc: "Build dashboards that make performance, handoffs, and bottlenecks obvious.",
    color: "from-amber-400 to-orange-500",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      {/* soft background texture */}
      <div className="absolute inset-0 -z-10 opacity-[0.5] bg-[radial-gradient(800px_circle_at_10%_10%,rgba(168,85,247,0.15),transparent_60%),radial-gradient(900px_circle_at_90%_0%,rgba(34,197,94,0.12),transparent_60%)]" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">What we do</h2>
          <p className="mt-3 text-slate-600">Practical consulting focused on measurable outcomes and fast ROI.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {items.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-6 transition shadow-sm hover:shadow-xl">
              <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-tr ${color} opacity-20 blur-2xl`} />
              <div className="relative flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-slate-900 text-white grid place-content-center group-hover:scale-105 transition">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{title}</h3>
                  <p className="mt-1 text-slate-600 text-sm">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
