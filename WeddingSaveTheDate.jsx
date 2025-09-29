import React from 'react';

const WEDDING = {
  couple: 'Ben & Kathy',
  dateText: 'Date TBD', // e.g., 'Saturday, June 14, 2025'
  location: 'Location TBD', // e.g., 'Napa, California'
  rsvpUrl: '#rsvp', // replace with your RSVP link or mailto
  contactEmail: 'you@example.com', // replace with your email
};

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white/90 backdrop-blur">
      {children}
    </span>
  );
}

export default function WeddingSaveTheDate() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-100 to-white text-slate-800">
      {/* Hero */}
      <header className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(244,114,182,0.35),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.25),transparent_50%),radial-gradient(circle_at_50%_90%,rgba(16,185,129,0.2),transparent_50%)]" />
        </div>

        <div className="mx-auto max-w-5xl px-6 pt-16 pb-6 text-center">
          <Pill>Save the Date</Pill>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
            {WEDDING.couple}
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            {WEDDING.dateText}
            {WEDDING.location ? ' · ' + WEDDING.location : ''}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/ben-kathy-save-the-date.ics"
              download
              className="inline-flex items-center justify-center rounded-md bg-rose-600 px-5 py-3 text-white shadow hover:bg-rose-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
            >
              Add to Calendar
            </a>
            <a
              href={WEDDING.rsvpUrl}
              className="inline-flex items-center justify-center rounded-md border border-rose-200 bg-white px-5 py-3 text-rose-700 shadow-sm hover:bg-rose-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
            >
              RSVP
            </a>
          </div>
        </div>
      </header>

      {/* Details */}
      <main className="mx-auto max-w-3xl px-6 pb-24">
        <section className="mt-12 rounded-2xl border border-rose-100 bg-white/70 p-6 shadow-sm backdrop-blur">
          <h2 className="text-xl font-semibold text-slate-900">We can’t wait to celebrate with you</h2>
          <p className="mt-3 leading-relaxed text-slate-600">
            Formal invitation to follow with ceremony, reception, travel and accommodation details.
            In the meantime, please save the date. If you have questions, reach us at
            {' '}
            <a href={`mailto:${WEDDING.contactEmail}`} className="text-rose-700 underline decoration-rose-300 underline-offset-2">
              {WEDDING.contactEmail}
            </a>
            .
          </p>
        </section>

        <section className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
            <div className="text-xs uppercase tracking-wide text-slate-500">When</div>
            <div className="mt-1 text-slate-900">{WEDDING.dateText}</div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
            <div className="text-xs uppercase tracking-wide text-slate-500">Where</div>
            <div className="mt-1 text-slate-900">{WEDDING.location}</div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
            <div className="text-xs uppercase tracking-wide text-slate-500">Attire</div>
            <div className="mt-1 text-slate-900">To be shared</div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200/70 bg-white/60 py-8 backdrop-blur">
        <div className="mx-auto max-w-5xl px-6 text-center text-slate-500">
          <span className="font-medium text-slate-700">{WEDDING.couple}</span> · Save the Date
        </div>
      </footer>
    </div>
  );
}

