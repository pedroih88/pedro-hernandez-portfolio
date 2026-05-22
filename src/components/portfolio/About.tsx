const About = () => {
  return (
    <section id="about" className="relative py-24 lg:py-32 border-t border-border/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-12 gap-8 lg:gap-12">
        <div className="col-span-12 lg:col-span-4">
          <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-4">§ 01 — Profile</p>
          <h2 className="font-display font-light text-4xl lg:text-5xl text-emerald-deep leading-[1.05]">
            A practitioner who brings <em className="text-gold not-italic">rigor</em> and{" "}
            <em className="not-italic">calm</em> to high-stakes change.
          </h2>
          <div className="editorial-rule mt-8 max-w-[160px]" />
        </div>
        <div className="col-span-12 lg:col-span-8 lg:pl-8 lg:border-l border-border/60">
          <div className="space-y-6 text-foreground/80 leading-relaxed text-lg font-body">
            <p className="first-letter:font-display first-letter:text-6xl first-letter:font-light first-letter:text-emerald-deep first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85] first-letter:mt-1">
              Mission-critical programs rarely fail from lack of effort. They fail when quality,
              regulatory, engineering, and operations drift out of alignment, and the cost shows
              up late. I step into that gap.
            </p>
            <p>
              I'm a Senior Program &amp; Quality Leader (PMP) who stabilizes and transforms
              high-stakes environments: the ones where ambiguity is high, the clock is short,
              and leadership needs someone who can rapidly read the operational reality and turn
              it into structure people can execute against.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border/60">
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-4">Where I do my best work</p>
            <p className="text-foreground/80 leading-relaxed text-lg font-body">
              Medical devices, healthtech, advanced manufacturing, and regulated environments
              where decisions have to hold up under audit and under real-world performance.
              Equally at home in crisis response, NPI ramps, QMS transformations, and
              cross-functional rebuilds.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border/60">
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-4">What I'm known for</p>
            <ul className="space-y-5 text-foreground/80 leading-relaxed text-lg font-body">
              <li>
                <span className="font-medium text-emerald-deep">Crisis &amp; escalation leadership.</span>{" "}
                Led global War Rooms across EMEA, NA/LAR, and APJ, cutting escalation resolution
                time by 65% and protecting key OEM relationships.
              </li>
              <li>
                <span className="font-medium text-emerald-deep">Building quality systems from the ground up.</span>{" "}
                Stood up IVD manufacturing quality infrastructure (validation framework, SOPs,
                full documentation suite) meeting ISO 13485, FDA 21 CFR 820, and ISO 14971 in
                time for design freeze and first customer samples.
              </li>
              <li>
                <span className="font-medium text-emerald-deep">Global rollouts that hold under audit.</span>{" "}
                Led 8-month Supplier Management and Propel PLM migration across 5 sites (US,
                Munich, Barcelona); ISO 13485 readiness on schedule, zero major findings
                sustained over 4 years.
              </li>
              <li>
                <span className="font-medium text-emerald-deep">Field analytics that change decisions.</span>{" "}
                Replaced sales-proxy guesswork with telemetry, Power BI, and Tableau
                infrastructure; contributed to 10% YOY warranty cost reduction.
              </li>
            </ul>
          </div>

          <div className="mt-12 pt-8 border-t border-border/60">
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-4">How I operate</p>
            <p className="text-foreground/80 leading-relaxed text-lg font-body">
              Calm under pressure. High ownership, no ego. Predictive and hybrid structures
              when the work demands rigor; Agile adaptability when requirements move. Bilingual
              English/Spanish. PMP, ISO 13485 &amp; ISO 9001 Lead Auditor, FDA QMSR / 21 CFR 820,
              ISO 14971, working knowledge of EU MDR/IVDR and IEC 62304.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border/60">
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-4">What I'm looking for</p>
            <div className="space-y-5 text-foreground/80 leading-relaxed text-lg font-body">
              <p>
                Senior program, operations, or transformation roles where the mission matters,
                leadership is honest about the problem, and execution discipline is valued over
                performance theater. Open across medical device, healthtech, in vitro
                diagnostics, advanced manufacturing, and adjacent regulated and high-tech
                industries.
              </p>
              <p>
                If you're navigating a high-stakes program, scaling a quality system, or need
                someone to bring structure to a situation that's drifting —{" "}
                <a
                  href="#contact"
                  className="text-emerald-deep underline underline-offset-4 decoration-gold/60 hover:decoration-gold transition-colors text-lg border-dotted shadow-sm opacity-100 rounded-sm text-lime-800 bg-slate-200 border-0"
                >
                  let's talk
                </a>
                .
              </p>
              <p>
                📩{" "}
                <a
                  href="mailto:ordepih@outlook.com"
                  className="text-emerald-deep underline underline-offset-4 decoration-gold/60 hover:decoration-gold transition-colors"
                >
                  ordepih@outlook.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
