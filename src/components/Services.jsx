import { Workflow, Bot, ServerCog, BarChart3 } from "lucide-react";

const items = [
  {
    icon: Workflow,
    title: "Process mapping & SOPs",
    desc: "Turn tribal knowledge into clear, scalable playbooks and define the right KPIs.",
  },
  {
    icon: Bot,
    title: "Automation & AI assistants",
    desc: "Eliminate busywork with Zapier/Make, RPA, and tailored AI copilots for your teams.",
  },
  {
    icon: ServerCog,
    title: "System integration",
    desc: "Connect CRMs, ERPs, spreadsheets, and data silos into a reliable source of truth.",
  },
  {
    icon: BarChart3,
    title: "Analytics & visibility",
    desc: "Build dashboards that make performance, handoffs, and bottlenecks obvious.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">What we do</h2>
          <p className="mt-3 text-slate-600">Practical consulting focused on measurable outcomes and fast ROI.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 p-6 hover:shadow-md transition bg-white">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-slate-900 text-white grid place-content-center">
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
