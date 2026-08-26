// @ts-nocheck
import Script from 'next/script';

export default function Page() {
  return (
    <>
      <div>
        <div className="lvf-page">
          {/* s02 */}
          <section className="lvf-s02" id="hero">
            {/* Voraussetzung aus dem Design: s01 (Banner + Nav, Frame y 0..130) liegt als
 fixed/absolute UEBER dieser Sektion. Deshalb beginnt s02 bei Frame y=0 und
 das Hero-Medium reicht hinter die Kopfleiste. */}
            <svg className="lvf-s02-defs" width={0} height={0} aria-hidden="true" focusable="false">
              <defs>
                <linearGradient id="lvf-s02-ig" x1={0} y1={0} x2={0} y2={1}>
                  <stop offset={0} stopColor="#8cd5ff" />
                  <stop offset={1} stopColor="#12a9ff" />
                </linearGradient>
              </defs>
            </svg>
            {/* Hero-Medium: Video aus dem Design-Drive, auf Web-Groesse gebracht (1080p, ohne Ton).
 Poster ist der erste Frame des Videos. */}
            <div className="lvf-s02-media" aria-hidden="true">
              {/* Die Quelle steht in data-lvf-video-src, nicht in <source>: fragment.js haengt sie ein,
   sobald die Sektion im Blickfeld ist, pausiert ausserhalb und laesst sie bei
   prefers-reduced-motion ganz weg. Ohne JavaScript bleibt das Poster stehen.
   Nur MP4: der Server liefert .webm als text/plain und ohne Range-Support aus. */}
              <video className="lvf-s02-video" muted loop playsInline preload="none" poster="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-hero-poster.webp" data-lvf-hero-video data-lvf-video-src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-hero.mp4" />
              <span className="lvf-s02-media-hue" />
              <span className="lvf-s02-media-shade" />
            </div>
            {/* Weichgezeichnete "Star"-Vektoren des Designs, als Glow angenaehert */}
            <div className="lvf-s02-glow" aria-hidden="true" />
            <div className="lvf-container lvf-s02-hero">
              <p className="lvf-s02-badge">
                <span className="lvf-s02-badge-dot" aria-hidden="true" />
                <span className="lvf-s02-badge-text"><span className="lvf-s02-badge-hl">Largest</span> Drawdown &amp; Payout Cap in the Industry</span>
              </p>
              {/* Leerzeichen vor dem Umbruch ist Pflicht: auf Mobile wird das <br> ausgeblendet,
   ohne Leerzeichen stuende dort "inFutures" - auch im Textinhalt fuer Suchmaschinen
   und Screenreader. */}
              {/* Mobile-Design laesst das "The" weg, deshalb eigener Span */}
              <h1 className="lvf-s02-title"><span className="lvf-s02-title-the">The </span><span className="lvf-s02-title-hl">New Standard</span> in <br className="lvf-s02-title-br" />Futures Evaluations</h1>
              <p className="lvf-s02-sub">Clear rules. Better conditions. A refined environment built around the futures trader.</p>
              <div className="lvf-s02-cta">
                <a className="lvf-s02-btn lvf-s02-btn--primary" href="#evaluations">
                  <span className="lvf-s02-btn-tile" aria-hidden="true">
                    <svg className="lvf-s02-btn-ico" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" focusable="false">
                      <path d="M7.3 16.7 16.7 7.3" />
                      <path d="M8.6 7.3h8.1v8.1" />
                    </svg>
                  </span>
                  <span className="lvf-s02-btn-label">Choose Your Account</span>
                </a>
                <a className="lvf-s02-btn lvf-s02-btn--ghost" href="#how-it-works">See How It Works</a>
              </div>
              {/* Trennlinie des Mobile-Designs: als ::before im Stats-Grid umgesetzt
   (siehe fragment.css), damit sie unabhaengig von Theme-hr-Regeln rendert. */}
              <ul className="lvf-s02-stats">
                <li className="lvf-s02-stat">
                  <span className="lvf-s02-stat-top">
                    <svg className="lvf-s02-stat-ico lvf-s02-stat-ico--split" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" fill="url(#lvf-s02-ig)" aria-hidden="true" focusable="false"><path fillRule="evenodd" d="M25.58 15.56 25.29 14.83 19.05 8.88 17.59 8.73 17.16 8.88 12.36 14.54 11.35 15.27 6.84 12.94 5.25 13.09 3.79 14.83 3.5 15.56 -1.0 21.66 -1.44 22.82 -0.71 23.84 -0.13 23.98 24.28 23.98 25.0 23.69 25.44 23.11ZM25.58 6.7 19.48 0.74 18.61 0.16 17.45 0.16 16.43 1.03 15.85 2.05 11.78 6.26 11.2 7.28 10.18 8.3 8.01 7.13 7.42 7.13 5.54 5.97 3.79 5.97 2.05 7.86 1.9 8.44 -1.15 12.07 -1.44 13.09 -0.86 13.96 0.02 14.25 1.03 13.96 4.95 9.17 5.97 9.31 6.7 9.89 7.13 9.89 9.31 11.06 10.77 11.49 11.35 11.2 13.53 9.02 16.29 5.68 18.17 3.94 18.46 3.94 23.69 8.73 24.57 8.59 25.58 7.57Z" /></svg>
                    <span className="lvf-s02-stat-num">100%</span>
                  </span>
                  <span className="lvf-s02-stat-label">Profit Split</span>
                </li>
                <li className="lvf-s02-stat">
                  <span className="lvf-s02-stat-top">
                    <svg className="lvf-s02-stat-ico lvf-s02-stat-ico--funding" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" fill="url(#lvf-s02-ig)" aria-hidden="true" focusable="false"><path fillRule="evenodd" d="M21.53 16.43 20.48 18.83 18.08 20.02 20.62 21.68 21.38 23.93 21.83 23.78 22.58 21.53 24.98 20.18 23.78 19.73 22.43 18.53ZM8.32 1.72 7.57 5.32 5.02 9.22 2.77 10.88 1.27 11.47 -0.98 11.62 -1.13 12.22 2.92 13.28 6.07 15.98 6.97 17.18 8.02 21.98 8.47 22.28 9.38 18.38 11.03 15.68 14.03 13.28 15.98 12.53 17.62 12.53 18.08 12.07 17.78 11.62 15.68 11.47 13.88 10.72 10.72 8.02 9.38 5.62 8.77 2.02ZM21.68 0.07 21.23 0.37 20.78 2.02 19.73 3.07 18.08 3.82 20.62 5.47 21.38 7.57 21.83 7.42 22.43 5.47 24.98 3.97 22.58 2.47Z" /></svg>
                    <span className="lvf-s02-stat-num">$1M</span>
                  </span>
                  <span className="lvf-s02-stat-label">Max Funding</span>
                </li>
                <li className="lvf-s02-stat">
                  <span className="lvf-s02-stat-top">
                    <img src="./assets/media/drawdown.svg" alt="Drawdown" />
                    <span className="lvf-s02-stat-num">5%</span>
                  </span>
                  <span className="lvf-s02-stat-label">Drawdown</span>
                </li>
                <li className="lvf-s02-stat">
                  <span className="lvf-s02-stat-top">
                    <svg className="lvf-s02-stat-ico lvf-s02-stat-ico--days" viewBox="2.600 2.150 19.050 19.050" preserveAspectRatio="xMidYMid meet" fill="url(#lvf-s02-ig)" aria-hidden="true" focusable="false">
                      <rect x="2.6" y="2.8" width="8.2" height="8.2" rx="2.4" />
                      <rect x="2.6" y={13} width="8.2" height="8.2" rx="2.4" />
                      <rect x="12.8" y={13} width="8.2" height="8.2" rx="2.4" />
                      <path d="M16.9 3.4v7M13.4 6.9h7" fill="none" stroke="url(#lvf-s02-ig)" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    <span className="lvf-s02-stat-num lvf-s02-stat-num--five">Five</span>
                  </span>
                  <span className="lvf-s02-stat-label">Min Trading Day</span>
                </li>
                <li className="lvf-s02-stat">
                  <span className="lvf-s02-stat-top">
                    <svg className="lvf-s02-stat-ico lvf-s02-stat-ico--support" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" fill="url(#lvf-s02-ig)" aria-hidden="true" focusable="false"><path fillRule="evenodd" d="M9.97 3.68 9.07 4.28 8.62 4.28 6.67 6.22 6.52 6.82 6.08 7.28 6.08 7.88 5.62 8.78 5.62 14.62 6.08 16.43 8.47 19.12 10.72 20.02 13.12 20.02 14.32 19.73 15.68 18.98 17.18 17.48 17.93 16.12 17.93 15.38 18.23 14.93 18.23 8.62 17.93 7.42 17.32 6.67 17.32 6.22 15.22 4.28 14.78 4.28 14.03 3.68ZM11.32 0.22 9.97 0.67 8.93 0.67 8.18 1.28 7.58 1.28 5.62 2.62 3.68 5.02 2.48 8.03 1.72 8.47 0.97 8.47 0.07 9.53 0.07 14.78 1.43 16.12 3.38 16.12 3.82 15.82 4.12 7.88 4.88 6.08 6.82 3.68 8.78 2.48 11.93 1.72 14.93 2.32 16.27 3.08 18.07 4.58 19.12 6.22 19.43 7.42 19.88 8.18 19.88 16.27 19.73 17.02 18.68 19.12 16.73 21.07 15.07 22.12 12.38 22.57 11.32 23.02 11.47 23.93 12.22 24.08 14.03 23.93 15.82 23.33 17.18 22.57 18.98 21.07 20.18 19.43 20.92 17.93 21.23 16.57 21.68 16.12 22.88 15.97 23.93 14.62 23.93 9.97 23.77 9.38 22.88 8.47 22.28 8.47 21.38 8.03 20.92 6.97 20.92 6.22 20.48 5.77 20.32 5.02 18.38 2.62 16.43 1.28 15.53 1.12 14.93 0.67 13.88 0.67 12.68 0.22Z" /></svg>
                    <span className="lvf-s02-stat-num">24/7</span>
                  </span>
                  <span className="lvf-s02-stat-label">Live Support</span>
                </li>
              </ul>
            </div>
            {/* Zertifikats-Ticker */}
            <div className="lvf-s02-ticker">
              <div className="lvf-s02-strip" data-lvf-marquee>
                <div className="lvf-s02-row lvf-s02-row--a">
                  <div className="lvf-s02-set">
                    <div className="lvf-s02-card"><img src="assets/media/payout-certificate-1.webp" width={252} height={170} loading="lazy" decoding="async" alt="Lvlup Futures certificate of withdrawal" /></div>
                    <div className="lvf-s02-card"><img src="assets/media/payout-certificate-2.webp" width={252} height={170} loading="lazy" decoding="async" alt="true" /></div>
                    <div className="lvf-s02-card"><img src="assets/media/payout-certificate-3.webp" width={252} height={170} loading="lazy" decoding="async" alt="true" /></div>
                    <div className="lvf-s02-card"><img src="assets/media/payout-certificate-1.webp" width={252} height={170} loading="lazy" decoding="async" alt="true" /></div>
                    <div className="lvf-s02-card"><img src="assets/media/payout-certificate-2.webp" width={252} height={170} loading="lazy" decoding="async" alt="true" /></div>
                    <div className="lvf-s02-card"><img src="assets/media/payout-certificate-3.webp" width={252} height={170} loading="lazy" decoding="async" alt="true" /></div>
                    <div className="lvf-s02-card"><img src="assets/media/payout-certificate-1.webp" width={252} height={170} loading="lazy" decoding="async" alt="true" /></div>
                    <div className="lvf-s02-card"><img src="assets/media/payout-certificate-2.webp" width={252} height={170} loading="lazy" decoding="async" alt="true" /></div>
                    <div className="lvf-s02-card"><img src="assets/media/payout-certificate-3.webp" width={252} height={170} loading="lazy" decoding="async" alt="true" /></div>
                    <div className="lvf-s02-card"><img src="assets/media/payout-certificate-1.webp" width={252} height={170} loading="lazy" decoding="async" alt="true" /></div>
                  </div>
                  <div className="lvf-s02-set" aria-hidden="true">
                    <div className="lvf-s02-card"><img src="assets/media/payout-certificate-1.webp" width={252} height={170} loading="lazy" decoding="async" alt="true" /></div>
                    <div className="lvf-s02-card"><img src="assets/media/payout-certificate-2.webp" width={252} height={170} loading="lazy" decoding="async" alt="true" /></div>
                    <div className="lvf-s02-card"><img src="assets/media/payout-certificate-3.webp" width={252} height={170} loading="lazy" decoding="async" alt="true" /></div>
                    <div className="lvf-s02-card"><img src="assets/media/payout-certificate-1.webp" width={252} height={170} loading="lazy" decoding="async" alt="true" /></div>
                    <div className="lvf-s02-card"><img src="assets/media/payout-certificate-2.webp" width={252} height={170} loading="lazy" decoding="async" alt="true" /></div>
                    <div className="lvf-s02-card"><img src="assets/media/payout-certificate-3.webp" width={252} height={170} loading="lazy" decoding="async" alt="true" /></div>
                    <div className="lvf-s02-card"><img src="assets/media/payout-certificate-1.webp" width={252} height={170} loading="lazy" decoding="async" alt="true" /></div>
                    <div className="lvf-s02-card"><img src="assets/media/payout-certificate-2.webp" width={252} height={170} loading="lazy" decoding="async" alt="true" /></div>
                    <div className="lvf-s02-card"><img src="assets/media/payout-certificate-3.webp" width={252} height={170} loading="lazy" decoding="async" alt="true" /></div>
                    <div className="lvf-s02-card"><img src="assets/media/payout-certificate-1.webp" width={252} height={170} loading="lazy" decoding="async" alt="true" /></div>
                  </div>
                </div>
                {/* Zweite Reihe: nur im Mobile-Design vorhanden */}
                <div className="lvf-s02-row lvf-s02-row--b" aria-hidden="true">
                  <div className="lvf-s02-set">
                    <div className="lvf-s02-card"><img src="assets/media/payout-certificate-1.webp" width={144} height={97} loading="lazy" decoding="async" alt="true" /></div>
                    <div className="lvf-s02-card"><img src="assets/media/payout-certificate-2.webp" width={144} height={97} loading="lazy" decoding="async" alt="true" /></div>
                    <div className="lvf-s02-card"><img src="assets/media/payout-certificate-3.webp" width={144} height={97} loading="lazy" decoding="async" alt="true" /></div>
                    <div className="lvf-s02-card"><img src="assets/media/payout-certificate-1.webp" width={144} height={97} loading="lazy" decoding="async" alt="true" /></div>
                    <div className="lvf-s02-card"><img src="assets/media/payout-certificate-2.webp" width={144} height={97} loading="lazy" decoding="async" alt="true" /></div>
                    <div className="lvf-s02-card"><img src="assets/media/payout-certificate-3.webp" width={144} height={97} loading="lazy" decoding="async" alt="true" /></div>
                    <div className="lvf-s02-card"><img src="assets/media/payout-certificate-1.webp" width={144} height={97} loading="lazy" decoding="async" alt="true" /></div>
                    <div className="lvf-s02-card"><img src="assets/media/payout-certificate-2.webp" width={144} height={97} loading="lazy" decoding="async" alt="true" /></div>
                    <div className="lvf-s02-card"><img src="assets/media/payout-certificate-3.webp" width={144} height={97} loading="lazy" decoding="async" alt="true" /></div>
                    <div className="lvf-s02-card"><img src="assets/media/payout-certificate-1.webp" width={144} height={97} loading="lazy" decoding="async" alt="true" /></div>
                  </div>
                  <div className="lvf-s02-set">
                    <div className="lvf-s02-card"><img src="assets/media/payout-certificate-1.webp" width={144} height={97} loading="lazy" decoding="async" alt="true" /></div>
                    <div className="lvf-s02-card"><img src="assets/media/payout-certificate-2.webp" width={144} height={97} loading="lazy" decoding="async" alt="true" /></div>
                    <div className="lvf-s02-card"><img src="assets/media/payout-certificate-3.webp" width={144} height={97} loading="lazy" decoding="async" alt="true" /></div>
                    <div className="lvf-s02-card"><img src="assets/media/payout-certificate-1.webp" width={144} height={97} loading="lazy" decoding="async" alt="true" /></div>
                    <div className="lvf-s02-card"><img src="assets/media/payout-certificate-2.webp" width={144} height={97} loading="lazy" decoding="async" alt="true" /></div>
                    <div className="lvf-s02-card"><img src="assets/media/payout-certificate-3.webp" width={144} height={97} loading="lazy" decoding="async" alt="true" /></div>
                    <div className="lvf-s02-card"><img src="assets/media/payout-certificate-1.webp" width={144} height={97} loading="lazy" decoding="async" alt="true" /></div>
                    <div className="lvf-s02-card"><img src="assets/media/payout-certificate-2.webp" width={144} height={97} loading="lazy" decoding="async" alt="true" /></div>
                    <div className="lvf-s02-card"><img src="assets/media/payout-certificate-3.webp" width={144} height={97} loading="lazy" decoding="async" alt="true" /></div>
                    <div className="lvf-s02-card"><img src="assets/media/payout-certificate-1.webp" width={144} height={97} loading="lazy" decoding="async" alt="true" /></div>
                  </div>
                </div>
              </div>
              <div className="lvf-s02-pills">
                <p className="lvf-s02-pill lvf-s02-pill--label">
                  <span className="lvf-s02-pill-dot" aria-hidden="true" />
                  <span className="lvf-s02-pill-text">Live Trades Payouts Certificates</span>
                </p>
              </div>
            </div>
            {/* Partner-/Zertifizierungslogos */}
            <div className="lvf-container lvf-s02-partners">
              <span className="lvf-s02-dx">
                <span className="lvf-s02-dx-mark">
                  <img src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-9e83bcda12.webp" width={62} height={45} loading="lazy" decoding="async" alt="true" />
                </span>
                <span className="lvf-s02-dx-word">
                  <img src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-9e83bcda12.webp" width={198} height={145} loading="lazy" decoding="async" alt="DX Trade" />
                </span>
              </span>
              {/* Im Design ist das Volumetrica-Logo ein Vektor (Zeichen + Wortmarke), das
   512er-Bild dient nur als Fuellung. Nachbau: das Zeichen traegt im Quellbild
   breite Transparentraender, der Wrapper zoomt auf den sichtbaren Ausschnitt. */}
              <span className="lvf-s02-partner lvf-s02-partner--chart lvf-s02-vol" aria-label="Volumetrica">
                <span className="lvf-s02-vol-mark" aria-hidden="true">
                  <img src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-5b26379619.webp" width={512} height={512} loading="lazy" decoding="async" alt />
                </span>
                <span className="lvf-s02-vol-word" aria-hidden="true">Volumetrica</span>
              </span>
              <img className="lvf-s02-partner lvf-s02-partner--hansa" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-b542f65977.webp" width={203} height={62} loading="lazy" decoding="async" alt="F.C. Hansa Rostock - Silber Partner Saison 2026/2027" />
              <img className="lvf-s02-partner lvf-s02-partner--cert" src="./assets/media/lvlup-bui698y.png" width={70} height={70} loading="lazy" decoding="async" alt="Certified Prop Trading Firm" />
            </div>
          </section>
          {/* s03 */}
          <section className="lvf-s03" id="how-it-works" aria-labelledby="lvf-s03-title">
            <div className="lvf-container">
              <div className="lvf-s03-inner">
                <span className="lvf-s03-glow" aria-hidden="true" />
                <header className="lvf-s03-head">
                  <p className="lvf-s03-kicker">How it Works</p>
                  <h2 className="lvf-s03-title" id="lvf-s03-title">A Clear Path Through <span className="lvf-s03-title-blue">Lvlup Futures</span></h2>
                  <p className="lvf-s03-sub">Four stages, one defined structure.</p>
                </header>
                <ol className="lvf-s03-steps">
                  <li className="lvf-s03-step lvf-s03-step--1">
                    <span className="lvf-s03-index">
                      <span className="lvf-s03-num" aria-hidden="true">01</span>
                      <span className="lvf-s03-start">Start</span>
                    </span>
                    <span className="lvf-s03-dot" aria-hidden="true" />
                    <h3 className="lvf-s03-step-title"><span className="lvf-s03-word-blue">Select</span> an Evaluation</h3>
                    <p className="lvf-s03-step-desc">Choose the account size aligned with your preferred trading scale.</p>
                  </li>
                  <li className="lvf-s03-step lvf-s03-step--2">
                    <span className="lvf-s03-index">
                      <span className="lvf-s03-num" aria-hidden="true">02</span>
                    </span>
                    <span className="lvf-s03-dot" aria-hidden="true" />
                    <h3 className="lvf-s03-step-title">Trade the <span className="lvf-s03-word-blue">Conditions</span></h3>
                    <p className="lvf-s03-step-desc">Work toward the target while following the defined account rules.</p>
                  </li>
                  <li className="lvf-s03-step lvf-s03-step--3">
                    <span className="lvf-s03-index">
                      <span className="lvf-s03-num" aria-hidden="true">03</span>
                    </span>
                    <span className="lvf-s03-dot" aria-hidden="true" />
                    <h3 className="lvf-s03-step-title"><span className="lvf-s03-word-blue">Pass</span> the Evaluation</h3>
                    <p className="lvf-s03-step-desc">Reach the target and complete the required minimum trading days.</p>
                  </li>
                  <li className="lvf-s03-step lvf-s03-step--4">
                    <span className="lvf-s03-index">
                      <span className="lvf-s03-num" aria-hidden="true">04</span>
                    </span>
                    <span className="lvf-s03-dot" aria-hidden="true" />
                    <h3 className="lvf-s03-step-title">Enter the <span className="lvf-s03-word-blue">Payout Cycle</span></h3>
                    <p className="lvf-s03-step-desc">Move into the funded stage and become eligible for the bi-weekly payout cycle.</p>
                  </li>
                </ol>
              </div>
            </div>
          </section>
          {/* s04 */}
          <section className="lvf-s04" id="evaluations" data-lvf-s04 aria-labelledby="lvf-s04-title">
            {/* Deko: Glow oben, schwarze Panel-Flaeche, weiche Blau-Glows, Glas-Rauten */}
            <span className="lvf-s04-slab" aria-hidden="true" />
            <span className="lvf-s04-topglow" aria-hidden="true" />
            <span className="lvf-s04-shard lvf-s04-shard--l" aria-hidden="true" />
            <span className="lvf-s04-shard lvf-s04-shard--r" aria-hidden="true" />
            {/* Gemeinsame SVG-Verlaeufe fuer alle Icons dieser Sektion */}
            <svg className="lvf-s04-defs" width={0} height={0} aria-hidden="true" focusable="false"><defs>
              <linearGradient id="lvf-s04-g-soft" x1={0} y1={0} x2={0} y2={1}><stop offset={0} stopColor="#afd4e8" /><stop offset={1} stopColor="#72bee8" /></linearGradient>
              <linearGradient id="lvf-s04-g-blue" x1={0} y1={0} x2={0} y2={1}><stop offset={0} stopColor="#8cd5ff" /><stop offset={1} stopColor="#12a9ff" /></linearGradient>
              <linearGradient id="lvf-s04-g-gold" x1={0} y1={0} x2={1} y2={1}><stop offset={0} stopColor="#feedb6" /><stop offset={1} stopColor="#ff9200" /></linearGradient>
              <linearGradient id="lvf-s04-g-dim" x1={0} y1={0} x2={0} y2={1}><stop offset={0} stopColor="#efefef" /><stop offset={1} stopColor="#d2d2d2" /></linearGradient>
              <linearGradient id="lvf-s04-g-white" x1={0} y1={0} x2={0} y2={1}><stop offset={0} stopColor="#ffffff" /><stop offset={1} stopColor="#dcf1ff" /></linearGradient>
              <linearGradient id="lvf-s04-g-black" x1={0} y1={0} x2={1} y2={1}><stop offset={0} stopColor="#04212f" /><stop offset={1} stopColor="#000000" /></linearGradient>
            </defs></svg>
            <div className="lvf-container lvf-s04-inner">
              <p className="lvf-s04-kicker"><span className="lvf-s04-kicker-t">Build Your Plan</span></p>
              <h2 className="lvf-s04-title" id="lvf-s04-title">Choose Your <span className="lvf-s04-title-hl">Evaluation</span></h2>
              <p className="lvf-s04-sub">Four account sizes. One consistent evaluation structure.</p>
              <div className="lvf-s04-toggle" role="tablist" aria-label="Account type">
                <button className="lvf-s04-tab" type="button" role="tab" id="lvf-s04-tab-lvlup" aria-selected="false" tabIndex={-1} aria-controls="lvf-s04-panel-lvlup" data-lvf-plan="lvlup">
                  <span className="lvf-s04-tab-t">Lvlup Accounts</span>
                </button>
                <button className="lvf-s04-tab is-active" type="button" role="tab" id="lvf-s04-tab-starter" aria-selected="true" aria-controls="lvf-s04-panel-starter" data-lvf-plan="starter">
                  <span className="lvf-s04-tab-t">Starter Accounts</span>
                </button>
              </div>
              <div className="lvf-s04-cards" id="lvf-s04-panel-lvlup" role="tabpanel" aria-labelledby="lvf-s04-tab-lvlup" data-lvf-plan-panel="lvlup" hidden>
                <article className="lvf-s04-card">
                  <div className="lvf-s04-card-in">
                    <span className="lvf-s04-card-glow" aria-hidden="true" />
                    <span className="lvf-s04-card-edge" aria-hidden="true" />
                    <span className="lvf-s04-card-shard" aria-hidden="true" />
                    <div className="lvf-s04-card-head">
                      <div className="lvf-s04-card-mark">
                        <span className="lvf-s04-chip" aria-hidden="true"><svg className="lvf-s04-chip-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-black)" d="M3.1 3.4h2.3l2.6 6.2 3.8-5-1.5-1.1 4.4-1-.3 4.5-1.4-1.1-4.7 6.3H7.1L3.1 3.4Z" /></svg></span>
                      </div>
                      <p className="lvf-s04-card-kind">Lvlup Evaluation</p>
                      <p className="lvf-s04-card-size">$25,000</p>
                    </div>
                    <div className="lvf-s04-buy">
                      <a className="lvf-s04-btn" href="https://lvlupfuturesdashboard.propaccount.com/en/challenges/purchase?category=35" target="_blank" rel="noopener" aria-label="One-Time payment $194 for the $25,000 Lvlup Evaluation - see it in the payout calculator below">
                        <span className="lvf-s04-btn-label">One-Time</span>
                        <span className="lvf-s04-btn-price">$194</span>
                      </a>
                      <p className="lvf-s04-or"><span className="lvf-s04-or-l" aria-hidden="true" /><span className="lvf-s04-or-t">OR</span><span className="lvf-s04-or-l" aria-hidden="true" /></p>
                      <a className="lvf-s04-btn" href="https://lvlupfuturesdashboard.propaccount.com/en/challenges/purchase?category=35" target="_blank" rel="noopener" aria-label="Monthly payment $129/mo for the $25,000 Lvlup Evaluation - see it in the payout calculator below">
                        <span className="lvf-s04-btn-label">Monthly</span>
                        <span className="lvf-s04-btn-price">$129/mo</span>
                      </a>
                    </div>
                    <p className="lvf-s04-sep"><span className="lvf-s04-sep-l" aria-hidden="true" /><span className="lvf-s04-sep-t">What’s Included</span><span className="lvf-s04-sep-l" aria-hidden="true" /></p>
                    <ul className="lvf-s04-specs">
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M1.6 1.4a.7.7 0 0 1 .7.7v10.1c0 .3.2.5.5.5h11.6a.7.7 0 0 1 0 1.4H2.8A1.9 1.9 0 0 1 .9 12.2V2.1a.7.7 0 0 1 .7-.7Z" /><path fill="url(#lvf-s04-g-soft)" d="M14.4 4.1a.6.6 0 0 1 .6.6v7.2H4.1V8.4l2.5-2.5a.9.9 0 0 1 1.2 0l1.5 1.5 4.4-3.1a.6.6 0 0 1 .7-.2Z" /></svg>
                        <span className="lvf-s04-srow-k">Profit Target</span>
                        <span className="lvf-s04-srow-v">$1,500</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M2.6 2.2h10.8c.9 0 1.6.7 1.6 1.6v6.3c0 .9-.7 1.6-1.6 1.6H2.6c-.9 0-1.6-.7-1.6-1.6V3.8c0-.9.7-1.6 1.6-1.6Zm.6 4.5a.6.6 0 0 0 0 1.3h2.3c.2 0 .4-.1.5-.3l.6-1 1.2 2.4c.2.5.9.5 1.1 0l1-2 .4.7c.1.2.3.3.5.3h2.1a.6.6 0 0 0 0-1.3h-1.7l-.9-1.5a.6.6 0 0 0-1 0L8.3 7.4 7.1 5a.6.6 0 0 0-1 0l-1 1.7H3.2Z" /><path fill="url(#lvf-s04-g-soft)" d="M5.6 12.5h4.8l.4 1.5a.5.5 0 0 1-.5.6H5.7a.5.5 0 0 1-.5-.6l.4-1.5Z" /></svg>
                        <span className="lvf-s04-srow-k">EOD Trailing Drawdown</span>
                        <span className="lvf-s04-srow-v">$1,250</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M4.2 1.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V2.4c0-.6-.5-1.1-1.1-1.1Zm0 5.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V7.7c0-.6-.5-1.1-1.1-1.1Zm5.3-5.3H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V2.4c0-.6-.5-1.1-1.1-1.1Zm0 5.3H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V7.7c0-.6-.5-1.1-1.1-1.1Zm-5.3 5.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V13c0-.6-.5-1.1-1.1-1.1Zm5.3 0H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V13c0-.6-.5-1.1-1.1-1.1Zm4.2-9.4a.6.6 0 0 1 .6.6v2.2h2.2a.6.6 0 0 1 0 1.2h-2.2v2.2a.6.6 0 0 1-1.2 0V6.5h-2.2a.6.6 0 0 1 0-1.2h2.2V3.1a.6.6 0 0 1 .6-.6Z" /></svg>
                        <span className="lvf-s04-srow-k">Min. Trading Days</span>
                        <span className="lvf-s04-srow-v">5 days</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M6.1.9a.5.5 0 0 1 .5.4l.7 2.6 2.6.7a.5.5 0 0 1 0 1l-2.6.7-.7 2.6a.5.5 0 0 1-1 0l-.7-2.6-2.6-.7a.5.5 0 0 1 0-1l2.6-.7.7-2.6a.5.5 0 0 1 .5-.4Zm6.4 6.4a.5.5 0 0 1 .5.4l.4 1.4 1.4.4a.5.5 0 0 1 0 1l-1.4.4-.4 1.4a.5.5 0 0 1-1 0l-.4-1.4-1.4-.4a.5.5 0 0 1 0-1l1.4-.4.4-1.4a.5.5 0 0 1 .5-.4Zm-6 4.6a.5.5 0 0 1 .5.3l.3 1 1 .3a.5.5 0 0 1 0 1l-1 .3-.3 1a.5.5 0 0 1-1 0l-.3-1-1-.3a.5.5 0 0 1 0-1l1-.3.3-1a.5.5 0 0 1 .5-.3Z" /></svg>
                        <span className="lvf-s04-srow-k">Max Contracts</span>
                        <span className="lvf-s04-srow-v">1 Mini</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M2.2 3.4a1.2 1.2 0 0 1 1.2-1.2h3a1.2 1.2 0 0 1 1.2 1.2v9.2a1.2 1.2 0 0 1-1.2 1.2h-3a1.2 1.2 0 0 1-1.2-1.2V3.4Zm7.2 0a1.2 1.2 0 0 1 1.2-1.2h2a1.2 1.2 0 0 1 1.2 1.2v3a1.2 1.2 0 0 1-1.2 1.2h-2a1.2 1.2 0 0 1-1.2-1.2v-3Zm0 5.6a1.2 1.2 0 0 1 1.2-1.2h2a1.2 1.2 0 0 1 1.2 1.2v3.6a1.2 1.2 0 0 1-1.2 1.2h-2a1.2 1.2 0 0 1-1.2-1.2V9Z" /></svg>
                        <span className="lvf-s04-srow-k">Profit Split</span>
                        <span className="lvf-s04-srow-v">80%</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" fillRule="evenodd" d="M1.5 1.6a.8.8 0 0 1 1.1-.1l1.9 1.5-1 1.3-1.9-1.5a.8.8 0 0 1-.1-1.2Zm13 0a.8.8 0 0 1-.1 1.2l-1.9 1.5-1-1.3 1.9-1.5a.8.8 0 0 1 1.1.1ZM8 3.6a5.9 5.9 0 1 0 0 11.8A5.9 5.9 0 0 0 8 3.6Zm-.65 2.5a.65.65 0 0 1 1.3 0v3.08l2.03 2.03a.65.65 0 1 1-.92.92l-2.22-2.22a.65.65 0 0 1-.19-.46V6.1Z" /></svg>
                        <span className="lvf-s04-srow-k">Payout Cycle</span>
                        <span className="lvf-s04-srow-v">Every 14 days</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" fillRule="evenodd" d="M8 2.4a3 3 0 0 0-3 3v1.4H4a1.1 1.1 0 0 0-1.1 1.1v5a1.1 1.1 0 0 0 1.1 1.1h8a1.1 1.1 0 0 0 1.1-1.1v-5A1.1 1.1 0 0 0 12 6.8h-1V5.4a3 3 0 0 0-3-3Zm0 1.4a1.6 1.6 0 0 1 1.6 1.6v1.4H6.4V5.4A1.6 1.6 0 0 1 8 3.8Zm0 5.1a1.05 1.05 0 0 1 .55 1.95l.18 1.05a.73.73 0 0 1-1.46 0l.18-1.05A1.05 1.05 0 0 1 8 8.9Z" /></svg>
                        <span className="lvf-s04-srow-k">Payout Cap</span>
                        <span className="lvf-s04-srow-v">10% of Balance</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M2 9.6a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v3.2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9.6Zm4.8-2.8a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H7.8a1 1 0 0 1-1-1v-6Zm4.8-2.8a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v8.8a1 1 0 0 1-1 1h-1.4a1 1 0 0 1-1-1V4Z" /></svg>
                        <span className="lvf-s04-srow-k">Consistency Rule</span>
                        <span className="lvf-s04-srow-v">40%</span>
                      </li>
                    </ul>
                    <span className="lvf-s04-rule" aria-hidden="true" />
                    <ul className="lvf-s04-checks">
                      <li className="lvf-s04-crow lvf-s04-crow--blue">
                        <svg className="lvf-s04-crow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M8 .9A7.1 7.1 0 1 1 .9 8 7.1 7.1 0 0 1 8 .9Zm3.3 4.7a.9.9 0 0 0-1.3 0L7 8.7 6 7.7a.9.9 0 0 0-1.3 1.3l1.7 1.7c.4.3.9.3 1.3 0l3.6-3.7a.9.9 0 0 0 0-1.4Z" /></svg>
                        <span className="lvf-s04-crow-t">No Daily Loss Limit</span>
                      </li>
                      <li className="lvf-s04-crow lvf-s04-crow--dim">
                        <svg className="lvf-s04-crow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-dim)" d="M8 .9A7.1 7.1 0 1 1 .9 8 7.1 7.1 0 0 1 8 .9Zm3.3 4.7a.9.9 0 0 0-1.3 0L7 8.7 6 7.7a.9.9 0 0 0-1.3 1.3l1.7 1.7c.4.3.9.3 1.3 0l3.6-3.7a.9.9 0 0 0 0-1.4Z" /></svg>
                        <span className="lvf-s04-crow-t">Activation Fee After Passing</span>
                      </li>
                      <li className="lvf-s04-crow lvf-s04-crow--gold">
                        <svg className="lvf-s04-crow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-gold)" d="M8 .9A7.1 7.1 0 1 1 .9 8 7.1 7.1 0 0 1 8 .9Zm3.3 4.7a.9.9 0 0 0-1.3 0L7 8.7 6 7.7a.9.9 0 0 0-1.3 1.3l1.7 1.7c.4.3.9.3 1.3 0l3.6-3.7a.9.9 0 0 0 0-1.4Z" /></svg>
                        <span className="lvf-s04-crow-t">Payout Certificate Block</span>
                        <span className="lvf-s04-crow-info" tabIndex={0} role="button" aria-label="Payout Certificate Block info"><svg className="lvf-s04-crow-info-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-gold)" d="M8 .9A7.1 7.1 0 1 1 .9 8 7.1 7.1 0 0 1 8 .9Zm0 5.9a1 1 0 0 0-1 1v3.4a1 1 0 0 0 2 0V7.8a1 1 0 0 0-1-1Zm0-3.3a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2Z" /></svg><span className="lvf-s04-tooltip" role="tooltip">Receive an official Lvlup Payout Certificate Block after completing your first successful payout.</span></span>
                      </li>
                    </ul>
                  </div>
                  <a className="lvf-s04-card-note" href="https://lvlupfuturesdashboard.propaccount.com/en/challenges/purchase?category=35" target="_blank" rel="noopener">Opens in external dashboard</a>
                </article>
                <article className="lvf-s04-card lvf-s04-card--pop">
                  <div className="lvf-s04-card-in">
                    <span className="lvf-s04-card-glow" aria-hidden="true" />
                    <span className="lvf-s04-card-edge" aria-hidden="true" />
                    <span className="lvf-s04-card-shard" aria-hidden="true" />
                    <div className="lvf-s04-card-head">
                      <div className="lvf-s04-card-mark">
                        <span className="lvf-s04-chip" aria-hidden="true"><svg className="lvf-s04-chip-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-black)" d="M3.1 3.4h2.3l2.6 6.2 3.8-5-1.5-1.1 4.4-1-.3 4.5-1.4-1.1-4.7 6.3H7.1L3.1 3.4Z" /></svg></span>
                        <span className="lvf-s04-pop"><svg className="lvf-s04-pop-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-black)" d="M8 .9c.3 0 .6.2.8.5l1.8 3.6 4 .6c.7.1 1 .9.5 1.4l-2.9 2.8.7 4c.1.7-.6 1.2-1.2.9L8 12.8l-3.6 1.9c-.6.3-1.3-.2-1.2-.9l.7-4L1 7c-.5-.5-.2-1.3.5-1.4l4-.6L7.2 1.4c.2-.3.5-.5.8-.5Z" /></svg><span className="lvf-s04-pop-t">Most Popular</span></span>
                      </div>
                      <p className="lvf-s04-card-kind">Lvlup Evaluation</p>
                      <p className="lvf-s04-card-size">$50,000</p>
                    </div>
                    <div className="lvf-s04-buy">
                      <a className="lvf-s04-btn" href="https://lvlupfuturesdashboard.propaccount.com/en/challenges/purchase?category=35" target="_blank" rel="noopener" aria-label="One-Time payment $338 for the $50,000 Lvlup Evaluation - see it in the payout calculator below">
                        <span className="lvf-s04-btn-label">One-Time</span>
                        <span className="lvf-s04-btn-price">$338</span>
                      </a>
                      <p className="lvf-s04-or"><span className="lvf-s04-or-l" aria-hidden="true" /><span className="lvf-s04-or-t">OR</span><span className="lvf-s04-or-l" aria-hidden="true" /></p>
                      <a className="lvf-s04-btn" href="https://lvlupfuturesdashboard.propaccount.com/en/challenges/purchase?category=35" target="_blank" rel="noopener" aria-label="Monthly payment $225/mo for the $50,000 Lvlup Evaluation - see it in the payout calculator below">
                        <span className="lvf-s04-btn-label">Monthly</span>
                        <span className="lvf-s04-btn-price">$225/mo</span>
                      </a>
                    </div>
                    <p className="lvf-s04-sep"><span className="lvf-s04-sep-l" aria-hidden="true" /><span className="lvf-s04-sep-t">What’s Included</span><span className="lvf-s04-sep-l" aria-hidden="true" /></p>
                    <ul className="lvf-s04-specs">
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M1.6 1.4a.7.7 0 0 1 .7.7v10.1c0 .3.2.5.5.5h11.6a.7.7 0 0 1 0 1.4H2.8A1.9 1.9 0 0 1 .9 12.2V2.1a.7.7 0 0 1 .7-.7Z" /><path fill="url(#lvf-s04-g-soft)" d="M14.4 4.1a.6.6 0 0 1 .6.6v7.2H4.1V8.4l2.5-2.5a.9.9 0 0 1 1.2 0l1.5 1.5 4.4-3.1a.6.6 0 0 1 .7-.2Z" /></svg>
                        <span className="lvf-s04-srow-k">Profit Target</span>
                        <span className="lvf-s04-srow-v">$3,000</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M2.6 2.2h10.8c.9 0 1.6.7 1.6 1.6v6.3c0 .9-.7 1.6-1.6 1.6H2.6c-.9 0-1.6-.7-1.6-1.6V3.8c0-.9.7-1.6 1.6-1.6Zm.6 4.5a.6.6 0 0 0 0 1.3h2.3c.2 0 .4-.1.5-.3l.6-1 1.2 2.4c.2.5.9.5 1.1 0l1-2 .4.7c.1.2.3.3.5.3h2.1a.6.6 0 0 0 0-1.3h-1.7l-.9-1.5a.6.6 0 0 0-1 0L8.3 7.4 7.1 5a.6.6 0 0 0-1 0l-1 1.7H3.2Z" /><path fill="url(#lvf-s04-g-soft)" d="M5.6 12.5h4.8l.4 1.5a.5.5 0 0 1-.5.6H5.7a.5.5 0 0 1-.5-.6l.4-1.5Z" /></svg>
                        <span className="lvf-s04-srow-k">EOD Trailing Drawdown</span>
                        <span className="lvf-s04-srow-v">$2,500</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M4.2 1.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V2.4c0-.6-.5-1.1-1.1-1.1Zm0 5.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V7.7c0-.6-.5-1.1-1.1-1.1Zm5.3-5.3H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V2.4c0-.6-.5-1.1-1.1-1.1Zm0 5.3H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V7.7c0-.6-.5-1.1-1.1-1.1Zm-5.3 5.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V13c0-.6-.5-1.1-1.1-1.1Zm5.3 0H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V13c0-.6-.5-1.1-1.1-1.1Zm4.2-9.4a.6.6 0 0 1 .6.6v2.2h2.2a.6.6 0 0 1 0 1.2h-2.2v2.2a.6.6 0 0 1-1.2 0V6.5h-2.2a.6.6 0 0 1 0-1.2h2.2V3.1a.6.6 0 0 1 .6-.6Z" /></svg>
                        <span className="lvf-s04-srow-k">Min. Trading Days</span>
                        <span className="lvf-s04-srow-v">5 days</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M6.1.9a.5.5 0 0 1 .5.4l.7 2.6 2.6.7a.5.5 0 0 1 0 1l-2.6.7-.7 2.6a.5.5 0 0 1-1 0l-.7-2.6-2.6-.7a.5.5 0 0 1 0-1l2.6-.7.7-2.6a.5.5 0 0 1 .5-.4Zm6.4 6.4a.5.5 0 0 1 .5.4l.4 1.4 1.4.4a.5.5 0 0 1 0 1l-1.4.4-.4 1.4a.5.5 0 0 1-1 0l-.4-1.4-1.4-.4a.5.5 0 0 1 0-1l1.4-.4.4-1.4a.5.5 0 0 1 .5-.4Zm-6 4.6a.5.5 0 0 1 .5.3l.3 1 1 .3a.5.5 0 0 1 0 1l-1 .3-.3 1a.5.5 0 0 1-1 0l-.3-1-1-.3a.5.5 0 0 1 0-1l1-.3.3-1a.5.5 0 0 1 .5-.3Z" /></svg>
                        <span className="lvf-s04-srow-k">Max Contracts</span>
                        <span className="lvf-s04-srow-v">3 Mini</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M2.2 3.4a1.2 1.2 0 0 1 1.2-1.2h3a1.2 1.2 0 0 1 1.2 1.2v9.2a1.2 1.2 0 0 1-1.2 1.2h-3a1.2 1.2 0 0 1-1.2-1.2V3.4Zm7.2 0a1.2 1.2 0 0 1 1.2-1.2h2a1.2 1.2 0 0 1 1.2 1.2v3a1.2 1.2 0 0 1-1.2 1.2h-2a1.2 1.2 0 0 1-1.2-1.2v-3Zm0 5.6a1.2 1.2 0 0 1 1.2-1.2h2a1.2 1.2 0 0 1 1.2 1.2v3.6a1.2 1.2 0 0 1-1.2 1.2h-2a1.2 1.2 0 0 1-1.2-1.2V9Z" /></svg>
                        <span className="lvf-s04-srow-k">Profit Split</span>
                        <span className="lvf-s04-srow-v">80%</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" fillRule="evenodd" d="M1.5 1.6a.8.8 0 0 1 1.1-.1l1.9 1.5-1 1.3-1.9-1.5a.8.8 0 0 1-.1-1.2Zm13 0a.8.8 0 0 1-.1 1.2l-1.9 1.5-1-1.3 1.9-1.5a.8.8 0 0 1 1.1.1ZM8 3.6a5.9 5.9 0 1 0 0 11.8A5.9 5.9 0 0 0 8 3.6Zm-.65 2.5a.65.65 0 0 1 1.3 0v3.08l2.03 2.03a.65.65 0 1 1-.92.92l-2.22-2.22a.65.65 0 0 1-.19-.46V6.1Z" /></svg>
                        <span className="lvf-s04-srow-k">Payout Cycle</span>
                        <span className="lvf-s04-srow-v">Every 14 days</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" fillRule="evenodd" d="M8 2.4a3 3 0 0 0-3 3v1.4H4a1.1 1.1 0 0 0-1.1 1.1v5a1.1 1.1 0 0 0 1.1 1.1h8a1.1 1.1 0 0 0 1.1-1.1v-5A1.1 1.1 0 0 0 12 6.8h-1V5.4a3 3 0 0 0-3-3Zm0 1.4a1.6 1.6 0 0 1 1.6 1.6v1.4H6.4V5.4A1.6 1.6 0 0 1 8 3.8Zm0 5.1a1.05 1.05 0 0 1 .55 1.95l.18 1.05a.73.73 0 0 1-1.46 0l.18-1.05A1.05 1.05 0 0 1 8 8.9Z" /></svg>
                        <span className="lvf-s04-srow-k">Payout Cap</span>
                        <span className="lvf-s04-srow-v">10% of Balance</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M2 9.6a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v3.2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9.6Zm4.8-2.8a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H7.8a1 1 0 0 1-1-1v-6Zm4.8-2.8a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v8.8a1 1 0 0 1-1 1h-1.4a1 1 0 0 1-1-1V4Z" /></svg>
                        <span className="lvf-s04-srow-k">Consistency Rule</span>
                        <span className="lvf-s04-srow-v">40%</span>
                      </li>
                    </ul>
                    <span className="lvf-s04-rule" aria-hidden="true" />
                    <ul className="lvf-s04-checks">
                      <li className="lvf-s04-crow lvf-s04-crow--blue">
                        <svg className="lvf-s04-crow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M8 .9A7.1 7.1 0 1 1 .9 8 7.1 7.1 0 0 1 8 .9Zm3.3 4.7a.9.9 0 0 0-1.3 0L7 8.7 6 7.7a.9.9 0 0 0-1.3 1.3l1.7 1.7c.4.3.9.3 1.3 0l3.6-3.7a.9.9 0 0 0 0-1.4Z" /></svg>
                        <span className="lvf-s04-crow-t">No Daily Loss Limit</span>
                      </li>
                      <li className="lvf-s04-crow lvf-s04-crow--dim">
                        <svg className="lvf-s04-crow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-dim)" d="M8 .9A7.1 7.1 0 1 1 .9 8 7.1 7.1 0 0 1 8 .9Zm3.3 4.7a.9.9 0 0 0-1.3 0L7 8.7 6 7.7a.9.9 0 0 0-1.3 1.3l1.7 1.7c.4.3.9.3 1.3 0l3.6-3.7a.9.9 0 0 0 0-1.4Z" /></svg>
                        <span className="lvf-s04-crow-t">Activation Fee After Passing</span>
                      </li>
                      <li className="lvf-s04-crow lvf-s04-crow--gold">
                        <svg className="lvf-s04-crow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-gold)" d="M8 .9A7.1 7.1 0 1 1 .9 8 7.1 7.1 0 0 1 8 .9Zm3.3 4.7a.9.9 0 0 0-1.3 0L7 8.7 6 7.7a.9.9 0 0 0-1.3 1.3l1.7 1.7c.4.3.9.3 1.3 0l3.6-3.7a.9.9 0 0 0 0-1.4Z" /></svg>
                        <span className="lvf-s04-crow-t">Payout Certificate Block</span>
                        <span className="lvf-s04-crow-info" tabIndex={0} role="button" aria-label="Payout Certificate Block info"><svg className="lvf-s04-crow-info-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-gold)" d="M8 .9A7.1 7.1 0 1 1 .9 8 7.1 7.1 0 0 1 8 .9Zm0 5.9a1 1 0 0 0-1 1v3.4a1 1 0 0 0 2 0V7.8a1 1 0 0 0-1-1Zm0-3.3a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2Z" /></svg><span className="lvf-s04-tooltip" role="tooltip">Receive an official Lvlup Payout Certificate Block after completing your first successful payout.</span></span>
                      </li>
                    </ul>
                  </div>
                  <a className="lvf-s04-card-note" href="https://lvlupfuturesdashboard.propaccount.com/en/challenges/purchase?category=35" target="_blank" rel="noopener">Opens in external dashboard</a>
                </article>
                <article className="lvf-s04-card">
                  <div className="lvf-s04-card-in">
                    <span className="lvf-s04-card-glow" aria-hidden="true" />
                    <span className="lvf-s04-card-edge" aria-hidden="true" />
                    <span className="lvf-s04-card-shard" aria-hidden="true" />
                    <div className="lvf-s04-card-head">
                      <div className="lvf-s04-card-mark">
                        <span className="lvf-s04-chip" aria-hidden="true"><svg className="lvf-s04-chip-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-black)" d="M3.1 3.4h2.3l2.6 6.2 3.8-5-1.5-1.1 4.4-1-.3 4.5-1.4-1.1-4.7 6.3H7.1L3.1 3.4Z" /></svg></span>
                      </div>
                      <p className="lvf-s04-card-kind">Lvlup Evaluation</p>
                      <p className="lvf-s04-card-size">$100,000</p>
                    </div>
                    <div className="lvf-s04-buy">
                      <a className="lvf-s04-btn" href="https://lvlupfuturesdashboard.propaccount.com/en/challenges/purchase?category=35" target="_blank" rel="noopener" aria-label="One-Time payment $554 for the $100,000 Lvlup Evaluation - see it in the payout calculator below">
                        <span className="lvf-s04-btn-label">One-Time</span>
                        <span className="lvf-s04-btn-price">$554</span>
                      </a>
                      <p className="lvf-s04-or"><span className="lvf-s04-or-l" aria-hidden="true" /><span className="lvf-s04-or-t">OR</span><span className="lvf-s04-or-l" aria-hidden="true" /></p>
                      <a className="lvf-s04-btn" href="https://lvlupfuturesdashboard.propaccount.com/en/challenges/purchase?category=35" target="_blank" rel="noopener" aria-label="Monthly payment $369/mo for the $100,000 Lvlup Evaluation - see it in the payout calculator below">
                        <span className="lvf-s04-btn-label">Monthly</span>
                        <span className="lvf-s04-btn-price">$369/mo</span>
                      </a>
                    </div>
                    <p className="lvf-s04-sep"><span className="lvf-s04-sep-l" aria-hidden="true" /><span className="lvf-s04-sep-t">What’s Included</span><span className="lvf-s04-sep-l" aria-hidden="true" /></p>
                    <ul className="lvf-s04-specs">
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M1.6 1.4a.7.7 0 0 1 .7.7v10.1c0 .3.2.5.5.5h11.6a.7.7 0 0 1 0 1.4H2.8A1.9 1.9 0 0 1 .9 12.2V2.1a.7.7 0 0 1 .7-.7Z" /><path fill="url(#lvf-s04-g-soft)" d="M14.4 4.1a.6.6 0 0 1 .6.6v7.2H4.1V8.4l2.5-2.5a.9.9 0 0 1 1.2 0l1.5 1.5 4.4-3.1a.6.6 0 0 1 .7-.2Z" /></svg>
                        <span className="lvf-s04-srow-k">Profit Target</span>
                        <span className="lvf-s04-srow-v">$7,000</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M2.6 2.2h10.8c.9 0 1.6.7 1.6 1.6v6.3c0 .9-.7 1.6-1.6 1.6H2.6c-.9 0-1.6-.7-1.6-1.6V3.8c0-.9.7-1.6 1.6-1.6Zm.6 4.5a.6.6 0 0 0 0 1.3h2.3c.2 0 .4-.1.5-.3l.6-1 1.2 2.4c.2.5.9.5 1.1 0l1-2 .4.7c.1.2.3.3.5.3h2.1a.6.6 0 0 0 0-1.3h-1.7l-.9-1.5a.6.6 0 0 0-1 0L8.3 7.4 7.1 5a.6.6 0 0 0-1 0l-1 1.7H3.2Z" /><path fill="url(#lvf-s04-g-soft)" d="M5.6 12.5h4.8l.4 1.5a.5.5 0 0 1-.5.6H5.7a.5.5 0 0 1-.5-.6l.4-1.5Z" /></svg>
                        <span className="lvf-s04-srow-k">EOD Trailing Drawdown</span>
                        <span className="lvf-s04-srow-v">$5,000</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M4.2 1.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V2.4c0-.6-.5-1.1-1.1-1.1Zm0 5.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V7.7c0-.6-.5-1.1-1.1-1.1Zm5.3-5.3H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V2.4c0-.6-.5-1.1-1.1-1.1Zm0 5.3H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V7.7c0-.6-.5-1.1-1.1-1.1Zm-5.3 5.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V13c0-.6-.5-1.1-1.1-1.1Zm5.3 0H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V13c0-.6-.5-1.1-1.1-1.1Zm4.2-9.4a.6.6 0 0 1 .6.6v2.2h2.2a.6.6 0 0 1 0 1.2h-2.2v2.2a.6.6 0 0 1-1.2 0V6.5h-2.2a.6.6 0 0 1 0-1.2h2.2V3.1a.6.6 0 0 1 .6-.6Z" /></svg>
                        <span className="lvf-s04-srow-k">Min. Trading Days</span>
                        <span className="lvf-s04-srow-v">5 days</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M6.1.9a.5.5 0 0 1 .5.4l.7 2.6 2.6.7a.5.5 0 0 1 0 1l-2.6.7-.7 2.6a.5.5 0 0 1-1 0l-.7-2.6-2.6-.7a.5.5 0 0 1 0-1l2.6-.7.7-2.6a.5.5 0 0 1 .5-.4Zm6.4 6.4a.5.5 0 0 1 .5.4l.4 1.4 1.4.4a.5.5 0 0 1 0 1l-1.4.4-.4 1.4a.5.5 0 0 1-1 0l-.4-1.4-1.4-.4a.5.5 0 0 1 0-1l1.4-.4.4-1.4a.5.5 0 0 1 .5-.4Zm-6 4.6a.5.5 0 0 1 .5.3l.3 1 1 .3a.5.5 0 0 1 0 1l-1 .3-.3 1a.5.5 0 0 1-1 0l-.3-1-1-.3a.5.5 0 0 1 0-1l1-.3.3-1a.5.5 0 0 1 .5-.3Z" /></svg>
                        <span className="lvf-s04-srow-k">Max Contracts</span>
                        <span className="lvf-s04-srow-v">6 Mini</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M2.2 3.4a1.2 1.2 0 0 1 1.2-1.2h3a1.2 1.2 0 0 1 1.2 1.2v9.2a1.2 1.2 0 0 1-1.2 1.2h-3a1.2 1.2 0 0 1-1.2-1.2V3.4Zm7.2 0a1.2 1.2 0 0 1 1.2-1.2h2a1.2 1.2 0 0 1 1.2 1.2v3a1.2 1.2 0 0 1-1.2 1.2h-2a1.2 1.2 0 0 1-1.2-1.2v-3Zm0 5.6a1.2 1.2 0 0 1 1.2-1.2h2a1.2 1.2 0 0 1 1.2 1.2v3.6a1.2 1.2 0 0 1-1.2 1.2h-2a1.2 1.2 0 0 1-1.2-1.2V9Z" /></svg>
                        <span className="lvf-s04-srow-k">Profit Split</span>
                        <span className="lvf-s04-srow-v">80%</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" fillRule="evenodd" d="M1.5 1.6a.8.8 0 0 1 1.1-.1l1.9 1.5-1 1.3-1.9-1.5a.8.8 0 0 1-.1-1.2Zm13 0a.8.8 0 0 1-.1 1.2l-1.9 1.5-1-1.3 1.9-1.5a.8.8 0 0 1 1.1.1ZM8 3.6a5.9 5.9 0 1 0 0 11.8A5.9 5.9 0 0 0 8 3.6Zm-.65 2.5a.65.65 0 0 1 1.3 0v3.08l2.03 2.03a.65.65 0 1 1-.92.92l-2.22-2.22a.65.65 0 0 1-.19-.46V6.1Z" /></svg>
                        <span className="lvf-s04-srow-k">Payout Cycle</span>
                        <span className="lvf-s04-srow-v">Every 14 days</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" fillRule="evenodd" d="M8 2.4a3 3 0 0 0-3 3v1.4H4a1.1 1.1 0 0 0-1.1 1.1v5a1.1 1.1 0 0 0 1.1 1.1h8a1.1 1.1 0 0 0 1.1-1.1v-5A1.1 1.1 0 0 0 12 6.8h-1V5.4a3 3 0 0 0-3-3Zm0 1.4a1.6 1.6 0 0 1 1.6 1.6v1.4H6.4V5.4A1.6 1.6 0 0 1 8 3.8Zm0 5.1a1.05 1.05 0 0 1 .55 1.95l.18 1.05a.73.73 0 0 1-1.46 0l.18-1.05A1.05 1.05 0 0 1 8 8.9Z" /></svg>
                        <span className="lvf-s04-srow-k">Payout Cap</span>
                        <span className="lvf-s04-srow-v">10% of Balance</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M2 9.6a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v3.2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9.6Zm4.8-2.8a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H7.8a1 1 0 0 1-1-1v-6Zm4.8-2.8a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v8.8a1 1 0 0 1-1 1h-1.4a1 1 0 0 1-1-1V4Z" /></svg>
                        <span className="lvf-s04-srow-k">Consistency Rule</span>
                        <span className="lvf-s04-srow-v">40%</span>
                      </li>
                    </ul>
                    <span className="lvf-s04-rule" aria-hidden="true" />
                    <ul className="lvf-s04-checks">
                      <li className="lvf-s04-crow lvf-s04-crow--blue">
                        <svg className="lvf-s04-crow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M8 .9A7.1 7.1 0 1 1 .9 8 7.1 7.1 0 0 1 8 .9Zm3.3 4.7a.9.9 0 0 0-1.3 0L7 8.7 6 7.7a.9.9 0 0 0-1.3 1.3l1.7 1.7c.4.3.9.3 1.3 0l3.6-3.7a.9.9 0 0 0 0-1.4Z" /></svg>
                        <span className="lvf-s04-crow-t">No Daily Loss Limit</span>
                      </li>
                      <li className="lvf-s04-crow lvf-s04-crow--dim">
                        <svg className="lvf-s04-crow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-dim)" d="M8 .9A7.1 7.1 0 1 1 .9 8 7.1 7.1 0 0 1 8 .9Zm3.3 4.7a.9.9 0 0 0-1.3 0L7 8.7 6 7.7a.9.9 0 0 0-1.3 1.3l1.7 1.7c.4.3.9.3 1.3 0l3.6-3.7a.9.9 0 0 0 0-1.4Z" /></svg>
                        <span className="lvf-s04-crow-t">Activation Fee After Passing</span>
                      </li>
                      <li className="lvf-s04-crow lvf-s04-crow--gold">
                        <svg className="lvf-s04-crow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-gold)" d="M8 .9A7.1 7.1 0 1 1 .9 8 7.1 7.1 0 0 1 8 .9Zm3.3 4.7a.9.9 0 0 0-1.3 0L7 8.7 6 7.7a.9.9 0 0 0-1.3 1.3l1.7 1.7c.4.3.9.3 1.3 0l3.6-3.7a.9.9 0 0 0 0-1.4Z" /></svg>
                        <span className="lvf-s04-crow-t">Payout Certificate Block</span>
                        <span className="lvf-s04-crow-info" tabIndex={0} role="button" aria-label="Payout Certificate Block info"><svg className="lvf-s04-crow-info-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-gold)" d="M8 .9A7.1 7.1 0 1 1 .9 8 7.1 7.1 0 0 1 8 .9Zm0 5.9a1 1 0 0 0-1 1v3.4a1 1 0 0 0 2 0V7.8a1 1 0 0 0-1-1Zm0-3.3a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2Z" /></svg><span className="lvf-s04-tooltip" role="tooltip">Receive an official Lvlup Payout Certificate Block after completing your first successful payout.</span></span>
                      </li>
                    </ul>
                  </div>
                  <a className="lvf-s04-card-note" href="https://lvlupfuturesdashboard.propaccount.com/en/challenges/purchase?category=35" target="_blank" rel="noopener">Opens in external dashboard</a>
                </article>
                <article className="lvf-s04-card">
                  <div className="lvf-s04-card-in">
                    <span className="lvf-s04-card-glow" aria-hidden="true" />
                    <span className="lvf-s04-card-edge" aria-hidden="true" />
                    <span className="lvf-s04-card-shard" aria-hidden="true" />
                    <div className="lvf-s04-card-head">
                      <div className="lvf-s04-card-mark">
                        <span className="lvf-s04-chip" aria-hidden="true"><svg className="lvf-s04-chip-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-black)" d="M3.1 3.4h2.3l2.6 6.2 3.8-5-1.5-1.1 4.4-1-.3 4.5-1.4-1.1-4.7 6.3H7.1L3.1 3.4Z" /></svg></span>
                      </div>
                      <p className="lvf-s04-card-kind">Lvlup Evaluation</p>
                      <p className="lvf-s04-card-size">$150,000</p>
                    </div>
                    <div className="lvf-s04-buy">
                      <a className="lvf-s04-btn" href="https://lvlupfuturesdashboard.propaccount.com/en/challenges/purchase?category=35" target="_blank" rel="noopener" aria-label="One-Time payment $714 for the $150,000 Lvlup Evaluation - see it in the payout calculator below">
                        <span className="lvf-s04-btn-label">One-Time</span>
                        <span className="lvf-s04-btn-price">$714</span>
                      </a>
                      <p className="lvf-s04-or"><span className="lvf-s04-or-l" aria-hidden="true" /><span className="lvf-s04-or-t">OR</span><span className="lvf-s04-or-l" aria-hidden="true" /></p>
                      <a className="lvf-s04-btn" href="https://lvlupfuturesdashboard.propaccount.com/en/challenges/purchase?category=35" target="_blank" rel="noopener" aria-label="Monthly payment $476/mo for the $150,000 Lvlup Evaluation - see it in the payout calculator below">
                        <span className="lvf-s04-btn-label">Monthly</span>
                        <span className="lvf-s04-btn-price">$476/mo</span>
                      </a>
                    </div>
                    <p className="lvf-s04-sep"><span className="lvf-s04-sep-l" aria-hidden="true" /><span className="lvf-s04-sep-t">What’s Included</span><span className="lvf-s04-sep-l" aria-hidden="true" /></p>
                    <ul className="lvf-s04-specs">
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M1.6 1.4a.7.7 0 0 1 .7.7v10.1c0 .3.2.5.5.5h11.6a.7.7 0 0 1 0 1.4H2.8A1.9 1.9 0 0 1 .9 12.2V2.1a.7.7 0 0 1 .7-.7Z" /><path fill="url(#lvf-s04-g-soft)" d="M14.4 4.1a.6.6 0 0 1 .6.6v7.2H4.1V8.4l2.5-2.5a.9.9 0 0 1 1.2 0l1.5 1.5 4.4-3.1a.6.6 0 0 1 .7-.2Z" /></svg>
                        <span className="lvf-s04-srow-k">Profit Target</span>
                        <span className="lvf-s04-srow-v">$12,000</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M2.6 2.2h10.8c.9 0 1.6.7 1.6 1.6v6.3c0 .9-.7 1.6-1.6 1.6H2.6c-.9 0-1.6-.7-1.6-1.6V3.8c0-.9.7-1.6 1.6-1.6Zm.6 4.5a.6.6 0 0 0 0 1.3h2.3c.2 0 .4-.1.5-.3l.6-1 1.2 2.4c.2.5.9.5 1.1 0l1-2 .4.7c.1.2.3.3.5.3h2.1a.6.6 0 0 0 0-1.3h-1.7l-.9-1.5a.6.6 0 0 0-1 0L8.3 7.4 7.1 5a.6.6 0 0 0-1 0l-1 1.7H3.2Z" /><path fill="url(#lvf-s04-g-soft)" d="M5.6 12.5h4.8l.4 1.5a.5.5 0 0 1-.5.6H5.7a.5.5 0 0 1-.5-.6l.4-1.5Z" /></svg>
                        <span className="lvf-s04-srow-k">EOD Trailing Drawdown</span>
                        <span className="lvf-s04-srow-v">$7,500</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M4.2 1.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V2.4c0-.6-.5-1.1-1.1-1.1Zm0 5.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V7.7c0-.6-.5-1.1-1.1-1.1Zm5.3-5.3H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V2.4c0-.6-.5-1.1-1.1-1.1Zm0 5.3H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V7.7c0-.6-.5-1.1-1.1-1.1Zm-5.3 5.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V13c0-.6-.5-1.1-1.1-1.1Zm5.3 0H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V13c0-.6-.5-1.1-1.1-1.1Zm4.2-9.4a.6.6 0 0 1 .6.6v2.2h2.2a.6.6 0 0 1 0 1.2h-2.2v2.2a.6.6 0 0 1-1.2 0V6.5h-2.2a.6.6 0 0 1 0-1.2h2.2V3.1a.6.6 0 0 1 .6-.6Z" /></svg>
                        <span className="lvf-s04-srow-k">Min. Trading Days</span>
                        <span className="lvf-s04-srow-v">5 days</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M6.1.9a.5.5 0 0 1 .5.4l.7 2.6 2.6.7a.5.5 0 0 1 0 1l-2.6.7-.7 2.6a.5.5 0 0 1-1 0l-.7-2.6-2.6-.7a.5.5 0 0 1 0-1l2.6-.7.7-2.6a.5.5 0 0 1 .5-.4Zm6.4 6.4a.5.5 0 0 1 .5.4l.4 1.4 1.4.4a.5.5 0 0 1 0 1l-1.4.4-.4 1.4a.5.5 0 0 1-1 0l-.4-1.4-1.4-.4a.5.5 0 0 1 0-1l1.4-.4.4-1.4a.5.5 0 0 1 .5-.4Zm-6 4.6a.5.5 0 0 1 .5.3l.3 1 1 .3a.5.5 0 0 1 0 1l-1 .3-.3 1a.5.5 0 0 1-1 0l-.3-1-1-.3a.5.5 0 0 1 0-1l1-.3.3-1a.5.5 0 0 1 .5-.3Z" /></svg>
                        <span className="lvf-s04-srow-k">Max Contracts</span>
                        <span className="lvf-s04-srow-v">9 Mini</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M2.2 3.4a1.2 1.2 0 0 1 1.2-1.2h3a1.2 1.2 0 0 1 1.2 1.2v9.2a1.2 1.2 0 0 1-1.2 1.2h-3a1.2 1.2 0 0 1-1.2-1.2V3.4Zm7.2 0a1.2 1.2 0 0 1 1.2-1.2h2a1.2 1.2 0 0 1 1.2 1.2v3a1.2 1.2 0 0 1-1.2 1.2h-2a1.2 1.2 0 0 1-1.2-1.2v-3Zm0 5.6a1.2 1.2 0 0 1 1.2-1.2h2a1.2 1.2 0 0 1 1.2 1.2v3.6a1.2 1.2 0 0 1-1.2 1.2h-2a1.2 1.2 0 0 1-1.2-1.2V9Z" /></svg>
                        <span className="lvf-s04-srow-k">Profit Split</span>
                        <span className="lvf-s04-srow-v">80%</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" fillRule="evenodd" d="M1.5 1.6a.8.8 0 0 1 1.1-.1l1.9 1.5-1 1.3-1.9-1.5a.8.8 0 0 1-.1-1.2Zm13 0a.8.8 0 0 1-.1 1.2l-1.9 1.5-1-1.3 1.9-1.5a.8.8 0 0 1 1.1.1ZM8 3.6a5.9 5.9 0 1 0 0 11.8A5.9 5.9 0 0 0 8 3.6Zm-.65 2.5a.65.65 0 0 1 1.3 0v3.08l2.03 2.03a.65.65 0 1 1-.92.92l-2.22-2.22a.65.65 0 0 1-.19-.46V6.1Z" /></svg>
                        <span className="lvf-s04-srow-k">Payout Cycle</span>
                        <span className="lvf-s04-srow-v">Every 14 days</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" fillRule="evenodd" d="M8 2.4a3 3 0 0 0-3 3v1.4H4a1.1 1.1 0 0 0-1.1 1.1v5a1.1 1.1 0 0 0 1.1 1.1h8a1.1 1.1 0 0 0 1.1-1.1v-5A1.1 1.1 0 0 0 12 6.8h-1V5.4a3 3 0 0 0-3-3Zm0 1.4a1.6 1.6 0 0 1 1.6 1.6v1.4H6.4V5.4A1.6 1.6 0 0 1 8 3.8Zm0 5.1a1.05 1.05 0 0 1 .55 1.95l.18 1.05a.73.73 0 0 1-1.46 0l.18-1.05A1.05 1.05 0 0 1 8 8.9Z" /></svg>
                        <span className="lvf-s04-srow-k">Payout Cap</span>
                        <span className="lvf-s04-srow-v">10% of Balance</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M2 9.6a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v3.2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9.6Zm4.8-2.8a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H7.8a1 1 0 0 1-1-1v-6Zm4.8-2.8a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v8.8a1 1 0 0 1-1 1h-1.4a1 1 0 0 1-1-1V4Z" /></svg>
                        <span className="lvf-s04-srow-k">Consistency Rule</span>
                        <span className="lvf-s04-srow-v">40%</span>
                      </li>
                    </ul>
                    <span className="lvf-s04-rule" aria-hidden="true" />
                    <ul className="lvf-s04-checks">
                      <li className="lvf-s04-crow lvf-s04-crow--blue">
                        <svg className="lvf-s04-crow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M8 .9A7.1 7.1 0 1 1 .9 8 7.1 7.1 0 0 1 8 .9Zm3.3 4.7a.9.9 0 0 0-1.3 0L7 8.7 6 7.7a.9.9 0 0 0-1.3 1.3l1.7 1.7c.4.3.9.3 1.3 0l3.6-3.7a.9.9 0 0 0 0-1.4Z" /></svg>
                        <span className="lvf-s04-crow-t">No Daily Loss Limit</span>
                      </li>
                      <li className="lvf-s04-crow lvf-s04-crow--dim">
                        <svg className="lvf-s04-crow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-dim)" d="M8 .9A7.1 7.1 0 1 1 .9 8 7.1 7.1 0 0 1 8 .9Zm3.3 4.7a.9.9 0 0 0-1.3 0L7 8.7 6 7.7a.9.9 0 0 0-1.3 1.3l1.7 1.7c.4.3.9.3 1.3 0l3.6-3.7a.9.9 0 0 0 0-1.4Z" /></svg>
                        <span className="lvf-s04-crow-t">Activation Fee After Passing</span>
                      </li>
                      <li className="lvf-s04-crow lvf-s04-crow--gold">
                        <svg className="lvf-s04-crow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-gold)" d="M8 .9A7.1 7.1 0 1 1 .9 8 7.1 7.1 0 0 1 8 .9Zm3.3 4.7a.9.9 0 0 0-1.3 0L7 8.7 6 7.7a.9.9 0 0 0-1.3 1.3l1.7 1.7c.4.3.9.3 1.3 0l3.6-3.7a.9.9 0 0 0 0-1.4Z" /></svg>
                        <span className="lvf-s04-crow-t">Payout Certificate Block</span>
                        <span className="lvf-s04-crow-info" tabIndex={0} role="button" aria-label="Payout Certificate Block info"><svg className="lvf-s04-crow-info-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-gold)" d="M8 .9A7.1 7.1 0 1 1 .9 8 7.1 7.1 0 0 1 8 .9Zm0 5.9a1 1 0 0 0-1 1v3.4a1 1 0 0 0 2 0V7.8a1 1 0 0 0-1-1Zm0-3.3a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2Z" /></svg><span className="lvf-s04-tooltip" role="tooltip">Receive an official Lvlup Payout Certificate Block after completing your first successful payout.</span></span>
                      </li>
                    </ul>
                  </div>
                  <a className="lvf-s04-card-note" href="https://lvlupfuturesdashboard.propaccount.com/en/challenges/purchase?category=35" target="_blank" rel="noopener">Opens in external dashboard</a>
                </article>
              </div>
              <div className="lvf-s04-cards" id="lvf-s04-panel-starter" role="tabpanel" aria-labelledby="lvf-s04-tab-starter" data-lvf-plan-panel="starter">
                <article className="lvf-s04-card">
                  <div className="lvf-s04-card-in">
                    <span className="lvf-s04-card-glow" aria-hidden="true" />
                    <span className="lvf-s04-card-edge" aria-hidden="true" />
                    <span className="lvf-s04-card-shard" aria-hidden="true" />
                    <div className="lvf-s04-card-head">
                      <div className="lvf-s04-card-mark">
                        <span className="lvf-s04-chip" aria-hidden="true"><svg className="lvf-s04-chip-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-black)" d="M3.1 3.4h2.3l2.6 6.2 3.8-5-1.5-1.1 4.4-1-.3 4.5-1.4-1.1-4.7 6.3H7.1L3.1 3.4Z" /></svg></span>
                      </div>
                      <p className="lvf-s04-card-kind">Starter Evaluation</p>
                      <p className="lvf-s04-card-size">$25,000</p>
                    </div>
                    <div className="lvf-s04-buy">
                      <a className="lvf-s04-btn" href="https://lvlupfuturesdashboard.propaccount.com/en/challenges/purchase?category=35" target="_blank" rel="noopener" aria-label="One-Time payment $129 for the $25,000 Starter Evaluation - see it in the payout calculator below">
                        <span className="lvf-s04-btn-label">One-Time</span>
                        <span className="lvf-s04-btn-price">$129</span>
                      </a>
                    </div>
                    <p className="lvf-s04-sep"><span className="lvf-s04-sep-l" aria-hidden="true" /><span className="lvf-s04-sep-t">What’s Included</span><span className="lvf-s04-sep-l" aria-hidden="true" /></p>
                    <ul className="lvf-s04-specs">
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M1.6 1.4a.7.7 0 0 1 .7.7v10.1c0 .3.2.5.5.5h11.6a.7.7 0 0 1 0 1.4H2.8A1.9 1.9 0 0 1 .9 12.2V2.1a.7.7 0 0 1 .7-.7Z" /><path fill="url(#lvf-s04-g-soft)" d="M14.4 4.1a.6.6 0 0 1 .6.6v7.2H4.1V8.4l2.5-2.5a.9.9 0 0 1 1.2 0l1.5 1.5 4.4-3.1a.6.6 0 0 1 .7-.2Z" /></svg>
                        <span className="lvf-s04-srow-k">Profit Target</span>
                        <span className="lvf-s04-srow-v">$1,500</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M2.6 2.2h10.8c.9 0 1.6.7 1.6 1.6v6.3c0 .9-.7 1.6-1.6 1.6H2.6c-.9 0-1.6-.7-1.6-1.6V3.8c0-.9.7-1.6 1.6-1.6Zm.6 4.5a.6.6 0 0 0 0 1.3h2.3c.2 0 .4-.1.5-.3l.6-1 1.2 2.4c.2.5.9.5 1.1 0l1-2 .4.7c.1.2.3.3.5.3h2.1a.6.6 0 0 0 0-1.3h-1.7l-.9-1.5a.6.6 0 0 0-1 0L8.3 7.4 7.1 5a.6.6 0 0 0-1 0l-1 1.7H3.2Z" /><path fill="url(#lvf-s04-g-soft)" d="M5.6 12.5h4.8l.4 1.5a.5.5 0 0 1-.5.6H5.7a.5.5 0 0 1-.5-.6l.4-1.5Z" /></svg>
                        <span className="lvf-s04-srow-k">EOD Trailing Drawdown</span>
                        <span className="lvf-s04-srow-v">$1,000</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M4.2 1.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V2.4c0-.6-.5-1.1-1.1-1.1Zm0 5.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V7.7c0-.6-.5-1.1-1.1-1.1Zm5.3-5.3H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V2.4c0-.6-.5-1.1-1.1-1.1Zm0 5.3H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V7.7c0-.6-.5-1.1-1.1-1.1Zm-5.3 5.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V13c0-.6-.5-1.1-1.1-1.1Zm5.3 0H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V13c0-.6-.5-1.1-1.1-1.1Zm4.2-9.4a.6.6 0 0 1 .6.6v2.2h2.2a.6.6 0 0 1 0 1.2h-2.2v2.2a.6.6 0 0 1-1.2 0V6.5h-2.2a.6.6 0 0 1 0-1.2h2.2V3.1a.6.6 0 0 1 .6-.6Z" /></svg>
                        <span className="lvf-s04-srow-k">Min. Trading Days</span>
                        <span className="lvf-s04-srow-v">5 days</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M6.1.9a.5.5 0 0 1 .5.4l.7 2.6 2.6.7a.5.5 0 0 1 0 1l-2.6.7-.7 2.6a.5.5 0 0 1-1 0l-.7-2.6-2.6-.7a.5.5 0 0 1 0-1l2.6-.7.7-2.6a.5.5 0 0 1 .5-.4Zm6.4 6.4a.5.5 0 0 1 .5.4l.4 1.4 1.4.4a.5.5 0 0 1 0 1l-1.4.4-.4 1.4a.5.5 0 0 1-1 0l-.4-1.4-1.4-.4a.5.5 0 0 1 0-1l1.4-.4.4-1.4a.5.5 0 0 1 .5-.4Zm-6 4.6a.5.5 0 0 1 .5.3l.3 1 1 .3a.5.5 0 0 1 0 1l-1 .3-.3 1a.5.5 0 0 1-1 0l-.3-1-1-.3a.5.5 0 0 1 0-1l1-.3.3-1a.5.5 0 0 1 .5-.3Z" /></svg>
                        <span className="lvf-s04-srow-k">Max Contracts</span>
                        <span className="lvf-s04-srow-v">1 Mini</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M2.2 3.4a1.2 1.2 0 0 1 1.2-1.2h3a1.2 1.2 0 0 1 1.2 1.2v9.2a1.2 1.2 0 0 1-1.2 1.2h-3a1.2 1.2 0 0 1-1.2-1.2V3.4Zm7.2 0a1.2 1.2 0 0 1 1.2-1.2h2a1.2 1.2 0 0 1 1.2 1.2v3a1.2 1.2 0 0 1-1.2 1.2h-2a1.2 1.2 0 0 1-1.2-1.2v-3Zm0 5.6a1.2 1.2 0 0 1 1.2-1.2h2a1.2 1.2 0 0 1 1.2 1.2v3.6a1.2 1.2 0 0 1-1.2 1.2h-2a1.2 1.2 0 0 1-1.2-1.2V9Z" /></svg>
                        <span className="lvf-s04-srow-k">Profit Split</span>
                        <span className="lvf-s04-srow-v">100%</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M8 .9a.8.8 0 0 1 .6.2l3.3 3.3a.8.8 0 1 1-1.1 1.1L8.8 3.8v6.5a.8.8 0 0 1-1.6 0V3.8L5.2 5.5A.8.8 0 0 1 4.1 4.4L7.4 1.1A.8.8 0 0 1 8 .9Zm-4.9 12h9.8a.9.9 0 0 1 0 1.8H3.1a.9.9 0 0 1 0-1.8Z" /></svg>
                        <span className="lvf-s04-srow-k">Profit Per Payout</span>
                        <span className="lvf-s04-srow-v">Up to 50%</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M2 9.6a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v3.2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9.6Zm4.8-2.8a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H7.8a1 1 0 0 1-1-1v-6Zm4.8-2.8a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v8.8a1 1 0 0 1-1 1h-1.4a1 1 0 0 1-1-1V4Z" /></svg>
                        <span className="lvf-s04-srow-k">Consistency Rule</span>
                        <span className="lvf-s04-srow-v">40%</span>
                      </li>
                    </ul>
                    <span className="lvf-s04-rule" aria-hidden="true" />
                    <ul className="lvf-s04-checks">
                      <li className="lvf-s04-crow lvf-s04-crow--blue">
                        <svg className="lvf-s04-crow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M8 .9A7.1 7.1 0 1 1 .9 8 7.1 7.1 0 0 1 8 .9Zm3.3 4.7a.9.9 0 0 0-1.3 0L7 8.7 6 7.7a.9.9 0 0 0-1.3 1.3l1.7 1.7c.4.3.9.3 1.3 0l3.6-3.7a.9.9 0 0 0 0-1.4Z" /></svg>
                        <span className="lvf-s04-crow-t">One-Time Fee Only</span>
                      </li>
                      <li className="lvf-s04-crow lvf-s04-crow--blue">
                        <svg className="lvf-s04-crow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M8 .9A7.1 7.1 0 1 1 .9 8 7.1 7.1 0 0 1 8 .9Zm3.3 4.7a.9.9 0 0 0-1.3 0L7 8.7 6 7.7a.9.9 0 0 0-1.3 1.3l1.7 1.7c.4.3.9.3 1.3 0l3.6-3.7a.9.9 0 0 0 0-1.4Z" /></svg>
                        <span className="lvf-s04-crow-t">Maximum 5 Payouts</span>
                      </li>
                      <li className="lvf-s04-crow lvf-s04-crow--dim">
                        <svg className="lvf-s04-crow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-dim)" d="M8 .9A7.1 7.1 0 1 1 .9 8 7.1 7.1 0 0 1 8 .9Zm3.3 4.7a.9.9 0 0 0-1.3 0L7 8.7 6 7.7a.9.9 0 0 0-1.3 1.3l1.7 1.7c.4.3.9.3 1.3 0l3.6-3.7a.9.9 0 0 0 0-1.4Z" /></svg>
                        <span className="lvf-s04-crow-t">No Activation Fee</span>
                      </li>
                      <li className="lvf-s04-crow lvf-s04-crow--dim">
                        <svg className="lvf-s04-crow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-dim)" d="M8 .9A7.1 7.1 0 1 1 .9 8 7.1 7.1 0 0 1 8 .9Zm3.3 4.7a.9.9 0 0 0-1.3 0L7 8.7 6 7.7a.9.9 0 0 0-1.3 1.3l1.7 1.7c.4.3.9.3 1.3 0l3.6-3.7a.9.9 0 0 0 0-1.4Z" /></svg>
                        <span className="lvf-s04-crow-t">30-Day Evaluation Period</span>
                      </li>
                      <li className="lvf-s04-crow lvf-s04-crow--gold">
                        <svg className="lvf-s04-crow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-gold)" d="M8 .9A7.1 7.1 0 1 1 .9 8 7.1 7.1 0 0 1 8 .9Zm3.3 4.7a.9.9 0 0 0-1.3 0L7 8.7 6 7.7a.9.9 0 0 0-1.3 1.3l1.7 1.7c.4.3.9.3 1.3 0l3.6-3.7a.9.9 0 0 0 0-1.4Z" /></svg>
                        <span className="lvf-s04-crow-t">Payout Certificate Block</span>
                        <span className="lvf-s04-crow-info" tabIndex={0} role="button" aria-label="Payout Certificate Block info"><svg className="lvf-s04-crow-info-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-gold)" d="M8 .9A7.1 7.1 0 1 1 .9 8 7.1 7.1 0 0 1 8 .9Zm0 5.9a1 1 0 0 0-1 1v3.4a1 1 0 0 0 2 0V7.8a1 1 0 0 0-1-1Zm0-3.3a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2Z" /></svg><span className="lvf-s04-tooltip" role="tooltip">Receive an official Lvlup Payout Certificate Block after completing your first successful payout.</span></span>
                      </li>
                    </ul>
                  </div>
                  <a className="lvf-s04-card-note" href="https://lvlupfuturesdashboard.propaccount.com/en/challenges/purchase?category=35" target="_blank" rel="noopener">Opens in external dashboard</a>
                </article>
                <article className="lvf-s04-card lvf-s04-card--pop">
                  <div className="lvf-s04-card-in">
                    <span className="lvf-s04-card-glow" aria-hidden="true" />
                    <span className="lvf-s04-card-edge" aria-hidden="true" />
                    <span className="lvf-s04-card-shard" aria-hidden="true" />
                    <div className="lvf-s04-card-head">
                      <div className="lvf-s04-card-mark">
                        <span className="lvf-s04-chip" aria-hidden="true"><svg className="lvf-s04-chip-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-black)" d="M3.1 3.4h2.3l2.6 6.2 3.8-5-1.5-1.1 4.4-1-.3 4.5-1.4-1.1-4.7 6.3H7.1L3.1 3.4Z" /></svg></span>
                        <span className="lvf-s04-pop"><svg className="lvf-s04-pop-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-black)" d="M8 .9c.3 0 .6.2.8.5l1.8 3.6 4 .6c.7.1 1 .9.5 1.4l-2.9 2.8.7 4c.1.7-.6 1.2-1.2.9L8 12.8l-3.6 1.9c-.6.3-1.3-.2-1.2-.9l.7-4L1 7c-.5-.5-.2-1.3.5-1.4l4-.6L7.2 1.4c.2-.3.5-.5.8-.5Z" /></svg><span className="lvf-s04-pop-t">Most Popular</span></span>
                      </div>
                      <p className="lvf-s04-card-kind">Starter Evaluation</p>
                      <p className="lvf-s04-card-size">$50,000</p>
                    </div>
                    <div className="lvf-s04-buy">
                      <a className="lvf-s04-btn" href="https://lvlupfuturesdashboard.propaccount.com/en/challenges/purchase?category=35" target="_blank" rel="noopener" aria-label="One-Time payment $194 for the $50,000 Starter Evaluation - see it in the payout calculator below">
                        <span className="lvf-s04-btn-label">One-Time</span>
                        <span className="lvf-s04-btn-price">$194</span>
                      </a>
                    </div>
                    <p className="lvf-s04-sep"><span className="lvf-s04-sep-l" aria-hidden="true" /><span className="lvf-s04-sep-t">What’s Included</span><span className="lvf-s04-sep-l" aria-hidden="true" /></p>
                    <ul className="lvf-s04-specs">
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M1.6 1.4a.7.7 0 0 1 .7.7v10.1c0 .3.2.5.5.5h11.6a.7.7 0 0 1 0 1.4H2.8A1.9 1.9 0 0 1 .9 12.2V2.1a.7.7 0 0 1 .7-.7Z" /><path fill="url(#lvf-s04-g-soft)" d="M14.4 4.1a.6.6 0 0 1 .6.6v7.2H4.1V8.4l2.5-2.5a.9.9 0 0 1 1.2 0l1.5 1.5 4.4-3.1a.6.6 0 0 1 .7-.2Z" /></svg>
                        <span className="lvf-s04-srow-k">Profit Target</span>
                        <span className="lvf-s04-srow-v">$3,000</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M2.6 2.2h10.8c.9 0 1.6.7 1.6 1.6v6.3c0 .9-.7 1.6-1.6 1.6H2.6c-.9 0-1.6-.7-1.6-1.6V3.8c0-.9.7-1.6 1.6-1.6Zm.6 4.5a.6.6 0 0 0 0 1.3h2.3c.2 0 .4-.1.5-.3l.6-1 1.2 2.4c.2.5.9.5 1.1 0l1-2 .4.7c.1.2.3.3.5.3h2.1a.6.6 0 0 0 0-1.3h-1.7l-.9-1.5a.6.6 0 0 0-1 0L8.3 7.4 7.1 5a.6.6 0 0 0-1 0l-1 1.7H3.2Z" /><path fill="url(#lvf-s04-g-soft)" d="M5.6 12.5h4.8l.4 1.5a.5.5 0 0 1-.5.6H5.7a.5.5 0 0 1-.5-.6l.4-1.5Z" /></svg>
                        <span className="lvf-s04-srow-k">EOD Trailing Drawdown</span>
                        <span className="lvf-s04-srow-v">$2,000</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M4.2 1.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V2.4c0-.6-.5-1.1-1.1-1.1Zm0 5.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V7.7c0-.6-.5-1.1-1.1-1.1Zm5.3-5.3H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V2.4c0-.6-.5-1.1-1.1-1.1Zm0 5.3H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V7.7c0-.6-.5-1.1-1.1-1.1Zm-5.3 5.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V13c0-.6-.5-1.1-1.1-1.1Zm5.3 0H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V13c0-.6-.5-1.1-1.1-1.1Zm4.2-9.4a.6.6 0 0 1 .6.6v2.2h2.2a.6.6 0 0 1 0 1.2h-2.2v2.2a.6.6 0 0 1-1.2 0V6.5h-2.2a.6.6 0 0 1 0-1.2h2.2V3.1a.6.6 0 0 1 .6-.6Z" /></svg>
                        <span className="lvf-s04-srow-k">Min. Trading Days</span>
                        <span className="lvf-s04-srow-v">5 days</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M6.1.9a.5.5 0 0 1 .5.4l.7 2.6 2.6.7a.5.5 0 0 1 0 1l-2.6.7-.7 2.6a.5.5 0 0 1-1 0l-.7-2.6-2.6-.7a.5.5 0 0 1 0-1l2.6-.7.7-2.6a.5.5 0 0 1 .5-.4Zm6.4 6.4a.5.5 0 0 1 .5.4l.4 1.4 1.4.4a.5.5 0 0 1 0 1l-1.4.4-.4 1.4a.5.5 0 0 1-1 0l-.4-1.4-1.4-.4a.5.5 0 0 1 0-1l1.4-.4.4-1.4a.5.5 0 0 1 .5-.4Zm-6 4.6a.5.5 0 0 1 .5.3l.3 1 1 .3a.5.5 0 0 1 0 1l-1 .3-.3 1a.5.5 0 0 1-1 0l-.3-1-1-.3a.5.5 0 0 1 0-1l1-.3.3-1a.5.5 0 0 1 .5-.3Z" /></svg>
                        <span className="lvf-s04-srow-k">Max Contracts</span>
                        <span className="lvf-s04-srow-v">3 Mini</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M2.2 3.4a1.2 1.2 0 0 1 1.2-1.2h3a1.2 1.2 0 0 1 1.2 1.2v9.2a1.2 1.2 0 0 1-1.2 1.2h-3a1.2 1.2 0 0 1-1.2-1.2V3.4Zm7.2 0a1.2 1.2 0 0 1 1.2-1.2h2a1.2 1.2 0 0 1 1.2 1.2v3a1.2 1.2 0 0 1-1.2 1.2h-2a1.2 1.2 0 0 1-1.2-1.2v-3Zm0 5.6a1.2 1.2 0 0 1 1.2-1.2h2a1.2 1.2 0 0 1 1.2 1.2v3.6a1.2 1.2 0 0 1-1.2 1.2h-2a1.2 1.2 0 0 1-1.2-1.2V9Z" /></svg>
                        <span className="lvf-s04-srow-k">Profit Split</span>
                        <span className="lvf-s04-srow-v">100%</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M8 .9a.8.8 0 0 1 .6.2l3.3 3.3a.8.8 0 1 1-1.1 1.1L8.8 3.8v6.5a.8.8 0 0 1-1.6 0V3.8L5.2 5.5A.8.8 0 0 1 4.1 4.4L7.4 1.1A.8.8 0 0 1 8 .9Zm-4.9 12h9.8a.9.9 0 0 1 0 1.8H3.1a.9.9 0 0 1 0-1.8Z" /></svg>
                        <span className="lvf-s04-srow-k">Profit Per Payout</span>
                        <span className="lvf-s04-srow-v">Up to 50%</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M2 9.6a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v3.2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9.6Zm4.8-2.8a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H7.8a1 1 0 0 1-1-1v-6Zm4.8-2.8a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v8.8a1 1 0 0 1-1 1h-1.4a1 1 0 0 1-1-1V4Z" /></svg>
                        <span className="lvf-s04-srow-k">Consistency Rule</span>
                        <span className="lvf-s04-srow-v">40%</span>
                      </li>
                    </ul>
                    <span className="lvf-s04-rule" aria-hidden="true" />
                    <ul className="lvf-s04-checks">
                      <li className="lvf-s04-crow lvf-s04-crow--blue">
                        <svg className="lvf-s04-crow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M8 .9A7.1 7.1 0 1 1 .9 8 7.1 7.1 0 0 1 8 .9Zm3.3 4.7a.9.9 0 0 0-1.3 0L7 8.7 6 7.7a.9.9 0 0 0-1.3 1.3l1.7 1.7c.4.3.9.3 1.3 0l3.6-3.7a.9.9 0 0 0 0-1.4Z" /></svg>
                        <span className="lvf-s04-crow-t">One-Time Fee Only</span>
                      </li>
                      <li className="lvf-s04-crow lvf-s04-crow--blue">
                        <svg className="lvf-s04-crow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M8 .9A7.1 7.1 0 1 1 .9 8 7.1 7.1 0 0 1 8 .9Zm3.3 4.7a.9.9 0 0 0-1.3 0L7 8.7 6 7.7a.9.9 0 0 0-1.3 1.3l1.7 1.7c.4.3.9.3 1.3 0l3.6-3.7a.9.9 0 0 0 0-1.4Z" /></svg>
                        <span className="lvf-s04-crow-t">Maximum 5 Payouts</span>
                      </li>
                      <li className="lvf-s04-crow lvf-s04-crow--dim">
                        <svg className="lvf-s04-crow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-dim)" d="M8 .9A7.1 7.1 0 1 1 .9 8 7.1 7.1 0 0 1 8 .9Zm3.3 4.7a.9.9 0 0 0-1.3 0L7 8.7 6 7.7a.9.9 0 0 0-1.3 1.3l1.7 1.7c.4.3.9.3 1.3 0l3.6-3.7a.9.9 0 0 0 0-1.4Z" /></svg>
                        <span className="lvf-s04-crow-t">No Activation Fee</span>
                      </li>
                      <li className="lvf-s04-crow lvf-s04-crow--dim">
                        <svg className="lvf-s04-crow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-dim)" d="M8 .9A7.1 7.1 0 1 1 .9 8 7.1 7.1 0 0 1 8 .9Zm3.3 4.7a.9.9 0 0 0-1.3 0L7 8.7 6 7.7a.9.9 0 0 0-1.3 1.3l1.7 1.7c.4.3.9.3 1.3 0l3.6-3.7a.9.9 0 0 0 0-1.4Z" /></svg>
                        <span className="lvf-s04-crow-t">30-Day Evaluation Period</span>
                      </li>
                      <li className="lvf-s04-crow lvf-s04-crow--gold">
                        <svg className="lvf-s04-crow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-gold)" d="M8 .9A7.1 7.1 0 1 1 .9 8 7.1 7.1 0 0 1 8 .9Zm3.3 4.7a.9.9 0 0 0-1.3 0L7 8.7 6 7.7a.9.9 0 0 0-1.3 1.3l1.7 1.7c.4.3.9.3 1.3 0l3.6-3.7a.9.9 0 0 0 0-1.4Z" /></svg>
                        <span className="lvf-s04-crow-t">Payout Certificate Block</span>
                        <span className="lvf-s04-crow-info" tabIndex={0} role="button" aria-label="Payout Certificate Block info"><svg className="lvf-s04-crow-info-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-gold)" d="M8 .9A7.1 7.1 0 1 1 .9 8 7.1 7.1 0 0 1 8 .9Zm0 5.9a1 1 0 0 0-1 1v3.4a1 1 0 0 0 2 0V7.8a1 1 0 0 0-1-1Zm0-3.3a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2Z" /></svg><span className="lvf-s04-tooltip" role="tooltip">Receive an official Lvlup Payout Certificate Block after completing your first successful payout.</span></span>
                      </li>
                    </ul>
                  </div>
                  <a className="lvf-s04-card-note" href="https://lvlupfuturesdashboard.propaccount.com/en/challenges/purchase?category=35" target="_blank" rel="noopener">Opens in external dashboard</a>
                </article>
                <article className="lvf-s04-card">
                  <div className="lvf-s04-card-in">
                    <span className="lvf-s04-card-glow" aria-hidden="true" />
                    <span className="lvf-s04-card-edge" aria-hidden="true" />
                    <span className="lvf-s04-card-shard" aria-hidden="true" />
                    <div className="lvf-s04-card-head">
                      <div className="lvf-s04-card-mark">
                        <span className="lvf-s04-chip" aria-hidden="true"><svg className="lvf-s04-chip-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-black)" d="M3.1 3.4h2.3l2.6 6.2 3.8-5-1.5-1.1 4.4-1-.3 4.5-1.4-1.1-4.7 6.3H7.1L3.1 3.4Z" /></svg></span>
                      </div>
                      <p className="lvf-s04-card-kind">Starter Evaluation</p>
                      <p className="lvf-s04-card-size">$100,000</p>
                    </div>
                    <div className="lvf-s04-buy">
                      <a className="lvf-s04-btn" href="https://lvlupfuturesdashboard.propaccount.com/en/challenges/purchase?category=35" target="_blank" rel="noopener" aria-label="One-Time payment $259 for the $100,000 Starter Evaluation - see it in the payout calculator below">
                        <span className="lvf-s04-btn-label">One-Time</span>
                        <span className="lvf-s04-btn-price">$259</span>
                      </a>
                    </div>
                    <p className="lvf-s04-sep"><span className="lvf-s04-sep-l" aria-hidden="true" /><span className="lvf-s04-sep-t">What’s Included</span><span className="lvf-s04-sep-l" aria-hidden="true" /></p>
                    <ul className="lvf-s04-specs">
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M1.6 1.4a.7.7 0 0 1 .7.7v10.1c0 .3.2.5.5.5h11.6a.7.7 0 0 1 0 1.4H2.8A1.9 1.9 0 0 1 .9 12.2V2.1a.7.7 0 0 1 .7-.7Z" /><path fill="url(#lvf-s04-g-soft)" d="M14.4 4.1a.6.6 0 0 1 .6.6v7.2H4.1V8.4l2.5-2.5a.9.9 0 0 1 1.2 0l1.5 1.5 4.4-3.1a.6.6 0 0 1 .7-.2Z" /></svg>
                        <span className="lvf-s04-srow-k">Profit Target</span>
                        <span className="lvf-s04-srow-v">$7,000</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M2.6 2.2h10.8c.9 0 1.6.7 1.6 1.6v6.3c0 .9-.7 1.6-1.6 1.6H2.6c-.9 0-1.6-.7-1.6-1.6V3.8c0-.9.7-1.6 1.6-1.6Zm.6 4.5a.6.6 0 0 0 0 1.3h2.3c.2 0 .4-.1.5-.3l.6-1 1.2 2.4c.2.5.9.5 1.1 0l1-2 .4.7c.1.2.3.3.5.3h2.1a.6.6 0 0 0 0-1.3h-1.7l-.9-1.5a.6.6 0 0 0-1 0L8.3 7.4 7.1 5a.6.6 0 0 0-1 0l-1 1.7H3.2Z" /><path fill="url(#lvf-s04-g-soft)" d="M5.6 12.5h4.8l.4 1.5a.5.5 0 0 1-.5.6H5.7a.5.5 0 0 1-.5-.6l.4-1.5Z" /></svg>
                        <span className="lvf-s04-srow-k">EOD Trailing Drawdown</span>
                        <span className="lvf-s04-srow-v">$3,000</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M4.2 1.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V2.4c0-.6-.5-1.1-1.1-1.1Zm0 5.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V7.7c0-.6-.5-1.1-1.1-1.1Zm5.3-5.3H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V2.4c0-.6-.5-1.1-1.1-1.1Zm0 5.3H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V7.7c0-.6-.5-1.1-1.1-1.1Zm-5.3 5.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V13c0-.6-.5-1.1-1.1-1.1Zm5.3 0H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V13c0-.6-.5-1.1-1.1-1.1Zm4.2-9.4a.6.6 0 0 1 .6.6v2.2h2.2a.6.6 0 0 1 0 1.2h-2.2v2.2a.6.6 0 0 1-1.2 0V6.5h-2.2a.6.6 0 0 1 0-1.2h2.2V3.1a.6.6 0 0 1 .6-.6Z" /></svg>
                        <span className="lvf-s04-srow-k">Min. Trading Days</span>
                        <span className="lvf-s04-srow-v">5 days</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M6.1.9a.5.5 0 0 1 .5.4l.7 2.6 2.6.7a.5.5 0 0 1 0 1l-2.6.7-.7 2.6a.5.5 0 0 1-1 0l-.7-2.6-2.6-.7a.5.5 0 0 1 0-1l2.6-.7.7-2.6a.5.5 0 0 1 .5-.4Zm6.4 6.4a.5.5 0 0 1 .5.4l.4 1.4 1.4.4a.5.5 0 0 1 0 1l-1.4.4-.4 1.4a.5.5 0 0 1-1 0l-.4-1.4-1.4-.4a.5.5 0 0 1 0-1l1.4-.4.4-1.4a.5.5 0 0 1 .5-.4Zm-6 4.6a.5.5 0 0 1 .5.3l.3 1 1 .3a.5.5 0 0 1 0 1l-1 .3-.3 1a.5.5 0 0 1-1 0l-.3-1-1-.3a.5.5 0 0 1 0-1l1-.3.3-1a.5.5 0 0 1 .5-.3Z" /></svg>
                        <span className="lvf-s04-srow-k">Max Contracts</span>
                        <span className="lvf-s04-srow-v">6 Mini</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M2.2 3.4a1.2 1.2 0 0 1 1.2-1.2h3a1.2 1.2 0 0 1 1.2 1.2v9.2a1.2 1.2 0 0 1-1.2 1.2h-3a1.2 1.2 0 0 1-1.2-1.2V3.4Zm7.2 0a1.2 1.2 0 0 1 1.2-1.2h2a1.2 1.2 0 0 1 1.2 1.2v3a1.2 1.2 0 0 1-1.2 1.2h-2a1.2 1.2 0 0 1-1.2-1.2v-3Zm0 5.6a1.2 1.2 0 0 1 1.2-1.2h2a1.2 1.2 0 0 1 1.2 1.2v3.6a1.2 1.2 0 0 1-1.2 1.2h-2a1.2 1.2 0 0 1-1.2-1.2V9Z" /></svg>
                        <span className="lvf-s04-srow-k">Profit Split</span>
                        <span className="lvf-s04-srow-v">100%</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M8 .9a.8.8 0 0 1 .6.2l3.3 3.3a.8.8 0 1 1-1.1 1.1L8.8 3.8v6.5a.8.8 0 0 1-1.6 0V3.8L5.2 5.5A.8.8 0 0 1 4.1 4.4L7.4 1.1A.8.8 0 0 1 8 .9Zm-4.9 12h9.8a.9.9 0 0 1 0 1.8H3.1a.9.9 0 0 1 0-1.8Z" /></svg>
                        <span className="lvf-s04-srow-k">Profit Per Payout</span>
                        <span className="lvf-s04-srow-v">Up to 50%</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M2 9.6a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v3.2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9.6Zm4.8-2.8a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H7.8a1 1 0 0 1-1-1v-6Zm4.8-2.8a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v8.8a1 1 0 0 1-1 1h-1.4a1 1 0 0 1-1-1V4Z" /></svg>
                        <span className="lvf-s04-srow-k">Consistency Rule</span>
                        <span className="lvf-s04-srow-v">40%</span>
                      </li>
                    </ul>
                    <span className="lvf-s04-rule" aria-hidden="true" />
                    <ul className="lvf-s04-checks">
                      <li className="lvf-s04-crow lvf-s04-crow--blue">
                        <svg className="lvf-s04-crow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M8 .9A7.1 7.1 0 1 1 .9 8 7.1 7.1 0 0 1 8 .9Zm3.3 4.7a.9.9 0 0 0-1.3 0L7 8.7 6 7.7a.9.9 0 0 0-1.3 1.3l1.7 1.7c.4.3.9.3 1.3 0l3.6-3.7a.9.9 0 0 0 0-1.4Z" /></svg>
                        <span className="lvf-s04-crow-t">One-Time Fee Only</span>
                      </li>
                      <li className="lvf-s04-crow lvf-s04-crow--blue">
                        <svg className="lvf-s04-crow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M8 .9A7.1 7.1 0 1 1 .9 8 7.1 7.1 0 0 1 8 .9Zm3.3 4.7a.9.9 0 0 0-1.3 0L7 8.7 6 7.7a.9.9 0 0 0-1.3 1.3l1.7 1.7c.4.3.9.3 1.3 0l3.6-3.7a.9.9 0 0 0 0-1.4Z" /></svg>
                        <span className="lvf-s04-crow-t">Maximum 5 Payouts</span>
                      </li>
                      <li className="lvf-s04-crow lvf-s04-crow--dim">
                        <svg className="lvf-s04-crow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-dim)" d="M8 .9A7.1 7.1 0 1 1 .9 8 7.1 7.1 0 0 1 8 .9Zm3.3 4.7a.9.9 0 0 0-1.3 0L7 8.7 6 7.7a.9.9 0 0 0-1.3 1.3l1.7 1.7c.4.3.9.3 1.3 0l3.6-3.7a.9.9 0 0 0 0-1.4Z" /></svg>
                        <span className="lvf-s04-crow-t">No Activation Fee</span>
                      </li>
                      <li className="lvf-s04-crow lvf-s04-crow--dim">
                        <svg className="lvf-s04-crow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-dim)" d="M8 .9A7.1 7.1 0 1 1 .9 8 7.1 7.1 0 0 1 8 .9Zm3.3 4.7a.9.9 0 0 0-1.3 0L7 8.7 6 7.7a.9.9 0 0 0-1.3 1.3l1.7 1.7c.4.3.9.3 1.3 0l3.6-3.7a.9.9 0 0 0 0-1.4Z" /></svg>
                        <span className="lvf-s04-crow-t">30-Day Evaluation Period</span>
                      </li>
                      <li className="lvf-s04-crow lvf-s04-crow--gold">
                        <svg className="lvf-s04-crow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-gold)" d="M8 .9A7.1 7.1 0 1 1 .9 8 7.1 7.1 0 0 1 8 .9Zm3.3 4.7a.9.9 0 0 0-1.3 0L7 8.7 6 7.7a.9.9 0 0 0-1.3 1.3l1.7 1.7c.4.3.9.3 1.3 0l3.6-3.7a.9.9 0 0 0 0-1.4Z" /></svg>
                        <span className="lvf-s04-crow-t">Payout Certificate Block</span>
                        <span className="lvf-s04-crow-info" tabIndex={0} role="button" aria-label="Payout Certificate Block info"><svg className="lvf-s04-crow-info-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-gold)" d="M8 .9A7.1 7.1 0 1 1 .9 8 7.1 7.1 0 0 1 8 .9Zm0 5.9a1 1 0 0 0-1 1v3.4a1 1 0 0 0 2 0V7.8a1 1 0 0 0-1-1Zm0-3.3a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2Z" /></svg><span className="lvf-s04-tooltip" role="tooltip">Receive an official Lvlup Payout Certificate Block after completing your first successful payout.</span></span>
                      </li>
                    </ul>
                  </div>
                  <a className="lvf-s04-card-note" href="https://lvlupfuturesdashboard.propaccount.com/en/challenges/purchase?category=35" target="_blank" rel="noopener">Opens in external dashboard</a>
                </article>
                <article className="lvf-s04-card">
                  <div className="lvf-s04-card-in">
                    <span className="lvf-s04-card-glow" aria-hidden="true" />
                    <span className="lvf-s04-card-edge" aria-hidden="true" />
                    <span className="lvf-s04-card-shard" aria-hidden="true" />
                    <div className="lvf-s04-card-head">
                      <div className="lvf-s04-card-mark">
                        <span className="lvf-s04-chip" aria-hidden="true"><svg className="lvf-s04-chip-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-black)" d="M3.1 3.4h2.3l2.6 6.2 3.8-5-1.5-1.1 4.4-1-.3 4.5-1.4-1.1-4.7 6.3H7.1L3.1 3.4Z" /></svg></span>
                      </div>
                      <p className="lvf-s04-card-kind">Starter Evaluation</p>
                      <p className="lvf-s04-card-size">$150,000</p>
                    </div>
                    <div className="lvf-s04-buy">
                      <a className="lvf-s04-btn" href="https://lvlupfuturesdashboard.propaccount.com/en/challenges/purchase?category=35" target="_blank" rel="noopener" aria-label="One-Time payment $324 for the $150,000 Starter Evaluation - see it in the payout calculator below">
                        <span className="lvf-s04-btn-label">One-Time</span>
                        <span className="lvf-s04-btn-price">$324</span>
                      </a>
                    </div>
                    <p className="lvf-s04-sep"><span className="lvf-s04-sep-l" aria-hidden="true" /><span className="lvf-s04-sep-t">What’s Included</span><span className="lvf-s04-sep-l" aria-hidden="true" /></p>
                    <ul className="lvf-s04-specs">
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M1.6 1.4a.7.7 0 0 1 .7.7v10.1c0 .3.2.5.5.5h11.6a.7.7 0 0 1 0 1.4H2.8A1.9 1.9 0 0 1 .9 12.2V2.1a.7.7 0 0 1 .7-.7Z" /><path fill="url(#lvf-s04-g-soft)" d="M14.4 4.1a.6.6 0 0 1 .6.6v7.2H4.1V8.4l2.5-2.5a.9.9 0 0 1 1.2 0l1.5 1.5 4.4-3.1a.6.6 0 0 1 .7-.2Z" /></svg>
                        <span className="lvf-s04-srow-k">Profit Target</span>
                        <span className="lvf-s04-srow-v">$12,000</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M2.6 2.2h10.8c.9 0 1.6.7 1.6 1.6v6.3c0 .9-.7 1.6-1.6 1.6H2.6c-.9 0-1.6-.7-1.6-1.6V3.8c0-.9.7-1.6 1.6-1.6Zm.6 4.5a.6.6 0 0 0 0 1.3h2.3c.2 0 .4-.1.5-.3l.6-1 1.2 2.4c.2.5.9.5 1.1 0l1-2 .4.7c.1.2.3.3.5.3h2.1a.6.6 0 0 0 0-1.3h-1.7l-.9-1.5a.6.6 0 0 0-1 0L8.3 7.4 7.1 5a.6.6 0 0 0-1 0l-1 1.7H3.2Z" /><path fill="url(#lvf-s04-g-soft)" d="M5.6 12.5h4.8l.4 1.5a.5.5 0 0 1-.5.6H5.7a.5.5 0 0 1-.5-.6l.4-1.5Z" /></svg>
                        <span className="lvf-s04-srow-k">EOD Trailing Drawdown</span>
                        <span className="lvf-s04-srow-v">$4,500</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M4.2 1.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V2.4c0-.6-.5-1.1-1.1-1.1Zm0 5.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V7.7c0-.6-.5-1.1-1.1-1.1Zm5.3-5.3H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V2.4c0-.6-.5-1.1-1.1-1.1Zm0 5.3H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V7.7c0-.6-.5-1.1-1.1-1.1Zm-5.3 5.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V13c0-.6-.5-1.1-1.1-1.1Zm5.3 0H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V13c0-.6-.5-1.1-1.1-1.1Zm4.2-9.4a.6.6 0 0 1 .6.6v2.2h2.2a.6.6 0 0 1 0 1.2h-2.2v2.2a.6.6 0 0 1-1.2 0V6.5h-2.2a.6.6 0 0 1 0-1.2h2.2V3.1a.6.6 0 0 1 .6-.6Z" /></svg>
                        <span className="lvf-s04-srow-k">Min. Trading Days</span>
                        <span className="lvf-s04-srow-v">5 days</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M6.1.9a.5.5 0 0 1 .5.4l.7 2.6 2.6.7a.5.5 0 0 1 0 1l-2.6.7-.7 2.6a.5.5 0 0 1-1 0l-.7-2.6-2.6-.7a.5.5 0 0 1 0-1l2.6-.7.7-2.6a.5.5 0 0 1 .5-.4Zm6.4 6.4a.5.5 0 0 1 .5.4l.4 1.4 1.4.4a.5.5 0 0 1 0 1l-1.4.4-.4 1.4a.5.5 0 0 1-1 0l-.4-1.4-1.4-.4a.5.5 0 0 1 0-1l1.4-.4.4-1.4a.5.5 0 0 1 .5-.4Zm-6 4.6a.5.5 0 0 1 .5.3l.3 1 1 .3a.5.5 0 0 1 0 1l-1 .3-.3 1a.5.5 0 0 1-1 0l-.3-1-1-.3a.5.5 0 0 1 0-1l1-.3.3-1a.5.5 0 0 1 .5-.3Z" /></svg>
                        <span className="lvf-s04-srow-k">Max Contracts</span>
                        <span className="lvf-s04-srow-v">9 Mini</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M2.2 3.4a1.2 1.2 0 0 1 1.2-1.2h3a1.2 1.2 0 0 1 1.2 1.2v9.2a1.2 1.2 0 0 1-1.2 1.2h-3a1.2 1.2 0 0 1-1.2-1.2V3.4Zm7.2 0a1.2 1.2 0 0 1 1.2-1.2h2a1.2 1.2 0 0 1 1.2 1.2v3a1.2 1.2 0 0 1-1.2 1.2h-2a1.2 1.2 0 0 1-1.2-1.2v-3Zm0 5.6a1.2 1.2 0 0 1 1.2-1.2h2a1.2 1.2 0 0 1 1.2 1.2v3.6a1.2 1.2 0 0 1-1.2 1.2h-2a1.2 1.2 0 0 1-1.2-1.2V9Z" /></svg>
                        <span className="lvf-s04-srow-k">Profit Split</span>
                        <span className="lvf-s04-srow-v">100%</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M8 .9a.8.8 0 0 1 .6.2l3.3 3.3a.8.8 0 1 1-1.1 1.1L8.8 3.8v6.5a.8.8 0 0 1-1.6 0V3.8L5.2 5.5A.8.8 0 0 1 4.1 4.4L7.4 1.1A.8.8 0 0 1 8 .9Zm-4.9 12h9.8a.9.9 0 0 1 0 1.8H3.1a.9.9 0 0 1 0-1.8Z" /></svg>
                        <span className="lvf-s04-srow-k">Profit Per Payout</span>
                        <span className="lvf-s04-srow-v">Up to 50%</span>
                      </li>
                      <li className="lvf-s04-srow">
                        <svg className="lvf-s04-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M2 9.6a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v3.2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9.6Zm4.8-2.8a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H7.8a1 1 0 0 1-1-1v-6Zm4.8-2.8a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v8.8a1 1 0 0 1-1 1h-1.4a1 1 0 0 1-1-1V4Z" /></svg>
                        <span className="lvf-s04-srow-k">Consistency Rule</span>
                        <span className="lvf-s04-srow-v">40%</span>
                      </li>
                    </ul>
                    <span className="lvf-s04-rule" aria-hidden="true" />
                    <ul className="lvf-s04-checks">
                      <li className="lvf-s04-crow lvf-s04-crow--blue">
                        <svg className="lvf-s04-crow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M8 .9A7.1 7.1 0 1 1 .9 8 7.1 7.1 0 0 1 8 .9Zm3.3 4.7a.9.9 0 0 0-1.3 0L7 8.7 6 7.7a.9.9 0 0 0-1.3 1.3l1.7 1.7c.4.3.9.3 1.3 0l3.6-3.7a.9.9 0 0 0 0-1.4Z" /></svg>
                        <span className="lvf-s04-crow-t">One-Time Fee Only</span>
                      </li>
                      <li className="lvf-s04-crow lvf-s04-crow--blue">
                        <svg className="lvf-s04-crow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-soft)" d="M8 .9A7.1 7.1 0 1 1 .9 8 7.1 7.1 0 0 1 8 .9Zm3.3 4.7a.9.9 0 0 0-1.3 0L7 8.7 6 7.7a.9.9 0 0 0-1.3 1.3l1.7 1.7c.4.3.9.3 1.3 0l3.6-3.7a.9.9 0 0 0 0-1.4Z" /></svg>
                        <span className="lvf-s04-crow-t">Maximum 5 Payouts</span>
                      </li>
                      <li className="lvf-s04-crow lvf-s04-crow--dim">
                        <svg className="lvf-s04-crow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-dim)" d="M8 .9A7.1 7.1 0 1 1 .9 8 7.1 7.1 0 0 1 8 .9Zm3.3 4.7a.9.9 0 0 0-1.3 0L7 8.7 6 7.7a.9.9 0 0 0-1.3 1.3l1.7 1.7c.4.3.9.3 1.3 0l3.6-3.7a.9.9 0 0 0 0-1.4Z" /></svg>
                        <span className="lvf-s04-crow-t">No Activation Fee</span>
                      </li>
                      <li className="lvf-s04-crow lvf-s04-crow--dim">
                        <svg className="lvf-s04-crow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-dim)" d="M8 .9A7.1 7.1 0 1 1 .9 8 7.1 7.1 0 0 1 8 .9Zm3.3 4.7a.9.9 0 0 0-1.3 0L7 8.7 6 7.7a.9.9 0 0 0-1.3 1.3l1.7 1.7c.4.3.9.3 1.3 0l3.6-3.7a.9.9 0 0 0 0-1.4Z" /></svg>
                        <span className="lvf-s04-crow-t">30-Day Evaluation Period</span>
                      </li>
                      <li className="lvf-s04-crow lvf-s04-crow--gold">
                        <svg className="lvf-s04-crow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-gold)" d="M8 .9A7.1 7.1 0 1 1 .9 8 7.1 7.1 0 0 1 8 .9Zm3.3 4.7a.9.9 0 0 0-1.3 0L7 8.7 6 7.7a.9.9 0 0 0-1.3 1.3l1.7 1.7c.4.3.9.3 1.3 0l3.6-3.7a.9.9 0 0 0 0-1.4Z" /></svg>
                        <span className="lvf-s04-crow-t">Payout Certificate Block</span>
                        <span className="lvf-s04-crow-info" tabIndex={0} role="button" aria-label="Payout Certificate Block info"><svg className="lvf-s04-crow-info-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-gold)" d="M8 .9A7.1 7.1 0 1 1 .9 8 7.1 7.1 0 0 1 8 .9Zm0 5.9a1 1 0 0 0-1 1v3.4a1 1 0 0 0 2 0V7.8a1 1 0 0 0-1-1Zm0-3.3a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2Z" /></svg><span className="lvf-s04-tooltip" role="tooltip">Receive an official Lvlup Payout Certificate Block after completing your first successful payout.</span></span>
                      </li>
                    </ul>
                  </div>
                  <a className="lvf-s04-card-note" href="https://lvlupfuturesdashboard.propaccount.com/en/challenges/purchase?category=35" target="_blank" rel="noopener">Opens in external dashboard</a>
                </article>
              </div>
              <div className="lvf-s04-addons">
                <h3 className="lvf-s04-addons-title">Optional Account <span className="lvf-s04-addons-hl">Enhancements</span> (Add-Ons)</h3>
                <div className="lvf-s04-addon">
                  <p className="lvf-s04-addon-name">
                    <span className="lvf-s04-addon-name-t">Payout Protector</span>
                    <span className="lvf-s04-addon-info" tabIndex={0} role="button" aria-label="Payout Protector info"><svg className="lvf-s04-addon-info-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-blue)" d="M8 .9A7.1 7.1 0 1 1 .9 8 7.1 7.1 0 0 1 8 .9Zm0 5.9a1 1 0 0 0-1 1v3.4a1 1 0 0 0 2 0V7.8a1 1 0 0 0-1-1Zm0-3.3a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2Z" /></svg><span className="lvf-s04-addon-tooltip" role="tooltip">Protect eligible funded gains after a qualifying breach. Payout Protector does not prevent the breach or keep the account active.</span></span>
                  </p>
                  <a className="lvf-s04-addon-val" href="https://lvlupfuturesdashboard.propaccount.com/en/challenges/purchase?category=35" target="_blank" rel="noopener noreferrer" aria-label="Purchase an evaluation with the 25 percent Payout Protector add-on">
                    <span className="lvf-s04-addon-plus" aria-hidden="true"><svg className="lvf-s04-addon-plus-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvf-s04-g-black)" d="M8 1.6a1 1 0 0 1 1 1V7h4.4a1 1 0 0 1 0 2H9v4.4a1 1 0 0 1-2 0V9H2.6a1 1 0 0 1 0-2H7V2.6a1 1 0 0 1 1-1Z" /></svg></span>
                    <span className="lvf-s04-addon-num">25%</span>
                  </a>
                </div>
              </div>
              <div className="lvf-s04-actions">
                <button className="lvf-s04-conditions" type="button" data-lvf-open="conditions">
                  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5907 4.52812C10.8719 5.09062 11.0173 5.69531 11.0173 6.32812C11.0173 8.52656 9.23132 10.3125 7.03289 10.3125C4.83445 10.3125 3.04851 8.52656 3.04851 6.32812C3.04851 4.12969 4.83445 2.34375 7.03289 2.34375C7.0657 2.34375 7.14539 2.34375 7.22976 2.37188C7.38914 2.42344 7.50632 2.55938 7.53914 2.72344C7.73601 3.66563 8.57508 4.35469 9.5407 4.35469C9.71882 4.35469 9.89226 4.33125 10.0423 4.28906C10.2626 4.22812 10.4876 4.33125 10.5907 4.52812ZM7.03289 0C3.82664 0 0.540699 2.8125 0.0063241 6.01406C-0.0358634 6.26719 0.137574 6.51094 0.390699 6.55312C0.643824 6.59531 0.887574 6.42188 0.929762 6.16875C1.34695 3.69844 4.04226 0.9375 7.03289 0.9375C10.0235 0.9375 12.7188 3.69844 13.1313 6.16875C13.1688 6.39844 13.3704 6.5625 13.5954 6.5625C13.6188 6.5625 13.6469 6.5625 13.6751 6.55781C13.9282 6.51562 14.1016 6.27187 14.0594 6.01875C13.5251 2.8125 10.2391 0 7.03289 0Z" fill="#00A2FF" />
                    <path d="M10.5907 4.52812C10.8719 5.09062 11.0173 5.69531 11.0173 6.32812C11.0173 8.52656 9.23132 10.3125 7.03289 10.3125C4.83445 10.3125 3.04851 8.52656 3.04851 6.32812C3.04851 4.12969 4.83445 2.34375 7.03289 2.34375C7.0657 2.34375 7.14539 2.34375 7.22976 2.37188C7.38914 2.42344 7.50632 2.55938 7.53914 2.72344C7.73601 3.66563 8.57508 4.35469 9.5407 4.35469C9.71882 4.35469 9.89226 4.33125 10.0423 4.28906C10.2626 4.22812 10.4876 4.33125 10.5907 4.52812ZM7.03289 0C3.82664 0 0.540699 2.8125 0.0063241 6.01406C-0.0358634 6.26719 0.137574 6.51094 0.390699 6.55312C0.643824 6.59531 0.887574 6.42188 0.929762 6.16875C1.34695 3.69844 4.04226 0.9375 7.03289 0.9375C10.0235 0.9375 12.7188 3.69844 13.1313 6.16875C13.1688 6.39844 13.3704 6.5625 13.5954 6.5625C13.6188 6.5625 13.6469 6.5625 13.6751 6.55781C13.9282 6.51562 14.1016 6.27187 14.0594 6.01875C13.5251 2.8125 10.2391 0 7.03289 0Z" fill="#00A2FF" />
                    <path d="M10.5907 4.52812C10.8719 5.09062 11.0173 5.69531 11.0173 6.32812C11.0173 8.52656 9.23132 10.3125 7.03289 10.3125C4.83445 10.3125 3.04851 8.52656 3.04851 6.32812C3.04851 4.12969 4.83445 2.34375 7.03289 2.34375C7.0657 2.34375 7.14539 2.34375 7.22976 2.37188C7.38914 2.42344 7.50632 2.55938 7.53914 2.72344C7.73601 3.66563 8.57508 4.35469 9.5407 4.35469C9.71882 4.35469 9.89226 4.33125 10.0423 4.28906C10.2626 4.22812 10.4876 4.33125 10.5907 4.52812ZM7.03289 0C3.82664 0 0.540699 2.8125 0.0063241 6.01406C-0.0358634 6.26719 0.137574 6.51094 0.390699 6.55312C0.643824 6.59531 0.887574 6.42188 0.929762 6.16875C1.34695 3.69844 4.04226 0.9375 7.03289 0.9375C10.0235 0.9375 12.7188 3.69844 13.1313 6.16875C13.1688 6.39844 13.3704 6.5625 13.5954 6.5625C13.6188 6.5625 13.6469 6.5625 13.6751 6.55781C13.9282 6.51562 14.1016 6.27187 14.0594 6.01875C13.5251 2.8125 10.2391 0 7.03289 0Z" fill="url(#paint0_linear_1_187)" />
                    <defs>
                      <linearGradient id="paint0_linear_1_187" x1="7.03289" y1={0} x2="7.03289" y2="10.3125" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#87D3FF" />
                        <stop offset={1} stopColor="#14A6FA" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="lvf-s04-conditions-t">View Trading Conditions</span>
                </button>
                <a className="lvf-s04-rules" href="/rules">Open Full Trading Rules →</a>
              </div>
            </div>
          </section>
          {/* Trading Conditions popup (built from Figma design) */}
          <div className="lvf-conditions-modal" data-lvf-conditions-modal hidden>
            <div className="lvf-conditions-backdrop" data-lvf-conditions-close />
            <div className="lvf-conditions-dialog" role="dialog" aria-modal="true" aria-labelledby="lvf-conditions-title">
              <button className="lvf-conditions-x" type="button" data-lvf-conditions-close aria-label="Close">×</button>
              <div className="lvf-conditions-head">
                <p className="lvf-conditions-kicker">Quick Rules Overview</p>
                <h2 className="lvf-conditions-title" id="lvf-conditions-title">Know the <span className="lvf-conditions-title-hl">Conditions Before You Trade</span></h2>
                <p className="lvf-conditions-sub">Check the rules that shape your evaluation, funded account and payout eligibility.</p>
                <div className="lvf-conditions-tabs">
                  <button className="lvf-conditions-tab" type="button" data-lvf-conditions-tab="lvlup">Lvlup Accounts</button>
                  <button className="lvf-conditions-tab is-active" type="button" data-lvf-conditions-tab="starter">Starter Accounts</button>
                </div>
              </div>
              <div className="lvf-conditions-frame">
                {/* Lvlup Accounts panel */}
                <div className="lvf-conditions-panel" data-lvf-conditions-panel="lvlup" hidden>
                  <div className="lvf-conditions-list">
                    <div className="lvf-conditions-row">
                      <p className="lvf-conditions-row-t"><span className="lvf-conditions-row-hl">1. No</span> Daily Loss <span className="lvf-conditions-row-hl">Limit</span></p>
                      <p className="lvf-conditions-row-d">There is no separate daily loss cap. Your account must remain within the overall trailing drawdown.</p>
                    </div>
                    <div className="lvf-conditions-row">
                      <p className="lvf-conditions-row-t"><span className="lvf-conditions-row-hl">2. EOD</span> Trailing Drawdown</p>
                      <p className="lvf-conditions-row-d">The drawdown threshold updates from your highest end-of-day balance rather than every intraday fluctuation.</p>
                    </div>
                    <div className="lvf-conditions-row">
                      <p className="lvf-conditions-row-t"><span className="lvf-conditions-row-hl">3. 5 Minimum</span> Trading Days</p>
                      <p className="lvf-conditions-row-d">Trade on at least five separate days before completing the evaluation.</p>
                    </div>
                    <div className="lvf-conditions-row">
                      <p className="lvf-conditions-row-t"><span className="lvf-conditions-row-hl">4. 40%</span> Consistency <span className="lvf-conditions-row-hl">Rule</span></p>
                      <p className="lvf-conditions-row-d">Your most profitable trading day cannot represent more than 40% of your total profits.</p>
                    </div>
                    <div className="lvf-conditions-row">
                      <p className="lvf-conditions-row-t"><span className="lvf-conditions-row-hl">5. 80%</span> Profit Split</p>
                      <p className="lvf-conditions-row-d">Keep 80% of approved profits generated inside your funded Lvlup Account.</p>
                    </div>
                    <div className="lvf-conditions-row">
                      <p className="lvf-conditions-row-t"><span className="lvf-conditions-row-hl">6. Payouts</span> Every 14 Days</p>
                      <p className="lvf-conditions-row-d">Eligible funded traders can submit payout requests on a biweekly schedule.</p>
                    </div>
                    <div className="lvf-conditions-row">
                      <p className="lvf-conditions-row-t"><span className="lvf-conditions-row-hl">7. News</span> Trading Allowed</p>
                      <p className="lvf-conditions-row-d">Trading during scheduled economic news events is permitted under the applicable trading conditions.</p>
                    </div>
                    <div className="lvf-conditions-row">
                      <p className="lvf-conditions-row-t"><span className="lvf-conditions-row-hl">8. No</span> Overnight or Weekend <span className="lvf-conditions-row-hl">Holding</span></p>
                      <p className="lvf-conditions-row-d">Positions must be closed before the applicable market close and cannot remain open through the weekend.</p>
                    </div>
                    <div className="lvf-conditions-row">
                      <p className="lvf-conditions-row-t"><span className="lvf-conditions-row-hl">9. Activation Fee</span> After Passing</p>
                      <p className="lvf-conditions-row-d">Choose Monthly or One-Time evaluation payment inside the external dashboard. After passing, the required activation fee must be paid before the funded account becomes active.</p>
                    </div>
                  </div>
                </div>
                {/* Starter Accounts panel */}
                <div className="lvf-conditions-panel is-active" data-lvf-conditions-panel="starter">
                  <div className="lvf-conditions-list">
                    <div className="lvf-conditions-row">
                      <p className="lvf-conditions-row-t"><span className="lvf-conditions-row-hl">1. One-Time</span> Fee Only</p>
                      <p className="lvf-conditions-row-d">Starter evaluations are purchased through a single one-time payment with no monthly evaluation subscription.</p>
                    </div>
                    <div className="lvf-conditions-row">
                      <p className="lvf-conditions-row-t"><span className="lvf-conditions-row-hl">2. No</span> Activation <span className="lvf-conditions-row-hl">Fee</span></p>
                      <p className="lvf-conditions-row-d">After passing the evaluation, there is no additional activation fee before receiving the funded account.</p>
                    </div>
                    <div className="lvf-conditions-row">
                      <p className="lvf-conditions-row-t"><span className="lvf-conditions-row-hl">3. 5 Minimum</span> Trading <span className="lvf-conditions-row-hl">Days</span></p>
                      <p className="lvf-conditions-row-d">Trade on at least five separate days before completing the evaluation.</p>
                    </div>
                    <div className="lvf-conditions-row">
                      <p className="lvf-conditions-row-t"><span className="lvf-conditions-row-hl">4. 40%</span> Consistency <span className="lvf-conditions-row-hl">Rule</span></p>
                      <p className="lvf-conditions-row-d">Your most profitable evaluation day cannot exceed 40% of your total evaluation profit.</p>
                    </div>
                    <div className="lvf-conditions-row">
                      <p className="lvf-conditions-row-t"><span className="lvf-conditions-row-hl">5. 100%</span> Profit Split</p>
                      <p className="lvf-conditions-row-d">Keep 100% of the eligible profits approved for payout from your Starter Account.</p>
                    </div>
                    <div className="lvf-conditions-row">
                      <p className="lvf-conditions-row-t"><span className="lvf-conditions-row-hl">6. Up to 50%</span> Profit Per Payout</p>
                      <p className="lvf-conditions-row-d">You may withdraw a maximum of 50% of the profit generated on the account in one payout.</p>
                    </div>
                    <div className="lvf-conditions-row">
                      <p className="lvf-conditions-row-t"><span className="lvf-conditions-row-hl">7. Maximum</span> 5 Payouts</p>
                      <p className="lvf-conditions-row-d">A Starter Account journey is limited to five approved payouts.</p>
                    </div>
                    <div className="lvf-conditions-row">
                      <p className="lvf-conditions-row-t"><span className="lvf-conditions-row-hl">8. 30-Day</span> Evaluation and Inactivity <span className="lvf-conditions-row-hl">Limits</span></p>
                      <p className="lvf-conditions-row-d">The evaluation has a maximum duration of 30 days, and accounts are also subject to a 30-day inactivity limit.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* s05 */}
          <section className="lvf-s05" id="calculator" aria-labelledby="lvf-s05-title">
            {/* Weichgezeichnete "Star"-Vektoren des Designs, als Radial-Glow angenaehert */}
            <div className="lvf-s05-glow" aria-hidden="true" />
            {/* Gemeinsamer Farbverlauf fuer alle Info-Glyphen */}
            <svg className="lvf-s05-defs" width={0} height={0} aria-hidden="true" focusable="false">
              <defs>
                <linearGradient id="lvf-s05-ico" x1={0} y1={0} x2={0} y2={1}>
                  <stop offset={0} stopColor="#87d3ff" />
                  <stop offset={1} stopColor="#14a6fa" />
                </linearGradient>
                <linearGradient id="lvf-s05-arrow" x1={1} y1={1} x2="0.17" y2={0}>
                  <stop offset={0} stopColor="#ffffff" stopOpacity="0.11" />
                  <stop offset={1} stopColor="#ffffff" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
            <div className="lvf-container lvf-s05-inner">
              <div className="lvf-s05-stack">
                {/* Kopfkarte: schwarze Flaeche mit 38/38/126/126-Radien */}
                <div className="lvf-s05-card">
                  <div className="lvf-s05-head">
                    <p className="lvf-s05-kicker"><span className="lvf-s05-kicker-t">Build Your Plan</span></p>
                    <h2 className="lvf-s05-title" id="lvf-s05-title">Calculate Your <span className="lvf-s05-title-b">Earning Potential</span></h2>
                    <p className="lvf-s05-sub">Access up to $1M in simulated funded allocation and keep up to 100% of eligible profits with Lvlup Futures.</p>
                  </div>
                </div>
                {/* Blaues Panel, ueberlappt die Kopfkarte */}
                <div className="lvf-s05-panel">
                  {/* Linke Glaskarte: zwei Schieberegler */}
                  <div className="lvf-s05-glass lvf-s05-inputs">
                    <div className="lvf-s05-group">
                      <p className="lvf-s05-label">
                        <span className="lvf-s05-label-t">Amount of capital</span>
                        <span className="lvf-s05-info" tabIndex={0} role="button" aria-label="Amount of Capital info">
                          <svg className="lvf-s05-info-ico" viewBox="0 0 10 10" focusable="false">
                            <path fill="url(#lvf-s05-ico)" fillRule="evenodd" d="M5 0a5 5 0 1 0 0 10A5 5 0 0 0 5 0Zm0 1a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z" />
                            <circle fill="url(#lvf-s05-ico)" cx={5} cy="2.9" r="0.72" />
                            <rect fill="url(#lvf-s05-ico)" x="4.4" y="4.2" width="1.2" height="3.3" rx="0.6" />
                          </svg>
                          <span className="lvf-s05-tooltip" role="tooltip">Amount of Capital<br />The total simulated funded capital used to calculate your potential earnings.</span>
                        </span>
                      </p>
                      <div className="lvf-s05-slider" data-lvf-s05-slider="capital">
                        <span className="lvf-s05-track" aria-hidden="true" />
                        <span className="lvf-s05-fill" aria-hidden="true" />
                        <span className="lvf-s05-thumb" aria-hidden="true" />
                        <span className="lvf-s05-num" data-lvf-s05-out="capital" aria-hidden="true">$450,000</span>
                        <input className="lvf-s05-range" type="range" id="lvf-s05-capital" name="lvf-s05-capital" min={25000} max={1000000} step={25000} defaultValue={450000} data-lvf-s05-input="capital" aria-label="Amount of capital" aria-valuetext="$450,000" />
                        <span className="lvf-s05-bubble" data-lvf-s05-bubble="capital" aria-hidden="true">$450K</span>
                      </div>
                    </div>
                    <div className="lvf-s05-group">
                      <p className="lvf-s05-label">
                        <span className="lvf-s05-label-t">Monthly profit rate</span>
                        <span className="lvf-s05-info" tabIndex={0} role="button" aria-label="Monthly Profit Rate info">
                          <svg className="lvf-s05-info-ico" viewBox="0 0 10 10" focusable="false">
                            <path fill="url(#lvf-s05-ico)" fillRule="evenodd" d="M5 0a5 5 0 1 0 0 10A5 5 0 0 0 5 0Zm0 1a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z" />
                            <circle fill="url(#lvf-s05-ico)" cx={5} cy="2.9" r="0.72" />
                            <rect fill="url(#lvf-s05-ico)" x="4.4" y="4.2" width="1.2" height="3.3" rx="0.6" />
                          </svg>
                          <span className="lvf-s05-tooltip" role="tooltip">Monthly Profit Rate<br />The estimated percentage return generated on your simulated funded capital each month.</span>
                        </span>
                      </p>
                      <div className="lvf-s05-slider" data-lvf-s05-slider="rate">
                        <span className="lvf-s05-track" aria-hidden="true" />
                        <span className="lvf-s05-fill" aria-hidden="true" />
                        <span className="lvf-s05-thumb" aria-hidden="true" />
                        <span className="lvf-s05-num" data-lvf-s05-out="rate" aria-hidden="true">20%</span>
                        <input className="lvf-s05-range" type="range" id="lvf-s05-rate" name="lvf-s05-rate" min={0} max={20} step={1} defaultValue={20} data-lvf-s05-input="rate" aria-label="Monthly profit rate in percent" aria-valuetext="20%" />
                        <span className="lvf-s05-bubble" data-lvf-s05-bubble="rate" aria-hidden="true">20%</span>
                      </div>
                    </div>
                  </div>
                  {/* Rechte Glaskarte: die zwei Ergebnisse */}
                  <div className="lvf-s05-glass lvf-s05-out">
                    <div className="lvf-s05-res">
                      <svg className="lvf-s05-res-shard" viewBox="0 0 130 137" aria-hidden="true" focusable="false">
                        <path d="M78 2 L122 48 L90 48 L90 92 C90 116 71 135 47 135 L8 135 L8 113 L47 113 C59 113 68 104 68 92 L68 48 L34 48 Z" fill="url(#lvf-s05-arrow)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
                      </svg>
                      <p className="lvf-s05-res-head">
                        <span className="lvf-s05-res-l">Monthly profit</span>
                        <span className="lvf-s05-info lvf-s05-info--lg" tabIndex={0} role="button" aria-label="Estimated Monthly Earnings info">
                          <svg className="lvf-s05-info-ico" viewBox="0 0 10 10" focusable="false">
                            <path fill="url(#lvf-s05-ico)" fillRule="evenodd" d="M5 0a5 5 0 1 0 0 10A5 5 0 0 0 5 0Zm0 1a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z" />
                            <circle fill="url(#lvf-s05-ico)" cx={5} cy="2.9" r="0.72" />
                            <rect fill="url(#lvf-s05-ico)" x="4.4" y="4.2" width="1.2" height="3.3" rx="0.6" />
                          </svg>
                          <span className="lvf-s05-tooltip" role="tooltip">Estimated Monthly Earnings<br />Your projected monthly result based on the selected capital and profit rate. Results are illustrative and not guaranteed.</span>
                        </span>
                      </p>
                      <output className="lvf-s05-res-v" data-lvf-s05-out="monthly" htmlFor="lvf-s05-capital lvf-s05-rate">$90,000</output>
                    </div>
                    <div className="lvf-s05-res">
                      <svg className="lvf-s05-res-shard" viewBox="0 0 130 137" aria-hidden="true" focusable="false">
                        <path d="M78 2 L122 48 L90 48 L90 92 C90 116 71 135 47 135 L8 135 L8 113 L47 113 C59 113 68 104 68 92 L68 48 L34 48 Z" fill="url(#lvf-s05-arrow)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
                      </svg>
                      <p className="lvf-s05-res-head">
                        <span className="lvf-s05-res-l">Annual profit</span>
                        <span className="lvf-s05-info lvf-s05-info--lg" tabIndex={0} role="button" aria-label="Estimated Annual Earnings info">
                          <svg className="lvf-s05-info-ico" viewBox="0 0 10 10" focusable="false">
                            <path fill="url(#lvf-s05-ico)" fillRule="evenodd" d="M5 0a5 5 0 1 0 0 10A5 5 0 0 0 5 0Zm0 1a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z" />
                            <circle fill="url(#lvf-s05-ico)" cx={5} cy="2.9" r="0.72" />
                            <rect fill="url(#lvf-s05-ico)" x="4.4" y="4.2" width="1.2" height="3.3" rx="0.6" />
                          </svg>
                          <span className="lvf-s05-tooltip" role="tooltip">Estimated Annual Earnings<br />Your estimated monthly earnings multiplied by 12 months. Results are illustrative and not guaranteed.</span>
                        </span>
                      </p>
                      <output className="lvf-s05-res-v" data-lvf-s05-out="annual" htmlFor="lvf-s05-capital lvf-s05-rate">$1,080,000</output>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* s06 */}
          <section className="lvf-s06" id="platforms" aria-labelledby="lvf-s06-title">
            {/* Weichgezeichnete "Star"-Vektoren des Designs, als Radial-Glow angenaehert */}
            <div className="lvf-s06-glow" aria-hidden="true" />
            <div className="lvf-container lvf-s06-inner">
              <header className="lvf-s06-head">
                <p className="lvf-s06-kicker"><span className="lvf-s06-kicker-text">Trading Platforms</span></p>
                <h2 className="lvf-s06-title" id="lvf-s06-title">Your Trading <span className="lvf-s06-title-hl">Environment</span></h2>
                <p className="lvf-s06-sub">Access the evaluation through Lvlup's supported futures trading platforms.</p>
              </header>
              <ul className="lvf-s06-grid">
                <li className="lvf-s06-card lvf-s06-card--row">
                  <div className="lvf-s06-logo-box">
                    <img className="lvf-s06-logo-img lvf-s06-logo-img--dx" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-9e83bcda12.webp" width={92} height={67} loading="eager" decoding="async" alt />
                  </div>
                  <div className="lvf-s06-copy">
                    <h3 className="lvf-s06-name">DX Trade</h3>
                    <p className="lvf-s06-desc">A streamlined futures trading platform built for speed, clarity, and control.</p>
                  </div>
                </li>
                <li className="lvf-s06-card lvf-s06-card--row">
                  <div className="lvf-s06-logo-box">
                    <img className="lvf-s06-logo-img lvf-s06-logo-img--vol" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-6092c95f3d.webp" width={139} height={139} loading="eager" decoding="async" alt />
                  </div>
                  <div className="lvf-s06-copy">
                    <h3 className="lvf-s06-name">Volumetrica</h3>
                    <p className="lvf-s06-desc">Professional trading tools designed for detailed analysis and efficient execution.</p>
                  </div>
                </li>
                <li className="lvf-s06-card lvf-s06-card--wide">
                  <div className="lvf-s06-shot">
                    <img className="lvf-s06-shot-img" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-aaa0702b84.webp" width={538} height={414} loading="lazy" decoding="async" alt />
                    <span className="lvf-s06-shot-dark" aria-hidden="true" />
                    <span className="lvf-s06-shot-color" aria-hidden="true" />
                    <span className="lvf-s06-shot-inner" aria-hidden="true" />
                    <span className="lvf-s06-brand" role="img" aria-label="Lvlup Futures">
                      <svg className="lvf-s06-brand-ico" viewBox="0 0 30 34" fill="none" aria-hidden="true" focusable="false">
                        <defs>
                          <linearGradient id="lvf-s06-brand-grad" x1={0} y1={0} x2={30} y2={34} gradientUnits="userSpaceOnUse">
                            <stop stopColor="#6ecaff" />
                            <stop offset={1} stopColor="#3f9fd8" />
                          </linearGradient>
                        </defs>
                        <rect fill="url(#lvf-s06-brand-grad)" x={0} y={0} width={7} height={34} rx="2.5" />
                        <path fill="url(#lvf-s06-brand-grad)" d="M4.3 31.7 20.6 8.7l3.8 2.6L8.1 34l-3.4 0Z" />
                        <path fill="url(#lvf-s06-brand-grad)" d="M29.2 1.2 27.9 12.6 18.9 6.2Z" />
                      </svg>
                      <svg className="lvf-s06-brand-word" viewBox="0 0 280.2 21" fill="#ffffff" aria-hidden="true" focusable="false">
                        <path d="M0 0h5.25v21h-5.25ZM0 15.75h21v5.25h-21ZM23.5 0h5.25v15.75h-5.25ZM39.25 0h5.25v15.75h-5.25ZM31.38 15.75h5.25v5.25h-5.25ZM47 0h5.25v21h-5.25ZM47 15.75h21v5.25h-21ZM70.5 0h5.25v15.75h-5.25ZM86.25 0h5.25v15.75h-5.25ZM70.5 15.75h21v5.25h-21ZM94 0h5.25v21h-5.25ZM94 0h21v5.25h-21ZM109.75 0h5.25v13.12h-5.25ZM94 7.88h21v5.25h-21Z" />
                        <path d="M131 0h5.25v21h-5.25ZM131 0h19.3v5.25h-19.3ZM131 7.88h15.83v5.25h-15.83ZM152.65 0h5.25v15.75h-5.25ZM166.7 0h5.25v15.75h-5.25ZM152.65 15.75h19.3v5.25h-19.3ZM174.3 0h19.3v5.25h-19.3ZM181.33 5.25h5.25v15.75h-5.25ZM195.95 0h5.25v15.75h-5.25ZM210 0h5.25v15.75h-5.25ZM195.95 15.75h19.3v5.25h-19.3ZM217.6 0h5.25v21h-5.25ZM217.6 0h19.3v5.25h-19.3ZM231.65 0h5.25v13.12h-5.25ZM217.6 7.88h19.3v5.25h-19.3ZM231.65 13.12h5.25v7.88h-5.25ZM239.25 0h5.25v21h-5.25ZM239.25 0h19.3v5.25h-19.3ZM239.25 7.88h19.3v5.25h-19.3ZM239.25 15.75h19.3v5.25h-19.3ZM260.9 0h19.3v5.25h-19.3ZM260.9 5.25h5.25v2.62h-5.25ZM260.9 7.88h19.3v5.25h-19.3ZM274.95 13.12h5.25v2.62h-5.25ZM260.9 15.75h19.3v5.25h-19.3Z" />
                      </svg>
                    </span>
                  </div>
                  <div className="lvf-s06-copy lvf-s06-copy--wide">
                    <h3 className="lvf-s06-name">Lvlup Trading Terminal</h3>
                    <p className="lvf-s06-desc">Our proprietary trading environment, built for a seamless Lvlup experience.</p>
                  </div>
                  <p className="lvf-s06-badge"><span className="lvf-s06-badge-text">Coming Soon</span></p>
                </li>
              </ul>
            </div>
          </section>
          {/* s07 */}
          <section className="lvf-s07" id="community">
            <svg className="lvf-s07-sprite" aria-hidden="true" focusable="false">
              <defs>
                <symbol id="lvf-s07-i-play" viewBox="0 0 72 51">
                  <rect width={72} height={51} rx={14} fill="#ff0033" />
                  <path d="M29 15 48 26 29 37Z" fill="#ffffff" />
                </symbol>
                <symbol id="lvf-s07-i-ytmini" viewBox="0 0 72 51">
                  <rect width={72} height={51} rx={14} fill="#ff0033" />
                  <path d="M29 15 48 26 29 37Z" fill="#ffffff" />
                </symbol>
                <symbol id="lvf-s07-i-ytbadge" viewBox="0 0 40 28">
                  <rect width={40} height={28} rx={7} fill="#ffffff" />
                  <path d="M16 8 27 14 16 20Z" fill="#05060f" />
                </symbol>
                <symbol id="lvf-s07-i-share" viewBox="0 0 24 24">
                  <path d="M3.4 20.4c.1-6.4 3.9-9.9 9.8-10.3V3.6L21.6 12l-8.4 8.4v-6.2c-4.6.2-7.3 2-9.1 6.3a.6.6 0 0 1-1.1-.1Z" fill="currentColor" />
                </symbol>
                <symbol id="lvf-s07-i-history" viewBox="0 0 24 24">
                  <circle cx={12} cy={12} r="9.2" fill="none" stroke="currentColor" strokeWidth="1.9" />
                  <path d="M12 6.6v6.1l4.2 2.5" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                </symbol>
                <symbol id="lvf-s07-i-star" viewBox="0 0 24 24">
                  <path d="M12 2.4 15 8.5l6.7 1-4.9 4.7 1.2 6.7L12 17.7 6 20.9l1.2-6.7-4.9-4.7 6.7-1Z" fill="#ffc700" />
                </symbol>
              </defs>
            </svg>
            <div className="lvf-s07-glow" aria-hidden="true" />
            <div className="lvf-container lvf-s07-main">
              <div className="lvf-s07-inner">
                <header className="lvf-s07-head">
                  <p className="lvf-s07-badge"><span className="lvf-s07-badge-text">Words from Traders</span></p>
                  <h2 className="lvf-s07-title">Traders in Their <span className="lvf-s07-title-accent">Own Words</span></h2>
                  <p className="lvf-s07-sub">Interviews, payout journeys, and firsthand experiences from the Lvlup community.</p>
                </header>
                <div className="lvf-s07-videos">
                  <a className="lvf-s07-vcard lvf-s07-vcard--main" href="video-jack-payout.html" data-lvf-video-id="MUtkvrpCrbg" data-lvf-video-title="Jack Just Got Paid $2,100 From LVLUP Futures | Traders Interview">
                    <img className="lvf-s07-vthumb" src="https://i.ytimg.com/vi/MUtkvrpCrbg/maxresdefault.jpg" width={764} height={429} loading="lazy" alt="Jack's $2,100 Lvlup Futures payout interview" />
                    <span className="lvf-s07-vshade lvf-s07-vshade--top" aria-hidden="true" />
                    <span className="lvf-s07-vshade lvf-s07-vshade--bottom" aria-hidden="true" />
                    <span className="lvf-s07-vmeta">
                      <img className="lvf-s07-vavatar" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-a475a4c22a.webp" width={44} height={44} loading="lazy" alt />
                      <span className="lvf-s07-vmeta-text">
                        <span className="lvf-s07-vtitle">Jack Just Got Paid $2,100 From LVLUP Futures | Traders Interview</span>
                        <span className="lvf-s07-vchannel">Lvlup Futures</span>
                      </span>
                    </span>
                    <span className="lvf-s07-vplay" aria-hidden="true"><svg className="lvf-s07-vplay-svg" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-play" /></svg></span>
                    <span className="lvf-s07-vbar" aria-hidden="true">
                      <span className="lvf-s07-vtools">
                        <span className="lvf-s07-vtool"><svg className="lvf-s07-vtool-svg" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-share" /></svg></span>
                        <span className="lvf-s07-vtool"><svg className="lvf-s07-vtool-svg" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-history" /></svg></span>
                      </span>
                      <span className="lvf-s07-vwatch"><span className="lvf-s07-vwatch-label">Watch on</span><span className="lvf-s07-ytmark"><svg className="lvf-s07-ytbadge" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-ytbadge" /></svg><span className="lvf-s07-ytword">YouTube</span></span></span>
                    </span>
                    <span className="lvf-sr"> – play video</span>
                  </a>
                  <div className="lvf-s07-vside">
                    <a className="lvf-s07-vcard lvf-s07-vcard--med" href="video-ceo-interview.html" data-lvf-video-id="d1q1nJ9FkAw" data-lvf-video-title="The Man Behind LVLUP Futures | CEO Interview">
                      <img className="lvf-s07-vthumb" src="https://i.ytimg.com/vi/d1q1nJ9FkAw/maxresdefault.jpg" width={364} height={205} loading="lazy" alt="Lvlup Futures CEO interview" />
                      <span className="lvf-s07-vshade lvf-s07-vshade--top" aria-hidden="true" />
                      <span className="lvf-s07-vshade lvf-s07-vshade--bottom" aria-hidden="true" />
                      <span className="lvf-s07-vmeta">
                        <img className="lvf-s07-vavatar" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-a475a4c22a.webp" width={44} height={44} loading="lazy" alt />
                        <span className="lvf-s07-vmeta-text">
                          <span className="lvf-s07-vtitle">The Man Behind LVLUP Futures | CEO Interview</span>
                          <span className="lvf-s07-vchannel">Lvlup Futures</span>
                        </span>
                      </span>
                      <span className="lvf-s07-vplay" aria-hidden="true"><svg className="lvf-s07-vplay-svg" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-play" /></svg></span>
                      <span className="lvf-s07-vbar" aria-hidden="true">
                        <span className="lvf-s07-vtools">
                          <span className="lvf-s07-vtool"><svg className="lvf-s07-vtool-svg" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-share" /></svg></span>
                          <span className="lvf-s07-vtool"><svg className="lvf-s07-vtool-svg" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-history" /></svg></span>
                        </span>
                        <span className="lvf-s07-vwatch"><span className="lvf-s07-vwatch-label">Watch on</span><span className="lvf-s07-ytmark"><svg className="lvf-s07-ytbadge" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-ytbadge" /></svg><span className="lvf-s07-ytword">YouTube</span></span></span>
                      </span>
                      <span className="lvf-sr"> – play video</span>
                    </a>
                    <a className="lvf-s07-vcard lvf-s07-vcard--med" href="video-billing-subscription.html" data-lvf-video-id="hohA9dt5x1o" data-lvf-video-title="Billing & Subscription with Lvlup Futures">
                      <img className="lvf-s07-vthumb" src="https://i.ytimg.com/vi/hohA9dt5x1o/maxresdefault.jpg" width={364} height={205} loading="lazy" alt="Billing and subscription with Lvlup Futures" />
                      <span className="lvf-s07-vshade lvf-s07-vshade--top" aria-hidden="true" />
                      <span className="lvf-s07-vshade lvf-s07-vshade--bottom" aria-hidden="true" />
                      <span className="lvf-s07-vmeta">
                        <img className="lvf-s07-vavatar" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-a475a4c22a.webp" width={44} height={44} loading="lazy" alt />
                        <span className="lvf-s07-vmeta-text">
                          <span className="lvf-s07-vtitle">Billing &amp; Subscription with Lvlup Futures</span>
                          <span className="lvf-s07-vchannel">Lvlup Futures</span>
                        </span>
                      </span>
                      <span className="lvf-s07-vplay" aria-hidden="true"><svg className="lvf-s07-vplay-svg" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-play" /></svg></span>
                      <span className="lvf-s07-vbar" aria-hidden="true">
                        <span className="lvf-s07-vtools">
                          <span className="lvf-s07-vtool"><svg className="lvf-s07-vtool-svg" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-share" /></svg></span>
                          <span className="lvf-s07-vtool"><svg className="lvf-s07-vtool-svg" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-history" /></svg></span>
                        </span>
                        <span className="lvf-s07-vwatch"><span className="lvf-s07-vwatch-label">Watch on</span><span className="lvf-s07-ytmark"><svg className="lvf-s07-ytbadge" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-ytbadge" /></svg><span className="lvf-s07-ytword">YouTube</span></span></span>
                      </span>
                      <span className="lvf-sr"> – play video</span>
                    </a>
                  </div>
                  <div className="lvf-s07-vgrid">
                    <a className="lvf-s07-vcard lvf-s07-vcard--small" href="video-payouts.html" data-lvf-video-id="wD8noZRfBrw" data-lvf-video-title="Payouts with Lvlup Futures">
                      <img className="lvf-s07-vthumb" src="https://i.ytimg.com/vi/wD8noZRfBrw/maxresdefault.jpg" width={277} height={156} loading="lazy" alt="How payouts work with Lvlup Futures" />
                      <span className="lvf-s07-vshade lvf-s07-vshade--top" aria-hidden="true" />
                      <span className="lvf-s07-vshade lvf-s07-vshade--bottom" aria-hidden="true" />
                      <span className="lvf-s07-vmeta">
                        <img className="lvf-s07-vavatar" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-a475a4c22a.webp" width={44} height={44} loading="lazy" alt />
                        <span className="lvf-s07-vmeta-text">
                          <span className="lvf-s07-vtitle">Payouts with Lvlup Futures</span>
                          <span className="lvf-s07-vchannel">Lvlup Futures</span>
                        </span>
                      </span>
                      <span className="lvf-s07-vplay" aria-hidden="true"><svg className="lvf-s07-vplay-svg" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-play" /></svg></span>
                      <span className="lvf-s07-vbar" aria-hidden="true">
                        <span className="lvf-s07-vtools">
                          <span className="lvf-s07-vtool"><svg className="lvf-s07-vtool-svg" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-share" /></svg></span>
                          <span className="lvf-s07-vtool"><svg className="lvf-s07-vtool-svg" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-history" /></svg></span>
                        </span>
                        <span className="lvf-s07-vwatch"><span className="lvf-s07-vwatch-label">Watch on</span><span className="lvf-s07-ytmark"><svg className="lvf-s07-ytbadge" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-ytbadge" /></svg><span className="lvf-s07-ytword">YouTube</span></span></span>
                      </span>
                      <span className="lvf-sr"> – play video</span>
                    </a>
                    <a className="lvf-s07-vcard lvf-s07-vcard--small" href="video-payout-protector.html" data-lvf-video-id="32A6zrW7sAM" data-lvf-video-title="Payout Protector with Lvlup Futures">
                      <img className="lvf-s07-vthumb" src="https://i.ytimg.com/vi/32A6zrW7sAM/maxresdefault.jpg" width={277} height={156} loading="lazy" alt="Payout Protector with Lvlup Futures" />
                      <span className="lvf-s07-vshade lvf-s07-vshade--top" aria-hidden="true" />
                      <span className="lvf-s07-vshade lvf-s07-vshade--bottom" aria-hidden="true" />
                      <span className="lvf-s07-vmeta">
                        <img className="lvf-s07-vavatar" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-a475a4c22a.webp" width={44} height={44} loading="lazy" alt />
                        <span className="lvf-s07-vmeta-text">
                          <span className="lvf-s07-vtitle">Payout Protector with Lvlup Futures</span>
                          <span className="lvf-s07-vchannel">Lvlup Futures</span>
                        </span>
                      </span>
                      <span className="lvf-s07-vplay" aria-hidden="true"><svg className="lvf-s07-vplay-svg" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-play" /></svg></span>
                      <span className="lvf-s07-vbar" aria-hidden="true">
                        <span className="lvf-s07-vtools">
                          <span className="lvf-s07-vtool"><svg className="lvf-s07-vtool-svg" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-share" /></svg></span>
                          <span className="lvf-s07-vtool"><svg className="lvf-s07-vtool-svg" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-history" /></svg></span>
                        </span>
                        <span className="lvf-s07-vwatch"><span className="lvf-s07-vwatch-label">Watch on</span><span className="lvf-s07-ytmark"><svg className="lvf-s07-ytbadge" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-ytbadge" /></svg><span className="lvf-s07-ytword">YouTube</span></span></span>
                      </span>
                      <span className="lvf-sr"> – play video</span>
                    </a>
                    <a className="lvf-s07-vcard lvf-s07-vcard--small" href="video-getting-started.html" data-lvf-video-id="limKIS6zwuQ" data-lvf-video-title="Getting Started with Lvlup Futures">
                      <img className="lvf-s07-vthumb" src="https://i.ytimg.com/vi/limKIS6zwuQ/maxresdefault.jpg" width={277} height={156} loading="lazy" alt="Getting started with Lvlup Futures" />
                      <span className="lvf-s07-vshade lvf-s07-vshade--top" aria-hidden="true" />
                      <span className="lvf-s07-vshade lvf-s07-vshade--bottom" aria-hidden="true" />
                      <span className="lvf-s07-vmeta">
                        <img className="lvf-s07-vavatar" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-a475a4c22a.webp" width={44} height={44} loading="lazy" alt />
                        <span className="lvf-s07-vmeta-text">
                          <span className="lvf-s07-vtitle">Getting Started with Lvlup Futures</span>
                          <span className="lvf-s07-vchannel">Lvlup Futures</span>
                        </span>
                      </span>
                      <span className="lvf-s07-vplay" aria-hidden="true"><svg className="lvf-s07-vplay-svg" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-play" /></svg></span>
                      <span className="lvf-s07-vbar" aria-hidden="true">
                        <span className="lvf-s07-vtools">
                          <span className="lvf-s07-vtool"><svg className="lvf-s07-vtool-svg" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-share" /></svg></span>
                          <span className="lvf-s07-vtool"><svg className="lvf-s07-vtool-svg" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-history" /></svg></span>
                        </span>
                        <span className="lvf-s07-vwatch"><span className="lvf-s07-vwatch-label">Watch on</span><span className="lvf-s07-ytmark"><svg className="lvf-s07-ytbadge" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-ytbadge" /></svg><span className="lvf-s07-ytword">YouTube</span></span></span>
                      </span>
                      <span className="lvf-sr"> – play video</span>
                    </a>
                    <a className="lvf-s07-vcard lvf-s07-vcard--small" href="video-rules.html" data-lvf-video-id="ON80eGfn6ug" data-lvf-video-title="Know the Rules with Lvlup Futures">
                      <img className="lvf-s07-vthumb" src="https://i.ytimg.com/vi/ON80eGfn6ug/maxresdefault.jpg" width={277} height={156} loading="lazy" alt="Know the rules with Lvlup Futures" />
                      <span className="lvf-s07-vshade lvf-s07-vshade--top" aria-hidden="true" />
                      <span className="lvf-s07-vshade lvf-s07-vshade--bottom" aria-hidden="true" />
                      <span className="lvf-s07-vmeta">
                        <img className="lvf-s07-vavatar" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-a475a4c22a.webp" width={44} height={44} loading="lazy" alt />
                        <span className="lvf-s07-vmeta-text">
                          <span className="lvf-s07-vtitle">Know the Rules with Lvlup Futures</span>
                          <span className="lvf-s07-vchannel">Lvlup Futures</span>
                        </span>
                      </span>
                      <span className="lvf-s07-vplay" aria-hidden="true"><svg className="lvf-s07-vplay-svg" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-play" /></svg></span>
                      <span className="lvf-s07-vbar" aria-hidden="true">
                        <span className="lvf-s07-vtools">
                          <span className="lvf-s07-vtool"><svg className="lvf-s07-vtool-svg" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-share" /></svg></span>
                          <span className="lvf-s07-vtool"><svg className="lvf-s07-vtool-svg" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-history" /></svg></span>
                        </span>
                        <span className="lvf-s07-vwatch"><span className="lvf-s07-vwatch-label">Watch on</span><span className="lvf-s07-ytmark"><svg className="lvf-s07-ytbadge" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-ytbadge" /></svg><span className="lvf-s07-ytword">YouTube</span></span></span>
                      </span>
                      <span className="lvf-sr"> – play video</span>
                    </a>
                    <a className="lvf-s07-vcard lvf-s07-vcard--small lvf-s07-vcard--dup" href="video-payouts.html" data-lvf-video-id="wD8noZRfBrw" data-lvf-video-title="Payouts with Lvlup Futures" tabIndex={-1} aria-hidden="true">
                      <img className="lvf-s07-vthumb" src="https://i.ytimg.com/vi/wD8noZRfBrw/maxresdefault.jpg" width={277} height={156} loading="lazy" alt />
                      <span className="lvf-s07-vshade lvf-s07-vshade--top" aria-hidden="true" />
                      <span className="lvf-s07-vshade lvf-s07-vshade--bottom" aria-hidden="true" />
                      <span className="lvf-s07-vmeta">
                        <img className="lvf-s07-vavatar" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-a475a4c22a.webp" width={44} height={44} loading="lazy" alt />
                        <span className="lvf-s07-vmeta-text">
                          <span className="lvf-s07-vtitle">Payouts with Lvlup Futures</span>
                          <span className="lvf-s07-vchannel">Lvlup Futures</span>
                        </span>
                      </span>
                      <span className="lvf-s07-vplay" aria-hidden="true"><svg className="lvf-s07-vplay-svg" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-play" /></svg></span>
                      <span className="lvf-s07-vbar" aria-hidden="true">
                        <span className="lvf-s07-vtools">
                          <span className="lvf-s07-vtool"><svg className="lvf-s07-vtool-svg" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-share" /></svg></span>
                          <span className="lvf-s07-vtool"><svg className="lvf-s07-vtool-svg" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-history" /></svg></span>
                        </span>
                        <span className="lvf-s07-vwatch"><span className="lvf-s07-vwatch-label">Watch on</span><span className="lvf-s07-ytmark"><svg className="lvf-s07-ytbadge" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-ytbadge" /></svg><span className="lvf-s07-ytword">YouTube</span></span></span>
                      </span>
                    </a>
                    <a className="lvf-s07-vcard lvf-s07-vcard--small lvf-s07-vcard--dup" href="video-payout-protector.html" data-lvf-video-id="32A6zrW7sAM" data-lvf-video-title="Payout Protector with Lvlup Futures" tabIndex={-1} aria-hidden="true">
                      <img className="lvf-s07-vthumb" src="https://i.ytimg.com/vi/32A6zrW7sAM/maxresdefault.jpg" width={277} height={156} loading="lazy" alt />
                      <span className="lvf-s07-vshade lvf-s07-vshade--top" aria-hidden="true" />
                      <span className="lvf-s07-vshade lvf-s07-vshade--bottom" aria-hidden="true" />
                      <span className="lvf-s07-vmeta">
                        <img className="lvf-s07-vavatar" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-a475a4c22a.webp" width={44} height={44} loading="lazy" alt />
                        <span className="lvf-s07-vmeta-text">
                          <span className="lvf-s07-vtitle">Payout Protector with Lvlup Futures</span>
                          <span className="lvf-s07-vchannel">Lvlup Futures</span>
                        </span>
                      </span>
                      <span className="lvf-s07-vplay" aria-hidden="true"><svg className="lvf-s07-vplay-svg" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-play" /></svg></span>
                      <span className="lvf-s07-vbar" aria-hidden="true">
                        <span className="lvf-s07-vtools">
                          <span className="lvf-s07-vtool"><svg className="lvf-s07-vtool-svg" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-share" /></svg></span>
                          <span className="lvf-s07-vtool"><svg className="lvf-s07-vtool-svg" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-history" /></svg></span>
                        </span>
                        <span className="lvf-s07-vwatch"><span className="lvf-s07-vwatch-label">Watch on</span><span className="lvf-s07-ytmark"><svg className="lvf-s07-ytbadge" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-ytbadge" /></svg><span className="lvf-s07-ytword">YouTube</span></span></span>
                      </span>
                    </a>
                    <a className="lvf-s07-vcard lvf-s07-vcard--small lvf-s07-vcard--dup" href="video-getting-started.html" data-lvf-video-id="limKIS6zwuQ" data-lvf-video-title="Getting Started with Lvlup Futures" tabIndex={-1} aria-hidden="true">
                      <img className="lvf-s07-vthumb" src="https://i.ytimg.com/vi/limKIS6zwuQ/maxresdefault.jpg" width={277} height={156} loading="lazy" alt />
                      <span className="lvf-s07-vshade lvf-s07-vshade--top" aria-hidden="true" />
                      <span className="lvf-s07-vshade lvf-s07-vshade--bottom" aria-hidden="true" />
                      <span className="lvf-s07-vmeta">
                        <img className="lvf-s07-vavatar" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-a475a4c22a.webp" width={44} height={44} loading="lazy" alt />
                        <span className="lvf-s07-vmeta-text">
                          <span className="lvf-s07-vtitle">Getting Started with Lvlup Futures</span>
                          <span className="lvf-s07-vchannel">Lvlup Futures</span>
                        </span>
                      </span>
                      <span className="lvf-s07-vplay" aria-hidden="true"><svg className="lvf-s07-vplay-svg" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-play" /></svg></span>
                      <span className="lvf-s07-vbar" aria-hidden="true">
                        <span className="lvf-s07-vtools">
                          <span className="lvf-s07-vtool"><svg className="lvf-s07-vtool-svg" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-share" /></svg></span>
                          <span className="lvf-s07-vtool"><svg className="lvf-s07-vtool-svg" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-history" /></svg></span>
                        </span>
                        <span className="lvf-s07-vwatch"><span className="lvf-s07-vwatch-label">Watch on</span><span className="lvf-s07-ytmark"><svg className="lvf-s07-ytbadge" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-ytbadge" /></svg><span className="lvf-s07-ytword">YouTube</span></span></span>
                      </span>
                    </a>
                    <a className="lvf-s07-vcard lvf-s07-vcard--small lvf-s07-vcard--dup" href="video-rules.html" data-lvf-video-id="ON80eGfn6ug" data-lvf-video-title="Know the Rules with Lvlup Futures" tabIndex={-1} aria-hidden="true">
                      <img className="lvf-s07-vthumb" src="https://i.ytimg.com/vi/ON80eGfn6ug/maxresdefault.jpg" width={277} height={156} loading="lazy" alt />
                      <span className="lvf-s07-vshade lvf-s07-vshade--top" aria-hidden="true" />
                      <span className="lvf-s07-vshade lvf-s07-vshade--bottom" aria-hidden="true" />
                      <span className="lvf-s07-vmeta">
                        <img className="lvf-s07-vavatar" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-a475a4c22a.webp" width={44} height={44} loading="lazy" alt />
                        <span className="lvf-s07-vmeta-text">
                          <span className="lvf-s07-vtitle">Know the Rules with Lvlup Futures</span>
                          <span className="lvf-s07-vchannel">Lvlup Futures</span>
                        </span>
                      </span>
                      <span className="lvf-s07-vplay" aria-hidden="true"><svg className="lvf-s07-vplay-svg" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-play" /></svg></span>
                      <span className="lvf-s07-vbar" aria-hidden="true">
                        <span className="lvf-s07-vtools">
                          <span className="lvf-s07-vtool"><svg className="lvf-s07-vtool-svg" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-share" /></svg></span>
                          <span className="lvf-s07-vtool"><svg className="lvf-s07-vtool-svg" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-history" /></svg></span>
                        </span>
                        <span className="lvf-s07-vwatch"><span className="lvf-s07-vwatch-label">Watch on</span><span className="lvf-s07-ytmark"><svg className="lvf-s07-ytbadge" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-ytbadge" /></svg><span className="lvf-s07-ytword">YouTube</span></span></span>
                      </span>
                    </a>
                  </div>
                </div>
                <p className="lvf-s07-cta-wrap">
                  <a className="lvf-s07-cta" href="https://www.youtube.com/@lvlupfutures" target="_blank" rel="noopener">
                    <svg className="lvf-s07-cta-icon" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-ytmini" /></svg>
                    <span className="lvf-s07-cta-text">Watch Interviews on <span className="lvf-s07-cta-yt">YouTube</span></span>
                    <span className="lvf-sr"> (opens in a new tab)</span>
                  </a>
                </p>
                <header className="lvf-s07-head lvf-s07-head--testimonials">
                  <p className="lvf-s07-badge"><span className="lvf-s07-badge-text">Testimonials</span></p>
                  <h2 className="lvf-s07-title">Independent <span className="lvf-s07-title-accent">Trader Feedback</span></h2>
                  <p className="lvf-s07-sub">Interviews, payout journeys, and firsthand experiences from the Lvlup community.</p>
                </header>
              </div>
            </div>
            <div className="lvf-s07-marquees">
              <div className="lvf-s07-marquee lvf-s07-marquee--sm" data-lvf-s07-marquee data-lvf-s07-dir="left" data-lvf-s07-speed={40}>
                <ul className="lvf-s07-track" data-lvf-s07-track>
                  <li className="lvf-s07-tcard lvf-s07-tcard--a">
                    <span className="lvf-s07-stars" role="img" aria-label="Rated 5 out of 5"><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg></span>
                    <blockquote className="lvf-s07-quote">“Passed my evaluation in six trading days and got funded the same week.”</blockquote>
                    <span className="lvf-s07-person">
                      <span className="lvf-s07-avatar"><img className="lvf-s07-avatar-img" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-ece298d0ec.webp" width={22} height={22} loading="lazy" alt /></span>
                      <span className="lvf-s07-person-text">
                        <span className="lvf-s07-name">Daniel Reyes</span>
                        <span className="lvf-s07-role">Trader</span>
                      </span>
                    </span>
                  </li>
                  <li className="lvf-s07-tcard lvf-s07-tcard--b">
                    <span className="lvf-s07-stars" role="img" aria-label="Rated 5 out of 5"><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg></span>
                    <blockquote className="lvf-s07-quote">“The consistency rule pushed me to trade smarter instead of chasing size.”</blockquote>
                    <span className="lvf-s07-person">
                      <span className="lvf-s07-avatar"><img className="lvf-s07-avatar-img" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-ece298d0ec.webp" width={22} height={22} loading="lazy" alt /></span>
                      <span className="lvf-s07-person-text">
                        <span className="lvf-s07-name">Priya Kapoor</span>
                        <span className="lvf-s07-role">Trader</span>
                      </span>
                    </span>
                  </li>
                  <li className="lvf-s07-tcard lvf-s07-tcard--b">
                    <span className="lvf-s07-stars" role="img" aria-label="Rated 5 out of 5"><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg></span>
                    <blockquote className="lvf-s07-quote">“My first payout hit in under 48 hours, no back and forth required.”</blockquote>
                    <span className="lvf-s07-person">
                      <span className="lvf-s07-avatar"><img className="lvf-s07-avatar-img" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-ece298d0ec.webp" width={22} height={22} loading="lazy" alt /></span>
                      <span className="lvf-s07-person-text">
                        <span className="lvf-s07-name">Marcus Chen</span>
                        <span className="lvf-s07-role">Trader</span>
                      </span>
                    </span>
                  </li>
                  <li className="lvf-s07-tcard lvf-s07-tcard--b">
                    <span className="lvf-s07-stars" role="img" aria-label="Rated 5 out of 5"><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg></span>
                    <blockquote className="lvf-s07-quote">“Trading futures on a funded account finally feels sustainable.”</blockquote>
                    <span className="lvf-s07-person">
                      <span className="lvf-s07-avatar"><img className="lvf-s07-avatar-img" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-ece298d0ec.webp" width={22} height={22} loading="lazy" alt /></span>
                      <span className="lvf-s07-person-text">
                        <span className="lvf-s07-name">Sofia Almeida</span>
                        <span className="lvf-s07-role">Trader</span>
                      </span>
                    </span>
                  </li>
                  <li className="lvf-s07-tcard lvf-s07-tcard--b">
                    <span className="lvf-s07-stars" role="img" aria-label="Rated 5 out of 5"><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg></span>
                    <blockquote className="lvf-s07-quote">“The trailing drawdown rules are fair compared to every prop firm I tried before.”</blockquote>
                    <span className="lvf-s07-person">
                      <span className="lvf-s07-avatar"><img className="lvf-s07-avatar-img" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-ece298d0ec.webp" width={22} height={22} loading="lazy" alt /></span>
                      <span className="lvf-s07-person-text">
                        <span className="lvf-s07-name">Ethan Brooks</span>
                        <span className="lvf-s07-role">Trader</span>
                      </span>
                    </span>
                  </li>
                  <li className="lvf-s07-tcard lvf-s07-tcard--c">
                    <span className="lvf-s07-stars" role="img" aria-label="Rated 5 out of 5"><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg></span>
                    <blockquote className="lvf-s07-quote">“Scaling my contract size as my account grew kept things realistic.”</blockquote>
                    <span className="lvf-s07-person">
                      <span className="lvf-s07-avatar"><img className="lvf-s07-avatar-img" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-ece298d0ec.webp" width={22} height={22} loading="lazy" alt /></span>
                      <span className="lvf-s07-person-text">
                        <span className="lvf-s07-name">Layla Haddad</span>
                        <span className="lvf-s07-role">Trader</span>
                      </span>
                    </span>
                  </li>
                  <li className="lvf-s07-tcard lvf-s07-tcard--b lvf-s07-tcard--edge">
                    <span className="lvf-s07-stars" role="img" aria-label="Rated 5 out of 5"><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg></span>
                    <blockquote className="lvf-s07-quote">“Support walked me through my first payout request step by step.”</blockquote>
                    <span className="lvf-s07-person">
                      <span className="lvf-s07-avatar"><img className="lvf-s07-avatar-img" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-ece298d0ec.webp" width={22} height={22} loading="lazy" alt /></span>
                      <span className="lvf-s07-person-text">
                        <span className="lvf-s07-name">Tomas Rivera</span>
                        <span className="lvf-s07-role">Trader</span>
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="lvf-s07-marquee lvf-s07-marquee--lg" data-lvf-s07-marquee data-lvf-s07-dir="right" data-lvf-s07-speed={34}>
                <ul className="lvf-s07-track" data-lvf-s07-track>
                  <li className="lvf-s07-tcard lvf-s07-tcard--f">
                    <span className="lvf-s07-stars" role="img" aria-label="Rated 5 out of 5"><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg></span>
                    <blockquote className="lvf-s07-quote">“I like that the rules are the same in evaluation and funded stages.”</blockquote>
                    <span className="lvf-s07-person">
                      <span className="lvf-s07-avatar"><img className="lvf-s07-avatar-img" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-ece298d0ec.webp" width={22} height={22} loading="lazy" alt /></span>
                      <span className="lvf-s07-person-text">
                        <span className="lvf-s07-name">Grace Whitfield</span>
                        <span className="lvf-s07-role">Trader</span>
                      </span>
                    </span>
                  </li>
                  <li className="lvf-s07-tcard lvf-s07-tcard--d">
                    <span className="lvf-s07-stars" role="img" aria-label="Rated 5 out of 5"><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg></span>
                    <blockquote className="lvf-s07-quote">“Funded two accounts here after failing three evaluations elsewhere.”</blockquote>
                    <span className="lvf-s07-person">
                      <span className="lvf-s07-avatar"><img className="lvf-s07-avatar-img" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-ece298d0ec.webp" width={22} height={22} loading="lazy" alt /></span>
                      <span className="lvf-s07-person-text">
                        <span className="lvf-s07-name">Kenji Watanabe</span>
                        <span className="lvf-s07-role">Trader</span>
                      </span>
                    </span>
                  </li>
                  <li className="lvf-s07-tcard lvf-s07-tcard--e lvf-s07-tcard--fill">
                    <span className="lvf-s07-stars" role="img" aria-label="Rated 5 out of 5"><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg></span>
                    <blockquote className="lvf-s07-quote">“The dashboard makes tracking my drawdown and profit target effortless.”</blockquote>
                    <span className="lvf-s07-person">
                      <span className="lvf-s07-avatar"><img className="lvf-s07-avatar-img" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-ece298d0ec.webp" width={22} height={22} loading="lazy" alt /></span>
                      <span className="lvf-s07-person-text">
                        <span className="lvf-s07-name">Amara Okafor</span>
                        <span className="lvf-s07-role">Trader</span>
                      </span>
                    </span>
                  </li>
                  <li className="lvf-s07-tcard lvf-s07-tcard--c">
                    <span className="lvf-s07-stars" role="img" aria-label="Rated 5 out of 5"><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg></span>
                    <blockquote className="lvf-s07-quote">“Payout cycle every two weeks keeps my trading business cash flowing.”</blockquote>
                    <span className="lvf-s07-person">
                      <span className="lvf-s07-avatar"><img className="lvf-s07-avatar-img" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-ece298d0ec.webp" width={22} height={22} loading="lazy" alt /></span>
                      <span className="lvf-s07-person-text">
                        <span className="lvf-s07-name">Lucas Fontaine</span>
                        <span className="lvf-s07-role">Trader</span>
                      </span>
                    </span>
                  </li>
                  <li className="lvf-s07-tcard lvf-s07-tcard--d">
                    <span className="lvf-s07-stars" role="img" aria-label="Rated 5 out of 5"><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg></span>
                    <blockquote className="lvf-s07-quote">“No hidden restrictions on news trading, which matters for my strategy.”</blockquote>
                    <span className="lvf-s07-person">
                      <span className="lvf-s07-avatar"><img className="lvf-s07-avatar-img" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-ece298d0ec.webp" width={22} height={22} loading="lazy" alt /></span>
                      <span className="lvf-s07-person-text">
                        <span className="lvf-s07-name">Nadia Petrov</span>
                        <span className="lvf-s07-role">Trader</span>
                      </span>
                    </span>
                  </li>
                  <li className="lvf-s07-tcard lvf-s07-tcard--a">
                    <span className="lvf-s07-stars" role="img" aria-label="Rated 5 out of 5"><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg></span>
                    <blockquote className="lvf-s07-quote">“Went from a 50K evaluation to a 150K funded account in two months.”</blockquote>
                    <span className="lvf-s07-person">
                      <span className="lvf-s07-avatar"><img className="lvf-s07-avatar-img" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-ece298d0ec.webp" width={22} height={22} loading="lazy" alt /></span>
                      <span className="lvf-s07-person-text">
                        <span className="lvf-s07-name">Owen Sinclair</span>
                        <span className="lvf-s07-role">Trader</span>
                      </span>
                    </span>
                  </li>
                  <li className="lvf-s07-tcard lvf-s07-tcard--e">
                    <span className="lvf-s07-stars" role="img" aria-label="Rated 5 out of 5"><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg></span>
                    <blockquote className="lvf-s07-quote">“The profit split actually reflects the risk I'm taking as a trader.”</blockquote>
                    <span className="lvf-s07-person">
                      <span className="lvf-s07-avatar"><img className="lvf-s07-avatar-img" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-ece298d0ec.webp" width={22} height={22} loading="lazy" alt /></span>
                      <span className="lvf-s07-person-text">
                        <span className="lvf-s07-name">Mei Lin</span>
                        <span className="lvf-s07-role">Trader</span>
                      </span>
                    </span>
                  </li>
                  <li className="lvf-s07-tcard lvf-s07-tcard--c">
                    <span className="lvf-s07-stars" role="img" aria-label="Rated 5 out of 5"><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg></span>
                    <blockquote className="lvf-s07-quote">“Customer support answered my platform question in minutes, not days.”</blockquote>
                    <span className="lvf-s07-person">
                      <span className="lvf-s07-avatar"><img className="lvf-s07-avatar-img" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-ece298d0ec.webp" width={22} height={22} loading="lazy" alt /></span>
                      <span className="lvf-s07-person-text">
                        <span className="lvf-s07-name">Diego Salazar</span>
                        <span className="lvf-s07-role">Trader</span>
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="lvf-s07-marquee lvf-s07-marquee--sm" data-lvf-s07-marquee data-lvf-s07-dir="left" data-lvf-s07-speed={46}>
                <ul className="lvf-s07-track" data-lvf-s07-track>
                  <li className="lvf-s07-tcard lvf-s07-tcard--a">
                    <span className="lvf-s07-stars" role="img" aria-label="Rated 5 out of 5"><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg></span>
                    <blockquote className="lvf-s07-quote">“My consistency score improved once I stopped overtrading on day one.”</blockquote>
                    <span className="lvf-s07-person">
                      <span className="lvf-s07-avatar"><img className="lvf-s07-avatar-img" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-ece298d0ec.webp" width={22} height={22} loading="lazy" alt /></span>
                      <span className="lvf-s07-person-text">
                        <span className="lvf-s07-name">Hannah Voss</span>
                        <span className="lvf-s07-role">Trader</span>
                      </span>
                    </span>
                  </li>
                  <li className="lvf-s07-tcard lvf-s07-tcard--b">
                    <span className="lvf-s07-stars" role="img" aria-label="Rated 5 out of 5"><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg></span>
                    <blockquote className="lvf-s07-quote">“Clear rules meant I never got disqualified over a technicality.”</blockquote>
                    <span className="lvf-s07-person">
                      <span className="lvf-s07-avatar"><img className="lvf-s07-avatar-img" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-ece298d0ec.webp" width={22} height={22} loading="lazy" alt /></span>
                      <span className="lvf-s07-person-text">
                        <span className="lvf-s07-name">Rajiv Menon</span>
                        <span className="lvf-s07-role">Trader</span>
                      </span>
                    </span>
                  </li>
                  <li className="lvf-s07-tcard lvf-s07-tcard--b">
                    <span className="lvf-s07-stars" role="img" aria-label="Rated 5 out of 5"><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg></span>
                    <blockquote className="lvf-s07-quote">“Switched from stocks to futures and this evaluation made the transition easy.”</blockquote>
                    <span className="lvf-s07-person">
                      <span className="lvf-s07-avatar"><img className="lvf-s07-avatar-img" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-ece298d0ec.webp" width={22} height={22} loading="lazy" alt /></span>
                      <span className="lvf-s07-person-text">
                        <span className="lvf-s07-name">Isabelle Laurent</span>
                        <span className="lvf-s07-role">Trader</span>
                      </span>
                    </span>
                  </li>
                  <li className="lvf-s07-tcard lvf-s07-tcard--b">
                    <span className="lvf-s07-stars" role="img" aria-label="Rated 5 out of 5"><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg></span>
                    <blockquote className="lvf-s07-quote">“The payout protector saved my payout when the market turned against me.”</blockquote>
                    <span className="lvf-s07-person">
                      <span className="lvf-s07-avatar"><img className="lvf-s07-avatar-img" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-ece298d0ec.webp" width={22} height={22} loading="lazy" alt /></span>
                      <span className="lvf-s07-person-text">
                        <span className="lvf-s07-name">Caleb Osei</span>
                        <span className="lvf-s07-role">Trader</span>
                      </span>
                    </span>
                  </li>
                  <li className="lvf-s07-tcard lvf-s07-tcard--b">
                    <span className="lvf-s07-stars" role="img" aria-label="Rated 5 out of 5"><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg></span>
                    <blockquote className="lvf-s07-quote">“Every account size scales the same way, so upgrading felt seamless.”</blockquote>
                    <span className="lvf-s07-person">
                      <span className="lvf-s07-avatar"><img className="lvf-s07-avatar-img" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-ece298d0ec.webp" width={22} height={22} loading="lazy" alt /></span>
                      <span className="lvf-s07-person-text">
                        <span className="lvf-s07-name">Yuki Tanaka</span>
                        <span className="lvf-s07-role">Trader</span>
                      </span>
                    </span>
                  </li>
                  <li className="lvf-s07-tcard lvf-s07-tcard--c">
                    <span className="lvf-s07-stars" role="img" aria-label="Rated 5 out of 5"><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg></span>
                    <blockquote className="lvf-s07-quote">“I finally trade with a plan instead of gambling on every session.”</blockquote>
                    <span className="lvf-s07-person">
                      <span className="lvf-s07-avatar"><img className="lvf-s07-avatar-img" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-ece298d0ec.webp" width={22} height={22} loading="lazy" alt /></span>
                      <span className="lvf-s07-person-text">
                        <span className="lvf-s07-name">Victor Nguyen</span>
                        <span className="lvf-s07-role">Trader</span>
                      </span>
                    </span>
                  </li>
                  <li className="lvf-s07-tcard lvf-s07-tcard--b lvf-s07-tcard--edge">
                    <span className="lvf-s07-stars" role="img" aria-label="Rated 5 out of 5"><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg></span>
                    <blockquote className="lvf-s07-quote">“Min trading days requirement kept me disciplined instead of rushing.”</blockquote>
                    <span className="lvf-s07-person">
                      <span className="lvf-s07-avatar"><img className="lvf-s07-avatar-img" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-ece298d0ec.webp" width={22} height={22} loading="lazy" alt /></span>
                      <span className="lvf-s07-person-text">
                        <span className="lvf-s07-name">Freya Larsen</span>
                        <span className="lvf-s07-role">Trader</span>
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="lvf-s07-marquee lvf-s07-marquee--sm lvf-s07-marquee--m4" data-lvf-s07-marquee data-lvf-s07-dir="right" data-lvf-s07-speed={42}>
                <ul className="lvf-s07-track" data-lvf-s07-track>
                  <li className="lvf-s07-tcard lvf-s07-tcard--b">
                    <span className="lvf-s07-stars" role="img" aria-label="Rated 5 out of 5"><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg></span>
                    <blockquote className="lvf-s07-quote">“Getting funded here changed how seriously I treat my trading.”</blockquote>
                    <span className="lvf-s07-person">
                      <span className="lvf-s07-avatar"><img className="lvf-s07-avatar-img" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-ece298d0ec.webp" width={22} height={22} loading="lazy" alt /></span>
                      <span className="lvf-s07-person-text">
                        <span className="lvf-s07-name">Malik Johnson</span>
                        <span className="lvf-s07-role">Trader</span>
                      </span>
                    </span>
                  </li>
                  <li className="lvf-s07-tcard lvf-s07-tcard--b">
                    <span className="lvf-s07-stars" role="img" aria-label="Rated 5 out of 5"><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg></span>
                    <blockquote className="lvf-s07-quote">“The max contract limits actually protect me from my own bad days.”</blockquote>
                    <span className="lvf-s07-person">
                      <span className="lvf-s07-avatar"><img className="lvf-s07-avatar-img" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-ece298d0ec.webp" width={22} height={22} loading="lazy" alt /></span>
                      <span className="lvf-s07-person-text">
                        <span className="lvf-s07-name">Elif Demir</span>
                        <span className="lvf-s07-role">Trader</span>
                      </span>
                    </span>
                  </li>
                  <li className="lvf-s07-tcard lvf-s07-tcard--c">
                    <span className="lvf-s07-stars" role="img" aria-label="Rated 5 out of 5"><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg></span>
                    <blockquote className="lvf-s07-quote">“Reliable payouts let me treat this as real income, not a side bet.”</blockquote>
                    <span className="lvf-s07-person">
                      <span className="lvf-s07-avatar"><img className="lvf-s07-avatar-img" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-ece298d0ec.webp" width={22} height={22} loading="lazy" alt /></span>
                      <span className="lvf-s07-person-text">
                        <span className="lvf-s07-name">Noah Kaczmarek</span>
                        <span className="lvf-s07-role">Trader</span>
                      </span>
                    </span>
                  </li>
                  <li className="lvf-s07-tcard lvf-s07-tcard--a">
                    <span className="lvf-s07-stars" role="img" aria-label="Rated 5 out of 5"><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg></span>
                    <blockquote className="lvf-s07-quote">“Evaluation felt tough but fair, exactly what a real funded account should be.”</blockquote>
                    <span className="lvf-s07-person">
                      <span className="lvf-s07-avatar"><img className="lvf-s07-avatar-img" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-ece298d0ec.webp" width={22} height={22} loading="lazy" alt /></span>
                      <span className="lvf-s07-person-text">
                        <span className="lvf-s07-name">Ana Belic</span>
                        <span className="lvf-s07-role">Trader</span>
                      </span>
                    </span>
                  </li>
                  <li className="lvf-s07-tcard lvf-s07-tcard--b">
                    <span className="lvf-s07-stars" role="img" aria-label="Rated 5 out of 5"><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg></span>
                    <blockquote className="lvf-s07-quote">“I recommend this to every futures trader tired of prop firm gimmicks.”</blockquote>
                    <span className="lvf-s07-person">
                      <span className="lvf-s07-avatar"><img className="lvf-s07-avatar-img" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-ece298d0ec.webp" width={22} height={22} loading="lazy" alt /></span>
                      <span className="lvf-s07-person-text">
                        <span className="lvf-s07-name">Samir Farouk</span>
                        <span className="lvf-s07-role">Trader</span>
                      </span>
                    </span>
                  </li>
                  <li className="lvf-s07-tcard lvf-s07-tcard--c">
                    <span className="lvf-s07-stars" role="img" aria-label="Rated 5 out of 5"><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg><svg className="lvf-s07-star" aria-hidden="true" focusable="false"><use href="#lvf-s07-i-star" /></svg></span>
                    <blockquote className="lvf-s07-quote">“Two funded accounts later, this is the only firm I trade with now.”</blockquote>
                    <span className="lvf-s07-person">
                      <span className="lvf-s07-avatar"><img className="lvf-s07-avatar-img" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvlup-ece298d0ec.webp" width={22} height={22} loading="lazy" alt /></span>
                      <span className="lvf-s07-person-text">
                        <span className="lvf-s07-name">Charlotte Byrne</span>
                        <span className="lvf-s07-role">Trader</span>
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <div className="lvf-s07-s08-seam" aria-hidden="true" />
          {/* s08 */}
          <section className="lvf-s08" id="elite" aria-labelledby="lvf-s08-title">
            {/* Verlaufs-Definition fuer die 6 Feature-Icons (grad-blue 143deg) */}
            <svg className="lvf-s08-defs" width={0} height={0} aria-hidden="true" focusable="false">
              <defs>
                <linearGradient id="lvf-s08-ico-grad" x1={0} y1={0} x2="0.6" y2="0.8">
                  <stop offset={0} stopColor="#8cd5ff" />
                  <stop offset={1} stopColor="#12a9ff" />
                </linearGradient>
              </defs>
            </svg>
            {/* Hintergrund-Glow (Naeherung der grossen weichgezeichneten Star-Vektoren) */}
            <span className="lvf-s08-aura" aria-hidden="true" />
            <div className="lvf-container">
              <div className="lvf-s08-inner">
                {/* Hand-Bild (echtes Motiv): Desktop rechts ueber volle Sektionshoehe,
     Mobile oberhalb des Textes (volle Breite, zentriert, Glow dahinter) */}
                <div className="lvf-s08-visual" aria-hidden="true">
                  {/* Messpass 06.08.2026: Motiv als exakter Soll-Ausschnitt (x1063-1760,
       y7528-8384 der Referenz) - Skalierung, Randlicht und Hintergrund-
       Glow stimmen damit 1:1 */}
                  <img className="lvf-s08-visual-img" src="./assets/media/lvlup-hand-soll.png" width={1400} height={1719} alt loading="eager" decoding="async" />
                </div>
                <div className="lvf-s08-copy">
                  <div className="lvf-s08-head">
                    <div className="lvf-s08-head-top">
                      <p className="lvf-s08-kicker"><span className="lvf-s08-kicker-text">Private Circle</span></p>
                      <h2 className="lvf-s08-title" id="lvf-s08-title">Lvlup <span className="lvf-s08-title-hl">Elite</span></h2>
                    </div>
                    <p className="lvf-s08-lead">A dedicated environment for funded traders who demonstrate consistency and sustained results.</p>
                  </div>
                  <ul className="lvf-s08-features">
                    <li className="lvf-s08-feature">
                      <span className="lvf-s08-feature-inner">
                        <svg className="lvf-s08-feature-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                          <circle cx={8} cy={8} r={8} fill="url(#lvf-s08-ico-grad)" />
                          <path fill="none" stroke="#03131f" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" d="M4.7 8.4l2.2 2.2 4.4-4.8" />
                        </svg>
                        <span className="lvf-s08-feature-label">Performance-based <span className="lvf-s08-feature-hl">Membership</span></span>
                      </span>
                    </li>
                    <li className="lvf-s08-feature">
                      <span className="lvf-s08-feature-inner">
                        <svg className="lvf-s08-feature-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                          <circle cx={8} cy={8} r={8} fill="url(#lvf-s08-ico-grad)" />
                          <path fill="none" stroke="#03131f" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" d="M4.7 8.4l2.2 2.2 4.4-4.8" />
                        </svg>
                        <span className="lvf-s08-feature-label"><span className="lvf-s08-feature-hl">Private Funded</span> Trader Circle</span>
                      </span>
                    </li>
                    <li className="lvf-s08-feature">
                      <span className="lvf-s08-feature-inner">
                        <svg className="lvf-s08-feature-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                          <circle cx={8} cy={8} r={8} fill="url(#lvf-s08-ico-grad)" />
                          <path fill="none" stroke="#03131f" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" d="M4.7 8.4l2.2 2.2 4.4-4.8" />
                        </svg>
                        <span className="lvf-s08-feature-label">Direct Exchange With <span className="lvf-s08-feature-hl">Lvlup</span></span>
                      </span>
                    </li>
                    <li className="lvf-s08-feature">
                      <span className="lvf-s08-feature-inner">
                        <svg className="lvf-s08-feature-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                          <circle cx={8} cy={8} r={8} fill="url(#lvf-s08-ico-grad)" />
                          <path fill="none" stroke="#03131f" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" d="M4.7 8.4l2.2 2.2 4.4-4.8" />
                        </svg>
                        <span className="lvf-s08-feature-label">Exclusive <span className="lvf-s08-feature-hl">Events &amp; Retreats</span></span>
                      </span>
                    </li>
                    <li className="lvf-s08-feature">
                      <span className="lvf-s08-feature-inner">
                        <svg className="lvf-s08-feature-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                          <circle cx={8} cy={8} r={8} fill="url(#lvf-s08-ico-grad)" />
                          <path fill="none" stroke="#03131f" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" d="M4.7 8.4l2.2 2.2 4.4-4.8" />
                        </svg>
                        <span className="lvf-s08-feature-label">Recognition for <span className="lvf-s08-feature-hl">Consistency</span></span>
                      </span>
                    </li>
                    <li className="lvf-s08-feature">
                      <span className="lvf-s08-feature-inner">
                        <svg className="lvf-s08-feature-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                          <circle cx={8} cy={8} r={8} fill="url(#lvf-s08-ico-grad)" />
                          <path fill="none" stroke="#03131f" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" d="M4.7 8.4l2.2 2.2 4.4-4.8" />
                        </svg>
                        <span className="lvf-s08-feature-label">Pass &amp; Payout <span className="lvf-s08-feature-hl">Certificates</span></span>
                      </span>
                    </li>
                  </ul>
                  <div className="lvf-s08-actions">
                    <a className="lvf-s08-cta" href="/elite/">
                      <span className="lvf-s08-cta-ico" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width={18} height={18} aria-hidden="true" focusable="false">
                          <path fill="none" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" d="M7.2 16.8 16.8 7.2M8.6 7.2h8.2v8.2" />
                        </svg>
                      </span>
                      <span className="lvf-s08-cta-label">Discover Lvlup Elite</span>
                    </a>
                    <a className="lvf-s08-cta2" href="#evaluations">Explore Evaluations</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* s09 */}
          <section className="lvf-s09" id="faq" aria-labelledby="lvf-s09-title">
            <div className="lvf-s09-bg" aria-hidden="true" />
            <div className="lvf-container lvf-s09-inner">
              {/* Kopfblock: Kicker-Pill, H2, Subline */}
              <div className="lvf-s09-head">
                <p className="lvf-s09-kicker"><span className="lvf-s09-kicker-text">FAQ’S</span></p>
                <div className="lvf-s09-headtext">
                  <h2 className="lvf-s09-title" id="lvf-s09-title">Frequently Asked <span className="lvf-s09-title-accent">Questions</span></h2>
                  <p className="lvf-s09-sub">Key details before entering an evaluation.</p>
                </div>
              </div>
              {/* Akkordeon */}
              <div className="lvf-s09-list" data-lvf-s09-accordion>
                <div className="lvf-s09-item is-open" data-lvf-s09-item style={{ '--s09Gx': 'var(--s09-glow1-x)', '--s09Gw': '71%' as any }}>
                  <span className="lvf-s09-glow" aria-hidden="true" />
                  <span className="lvf-s09-line lvf-s09-line--a" aria-hidden="true" />
                  <span className="lvf-s09-line lvf-s09-line--b" aria-hidden="true" />
                  <h3 className="lvf-s09-qh">
                    <button className="lvf-s09-q" type="button" id="lvf-s09-q1" aria-expanded="true" aria-controls="lvf-s09-a1">
                      <span className="lvf-s09-qtext">How much can I withdraw?</span>
                      <span className="lvf-s09-btn" aria-hidden="true">
                        <svg className="lvf-s09-ico lvf-s09-ico--plus" viewBox="0 0 18 18" fill="none" focusable="false"><path d="M4.5 9h9M9 4.5v9" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" /></svg>
                        <svg className="lvf-s09-ico lvf-s09-ico--minus" viewBox="0 0 18 18" fill="none" focusable="false"><path d="M3.5 9h11" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" /></svg>
                      </span>
                    </button>
                  </h3>
                  <div className="lvf-s09-panel" id="lvf-s09-a1" role="region" aria-labelledby="lvf-s09-q1">
                    <div className="lvf-s09-panel-in">
                      <div className="lvf-s09-answer">
                        <p>You can request a payout of up to 10% of your account’s starting balance every 14 days.</p>
                        <p>For example, with Lvlup Futures’ maximum allocation of $1,000,000, you may request up to $100,000 every 14 days, subject to the applicable payout rules.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lvf-s09-item" data-lvf-s09-item style={{ '--s09Gx': '60.4%', '--s09Gw': '89%' as any }}>
                  <span className="lvf-s09-glow" aria-hidden="true" />
                  <h3 className="lvf-s09-qh">
                    <button className="lvf-s09-q" type="button" id="lvf-s09-q2" aria-expanded="false" aria-controls="lvf-s09-a2">
                      <span className="lvf-s09-qtext">Which trading platforms are available?</span>
                      <span className="lvf-s09-btn" aria-hidden="true">
                        <svg className="lvf-s09-ico lvf-s09-ico--plus" viewBox="0 0 18 18" fill="none" focusable="false"><path d="M4.5 9h9M9 4.5v9" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" /></svg>
                        <svg className="lvf-s09-ico lvf-s09-ico--minus" viewBox="0 0 18 18" fill="none" focusable="false"><path d="M3.5 9h11" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" /></svg>
                      </span>
                    </button>
                  </h3>
                  <div className="lvf-s09-panel" id="lvf-s09-a2" role="region" aria-labelledby="lvf-s09-q2">
                    <div className="lvf-s09-panel-in">
                      <div className="lvf-s09-answer">
                        <p>Lvlup Futures currently supports:</p>
                        <p>DXFutures</p>
                        <p>Volumetrica</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lvf-s09-item" data-lvf-s09-item style={{ '--s09Gx': '68.3%', '--s09Gw': '73%' as any }}>
                  <span className="lvf-s09-glow" aria-hidden="true" />
                  <h3 className="lvf-s09-qh">
                    <button className="lvf-s09-q" type="button" id="lvf-s09-q3" aria-expanded="false" aria-controls="lvf-s09-a3">
                      <span className="lvf-s09-qtext">Which countries are restricted?</span>
                      <span className="lvf-s09-btn" aria-hidden="true">
                        <svg className="lvf-s09-ico lvf-s09-ico--plus" viewBox="0 0 18 18" fill="none" focusable="false"><path d="M4.5 9h9M9 4.5v9" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" /></svg>
                        <svg className="lvf-s09-ico lvf-s09-ico--minus" viewBox="0 0 18 18" fill="none" focusable="false"><path d="M3.5 9h11" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" /></svg>
                      </span>
                    </button>
                  </h3>
                  <div className="lvf-s09-panel" id="lvf-s09-a3" role="region" aria-labelledby="lvf-s09-q3">
                    <div className="lvf-s09-panel-in">
                      <div className="lvf-s09-answer">
                        <p>Lvlup Futures is currently unavailable to residents of:</p>
                        <p>Pakistan, Russia, Cuba, Sudan, Somalia, Iran, Lebanon, Syria, Libya, and Vietnam.</p>
                        <p>This list may change based on compliance, payment-provider, and regulatory requirements. Traders should check the latest eligibility information before purchasing an evaluation.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lvf-s09-item" data-lvf-s09-item style={{ '--s09Gx': '74.4%', '--s09Gw': '61%' as any }}>
                  <span className="lvf-s09-glow" aria-hidden="true" />
                  <h3 className="lvf-s09-qh">
                    <button className="lvf-s09-q" type="button" id="lvf-s09-q4" aria-expanded="false" aria-controls="lvf-s09-a4">
                      <span className="lvf-s09-qtext">Is there a daily loss limit?</span>
                      <span className="lvf-s09-btn" aria-hidden="true">
                        <svg className="lvf-s09-ico lvf-s09-ico--plus" viewBox="0 0 18 18" fill="none" focusable="false"><path d="M4.5 9h9M9 4.5v9" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" /></svg>
                        <svg className="lvf-s09-ico lvf-s09-ico--minus" viewBox="0 0 18 18" fill="none" focusable="false"><path d="M3.5 9h11" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" /></svg>
                      </span>
                    </button>
                  </h3>
                  <div className="lvf-s09-panel" id="lvf-s09-a4" role="region" aria-labelledby="lvf-s09-q4">
                    <div className="lvf-s09-panel-in">
                      <div className="lvf-s09-answer">
                        <p>No. Lvlup Futures does not apply a daily loss limit.</p>
                        <p>Traders must still remain within the account’s overall drawdown and other applicable risk rules.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lvf-s09-item" data-lvf-s09-item style={{ '--s09Gx': '79.7%', '--s09Gw': '51%' as any }}>
                  <span className="lvf-s09-glow" aria-hidden="true" />
                  <h3 className="lvf-s09-qh">
                    <button className="lvf-s09-q" type="button" id="lvf-s09-q5" aria-expanded="false" aria-controls="lvf-s09-a5">
                      <span className="lvf-s09-qtext">What is KYC, and which provider does Lvlup Futures use?</span>
                      <span className="lvf-s09-btn" aria-hidden="true">
                        <svg className="lvf-s09-ico lvf-s09-ico--plus" viewBox="0 0 18 18" fill="none" focusable="false"><path d="M4.5 9h9M9 4.5v9" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" /></svg>
                        <svg className="lvf-s09-ico lvf-s09-ico--minus" viewBox="0 0 18 18" fill="none" focusable="false"><path d="M3.5 9h11" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" /></svg>
                      </span>
                    </button>
                  </h3>
                  <div className="lvf-s09-panel" id="lvf-s09-a5" role="region" aria-labelledby="lvf-s09-q5">
                    <div className="lvf-s09-panel-in">
                      <div className="lvf-s09-answer">
                        <p>KYC stands for Know Your Customer. It is an identity-verification process used to confirm that an account belongs to the correct person.</p>
                        <p>After passing the evaluation, traders must complete identity verification through Sumsub before their funded account can be activated.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lvf-s09-item" data-lvf-s09-item style={{ '--s09Gx': '79.7%', '--s09Gw': '51%' as any }}>
                  <span className="lvf-s09-glow" aria-hidden="true" />
                  <h3 className="lvf-s09-qh">
                    <button className="lvf-s09-q" type="button" id="lvf-s09-q6" aria-expanded="false" aria-controls="lvf-s09-a6">
                      <span className="lvf-s09-qtext">Is the evaluation billed monthly?</span>
                      <span className="lvf-s09-btn" aria-hidden="true">
                        <svg className="lvf-s09-ico lvf-s09-ico--plus" viewBox="0 0 18 18" fill="none" focusable="false"><path d="M4.5 9h9M9 4.5v9" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" /></svg>
                        <svg className="lvf-s09-ico lvf-s09-ico--minus" viewBox="0 0 18 18" fill="none" focusable="false"><path d="M3.5 9h11" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" /></svg>
                      </span>
                    </button>
                  </h3>
                  <div className="lvf-s09-panel" id="lvf-s09-a6" role="region" aria-labelledby="lvf-s09-q6">
                    <div className="lvf-s09-panel-in">
                      <div className="lvf-s09-answer">
                        <p>That is your choice. Every evaluation can be paid as a monthly plan or as a single one-time payment. The trading rules, the platforms and the 80% profit split are identical either way.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* CTAs */}
              <div className="lvf-s09-cta">
                <button className="lvf-s09-pill" type="button" data-lvf-open="conditions">
                  <svg className="lvf-s09-pill-ico" viewBox="0 0 12 13" fill="none" aria-hidden="true" focusable="false">
                    <defs>
                      <linearGradient id="lvf-s09-grad-rules" x1={6} y1={0} x2={6} y2={13} gradientUnits="userSpaceOnUse">
                        <stop stopColor="#87d3ff" />
                        <stop offset={1} stopColor="#14a6fa" />
                      </linearGradient>
                    </defs>
                    <path fill="url(#lvf-s09-grad-rules)" fillRule="evenodd" clipRule="evenodd" d="M1.8 0h4.9L12 5.1v6.1c0 1-.8 1.8-1.8 1.8H1.8C.8 13 0 12.2 0 11.2V1.8C0 .8.8 0 1.8 0Zm.8 6.9h6.8v1.2H2.6V6.9Zm4.6 2.6H2.6v1.2h4.6V9.5Z" />
                  </svg>
                  <span className="lvf-s09-pill-text">View Rules Summary</span>
                </button>
                <a className="lvf-s09-link" href="/rules">Open Full Trading Rules →</a>
              </div>
            </div>
          </section>
          {/* s10 */}
          <section className="lvf-s10" id="final-cta" style={{ paddingTop: 40, paddingBottom: 40 }}>
            <div className="lvf-container lvf-s10-container" style={{ maxWidth: 1152, margin: '0 auto', width: '100%', padding: '0 1rem' }}>
              <div style={{ position: 'relative', width: '100%' }}>
                <img src="assets/media/CTA_frame.png" alt="Choose Your Evaluation - Build Toward $1M" style={{ width: '100%', height: 'auto', objectFit: 'contain', borderRadius: 40, display: 'block', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }} />
                {/* Transparent functional links mapped over the baked-in image buttons */}
                <a href="#evaluations" aria-label="Choose Your Evaluation" style={{ position: 'absolute', left: '25%', top: '65%', width: '24%', height: '25%', zIndex: 10, display: 'block' }} />
                <a href="/rules" aria-label="View the Rules" style={{ position: 'absolute', left: '51%', top: '65%', width: '24%', height: '25%', zIndex: 10, display: 'block' }} />
              </div>
            </div>
          </section>
          <style dangerouslySetInnerHTML={{ __html: "\n.lvf-s11-legallinks .lvf-s11-note{display:flex;align-items:center;justify-content:center;min-height:44px;font-size:11px;font-weight:400;line-height:15px;color:#fff;white-space:nowrap;cursor:default}\n@media (min-width:768px){.lvf-s11-legallinks .lvf-s11-note{font-size:13px}}\n@media (min-width:1024px){.lvf-s11-legallinks .lvf-s11-note{min-height:38px;padding-block:8px;font-size:15px;line-height:21px}}\n.lvf-s11-social a:not([href]):not([tabindex]){color:#f2faff}\n@media (min-width:1024px){.lvf-s11-social a:not([href]):not([tabindex]){color:#8ccdef}}\n.lvf-s11-social a:not([href]):not([tabindex]):hover{transform:none}\n.lvf-s11-nl-discord:not([href]):not([tabindex]):hover{transform:none;filter:none}\n" }} />

        </div>
        {/* Homepage QA: landing newsletter popup with a deliberately local-only form.
     The provided WordPress forms endpoint currently returns 404, so the UI does
     not claim that an email was stored until a working endpoint is supplied. */}
        <div className="lvf-page lvf-landing-modal" data-lvf-landing-modal hidden>
          <div className="lvf-landing-backdrop" data-lvf-landing-close />
          <section className="lvf-landing-dialog" role="dialog" aria-modal="true" aria-labelledby="lvf-landing-title" aria-describedby="lvf-landing-copy">
            <button className="lvf-landing-close" type="button" data-lvf-landing-close aria-label="Close newsletter signup">×</button>
            <img className="lvf-landing-trophy" src="assets/media/newsletter-popup-trophy.svg" width={88} height={88} alt />
            <h2 className="lvf-landing-title" id="lvf-landing-title">Join the List. Win a <span className="lvf-landing-hl">$150K</span><br />Starter Account</h2>
            <p className="lvf-landing-copy" id="lvf-landing-copy">Get limited offers, evaluation updates and payout news, plus a<br />chance to win a <strong className="lvf-landing-hl">$150K Starter Account.</strong></p>
            <form className="lvf-landing-form" action="#" method="post" data-lvf-landing-form>
              <label className="lvf-sr" htmlFor="lvf-landing-email">Enter your email address</label>
              <div className="lvf-landing-field">
                <input className="lvf-landing-input" id="lvf-landing-email" type="email" name="email" placeholder="Enter your email address" autoComplete="email" required />
                <button className="lvf-landing-submit" type="submit">
                  <span className="lvf-landing-submit-icon" aria-hidden="true"><img src="assets/media/newsletter-popup-arrow.svg" width={20} height={20} alt /></span>
                  <span>Join &amp; Enter</span>
                </button>
              </div>
              <p className="lvf-landing-status" data-lvf-landing-status role="status" aria-live="polite" />
            </form>
            <p className="lvf-landing-note">Get important Lvlup updates delivered directly to your inbox.</p>
            <p className="lvf-landing-terms">*Giveaway eligibility and terms apply. Unsubscribe at any time.</p>
          </section>
        </div>
        {/* Homepage QA: videos play on the homepage; each card still links to its own
     indexable watch page when JavaScript is unavailable or opened in a new tab. */}
        <div className="lvf-page lvf-video-modal" data-lvf-video-modal hidden>
          <div className="lvf-video-backdrop" data-lvf-video-close />
          <section className="lvf-video-dialog" role="dialog" aria-modal="true" aria-labelledby="lvf-video-modal-title">
            <button className="lvf-video-close" type="button" data-lvf-video-close aria-label="Close video">×</button>
            <h2 className="lvf-video-modal-title" id="lvf-video-modal-title" data-lvf-video-modal-title>Lvlup Futures video</h2>
            <div className="lvf-video-frame">
              <iframe data-lvf-video-frame title="Lvlup Futures video" src="about:blank" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            </div>
            <a className="lvf-video-watch-link" data-lvf-video-watch-link href="video-jack-payout.html">Open the dedicated watch page →</a>
          </section>
        </div>
      </div>
      <Script src="/assets/js/live/lvlup-home.js" strategy="lazyOnload" />
    </>
  );
}

