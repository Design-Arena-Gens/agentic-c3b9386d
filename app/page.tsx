import { SectionCard } from "../components/section-card";
import { sections } from "../lib/sections";

export default function Page() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-12 px-6 py-16">
      <header className="space-y-6">
        <p className="text-sm font-semibold uppercase text-primary-600">
          Neuro-Symbolic CARS Blueprint
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Compositional Habits for Contextual Awareness Recommender Systems
        </h1>
        <p className="max-w-3xl text-lg text-slate-700">
          A pragmatic implementation guide for integrating compositional
          generalization into contextual recommenders using neuro-symbolic AI.
          The approach structures user habits as transferable cognitive units
          across contexts in the LDOS-CoMoDa dataset.
        </p>
      </header>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {sections.map((section) => (
          <SectionCard
            key={section.title}
            title={section.title}
            summary={section.summary}
            items={section.items}
          />
        ))}
      </div>
      <footer className="rounded-2xl border border-dashed border-primary-300 bg-primary-50 px-6 py-6">
        <h2 className="text-lg font-semibold text-primary-800">
          Quick Start Checklist
        </h2>
        <ol className="mt-4 space-y-2 text-sm text-primary-900">
          <li>
            1. Prototype the data pipeline to generate habit graphs and context
            tensors.
          </li>
          <li>
            2. Train a contextual SASRec baseline with explicit habit feature
            inputs.
          </li>
          <li>
            3. Layer differentiable logic constraints for habit consistency and
            monitor rule violations.
          </li>
          <li>
            4. Add meta-learning episodes that withhold context combinations to
            verify compositional transfer.
          </li>
        </ol>
      </footer>
    </main>
  );
}
