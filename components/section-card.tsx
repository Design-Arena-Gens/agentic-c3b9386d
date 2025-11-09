type SectionCardProps = {
  title: string;
  summary: string;
  items: {
    heading: string;
    detail: string;
  }[];
};

export function SectionCard({ title, summary, items }: SectionCardProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="border-b border-slate-200 bg-slate-100 px-6 py-4">
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
        <p className="mt-1 text-sm text-slate-600">{summary}</p>
      </div>
      <div className="space-y-4 px-6 py-6">
        {items.map((item) => (
          <div key={item.heading}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary-600">
              {item.heading}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-slate-700">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
