const artifacts = [
  {
    no: "01",
    title: "RegOps Monitoring and Control: EU MDR / EU IVDR + UDI/EUDAMED",
    status: "Beta Test",
    body: "Cross-walk and gap-assessment tool aligning ISO 13485:2016, and FDA QMS (21 CFR 820 harmonization) into a single audit-ready operating model.\n\nWant to be a tester?",
    link: "https://regops-control-tower-qmsr-assmt.netlify.app/",
  },
  {
    no: "02",
    title: "Monitoring and Control: EU MDR / EU IVDR + UDI/EUDAMED",
    status: "Concept",
    body: "Executive gap analysis and transition narrative for manufacturers placing medical devices and IVDs on the EU market under EU MDR 2017/745 and EU IVDR 2017/746.\n\nAI-supported research covering transition from legacy MDD (93/42/EEC), AIMD (90/385/EEC), and IVDD (98/79/EC) frameworks, with obligations mapped under the UDI system and EUDAMED database. The matrix identifies 55 compliance gaps across eight functional areas — each with Impact/Implication, Recommended Action, and Suggested Supporting Evidence fields.",
    link: "https://eu-mdr-ivdr-gap-matrix-lt-import-expt.netlify.app/",
  },
];

const Artifacts = () => {
  return (
    <section
      id="artifacts"
      className="relative py-24 lg:py-32 border-t border-border/60 bg-cream"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 lg:col-span-5">
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-4">
              § 01 — Regulatory Intelligence Tools
            </p>
            <h2 className="font-display font-light text-4xl lg:text-5xl text-emerald-deep leading-[1.05]">
              AI-assisted readiness tools for medical device innovators — <em className="text-gold not-italic">in active build</em>.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 self-end">
            <p className="text-foreground/75 text-lg leading-relaxed">
              A working asset distilled from 20+ years of program and quality
              leadership — engineered to compress decision time, reduce ambiguity, and make
              complex compliance environments operable.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {artifacts.map((a) => (
            <article
              key={a.no}
              className="bg-cream-soft p-8 lg:p-10 group hover:bg-cream transition-colors duration-500 min-h-[280px] flex flex-col border border-border"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-display text-5xl font-light text-gold/80 leading-none">
                  {a.no}
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-emerald-mid border border-emerald-mid/30 px-2 py-1 rounded-sm">
                  {a.status}
                </span>
              </div>
              <h4 className="font-display text-xl lg:text-2xl font-normal text-emerald-deep mb-3 leading-snug">
                {a.title}
              </h4>
              <p className="text-foreground/75 text-sm leading-relaxed font-body whitespace-pre-line">
                {a.body}
              </p>
              {a.link && (
                <a
                  href={a.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-xs uppercase tracking-[0.2em] transition-colors font-bold bg-lime-700 text-slate-200 px-3 py-2 rounded-sm inline-block w-fit hover:bg-lime-800"
                >
                  Click Here for to TEST the APP.
                </a>
              )}
              <div className="mt-6 space-y-4 text-foreground/75 text-sm leading-relaxed font-body">
                <p>Even 10 minutes of poking around would be incredibly helpful.</p>
                <p>
                  The Executive Summary tab has a full walkthrough, but in short, try clicking through the tabs, edit a gap item or two, and hit the <strong>Commit Changes</strong> button in the bottom-right corner to see the audit trail in action.
                </p>
                <div>
                  <p className="mb-2">A few things I'm curious about:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Does the layout feel intuitive?</li>
                    <li>Anything missing or off for your area?</li>
                    <li>Is the commit/audit trail workflow practical or overkill?</li>
                  </ul>
                </div>
                <p>
                  And honestly, I'd love an excuse to catch up. If you have 15–20 minutes for a quick call, I'm happy to walk you through it and say hi. Just let me know what works for your schedule and I'll make myself available.
                </p>
                <p>
                  You can also send me an email to{" "}
                  <a href="mailto:ordepih@outlook.com" className="text-emerald-deep underline hover:text-gold transition-colors">
                    ordepih@outlook.com
                  </a>{" "}
                  with your comments and insights.
                </p>
                <p className="italic">
                  Whatever feedback you can share — even a one-liner — would go a long way. Thanks for considering it, and I really appreciate you!
                </p>
              </div>
              <div className="mt-auto pt-6">
                <span className="w-8 h-px bg-emerald-deep/20 inline-block group-hover:w-16 group-hover:bg-gold transition-all duration-500" />
              </div>
            </article>
          ))}

          {/* Right-hand side panel */}
          <div className="flex flex-col gap-6">
            <p className="text-foreground/75 text-base leading-relaxed italic">
              A focused preview of the framework — built to be tested, stressed, and refined
              against real-world quality scenarios.
            </p>

            <div className="bg-cream-soft border border-border p-6 lg:p-8">
              <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-3">
                What you'll see in the artifacts
              </p>
              <h5 className="font-display text-xl text-emerald-deep mb-3 leading-snug">
                A live, interactive readiness map
              </h5>
              <ul className="text-foreground/75 text-sm leading-relaxed space-y-2 list-disc pl-5">
                <li>Regulations updates with clause crosswalk</li>
                <li>Gap-assessment prompts with audit-ready language</li>
                <li>Single operating view across frameworks</li>
              </ul>
            </div>

          </div>
        </div>

        <div className="mt-12 bg-emerald-deep text-cream p-6 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-3">
                Try it now
              </p>
              <h5 className="font-display text-2xl mb-3 leading-snug">
                Run the artifacts in your browser
              </h5>
              <p className="text-cream/80 text-sm leading-relaxed">
                No signup required. Open a live build and walk through the readiness flow end-to-end.
              </p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              <a
                href="https://regops-control-tower-qmsr-assmt.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.2em] font-bold bg-gold text-emerald-deep px-4 py-4 rounded-sm hover:bg-gold/90 transition-colors text-center flex items-center justify-center"
              >
                Launch the App → RegOps Monitoring and Control: ISO 13485 + FDA QMSR
              </a>
              <a
                href="https://eu-mdr-ivdr-gap-matrix-lt-import-expt.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.2em] font-bold bg-gold text-emerald-deep px-4 py-4 rounded-sm hover:bg-gold/90 transition-colors text-center flex items-center justify-center"
              >
                Launch the App → RegOps Monitoring and Control: EU MDR / EU IVDR + UDI/EUDAMED
              </a>
            </div>
          </div>
        </div>

        <p className="mt-12 text-sm text-foreground/80 hover:text-emerald-deep transition-colors relative group font-bold text-center border-none shadow">
          Interested in early access or collaboration on a specific artifact? Reach out via the Contact section.
        </p>
      </div>
    </section>
  );
};

export default Artifacts;
