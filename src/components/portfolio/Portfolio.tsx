const aiProjects = [
  {
    no: "01",
    title: "Quality Co-Pilot for Audit Readiness",
    tag: "Generative AI · QMS",
    body: "Conversational assistant trained on ISO 13485, FDA 21 CFR 820, and EU MDR/IVDR clauses to surface gaps, draft CAPA narratives, and accelerate internal audit prep.",
    stack: ["RAG", "LLM Orchestration", "Prompt Governance"],
  },
  {
    no: "02",
    title: "Supplier Risk Intelligence Dashboard",
    tag: "Predictive Analytics",
    body: "AI-assisted scoring model that triangulates audit history, SCAR cadence, and delivery telemetry to flag emerging supplier risk before it reaches the line.",
    stack: ["Risk Scoring", "KPI/OKR Telemetry", "Power BI"],
  },
  {
    no: "03",
    title: "Complaint Triage & Trend Detection",
    tag: "NLP · Customer Feedback",
    body: "Natural-language pipeline that clusters customer complaints, links them to product identifiers, and routes high-severity signals into the CAPA workflow automatically.",
    stack: ["NLP Clustering", "Severity Routing", "CAPA Hooks"],
  },
  {
    no: "04",
    title: "Validation Document Drafter",
    tag: "AI in Project Management",
    body: "Template-aware assistant that drafts IQ/OQ/PQ protocols, traceability matrices, and risk evaluations from engineering inputs — reviewed and finalized by SMEs.",
    stack: ["Structured Generation", "Review Loops", "Traceability"],
  },
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="relative py-24 lg:py-32 border-t border-border/60 bg-cream-soft"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 lg:col-span-5">
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-4">
              § 04 — Artifacts Under Development
            </p>
            <h2 className="font-display font-light text-4xl lg:text-5xl text-emerald-deep leading-[1.05]">
              Applied <em className="text-gold not-italic">AI concepts</em> for quality, compliance &amp; program leadership.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 self-end">
            <p className="text-foreground/75 text-lg leading-relaxed">
              A working set of AI prototypes and frameworks — informed by PMI's <em>AI in Project
              Management</em> training — designed to augment auditors, quality engineers, and
              program leaders without compromising governance, traceability, or human oversight.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {aiProjects.map((p) => (
            <article
              key={p.no}
              className="bg-cream p-8 lg:p-10 group hover:bg-cream-soft transition-colors duration-500"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="font-display text-5xl font-light text-gold/80 leading-none">
                  {p.no}
                </div>
                <span className="text-[10px] tracking-[0.3em] uppercase text-emerald-mid mt-2">
                  {p.tag}
                </span>
              </div>
              <div className="editorial-rule mt-6 max-w-[120px]" />
              <h3 className="mt-6 font-display text-2xl lg:text-3xl font-light text-emerald-deep leading-snug">
                {p.title}
              </h3>
              <p className="mt-4 text-foreground/80 leading-relaxed">
                {p.body}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li
                    key={s}
                    className="text-[11px] tracking-[0.15em] uppercase px-3 py-1 border border-border/70 text-emerald-mid"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
