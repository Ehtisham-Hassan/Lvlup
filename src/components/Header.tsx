import Link from 'next/link';

export default function Header() {
  return (
    <div className="lvf-page lvf-theme-teil" data-lvf-teil="kopf">
      <section className="lvf-s01" id="top" data-lvf-s01="true">
        {/* Countdown-Ziel ueberschreibbar */}
        <div className="lvf-s01-bar">
          <div className="lvf-s01-shell">
            {/* Angebots-Banner */}
            <div className="lvf-s01-banner" role="region" aria-label="Limited time offer">
              <div className="lvf-s01-banner-row">
                <div className="lvf-s01-offer">
                  <span className="lvf-s01-pill">
                    <span className="lvf-s01-pill-dot" aria-hidden="true"></span>
                    <span className="lvf-s01-pill-text">LIMITED TIME OFFER</span>
                  </span>
                  <span className="lvf-s01-offer-full">
                    <span className="lvf-s01-offer-hl">40% off</span> all Evaluations
                  </span>
                  <span className="lvf-s01-offer-short">40% off</span>
                </div>

                <div className="lvf-s01-code">
                  <span className="lvf-s01-code-chip"><b>PALM40</b></span>
                  <button className="lvf-s01-copy" type="button" data-lvf-copy="PALM40">
                    <span className="lvf-sr" data-lvf-copy-label="true">Copy discount code PALM40</span>
                    <svg className="lvf-s01-copy-ico" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" focusable="false">
                      <defs>
                        <linearGradient id="lvf-s01-copy-grad" x1="1" y1="1" x2="11" y2="11" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#ffffff" />
                          <stop offset="0.4" stopColor="#6ecaff" />
                          <stop offset="1" stopColor="#0080ca" />
                        </linearGradient>
                      </defs>
                      <path d="M2.2 8.3A1.5 1.5 0 0 1 .9 6.8V2.4C.9 1.6 1.5.9 2.4.9h4.4c.7 0 1.3.5 1.5 1.2H4.1c-1 0-1.9.8-1.9 1.9v4.3Z" fill="url(#lvf-s01-copy-grad)" />
                      <rect x="3.5" y="3.5" width="7.6" height="7.6" rx="1.7" fill="url(#lvf-s01-copy-grad)" />
                    </svg>
                    <svg className="lvf-s01-copy-ok" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" focusable="false">
                      <path d="M1.8 6.3 4.5 9 10.2 3.1" stroke="#ffffff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <span className="lvf-sr" role="status" data-lvf-copy-status="true"></span>
                </div>

                <p className="lvf-s01-timer">
                  Ends in: <span className="lvf-s01-timer-num" data-lvf-countdown="true">02d : 14h : 37m : 22s</span>
                </p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="lvf-s01-nav" aria-label="Main">
              <Link className="lvf-s01-logo" href="/">
                <img
                  fetchPriority="high"
                  className="lvf-s01-logo-img"
                  src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-logo-nav.webp"
                  width="780" height="120" alt="Lvlup Futures"
                />
              </Link>

              <div className="lvf-s01-menu" id="lvf-s01-menu" data-lvf-menu="true">
                <ul className="lvf-s01-links">
                  <li><Link className="lvf-s01-link" href="/evaluation">Evaluations</Link></li>
                  <li><Link className="lvf-s01-link" href="/rules">Rules</Link></li>
                  <li><Link className="lvf-s01-link" href="/elite">Elite</Link></li>
                  <li><Link className="lvf-s01-link" href="/affiliate">Affiliate</Link></li>
                  <li><Link className="lvf-s01-link" href="/about">About</Link></li>
                  <li><Link className="lvf-s01-link" href="/contact">Contact</Link></li>
                </ul>
                <div className="lvf-s01-actions">
                  <a className="lvf-s01-ghost" href="https://lvlupfuturesdashboard.propaccount.com/en/sign-in" target="_blank" rel="noopener noreferrer">Client Area</a>
                  <Link className="lvf-s01-cta" href="/#evaluations">Choose Your Evaluation</Link>
                </div>
              </div>

              <button className="lvf-s01-burger" type="button" aria-expanded="false" aria-controls="lvf-s01-menu" data-lvf-burger="true">
                <span className="lvf-sr" data-lvf-burger-label="true">Open menu</span>
                <span className="lvf-s01-burger-ico" aria-hidden="true">
                  <span className="lvf-s01-burger-l"></span>
                  <span className="lvf-s01-burger-l"></span>
                  <span className="lvf-s01-burger-l"></span>
                </span>
              </button>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
}
