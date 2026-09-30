"use client";

export default function FormCard({ title, description, children }) {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-950">
      <div className="border-b border-slate-800 px-6 py-5">
        <h3 className="text-lg font-semibold text-white">{title}</h3>

        {description && (
          <p className="mt-1 text-sm text-slate-400">{description}</p>
        )}
      </div>

      <div className="p-6">{children}</div>
    </section>
  );
}
