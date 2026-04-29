const breakdowns = [
  "Misalignment between engineering, quality, operations, and stakeholders.",
  "Ineffective or fragmented Quality Management Systems (QMS / eQMS).",
  "Escalations and risk exposure threatening product integrity, compliance, or timelines.",
];

const differentiators = [
  {
    no: "01",
    title: "Stabilizes chaos",
    body: "Brings order, accountability, and resolution to high-stakes, compliance-driven programs where failure carries real consequences.",
  },
  {
    no: "02",
    title: "Aligns disconnected functions",
    body: "Connects Quality, Regulatory, Engineering, and Operations early in the lifecycle — before misalignment becomes risk.",
  },
  {
    no: "03",
    title: "Transforms QMS frameworks",
    body: "Designs and deploys scalable, audit-ready systems aligned to ISO 13485, ISO 9001, FDA QMSR, and MDSAP.",
  },
  {
    no: "04",
    title: "Leads escalations with precision",
    body: "Turns reactive environments into controlled systems — protecting product integrity, customer trust, and timelines.",
  },
  {
    no: "05",
    title: "Bridges strategy and execution",
    body: "Ensures compliance doesn't slow innovation, and speed doesn't break quality. Lifecycle ownership from concept to sunset.",
  },
  {
    no: "06",
    title: "Risk-based decision making",
    body: "Balances compliance, speed, and business outcomes — system-level thinking instead of siloed execution.",
  },
];

const positioning = [
  "eQMS Implementation & Remediation",
  "Quality + Program Integration for Medical Devices",
  "Compliance-Driven Product Launches",
  "Supplier Quality & Risk Stabilization",
  "Compliance-Driven NPI Leadership",
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="relative py-24 lg:py-32 border-t border-border/60 bg-cream-soft"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 lg:col-span-5">
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-4">
              § 04 — The Value Proposition
            </p>
            <h2 className="font-display font-light text-4xl lg:text-5xl text-emerald-deep leading-[1.05]">
              Not a project manager. A <em className="text-gold not-italic">systems-level operator</em> for programs that cannot afford to fail.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 self-end">
            <p className="text-foreground/75 text-lg leading-relaxed">
              Pedro operates at the intersection of <em>program execution</em>, <em>quality systems</em>,
              and <em>regulatory-driven transformation</em> — deployed into environments where
              organizations face one of three critical breakdowns:
            </p>
            <ul className="mt-6 space-y-3">
              {breakdowns.map((b, i) => (
                <li key={i} className="flex gap-4 text-foreground/80 leading-relaxed">
                  <span className="font-display text-gold text-sm mt-1.5 tracking-widest">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Narrative Edge — pull quote */}
        <div className="grid grid-cols-12 gap-8 mb-20 py-12 border-y border-border/60">
          <div className="col-span-12 lg:col-span-3">
            <p className="text-[10px] tracking-[0.4em] uppercase text-emerald-mid">
              The Narrative Edge
            </p>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <p className="font-display text-2xl lg:text-3xl font-light text-emerald-deep leading-snug">
              Most candidates say, <span className="text-foreground/50 italic">"I manage projects."</span>{" "}
              Pedro demonstrates: <em className="text-gold not-italic">"I bring control, alignment, and
              compliance to complex systems where failure carries real consequences."</em>
            </p>
          </div>
        </div>

        {/* What Differentiates Him — six cards */}
        <div className="mb-12">
          <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-3">
            What Separates Him
          </p>
          <h3 className="font-display font-light text-3xl lg:text-4xl text-emerald-deep leading-[1.1] max-w-3xl">
            Signature strengths — durable in an era of AI compression.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {differentiators.map((d) => (
            <article
              key={d.no}
              className="bg-cream p-8 lg:p-10 group hover:bg-cream-soft transition-colors duration-500 min-h-[260px] flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-display text-5xl font-light text-gold/80 leading-none">
                  {d.no}
                </span>
                <span className="w-8 h-px bg-emerald-deep/20 mt-7 group-hover:w-16 group-hover:bg-gold transition-all duration-500" />
              </div>
              <h4 className="font-display text-xl lg:text-2xl font-normal text-emerald-deep mb-3 leading-snug">
                {d.title}
              </h4>
              <p className="text-foreground/75 text-sm leading-relaxed font-body">
                {d.body}
              </p>
            </article>
          ))}
        </div>

        {/* Market Positioning */}
        <div className="grid grid-cols-12 gap-8 mt-20">
          <div className="col-span-12 lg:col-span-4">
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-4">
              Market Positioning
            </p>
            <h3 className="font-display font-light text-3xl lg:text-4xl text-emerald-deep leading-[1.1]">
              Positioned for <em className="text-gold not-italic">problems</em> companies cannot afford to get wrong.
            </h3>
            <div className="editorial-rule mt-8 max-w-[160px]" />
          </div>
          <div className="col-span-12 lg:col-span-8 lg:pl-8 lg:border-l border-border/60">
            <ul className="space-y-px bg-border">
              {positioning.map((p, i) => (
                <li
                  key={p}
                  className="bg-cream-soft p-6 lg:p-7 flex items-baseline gap-6 group hover:bg-cream transition-colors duration-500"
                >
                  <span className="font-display text-sm tracking-widest text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-lg lg:text-xl text-emerald-deep">
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
