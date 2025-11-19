const logos = [
  { name: 'Notion', svg: (
    <svg viewBox="0 0 48 48" className="h-8 w-8 fill-current"><path d="M6 9.6C6 7.611 7.611 6 9.6 6h28.8C40.389 6 42 7.611 42 9.6v28.8c0 1.989-1.611 3.6-3.6 3.6H9.6C7.611 42 6 40.389 6 38.4V9.6Zm6.5 2.9 18.2 2.1c1.9.2 2.4.2 2.4 1.7v18.9c0 1.1-.4 1.4-1.7 1.2l-20.2-3c-.5-.1-.7-.3-.7-.9V13.7c0-.8.3-1.3 1.7-1.2Zm3.1 5.9v13.1l4.1.6v-6.5l5.8.7v6.3l4.1.6V20.6l-4.1-.5v5.7l-5.8-.8v-5.7l-4.1-.5Z"/></svg>
  )},
  { name: 'Zapier', svg: (
    <svg viewBox="0 0 48 48" className="h-8 w-8 fill-current"><path d="M24 10a2 2 0 0 1 2 2v6.3l5.4-3.1a2 2 0 1 1 2 3.5l-5.4 3.1 5.4 3.1a2 2 0 0 1-2 3.5L26 25.3V32a2 2 0 1 1-4 0v-6.7l-5.4 3.1a2 2 0 1 1-2-3.5l5.4-3.1-5.4-3.1a2 2 0 1 1 2-3.5l5.4 3.1V12a2 2 0 0 1 2-2Z"/></svg>
  )},
  { name: 'Slack', svg: (
    <svg viewBox="0 0 48 48" className="h-8 w-8 fill-current"><path d="M16 6a3 3 0 1 1 0 6h-3a3 3 0 1 1 0-6h3Zm5 3a3 3 0 1 1 6 0v3a3 3 0 1 1-6 0V9Zm-8 8a3 3 0 1 1 0 6H10a3 3 0 1 1 0-6h3Zm23 0a3 3 0 1 1 0 6h-3a3 3 0 1 1 0-6h3ZM16 34a3 3 0 1 1 0 6h-3a3 3 0 1 1 0-6h3Zm5-3a3 3 0 1 1 6 0v3a3 3 0 1 1-6 0v-3Zm-8-8a3 3 0 1 1 0 6H10a3 3 0 1 1 0-6h3Zm23 0a3 3 0 1 1 0 6h-3a3 3 0 1 1 0-6h3Z"/></svg>
  )},
  { name: 'Airtable', svg: (
    <svg viewBox="0 0 48 48" className="h-8 w-8 fill-current"><path d="M9 13.5 24 8l15 5.5-15 5.5L9 13.5Zm0 7.5 15 5.5 15-5.5v8.2c0 .9-.6 1.7-1.4 2L24 38l-13.6-6.3c-.8-.3-1.4-1.1-1.4-2V21Z"/></svg>
  )},
  { name: 'HubSpot', svg: (
    <svg viewBox="0 0 48 48" className="h-8 w-8 fill-current"><path d="M36 22a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-12a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM8 26a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm28 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></svg>
  )},
];

export default function Logos() {
  return (
    <section className="relative py-14">
      <div className="absolute inset-0 -z-10 opacity-[0.45] bg-[radial-gradient(600px_circle_at_50%_-10%,rgba(236,72,153,0.12),transparent_60%),radial-gradient(800px_circle_at_10%_100%,rgba(59,130,246,0.12),transparent_55%)]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-slate-500">We streamline popular tools your team already uses</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-5 gap-6 text-slate-400">
          {logos.map((l) => (
            <div key={l.name} className="flex items-center justify-center opacity-70 hover:opacity-100 transition">
              {l.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
