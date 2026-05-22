const roles = [
  {
    period: "2021 — 2025",
    company: "HP Inc. — HP Health Solutions",
    location: "Corvallis, OR",
    title: "Supplier Quality Assurance Engineer,  QMS Lead Auditor , IVD Production Engineer",
    sub: "Principal · Supplier Management Process Owner · QMS Lead Auditor · Process Validation Lead · ISO 13485:2016 · Cleanroom Manufacturing (7)",
    bullets: [
      "Led global rollout of a new Supplier Management Process and the QMS transition to Propel PLM, in compliance with ISO 13485 and aligned to FDA 21 CFR 820.",
      "Delivered zero major audit findings across 250+ suppliers through structured audits, vendor onboarding, and targeted compliance improvements.",
      "Closed 40% of identified compliance gaps by redesigning customer feedback workflows, product ID processes, and contract management controls across NA / EU teams.",
      "Cut process validation cycle by 30% by simplifying IQ / OQ / PQ protocols and improving lifecycle documentation for IVD manufacturing.",
    ],
  },
  {
    period: "2009 — 2021",
    company: "HP Inc. — Imaging & Printing Group",
    location: "Corvallis, OR · Aguadilla, PR",
    title: "NPI Global Customer Assurance Engineer (Principal)",
    sub: "Cleanroom Manufacturing (7/8) · Validation · Technology Transfer · CAPEX Projects",
    bullets: [
      "Led cross-functional global assurance programs for inkjet and 3D printing platforms in compliance with ISO 9001 — improving NPI quality outcomes.",
      "Reduced warranty costs 10% YOY through data and root-cause analysis and corrective action leadership.",
      "Directed global \"War Rooms\" and recall management programs during high-risk events, protecting customer trust.",
      "Cut claims resolution time by 50% with diagnostic tools, real-time telemetry, and integrated escalation workflows.",
    ],
  },
  {
    period: "Foundational",
    company: "HP — Print Head Operations",
    location: "Manufacturing Engineering",
    title: "Manufacturing Engineering 4 (Expert)",
    sub: "Cleanroom · Validation · Technology Transfer",
    bullets: [
      "Delivered scalable Class 7/8 cleanroom operations through validation leadership and ISO-aligned documentation.",
      "Improved equipment uptime and process reliability through SPC and OEE initiatives.",
      "Executed technology transfers and CAPEX projects, authoring SOPs supporting ISO 9001 certification.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 lg:col-span-5">
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-4">§ 03 — The Dossier</p>
            <h2 className="font-display font-light text-4xl lg:text-5xl text-emerald-deep leading-[1.05]">
              Selected engagements & <em className="text-gold not-italic">measurable</em> outcomes.
            </h2>
          </div>
        </div>

        <div className="space-y-px bg-border">
          {roles.map((r, i) => (
            <article
              key={r.company + i}
              className="bg-cream-soft p-8 lg:p-12 grid grid-cols-12 gap-6 lg:gap-10 group hover:bg-cream transition-colors duration-500"
            >
              <div className="col-span-12 lg:col-span-3">
                <div className="text-[11px] tracking-[0.3em] uppercase text-gold">{r.period}</div>
                <div className="mt-3 font-display text-xl text-emerald-deep leading-snug">
                  {r.company}
                </div>
                <div className="mt-1 text-xs text-muted-foreground tracking-widest uppercase">
                  {r.location}
                </div>
              </div>
              <div className="col-span-12 lg:col-span-9 lg:border-l border-border/70 lg:pl-10">
                <h3 className="font-display text-2xl lg:text-3xl font-light text-emerald-deep">
                  {r.title}
                </h3>
                <p className="text-sm text-emerald-mid italic mt-1">{r.sub}</p>
                <ul className="mt-6 space-y-3">
                  {r.bullets.map((b, j) => (
                    <li key={j} className="flex gap-4 text-foreground/80 leading-relaxed">
                      <span className="font-display text-gold text-sm mt-1.5 tracking-widest">
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
