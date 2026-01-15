

export function AboutSection() {
  return (
    <section
      id="about"
      className="rounded-3xl border border-border/50 bg-card/70 p-5 sm:p-6 md:p-10 dark:border-border/60"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2.5fr)]">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            About
          </p>
        </div>

        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p>
            I'm Santhosh. I've hit Radiant in two regions and built budgets
            from scratch in four industries. One of those is definitely more
            impressive to my parents.
          </p>
          <p>
            I've worked in accounting and finance across retail, manufacturing,
            banking, consulting, and a startup I co-founded. Most of my work
            has been around budgeting, forecasting, financial reporting, and
            operational accounting. The common thread? I tend to land in places
            where the structure doesn't exist yet and needs to be built.
          </p>
          <p>
            I also spent years competing professionally in esports- Counter-Strike
            and Valorant, mainly. It ran parallel to my career and academic
            life, and honestly, it shaped how I think about performance,
            discipline, and working under pressure.
          </p>
          <p>
            These days, I'm focused on Finance/Accounting roles that sit close
            to the business. I care about accuracy, clarity, and helping people
            make better decisions with their numbers.
          </p>
          <p>
            I’m always open to a good conversation, feel free to reach out at{" "}
            <a
              href="mailto:santhoshkumar3730@gmail.com"
              className="text-foreground underline hover:no-underline"
            >
              santhoshkumar3730@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
