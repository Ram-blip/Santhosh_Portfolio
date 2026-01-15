import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-8 sm:px-6 sm:py-10 md:flex-row md:items-center">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            Santhosh Kumar Gopinath
          </p>
          <p className="text-xs text-muted-foreground">
            (c) 2025. Financial Accountant.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="https://www.linkedin.com/in/santhoshkumargopinath/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border/60 bg-card/70 p-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
