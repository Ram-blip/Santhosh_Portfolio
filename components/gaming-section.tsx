export function GamingSection() {
  return (
    <section
      id="gaming"
      className="rounded-3xl border border-border/50 bg-card/70 p-5 sm:p-6 md:p-10 dark:border-border/60"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2.5fr)]">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Gaming
          </p>
        </div>

        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p>
            Gaming's always been my thing. Not in a "I'm a gamer" cringey way,
            but genuinely - it's what I'm good at, what I care about, and what
            I've spent most of my time doing since I was a kid.
          </p>
          <p>
            I started competing in Call of Duty 4 Promod back in 2016, then
            moved to CS:GO, and eventually Valorant. Hit Radiant in both NA and
            APAC, peaked at Faceit 10 with 3100 ELO in CS. If you're into
            competitive tracking, my profiles are on{" "}
            <a
              href="https://liquipedia.net/valorant/Rafaaaa"
              className="text-foreground underline hover:no-underline"
            >
              Liquipedia
            </a>{" "}
            and{" "}
            <a
              href="https://www.vlr.gg/player/3632/rafaaaa"
              className="text-foreground underline hover:no-underline"
            >
              VLR
            </a>
            .{" "}
            <a
              href="https://www.sportskeeda.com/valorant/after-efforts-cs-go-wasted-i-switch-valorant-santosh-rafaaaa-kumar-tamil-tamilas-star"
              className="text-foreground underline hover:no-underline"
            >
              Sportskeeda
            </a>{" "}
            even did an interview with me about the whole journey, which was
            surreal.
          </p>
          <p>
            At UCR, I captained our CS2 team [HLG], leading the roster through
            12+ tournaments as both captain and manager.
          </p>
          <p>
            I fractured my right wrist years ago. It healed, but over time it
            started affecting my performance more and more. Eventually, I had
            to step back from competing at that level. These days I play more
            casually with friends, stream when I feel like it. Still love the
            games, still watch pro matches. Just a different relationship with
            it now.
          </p>
          <p>
            If you want to watch me play or just hang out, I stream on{" "}
            <a
              href="https://www.youtube.com/@rafaaa602"
              className="text-foreground underline hover:no-underline"
            >
              YouTube
            </a>{" "}
            and{" "}
            <a
              href="https://www.twitch.tv/rafaaaalala"
              className="text-foreground underline hover:no-underline"
            >
              Twitch
            </a>{" "}
            sometimes. No fixed schedule, just whenever the mood strikes.
          </p>
        </div>
      </div>
    </section>
  )
}
