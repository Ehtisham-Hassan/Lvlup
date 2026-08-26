// @ts-nocheck
import Script from 'next/script';

export default function Page() {
  return (
    <>
      <link rel="stylesheet" href="/assets/css/live/post-8049.css" />
      <link rel="stylesheet" href="/assets/css/live/evaluation.css" />
      <div className="lvf-page">
        {/* e1-hero */}
        <section className="lvev-e1" id="hero">
          {/* Die gemeinsame Kopfleiste (Banner + Nav, Frame y 0..122) liegt als eigenes
 Fragment UEBER dieser Sektion. Deshalb beginnt e1 bei Frame y=0 und die
 Hintergrund-Glows reichen hinter die Kopfleiste. */}
          <svg className="lvev-e1-defs" width={0} height={0} aria-hidden="true" focusable="false">
            <defs>
              <linearGradient id="lvev-e1-ig" x1={0} y1={0} x2={0} y2={1}>
                <stop offset={0} stopColor="#8cd5ff" />
                <stop offset={1} stopColor="#12a9ff" />
              </linearGradient>
            </defs>
          </svg>
          {/* Hintergrund: Figma fuellt das Band mit der blauen Glow-Textur (STRETCH,
 leicht weichgezeichnet). Unten laeuft sie per Maske weich in den
 Seitengrund aus - keine harte Kante zur naechsten Sektion. */}
          <div className="lvev-e1-bg" aria-hidden="true" />
          {/* Ersatz fuer die weichgezeichneten "Star"-Vektoren oben (blauer Umgebungsschein) */}
          <div className="lvev-e1-glow" aria-hidden="true" />
          {/* Zwei grosse Glas-Panel-Vektoren links/rechts (weisser Schimmer, 10% Deckkraft) */}
          <div className="lvev-e1-panel lvev-e1-panel--l" aria-hidden="true" />
          <div className="lvev-e1-panel lvev-e1-panel--r" aria-hidden="true" />
          {/* Vier frei schwebende Stat-Chips um die Headline (Desktop: absolut nach
 Figma-Koordinaten, Tablet/Mobile: als Grid unter den CTAs) */}
          <ul className="lvev-e1-chips">
            <li className="lvev-e1-chip lvev-e1-chip--split">
              <span className="lvev-e1-chip-top">
                <svg className="lvev-e1-chip-ico lvev-e1-chip-ico--split" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" fill="url(#lvev-e1-ig)" aria-hidden="true" focusable="false">
                  <circle cx="3.4" cy="4.2" r="1.7" />
                  <path d="M2.5 9.6 9.4 4.5l3.5 3.4L20.8 3" fill="none" stroke="url(#lvev-e1-ig)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2.6 20.2c-.9 0-1.4-1-.8-1.7l6-7.4c.4-.5 1.2-.5 1.6 0l3 3.6 3.8-4.9c.4-.5 1.2-.5 1.6 0l4.4 5.6v3.3c0 .8-.7 1.5-1.5 1.5H2.6Z" />
                </svg>
                <span className="lvev-e1-chip-num">100%</span>
              </span>
              <span className="lvev-e1-chip-label">Profit Split</span>
            </li>
            <li className="lvev-e1-chip lvev-e1-chip--funding">
              <span className="lvev-e1-chip-top">
                <svg className="lvev-e1-chip-ico lvev-e1-chip-ico--funding" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" fill="url(#lvev-e1-ig)" aria-hidden="true" focusable="false">
                  <path d="M8.8 1.6c.7 3.9 2.7 5.9 6.6 6.6-3.9.7-5.9 2.7-6.6 6.6-.7-3.9-2.7-5.9-6.6-6.6 3.9-.7 5.9-2.7 6.6-6.6Z" />
                  <path d="M18.6 3.2c.35 1.95 1.3 2.9 3.25 3.25-1.95.35-2.9 1.3-3.25 3.25-.35-1.95-1.3-2.9-3.25-3.25 1.95-.35 2.9-1.3 3.25-3.25Z" />
                  <path d="M17.4 14c.3 1.65 1.1 2.45 2.75 2.75-1.65.3-2.45 1.1-2.75 2.75-.3-1.65-1.1-2.45-2.75-2.75 1.65-.3 2.45-1.1 2.75-2.75Z" />
                </svg>
                <span className="lvev-e1-chip-num">$1M</span>
              </span>
              <span className="lvev-e1-chip-label">Max Funding</span>
            </li>
            {/* <li className="lvev-e1-chip lvev-e1-chip--drawdown">
              <span className="lvev-e1-chip-top">
                <svg className="lvev-e1-chip-ico lvev-e1-chip-ico--drawdown" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" fill="url(#lvev-e1-ig)" aria-hidden="true" focusable="false">
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.2 2.2h11.6a4 4 0 0 1 4 4v11.6a4 4 0 0 1-4 4H6.2a4 4 0 0 1-4-4V6.2a4 4 0 0 1 4-4Zm.2 3.6a1.6 1.6 0 0 0-1.6 1.6v3.4c0 .9.7 1.6 1.6 1.6h11.2c.9 0 1.6-.7 1.6-1.6V7.4a1.6 1.6 0 0 0-1.6-1.6H6.4Z" />
                  <path d="M6.3 9.3h2.1l1.2-1.5 1.5 2.7 1.1-1.2h5.5" fill="none" stroke="url(#lvev-e1-ig)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="6.9" cy="17.2" r="1.25" />
                  <circle cx="10.3" cy="17.2" r="1.25" />
                </svg>
                <span className="lvev-e1-chip-num">5%</span>
              </span>
              <span className="lvev-e1-chip-label">Drawdown</span>
            </li> */}
            <li className="lvev-e1-chip lvev-e1-chip--payout">
              <span className="lvev-e1-chip-top">
                <svg className="lvev-e1-chip-ico lvev-e1-chip-ico--payout" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" fill="url(#lvev-e1-ig)" aria-hidden="true" focusable="false">
                  <path d="M3 3h7v7H3V3zm11 0h7v7h-7V3zM3 14h7v7H3v-7zm13 0h3v-2h-3v-3h-2v3h-3v2h3v3h2v-3z" />
                </svg>
                <span className="lvev-e1-chip-num">Five</span>
              </span>
              <span className="lvev-e1-chip-label">Min Trading Day</span>
            </li>
            <li className="lvev-e1-chip lvev-e1-chip--support">
              <span className="lvev-e1-chip-top">
                <svg className="lvev-e1-chip-ico lvev-e1-chip-ico--support" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" fill="url(#lvev-e1-ig)" aria-hidden="true" focusable="false">
                  <path d="M12 2C6.48 2 2 6.48 2 12v6c0 1.1.9 2 2 2h2v-8H4v-0.65C4 7.29 7.58 4 12 4s8 3.29 8 7.35V12h-2v8h2c1.1 0 2-.9 2-2v-6c0-5.52-4.48-10-10-10Z" />
                </svg>
                <span className="lvev-e1-chip-num">24/7</span>
              </span>
              <span className="lvev-e1-chip-label">Live Support</span>
            </li>
            {/* <li className="lvev-e1-chip lvev-e1-chip--days">
              <span className="lvev-e1-chip-top">
                <svg className="lvev-e1-chip-ico lvev-e1-chip-ico--days" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" fill="url(#lvev-e1-ig)" aria-hidden="true" focusable="false">
                  <path d="M3 3h7v7H3V3zm11 0h7v7h-7V3zM3 14h7v7H3v-7zm13 0h3v-2h-3v-3h-2v3h-3v2h3v3h2v-3z" />
                </svg>
                <span className="lvev-e1-chip-num lvev-e1-chip-num--five">Five</span>
              </span>
              <span className="lvev-e1-chip-label">Min Trading Day</span>
            </li> */}
          </ul>
          <div className="lvf-container lvev-e1-hero">
            <p className="lvev-e1-badge">
              <span className="lvev-e1-badge-dot" aria-hidden="true" />
              <span className="lvev-e1-badge-text">Evaluations</span>
            </p>
            {/* Leerzeichen vor dem <br> ist Pflicht: wird der Umbruch auf Mobile
   ausgeblendet, darf kein Wort zusammenruecken. */}
            <h1 className="lvev-e1-title"><span className="lvev-e1-title-l1">Select the Structure That </span><br className="lvev-e1-title-br" /><span className="lvev-e1-title-hl " style={{ fontWeight: 600 }}>Fits Your Trading</span></h1>
            <p className="lvev-e1-sub">Choose an account size, review the conditions, configure optional enhancements, and continue securely to the Lvlup dashboard.</p>
            <div className="lvev-e1-cta">
              <a className="lvev-e1-btn lvev-e1-btn--primary" href="#pricing">
                <span className="lvev-e1-btn-tile" aria-hidden="true">
                  <svg className="lvev-e1-btn-ico" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" focusable="false">
                    <path d="M7.2 16.8 16.8 7.2" />
                    <path d="M9 7.2h7.8V15" />
                  </svg>
                </span>
                <span className="lvev-e1-btn-label">View Account Options</span>
              </a>
              <a className="lvev-e1-btn lvev-e1-btn--ghost" href="/rules" style={{ padding: '12px 24px', borderRadius: '14px', background: 'rgba(0,0,0,0.2)', boxShadow: 'inset 4px 6px 12px rgba(0,0,0,0.8), inset -2px -4px 12px rgba(0,164,255,0.8), 0 1px 2px rgba(255,255,255,0.1)', color: '#ffffff', border: 'none' }}>Review Trading Rules</a>
            </div>
          </div>
          {/* R3: Marquee-Band am Hero-Fuss. Referenz: zwei versetzte Laufzeilen,
 Spur A CSS y=684..695 auf dem hellen Bogen, Spur B y=705..710 auf
 Schwarz, Wiederholabstand 88 px (Autokorrelation der Referenz).
 Rein dekorativ, deshalb aria-hidden. */}
          <div className="lvev-r3-marquee" aria-hidden="true">
            <div className="lvev-r3-marquee-track lvev-r3-marquee-track--a"><span className="lvev-r3-marquee-item">Lvlup Futures</span><span className="lvev-r3-marquee-item">Lvlup Futures</span><span className="lvev-r3-marquee-item">Lvlup Futures</span><span className="lvev-r3-marquee-item">Lvlup Futures</span><span className="lvev-r3-marquee-item">Lvlup Futures</span><span className="lvev-r3-marquee-item">Lvlup Futures</span><span className="lvev-r3-marquee-item">Lvlup Futures</span><span className="lvev-r3-marquee-item">Lvlup Futures</span><span className="lvev-r3-marquee-item">Lvlup Futures</span><span className="lvev-r3-marquee-item">Lvlup Futures</span><span className="lvev-r3-marquee-item">Lvlup Futures</span><span className="lvev-r3-marquee-item">Lvlup Futures</span><span className="lvev-r3-marquee-item">Lvlup Futures</span><span className="lvev-r3-marquee-item">Lvlup Futures</span><span className="lvev-r3-marquee-item">Lvlup Futures</span><span className="lvev-r3-marquee-item">Lvlup Futures</span><span className="lvev-r3-marquee-item">Lvlup Futures</span><span className="lvev-r3-marquee-item">Lvlup Futures</span><span className="lvev-r3-marquee-item">Lvlup Futures</span><span className="lvev-r3-marquee-item">Lvlup Futures</span><span className="lvev-r3-marquee-item">Lvlup Futures</span><span className="lvev-r3-marquee-item">Lvlup Futures</span></div>
            <div className="lvev-r3-marquee-track lvev-r3-marquee-track--b"><span className="lvev-r3-marquee-item">Lvlup Futures</span><span className="lvev-r3-marquee-item">Lvlup Futures</span><span className="lvev-r3-marquee-item">Lvlup Futures</span><span className="lvev-r3-marquee-item">Lvlup Futures</span><span className="lvev-r3-marquee-item">Lvlup Futures</span><span className="lvev-r3-marquee-item">Lvlup Futures</span><span className="lvev-r3-marquee-item">Lvlup Futures</span><span className="lvev-r3-marquee-item">Lvlup Futures</span><span className="lvev-r3-marquee-item">Lvlup Futures</span><span className="lvev-r3-marquee-item">Lvlup Futures</span><span className="lvev-r3-marquee-item">Lvlup Futures</span><span className="lvev-r3-marquee-item">Lvlup Futures</span><span className="lvev-r3-marquee-item">Lvlup Futures</span><span className="lvev-r3-marquee-item">Lvlup Futures</span><span className="lvev-r3-marquee-item">Lvlup Futures</span><span className="lvev-r3-marquee-item">Lvlup Futures</span><span className="lvev-r3-marquee-item">Lvlup Futures</span><span className="lvev-r3-marquee-item">Lvlup Futures</span><span className="lvev-r3-marquee-item">Lvlup Futures</span><span className="lvev-r3-marquee-item">Lvlup Futures</span><span className="lvev-r3-marquee-item">Lvlup Futures</span><span className="lvev-r3-marquee-item">Lvlup Futures</span><span className="lvev-r3-marquee-item">Lvlup Futures</span></div>
          </div>
          {/* Kicker-Pille am Bandende (Figma y=808), leitet zur Planauswahl weiter */}
          <p className="lvev-e1-pill"><span className="lvev-e1-pill-text">Select Your Plan</span></p>
        </section>
        {/* e2-pricing */}
        <section className="lvev-e2" id="pricing" aria-labelledby="lvev-e2-title">
          {/* Deko-Layer: Blau-Glows und Glas-Rauten aus dem Figma-Band (rein dekorativ) */}
          <span className="lvev-e2-glow lvev-e2-glow--l" aria-hidden="true" />
          <span className="lvev-e2-glow lvev-e2-glow--r" aria-hidden="true" />
          <span className="lvev-e2-shard lvev-e2-shard--l" aria-hidden="true" />
          <span className="lvev-e2-shard lvev-e2-shard--r" aria-hidden="true" />
          {/* Gemeinsame SVG-Verlaeufe fuer alle Icons dieser Sektion */}
          <svg className="lvev-e2-defs" width={0} height={0} aria-hidden="true" focusable="false"><defs>
            <linearGradient id="lvev-e2-g-soft" x1={0} y1={0} x2={0} y2={1}><stop offset={0} stopColor="#afd4e8" /><stop offset={1} stopColor="#72bee8" /></linearGradient>
            <linearGradient id="lvev-e2-g-blue" x1={0} y1={0} x2={0} y2={1}><stop offset={0} stopColor="#8cd5ff" /><stop offset={1} stopColor="#12a9ff" /></linearGradient>
            <linearGradient id="lvev-e2-g-white" x1={0} y1={0} x2={0} y2={1}><stop offset={0} stopColor="#ffffff" /><stop offset={1} stopColor="#dcf1ff" /></linearGradient>
          </defs></svg>
          <div className="lvf-container lvev-e2-inner">
            <div className="lvev-e2-head">
              <h2 className="lvev-e2-title" style={{ paddingTop: '10px' }} id="lvev-e2-title">Choose Your <span className="lvev-e2-title-hl" style={{ fontWeight: 600 }}>Evaluation</span></h2>
              <p className="lvev-e2-sub">Select an account size to configure your evaluation.</p>
            </div>
            <div className="lvev-e2-toggle" role="tablist" aria-label="Account type">
              <button className="lvev-e2-tab is-active" type="button" role="tab" id="lvev-e2-tab-lvlup" aria-selected="true" aria-controls="lvev-e2-panel-lvlup" data-lvev-e2-plan="lvlup">
                <span className="lvev-e2-tab-t">Lvlup Accounts</span>
              </button>
              <button className="lvev-e2-tab" type="button" role="tab" id="lvev-e2-tab-starter" aria-selected="true" aria-controls="lvev-e2-panel-starter" data-lvev-e2-plan="starter">
                <span className="lvev-e2-tab-t">Starter Accounts</span>
              </button>
            </div>
            <div className="lvev-e2-cards" id="lvev-e2-panel-lvlup" role="tabpanel" aria-labelledby="lvev-e2-tab-lvlup" data-lvev-e2-panel="lvlup">
              <article className="lvev-e2-card" data-lvev-e2-account="25k">
                <div className="lvev-e2-card-in">
                  <span className="lvev-e2-card-glow" aria-hidden="true" />
                  <div className="lvev-e2-card-head">
                    <p className="lvev-e2-card-kind">Lvlup Evaluation</p>
                    <p className="lvev-e2-card-size">$25,000</p>
                  </div>
                  <div className="lvev-e2-plan">
                    <button className="lvev-e2-chip" type="button" aria-pressed="false" data-lvev-e2-select="25k">
                      <span className="lvev-e2-chip-dot" aria-hidden="true" />
                      <span className="lvev-e2-chip-t">Select</span>
                    </button>
                    <div className="lvev-e2-opt">
                      <p className="lvev-e2-opt-price">$194</p>
                      <p className="lvev-e2-opt-note">Option 2: One-Time Fee</p>
                    </div>
                    <div className="lvev-e2-opt">
                      <p className="lvev-e2-opt-price">$129/mo</p>
                      <p className="lvev-e2-opt-note">Option 1: Monthly Subscription</p>
                    </div>
                  </div>
                  <p className="lvev-e2-sep"><span className="lvev-e2-sep-l" aria-hidden="true" /><span className="lvev-e2-sep-t">What’s Included</span><span className="lvev-e2-sep-l" aria-hidden="true" /></p>
                  <ul className="lvev-e2-specs">
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M1.6 1.4a.7.7 0 0 1 .7.7v10.1c0 .3.2.5.5.5h11.6a.7.7 0 0 1 0 1.4H2.8A1.9 1.9 0 0 1 .9 12.2V2.1a.7.7 0 0 1 .7-.7Z" /><path fill="url(#lvev-e2-g-soft)" d="M14.4 4.1a.6.6 0 0 1 .6.6v7.2H4.1V8.4l2.5-2.5a.9.9 0 0 1 1.2 0l1.5 1.5 4.4-3.1a.6.6 0 0 1 .7-.2Z" /></svg>
                      <span className="lvev-e2-srow-k">Profit Target</span>
                      <span className="lvev-e2-srow-v">$1,500</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M2.6 2.2h10.8c.9 0 1.6.7 1.6 1.6v6.3c0 .9-.7 1.6-1.6 1.6H2.6c-.9 0-1.6-.7-1.6-1.6V3.8c0-.9.7-1.6 1.6-1.6Zm.6 4.5a.6.6 0 0 0 0 1.3h2.3c.2 0 .4-.1.5-.3l.6-1 1.2 2.4c.2.5.9.5 1.1 0l1-2 .4.7c.1.2.3.3.5.3h2.1a.6.6 0 0 0 0-1.3h-1.7l-.9-1.5a.6.6 0 0 0-1 0L8.3 7.4 7.1 5a.6.6 0 0 0-1 0l-1 1.7H3.2Z" /><path fill="url(#lvev-e2-g-soft)" d="M5.6 12.5h4.8l.4 1.5a.5.5 0 0 1-.5.6H5.7a.5.5 0 0 1-.5-.6l.4-1.5Z" /></svg>
                      <span className="lvev-e2-srow-k">EOD Trailing Drawdown</span>
                      <span className="lvev-e2-srow-v">$1,250</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M4.2 1.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V2.4c0-.6-.5-1.1-1.1-1.1Zm0 5.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V7.7c0-.6-.5-1.1-1.1-1.1Zm5.3-5.3H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V2.4c0-.6-.5-1.1-1.1-1.1Zm0 5.3H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V7.7c0-.6-.5-1.1-1.1-1.1Zm-5.3 5.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V13c0-.6-.5-1.1-1.1-1.1Zm5.3 0H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V13c0-.6-.5-1.1-1.1-1.1Zm4.2-9.4a.6.6 0 0 1 .6.6v2.2h2.2a.6.6 0 0 1 0 1.2h-2.2v2.2a.6.6 0 0 1-1.2 0V6.5h-2.2a.6.6 0 0 1 0-1.2h2.2V3.1a.6.6 0 0 1 .6-.6Z" /></svg>
                      <span className="lvev-e2-srow-k">Min. Trading Days</span>
                      <span className="lvev-e2-srow-v">5 days</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M6.1.9a.5.5 0 0 1 .5.4l.7 2.6 2.6.7a.5.5 0 0 1 0 1l-2.6.7-.7 2.6a.5.5 0 0 1-1 0l-.7-2.6-2.6-.7a.5.5 0 0 1 0-1l2.6-.7.7-2.6a.5.5 0 0 1 .5-.4Zm6.4 6.4a.5.5 0 0 1 .5.4l.4 1.4 1.4.4a.5.5 0 0 1 0 1l-1.4.4-.4 1.4a.5.5 0 0 1-1 0l-.4-1.4-1.4-.4a.5.5 0 0 1 0-1l1.4-.4.4-1.4a.5.5 0 0 1 .5-.4Zm-6 4.6a.5.5 0 0 1 .5.3l.3 1 1 .3a.5.5 0 0 1 0 1l-1 .3-.3 1a.5.5 0 0 1-1 0l-.3-1-1-.3a.5.5 0 0 1 0-1l1-.3.3-1a.5.5 0 0 1 .5-.3Z" /></svg>
                      <span className="lvev-e2-srow-k">Max Contracts</span>
                      <span className="lvev-e2-srow-v">1 Mini</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M2.2 3.4a1.2 1.2 0 0 1 1.2-1.2h3a1.2 1.2 0 0 1 1.2 1.2v9.2a1.2 1.2 0 0 1-1.2 1.2h-3a1.2 1.2 0 0 1-1.2-1.2V3.4Zm7.2 0a1.2 1.2 0 0 1 1.2-1.2h2a1.2 1.2 0 0 1 1.2 1.2v3a1.2 1.2 0 0 1-1.2 1.2h-2a1.2 1.2 0 0 1-1.2-1.2v-3Zm0 5.6a1.2 1.2 0 0 1 1.2-1.2h2a1.2 1.2 0 0 1 1.2 1.2v3.6a1.2 1.2 0 0 1-1.2 1.2h-2a1.2 1.2 0 0 1-1.2-1.2V9Z" /></svg>
                      <span className="lvev-e2-srow-k">Profit Split</span>
                      <span className="lvev-e2-srow-v">80%</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" fillRule="evenodd" d="M1.5 1.6a.8.8 0 0 1 1.1-.1l1.9 1.5-1 1.3-1.9-1.5a.8.8 0 0 1-.1-1.2Zm13 0a.8.8 0 0 1-.1 1.2l-1.9 1.5-1-1.3 1.9-1.5a.8.8 0 0 1 1.1.1ZM8 3.6a5.9 5.9 0 1 0 0 11.8A5.9 5.9 0 0 0 8 3.6Zm-.65 2.5a.65.65 0 0 1 1.3 0v3.08l2.03 2.03a.65.65 0 1 1-.92.92l-2.22-2.22a.65.65 0 0 1-.19-.46V6.1Z" /></svg>
                      <span className="lvev-e2-srow-k">Payout Cycle</span>
                      <span className="lvev-e2-srow-v">Every 14 days</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" fillRule="evenodd" d="M8 2.4a3 3 0 0 0-3 3v1.4H4a1.1 1.1 0 0 0-1.1 1.1v5a1.1 1.1 0 0 0 1.1 1.1h8a1.1 1.1 0 0 0 1.1-1.1v-5A1.1 1.1 0 0 0 12 6.8h-1V5.4a3 3 0 0 0-3-3Zm0 1.4a1.6 1.6 0 0 1 1.6 1.6v1.4H6.4V5.4A1.6 1.6 0 0 1 8 3.8Zm0 5.1a1.05 1.05 0 0 1 .55 1.95l.18 1.05a.73.73 0 0 1-1.46 0l.18-1.05A1.05 1.05 0 0 1 8 8.9Z" /></svg>
                      <span className="lvev-e2-srow-k">Payout Cap</span>
                      <span className="lvev-e2-srow-v">10% of Balance</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M2 9.6a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v3.2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9.6Zm4.8-2.8a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H7.8a1 1 0 0 1-1-1v-6Zm4.8-2.8a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v8.8a1 1 0 0 1-1 1h-1.4a1 1 0 0 1-1-1V4Z" /></svg>
                      <span className="lvev-e2-srow-k">Consistency Rule</span>
                      <span className="lvev-e2-srow-v">40%</span>
                    </li>
                  </ul>
                  <a className="lvev-e2-cta" href="#configure" data-lvev-e2-cta aria-label="Select the $25,000 Lvlup Evaluation and configure it below">
                    <span className="lvev-e2-cta-t">Select</span>
                  </a>
                  <a className="lvev-e2-card-note" href="https://lvlupfuturesdashboard.propaccount.com/en/challenges/purchase?category=35" target="_blank" rel="noopener">Configure and continue below ↓</a>
                </div>
              </article>
              <article className="lvev-e2-card lvev-e2-card--pop" data-lvev-e2-account="50k">
                <div className="lvev-e2-card-in">
                  <span className="lvev-e2-card-glow" aria-hidden="true" />
                  <div className="lvev-e2-card-head">
                    <p className="lvev-e2-card-kind">Lvlup Evaluation</p>
                    <p className="lvev-e2-card-size">$50,000</p>
                    <span className="lvev-e2-pop"><svg className="lvev-e2-pop-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-white)" d="M8 .9c.3 0 .6.2.8.5l1.8 3.6 4 .6c.7.1 1 .9.5 1.4l-2.9 2.8.7 4c.1.7-.6 1.2-1.2.9L8 12.8l-3.6 1.9c-.6.3-1.3-.2-1.2-.9l.7-4L1 7c-.5-.5-.2-1.3.5-1.4l4-.6L7.2 1.4c.2-.3.5-.5.8-.5Z" /></svg><span className="lvev-e2-pop-t">Most Popular</span></span>
                  </div>
                  <div className="lvev-e2-plan">
                    <button className="lvev-e2-chip is-selected" type="button" aria-pressed="true" data-lvev-e2-select="50k">
                      <span className="lvev-e2-chip-dot" aria-hidden="true" />
                      <span className="lvev-e2-chip-t">Selected</span>
                    </button>
                    <div className="lvev-e2-opt">
                      <p className="lvev-e2-opt-price">$338</p>
                      <p className="lvev-e2-opt-note">Option 2: One-Time Fee</p>
                    </div>
                    <div className="lvev-e2-opt">
                      <p className="lvev-e2-opt-price">$225/mo</p>
                      <p className="lvev-e2-opt-note">Option 1: Monthly Subscription</p>
                    </div>
                  </div>
                  <p className="lvev-e2-sep"><span className="lvev-e2-sep-l" aria-hidden="true" /><span className="lvev-e2-sep-t">What’s Included</span><span className="lvev-e2-sep-l" aria-hidden="true" /></p>
                  <ul className="lvev-e2-specs">
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M1.6 1.4a.7.7 0 0 1 .7.7v10.1c0 .3.2.5.5.5h11.6a.7.7 0 0 1 0 1.4H2.8A1.9 1.9 0 0 1 .9 12.2V2.1a.7.7 0 0 1 .7-.7Z" /><path fill="url(#lvev-e2-g-soft)" d="M14.4 4.1a.6.6 0 0 1 .6.6v7.2H4.1V8.4l2.5-2.5a.9.9 0 0 1 1.2 0l1.5 1.5 4.4-3.1a.6.6 0 0 1 .7-.2Z" /></svg>
                      <span className="lvev-e2-srow-k">Profit Target</span>
                      <span className="lvev-e2-srow-v">$3,000</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M2.6 2.2h10.8c.9 0 1.6.7 1.6 1.6v6.3c0 .9-.7 1.6-1.6 1.6H2.6c-.9 0-1.6-.7-1.6-1.6V3.8c0-.9.7-1.6 1.6-1.6Zm.6 4.5a.6.6 0 0 0 0 1.3h2.3c.2 0 .4-.1.5-.3l.6-1 1.2 2.4c.2.5.9.5 1.1 0l1-2 .4.7c.1.2.3.3.5.3h2.1a.6.6 0 0 0 0-1.3h-1.7l-.9-1.5a.6.6 0 0 0-1 0L8.3 7.4 7.1 5a.6.6 0 0 0-1 0l-1 1.7H3.2Z" /><path fill="url(#lvev-e2-g-soft)" d="M5.6 12.5h4.8l.4 1.5a.5.5 0 0 1-.5.6H5.7a.5.5 0 0 1-.5-.6l.4-1.5Z" /></svg>
                      <span className="lvev-e2-srow-k">EOD Trailing Drawdown</span>
                      <span className="lvev-e2-srow-v">$2,500</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M4.2 1.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V2.4c0-.6-.5-1.1-1.1-1.1Zm0 5.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V7.7c0-.6-.5-1.1-1.1-1.1Zm5.3-5.3H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V2.4c0-.6-.5-1.1-1.1-1.1Zm0 5.3H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V7.7c0-.6-.5-1.1-1.1-1.1Zm-5.3 5.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V13c0-.6-.5-1.1-1.1-1.1Zm5.3 0H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V13c0-.6-.5-1.1-1.1-1.1Zm4.2-9.4a.6.6 0 0 1 .6.6v2.2h2.2a.6.6 0 0 1 0 1.2h-2.2v2.2a.6.6 0 0 1-1.2 0V6.5h-2.2a.6.6 0 0 1 0-1.2h2.2V3.1a.6.6 0 0 1 .6-.6Z" /></svg>
                      <span className="lvev-e2-srow-k">Min. Trading Days</span>
                      <span className="lvev-e2-srow-v">5 days</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M6.1.9a.5.5 0 0 1 .5.4l.7 2.6 2.6.7a.5.5 0 0 1 0 1l-2.6.7-.7 2.6a.5.5 0 0 1-1 0l-.7-2.6-2.6-.7a.5.5 0 0 1 0-1l2.6-.7.7-2.6a.5.5 0 0 1 .5-.4Zm6.4 6.4a.5.5 0 0 1 .5.4l.4 1.4 1.4.4a.5.5 0 0 1 0 1l-1.4.4-.4 1.4a.5.5 0 0 1-1 0l-.4-1.4-1.4-.4a.5.5 0 0 1 0-1l1.4-.4.4-1.4a.5.5 0 0 1 .5-.4Zm-6 4.6a.5.5 0 0 1 .5.3l.3 1 1 .3a.5.5 0 0 1 0 1l-1 .3-.3 1a.5.5 0 0 1-1 0l-.3-1-1-.3a.5.5 0 0 1 0-1l1-.3.3-1a.5.5 0 0 1 .5-.3Z" /></svg>
                      <span className="lvev-e2-srow-k">Max Contracts</span>
                      <span className="lvev-e2-srow-v">3 Mini</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M2.2 3.4a1.2 1.2 0 0 1 1.2-1.2h3a1.2 1.2 0 0 1 1.2 1.2v9.2a1.2 1.2 0 0 1-1.2 1.2h-3a1.2 1.2 0 0 1-1.2-1.2V3.4Zm7.2 0a1.2 1.2 0 0 1 1.2-1.2h2a1.2 1.2 0 0 1 1.2 1.2v3a1.2 1.2 0 0 1-1.2 1.2h-2a1.2 1.2 0 0 1-1.2-1.2v-3Zm0 5.6a1.2 1.2 0 0 1 1.2-1.2h2a1.2 1.2 0 0 1 1.2 1.2v3.6a1.2 1.2 0 0 1-1.2 1.2h-2a1.2 1.2 0 0 1-1.2-1.2V9Z" /></svg>
                      <span className="lvev-e2-srow-k">Profit Split</span>
                      <span className="lvev-e2-srow-v">80%</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" fillRule="evenodd" d="M1.5 1.6a.8.8 0 0 1 1.1-.1l1.9 1.5-1 1.3-1.9-1.5a.8.8 0 0 1-.1-1.2Zm13 0a.8.8 0 0 1-.1 1.2l-1.9 1.5-1-1.3 1.9-1.5a.8.8 0 0 1 1.1.1ZM8 3.6a5.9 5.9 0 1 0 0 11.8A5.9 5.9 0 0 0 8 3.6Zm-.65 2.5a.65.65 0 0 1 1.3 0v3.08l2.03 2.03a.65.65 0 1 1-.92.92l-2.22-2.22a.65.65 0 0 1-.19-.46V6.1Z" /></svg>
                      <span className="lvev-e2-srow-k">Payout Cycle</span>
                      <span className="lvev-e2-srow-v">Every 14 days</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" fillRule="evenodd" d="M8 2.4a3 3 0 0 0-3 3v1.4H4a1.1 1.1 0 0 0-1.1 1.1v5a1.1 1.1 0 0 0 1.1 1.1h8a1.1 1.1 0 0 0 1.1-1.1v-5A1.1 1.1 0 0 0 12 6.8h-1V5.4a3 3 0 0 0-3-3Zm0 1.4a1.6 1.6 0 0 1 1.6 1.6v1.4H6.4V5.4A1.6 1.6 0 0 1 8 3.8Zm0 5.1a1.05 1.05 0 0 1 .55 1.95l.18 1.05a.73.73 0 0 1-1.46 0l.18-1.05A1.05 1.05 0 0 1 8 8.9Z" /></svg>
                      <span className="lvev-e2-srow-k">Payout Cap</span>
                      <span className="lvev-e2-srow-v">10% of Balance</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M2 9.6a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v3.2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9.6Zm4.8-2.8a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H7.8a1 1 0 0 1-1-1v-6Zm4.8-2.8a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v8.8a1 1 0 0 1-1 1h-1.4a1 1 0 0 1-1-1V4Z" /></svg>
                      <span className="lvev-e2-srow-k">Consistency Rule</span>
                      <span className="lvev-e2-srow-v">40%</span>
                    </li>
                  </ul>
                  <a className="lvev-e2-cta lvev-e2-cta--active" href="#configure" data-lvev-e2-cta aria-label="Selected $50K - configure the $50,000 Lvlup Evaluation below">
                    <span className="lvev-e2-cta-t">Selected $50K</span>
                  </a>
                  <a className="lvev-e2-card-note" href="https://lvlupfuturesdashboard.propaccount.com/en/challenges/purchase?category=35" target="_blank" rel="noopener">Configure and continue below ↓</a>
                </div>
              </article>
              <article className="lvev-e2-card" data-lvev-e2-account="100k">
                <div className="lvev-e2-card-in">
                  <span className="lvev-e2-card-glow" aria-hidden="true" />
                  <div className="lvev-e2-card-head">
                    <p className="lvev-e2-card-kind">Lvlup Evaluation</p>
                    <p className="lvev-e2-card-size">$100,000</p>
                  </div>
                  <div className="lvev-e2-plan">
                    <button className="lvev-e2-chip" type="button" aria-pressed="false" data-lvev-e2-select="100k">
                      <span className="lvev-e2-chip-dot" aria-hidden="true" />
                      <span className="lvev-e2-chip-t">Select</span>
                    </button>
                    <div className="lvev-e2-opt">
                      <p className="lvev-e2-opt-price">$554</p>
                      <p className="lvev-e2-opt-note">Option 2: One-Time Fee</p>
                    </div>
                    <div className="lvev-e2-opt">
                      <p className="lvev-e2-opt-price">$369/mo</p>
                      <p className="lvev-e2-opt-note">Option 1: Monthly Subscription</p>
                    </div>
                  </div>
                  <p className="lvev-e2-sep"><span className="lvev-e2-sep-l" aria-hidden="true" /><span className="lvev-e2-sep-t">What’s Included</span><span className="lvev-e2-sep-l" aria-hidden="true" /></p>
                  <ul className="lvev-e2-specs">
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M1.6 1.4a.7.7 0 0 1 .7.7v10.1c0 .3.2.5.5.5h11.6a.7.7 0 0 1 0 1.4H2.8A1.9 1.9 0 0 1 .9 12.2V2.1a.7.7 0 0 1 .7-.7Z" /><path fill="url(#lvev-e2-g-soft)" d="M14.4 4.1a.6.6 0 0 1 .6.6v7.2H4.1V8.4l2.5-2.5a.9.9 0 0 1 1.2 0l1.5 1.5 4.4-3.1a.6.6 0 0 1 .7-.2Z" /></svg>
                      <span className="lvev-e2-srow-k">Profit Target</span>
                      <span className="lvev-e2-srow-v">$7,000</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M2.6 2.2h10.8c.9 0 1.6.7 1.6 1.6v6.3c0 .9-.7 1.6-1.6 1.6H2.6c-.9 0-1.6-.7-1.6-1.6V3.8c0-.9.7-1.6 1.6-1.6Zm.6 4.5a.6.6 0 0 0 0 1.3h2.3c.2 0 .4-.1.5-.3l.6-1 1.2 2.4c.2.5.9.5 1.1 0l1-2 .4.7c.1.2.3.3.5.3h2.1a.6.6 0 0 0 0-1.3h-1.7l-.9-1.5a.6.6 0 0 0-1 0L8.3 7.4 7.1 5a.6.6 0 0 0-1 0l-1 1.7H3.2Z" /><path fill="url(#lvev-e2-g-soft)" d="M5.6 12.5h4.8l.4 1.5a.5.5 0 0 1-.5.6H5.7a.5.5 0 0 1-.5-.6l.4-1.5Z" /></svg>
                      <span className="lvev-e2-srow-k">EOD Trailing Drawdown</span>
                      <span className="lvev-e2-srow-v">$5,000</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M4.2 1.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V2.4c0-.6-.5-1.1-1.1-1.1Zm0 5.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V7.7c0-.6-.5-1.1-1.1-1.1Zm5.3-5.3H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V2.4c0-.6-.5-1.1-1.1-1.1Zm0 5.3H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V7.7c0-.6-.5-1.1-1.1-1.1Zm-5.3 5.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V13c0-.6-.5-1.1-1.1-1.1Zm5.3 0H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V13c0-.6-.5-1.1-1.1-1.1Zm4.2-9.4a.6.6 0 0 1 .6.6v2.2h2.2a.6.6 0 0 1 0 1.2h-2.2v2.2a.6.6 0 0 1-1.2 0V6.5h-2.2a.6.6 0 0 1 0-1.2h2.2V3.1a.6.6 0 0 1 .6-.6Z" /></svg>
                      <span className="lvev-e2-srow-k">Min. Trading Days</span>
                      <span className="lvev-e2-srow-v">5 days</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M6.1.9a.5.5 0 0 1 .5.4l.7 2.6 2.6.7a.5.5 0 0 1 0 1l-2.6.7-.7 2.6a.5.5 0 0 1-1 0l-.7-2.6-2.6-.7a.5.5 0 0 1 0-1l2.6-.7.7-2.6a.5.5 0 0 1 .5-.4Zm6.4 6.4a.5.5 0 0 1 .5.4l.4 1.4 1.4.4a.5.5 0 0 1 0 1l-1.4.4-.4 1.4a.5.5 0 0 1-1 0l-.4-1.4-1.4-.4a.5.5 0 0 1 0-1l1.4-.4.4-1.4a.5.5 0 0 1 .5-.4Zm-6 4.6a.5.5 0 0 1 .5.3l.3 1 1 .3a.5.5 0 0 1 0 1l-1 .3-.3 1a.5.5 0 0 1-1 0l-.3-1-1-.3a.5.5 0 0 1 0-1l1-.3.3-1a.5.5 0 0 1 .5-.3Z" /></svg>
                      <span className="lvev-e2-srow-k">Max Contracts</span>
                      <span className="lvev-e2-srow-v">6 Mini</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M2.2 3.4a1.2 1.2 0 0 1 1.2-1.2h3a1.2 1.2 0 0 1 1.2 1.2v9.2a1.2 1.2 0 0 1-1.2 1.2h-3a1.2 1.2 0 0 1-1.2-1.2V3.4Zm7.2 0a1.2 1.2 0 0 1 1.2-1.2h2a1.2 1.2 0 0 1 1.2 1.2v3a1.2 1.2 0 0 1-1.2 1.2h-2a1.2 1.2 0 0 1-1.2-1.2v-3Zm0 5.6a1.2 1.2 0 0 1 1.2-1.2h2a1.2 1.2 0 0 1 1.2 1.2v3.6a1.2 1.2 0 0 1-1.2 1.2h-2a1.2 1.2 0 0 1-1.2-1.2V9Z" /></svg>
                      <span className="lvev-e2-srow-k">Profit Split</span>
                      <span className="lvev-e2-srow-v">80%</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" fillRule="evenodd" d="M1.5 1.6a.8.8 0 0 1 1.1-.1l1.9 1.5-1 1.3-1.9-1.5a.8.8 0 0 1-.1-1.2Zm13 0a.8.8 0 0 1-.1 1.2l-1.9 1.5-1-1.3 1.9-1.5a.8.8 0 0 1 1.1.1ZM8 3.6a5.9 5.9 0 1 0 0 11.8A5.9 5.9 0 0 0 8 3.6Zm-.65 2.5a.65.65 0 0 1 1.3 0v3.08l2.03 2.03a.65.65 0 1 1-.92.92l-2.22-2.22a.65.65 0 0 1-.19-.46V6.1Z" /></svg>
                      <span className="lvev-e2-srow-k">Payout Cycle</span>
                      <span className="lvev-e2-srow-v">Every 14 days</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" fillRule="evenodd" d="M8 2.4a3 3 0 0 0-3 3v1.4H4a1.1 1.1 0 0 0-1.1 1.1v5a1.1 1.1 0 0 0 1.1 1.1h8a1.1 1.1 0 0 0 1.1-1.1v-5A1.1 1.1 0 0 0 12 6.8h-1V5.4a3 3 0 0 0-3-3Zm0 1.4a1.6 1.6 0 0 1 1.6 1.6v1.4H6.4V5.4A1.6 1.6 0 0 1 8 3.8Zm0 5.1a1.05 1.05 0 0 1 .55 1.95l.18 1.05a.73.73 0 0 1-1.46 0l.18-1.05A1.05 1.05 0 0 1 8 8.9Z" /></svg>
                      <span className="lvev-e2-srow-k">Payout Cap</span>
                      <span className="lvev-e2-srow-v">10% of Balance</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M2 9.6a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v3.2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9.6Zm4.8-2.8a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H7.8a1 1 0 0 1-1-1v-6Zm4.8-2.8a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v8.8a1 1 0 0 1-1 1h-1.4a1 1 0 0 1-1-1V4Z" /></svg>
                      <span className="lvev-e2-srow-k">Consistency Rule</span>
                      <span className="lvev-e2-srow-v">40%</span>
                    </li>
                  </ul>
                  <a className="lvev-e2-cta" href="#configure" data-lvev-e2-cta aria-label="Select the $100,000 Lvlup Evaluation and configure it below">
                    <span className="lvev-e2-cta-t">Select</span>
                  </a>
                  <a className="lvev-e2-card-note" href="https://lvlupfuturesdashboard.propaccount.com/en/challenges/purchase?category=35" target="_blank" rel="noopener">Configure and continue below ↓</a>
                </div>
              </article>
              <article className="lvev-e2-card" data-lvev-e2-account="150k">
                <div className="lvev-e2-card-in">
                  <span className="lvev-e2-card-glow" aria-hidden="true" />
                  <div className="lvev-e2-card-head">
                    <p className="lvev-e2-card-kind">Lvlup Evaluation</p>
                    <p className="lvev-e2-card-size">$150,000</p>
                  </div>
                  <div className="lvev-e2-plan">
                    <button className="lvev-e2-chip" type="button" aria-pressed="false" data-lvev-e2-select="150k">
                      <span className="lvev-e2-chip-dot" aria-hidden="true" />
                      <span className="lvev-e2-chip-t">Select</span>
                    </button>
                    <div className="lvev-e2-opt">
                      <p className="lvev-e2-opt-price">$714</p>
                      <p className="lvev-e2-opt-note">Option 2: One-Time Fee</p>
                    </div>
                    <div className="lvev-e2-opt">
                      <p className="lvev-e2-opt-price">$476/mo</p>
                      <p className="lvev-e2-opt-note">Option 1: Monthly Subscription</p>
                    </div>
                  </div>
                  <p className="lvev-e2-sep"><span className="lvev-e2-sep-l" aria-hidden="true" /><span className="lvev-e2-sep-t">What’s Included</span><span className="lvev-e2-sep-l" aria-hidden="true" /></p>
                  <ul className="lvev-e2-specs">
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M1.6 1.4a.7.7 0 0 1 .7.7v10.1c0 .3.2.5.5.5h11.6a.7.7 0 0 1 0 1.4H2.8A1.9 1.9 0 0 1 .9 12.2V2.1a.7.7 0 0 1 .7-.7Z" /><path fill="url(#lvev-e2-g-soft)" d="M14.4 4.1a.6.6 0 0 1 .6.6v7.2H4.1V8.4l2.5-2.5a.9.9 0 0 1 1.2 0l1.5 1.5 4.4-3.1a.6.6 0 0 1 .7-.2Z" /></svg>
                      <span className="lvev-e2-srow-k">Profit Target</span>
                      <span className="lvev-e2-srow-v">$12,000</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M2.6 2.2h10.8c.9 0 1.6.7 1.6 1.6v6.3c0 .9-.7 1.6-1.6 1.6H2.6c-.9 0-1.6-.7-1.6-1.6V3.8c0-.9.7-1.6 1.6-1.6Zm.6 4.5a.6.6 0 0 0 0 1.3h2.3c.2 0 .4-.1.5-.3l.6-1 1.2 2.4c.2.5.9.5 1.1 0l1-2 .4.7c.1.2.3.3.5.3h2.1a.6.6 0 0 0 0-1.3h-1.7l-.9-1.5a.6.6 0 0 0-1 0L8.3 7.4 7.1 5a.6.6 0 0 0-1 0l-1 1.7H3.2Z" /><path fill="url(#lvev-e2-g-soft)" d="M5.6 12.5h4.8l.4 1.5a.5.5 0 0 1-.5.6H5.7a.5.5 0 0 1-.5-.6l.4-1.5Z" /></svg>
                      <span className="lvev-e2-srow-k">EOD Trailing Drawdown</span>
                      <span className="lvev-e2-srow-v">$7,500</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M4.2 1.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V2.4c0-.6-.5-1.1-1.1-1.1Zm0 5.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V7.7c0-.6-.5-1.1-1.1-1.1Zm5.3-5.3H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V2.4c0-.6-.5-1.1-1.1-1.1Zm0 5.3H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V7.7c0-.6-.5-1.1-1.1-1.1Zm-5.3 5.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V13c0-.6-.5-1.1-1.1-1.1Zm5.3 0H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V13c0-.6-.5-1.1-1.1-1.1Zm4.2-9.4a.6.6 0 0 1 .6.6v2.2h2.2a.6.6 0 0 1 0 1.2h-2.2v2.2a.6.6 0 0 1-1.2 0V6.5h-2.2a.6.6 0 0 1 0-1.2h2.2V3.1a.6.6 0 0 1 .6-.6Z" /></svg>
                      <span className="lvev-e2-srow-k">Min. Trading Days</span>
                      <span className="lvev-e2-srow-v">5 days</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M6.1.9a.5.5 0 0 1 .5.4l.7 2.6 2.6.7a.5.5 0 0 1 0 1l-2.6.7-.7 2.6a.5.5 0 0 1-1 0l-.7-2.6-2.6-.7a.5.5 0 0 1 0-1l2.6-.7.7-2.6a.5.5 0 0 1 .5-.4Zm6.4 6.4a.5.5 0 0 1 .5.4l.4 1.4 1.4.4a.5.5 0 0 1 0 1l-1.4.4-.4 1.4a.5.5 0 0 1-1 0l-.4-1.4-1.4-.4a.5.5 0 0 1 0-1l1.4-.4.4-1.4a.5.5 0 0 1 .5-.4Zm-6 4.6a.5.5 0 0 1 .5.3l.3 1 1 .3a.5.5 0 0 1 0 1l-1 .3-.3 1a.5.5 0 0 1-1 0l-.3-1-1-.3a.5.5 0 0 1 0-1l1-.3.3-1a.5.5 0 0 1 .5-.3Z" /></svg>
                      <span className="lvev-e2-srow-k">Max Contracts</span>
                      <span className="lvev-e2-srow-v">9 Mini</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M2.2 3.4a1.2 1.2 0 0 1 1.2-1.2h3a1.2 1.2 0 0 1 1.2 1.2v9.2a1.2 1.2 0 0 1-1.2 1.2h-3a1.2 1.2 0 0 1-1.2-1.2V3.4Zm7.2 0a1.2 1.2 0 0 1 1.2-1.2h2a1.2 1.2 0 0 1 1.2 1.2v3a1.2 1.2 0 0 1-1.2 1.2h-2a1.2 1.2 0 0 1-1.2-1.2v-3Zm0 5.6a1.2 1.2 0 0 1 1.2-1.2h2a1.2 1.2 0 0 1 1.2 1.2v3.6a1.2 1.2 0 0 1-1.2 1.2h-2a1.2 1.2 0 0 1-1.2-1.2V9Z" /></svg>
                      <span className="lvev-e2-srow-k">Profit Split</span>
                      <span className="lvev-e2-srow-v">80%</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" fillRule="evenodd" d="M1.5 1.6a.8.8 0 0 1 1.1-.1l1.9 1.5-1 1.3-1.9-1.5a.8.8 0 0 1-.1-1.2Zm13 0a.8.8 0 0 1-.1 1.2l-1.9 1.5-1-1.3 1.9-1.5a.8.8 0 0 1 1.1.1ZM8 3.6a5.9 5.9 0 1 0 0 11.8A5.9 5.9 0 0 0 8 3.6Zm-.65 2.5a.65.65 0 0 1 1.3 0v3.08l2.03 2.03a.65.65 0 1 1-.92.92l-2.22-2.22a.65.65 0 0 1-.19-.46V6.1Z" /></svg>
                      <span className="lvev-e2-srow-k">Payout Cycle</span>
                      <span className="lvev-e2-srow-v">Every 14 days</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" fillRule="evenodd" d="M8 2.4a3 3 0 0 0-3 3v1.4H4a1.1 1.1 0 0 0-1.1 1.1v5a1.1 1.1 0 0 0 1.1 1.1h8a1.1 1.1 0 0 0 1.1-1.1v-5A1.1 1.1 0 0 0 12 6.8h-1V5.4a3 3 0 0 0-3-3Zm0 1.4a1.6 1.6 0 0 1 1.6 1.6v1.4H6.4V5.4A1.6 1.6 0 0 1 8 3.8Zm0 5.1a1.05 1.05 0 0 1 .55 1.95l.18 1.05a.73.73 0 0 1-1.46 0l.18-1.05A1.05 1.05 0 0 1 8 8.9Z" /></svg>
                      <span className="lvev-e2-srow-k">Payout Cap</span>
                      <span className="lvev-e2-srow-v">10% of Balance</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M2 9.6a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v3.2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9.6Zm4.8-2.8a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H7.8a1 1 0 0 1-1-1v-6Zm4.8-2.8a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v8.8a1 1 0 0 1-1 1h-1.4a1 1 0 0 1-1-1V4Z" /></svg>
                      <span className="lvev-e2-srow-k">Consistency Rule</span>
                      <span className="lvev-e2-srow-v">40%</span>
                    </li>
                  </ul>
                  <a className="lvev-e2-cta" href="#configure" data-lvev-e2-cta aria-label="Select the $150,000 Lvlup Evaluation and configure it below">
                    <span className="lvev-e2-cta-t">Select</span>
                  </a>
                  <a className="lvev-e2-card-note" href="https://lvlupfuturesdashboard.propaccount.com/en/challenges/purchase?category=35" target="_blank" rel="noopener">Configure and continue below ↓</a>
                </div>
              </article>
            </div>{/* /.lvev-e2-cards */}
            <div className="lvev-e2-cards" id="lvev-e2-panel-starter" style={{ display: 'none' }} role="tabpanel" aria-labelledby="lvev-e2-tab-starter" data-lvev-e2-panel="starter">
              <article className="lvev-e2-card" data-lvev-e2-account="25k">
                <div className="lvev-e2-card-in">
                  <span className="lvev-e2-card-glow" aria-hidden="true" />
                  <div className="lvev-e2-card-head">
                    <p className="lvev-e2-card-kind">Lvlup Evaluation</p>
                    <p className="lvev-e2-card-size">$25,000</p>
                  </div>
                  <div className="lvev-e2-plan">
                    <button className="lvev-e2-chip" type="button" aria-pressed="false" data-lvev-e2-select="25k">
                      <span className="lvev-e2-chip-dot" aria-hidden="true" />
                      <span className="lvev-e2-chip-t">Select</span>
                    </button>
                    <div className="lvev-e2-opt" style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
                      <p className="lvev-e2-opt-price">$129</p>
                      <p className="lvev-e2-opt-note">One-Time Fee</p>
                    </div>
                  </div>
                  <p className="lvev-e2-sep"><span className="lvev-e2-sep-l" aria-hidden="true" /><span className="lvev-e2-sep-t">What’s Included</span><span className="lvev-e2-sep-l" aria-hidden="true" /></p>
                  <ul className="lvev-e2-specs">
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M1.6 1.4a.7.7 0 0 1 .7.7v10.1c0 .3.2.5.5.5h11.6a.7.7 0 0 1 0 1.4H2.8A1.9 1.9 0 0 1 .9 12.2V2.1a.7.7 0 0 1 .7-.7Z" /><path fill="url(#lvev-e2-g-soft)" d="M14.4 4.1a.6.6 0 0 1 .6.6v7.2H4.1V8.4l2.5-2.5a.9.9 0 0 1 1.2 0l1.5 1.5 4.4-3.1a.6.6 0 0 1 .7-.2Z" /></svg>
                      <span className="lvev-e2-srow-k">Profit Target</span>
                      <span className="lvev-e2-srow-v">$1,500</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M2.6 2.2h10.8c.9 0 1.6.7 1.6 1.6v6.3c0 .9-.7 1.6-1.6 1.6H2.6c-.9 0-1.6-.7-1.6-1.6V3.8c0-.9.7-1.6 1.6-1.6Zm.6 4.5a.6.6 0 0 0 0 1.3h2.3c.2 0 .4-.1.5-.3l.6-1 1.2 2.4c.2.5.9.5 1.1 0l1-2 .4.7c.1.2.3.3.5.3h2.1a.6.6 0 0 0 0-1.3h-1.7l-.9-1.5a.6.6 0 0 0-1 0L8.3 7.4 7.1 5a.6.6 0 0 0-1 0l-1 1.7H3.2Z" /><path fill="url(#lvev-e2-g-soft)" d="M5.6 12.5h4.8l.4 1.5a.5.5 0 0 1-.5.6H5.7a.5.5 0 0 1-.5-.6l.4-1.5Z" /></svg>
                      <span className="lvev-e2-srow-k">EOD Trailing Drawdown</span>
                      <span className="lvev-e2-srow-v">$1,000</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M4.2 1.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V2.4c0-.6-.5-1.1-1.1-1.1Zm0 5.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V7.7c0-.6-.5-1.1-1.1-1.1Zm5.3-5.3H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V2.4c0-.6-.5-1.1-1.1-1.1Zm0 5.3H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V7.7c0-.6-.5-1.1-1.1-1.1Zm-5.3 5.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V13c0-.6-.5-1.1-1.1-1.1Zm5.3 0H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V13c0-.6-.5-1.1-1.1-1.1Zm4.2-9.4a.6.6 0 0 1 .6.6v2.2h2.2a.6.6 0 0 1 0 1.2h-2.2v2.2a.6.6 0 0 1-1.2 0V6.5h-2.2a.6.6 0 0 1 0-1.2h2.2V3.1a.6.6 0 0 1 .6-.6Z" /></svg>
                      <span className="lvev-e2-srow-k">Min. Trading Days</span>
                      <span className="lvev-e2-srow-v">5 days</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M6.1.9a.5.5 0 0 1 .5.4l.7 2.6 2.6.7a.5.5 0 0 1 0 1l-2.6.7-.7 2.6a.5.5 0 0 1-1 0l-.7-2.6-2.6-.7a.5.5 0 0 1 0-1l2.6-.7.7-2.6a.5.5 0 0 1 .5-.4Zm6.4 6.4a.5.5 0 0 1 .5.4l.4 1.4 1.4.4a.5.5 0 0 1 0 1l-1.4.4-.4 1.4a.5.5 0 0 1-1 0l-.4-1.4-1.4-.4a.5.5 0 0 1 0-1l1.4-.4.4-1.4a.5.5 0 0 1 .5-.4Zm-6 4.6a.5.5 0 0 1 .5.3l.3 1 1 .3a.5.5 0 0 1 0 1l-1 .3-.3 1a.5.5 0 0 1-1 0l-.3-1-1-.3a.5.5 0 0 1 0-1l1-.3.3-1a.5.5 0 0 1 .5-.3Z" /></svg>
                      <span className="lvev-e2-srow-k">Max Contracts</span>
                      <span className="lvev-e2-srow-v">1 Mini</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M2.2 3.4a1.2 1.2 0 0 1 1.2-1.2h3a1.2 1.2 0 0 1 1.2 1.2v9.2a1.2 1.2 0 0 1-1.2 1.2h-3a1.2 1.2 0 0 1-1.2-1.2V3.4Zm7.2 0a1.2 1.2 0 0 1 1.2-1.2h2a1.2 1.2 0 0 1 1.2 1.2v3a1.2 1.2 0 0 1-1.2 1.2h-2a1.2 1.2 0 0 1-1.2-1.2v-3Zm0 5.6a1.2 1.2 0 0 1 1.2-1.2h2a1.2 1.2 0 0 1 1.2 1.2v3.6a1.2 1.2 0 0 1-1.2 1.2h-2a1.2 1.2 0 0 1-1.2-1.2V9Z" /></svg>
                      <span className="lvev-e2-srow-k">Profit Split</span>
                      <span className="lvev-e2-srow-v">100%</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" fillRule="evenodd" d="M1.5 1.6a.8.8 0 0 1 1.1-.1l1.9 1.5-1 1.3-1.9-1.5a.8.8 0 0 1-.1-1.2Zm13 0a.8.8 0 0 1-.1 1.2l-1.9 1.5-1-1.3 1.9-1.5a.8.8 0 0 1 1.1.1ZM8 3.6a5.9 5.9 0 1 0 0 11.8A5.9 5.9 0 0 0 8 3.6Zm-.65 2.5a.65.65 0 0 1 1.3 0v3.08l2.03 2.03a.65.65 0 1 1-.92.92l-2.22-2.22a.65.65 0 0 1-.19-.46V6.1Z" /></svg>
                      <span className="lvev-e2-srow-k">Payout Cycle</span>
                      <span className="lvev-e2-srow-v">Every 5 days</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" fillRule="evenodd" d="M8 2.4a3 3 0 0 0-3 3v1.4H4a1.1 1.1 0 0 0-1.1 1.1v5a1.1 1.1 0 0 0 1.1 1.1h8a1.1 1.1 0 0 0 1.1-1.1v-5A1.1 1.1 0 0 0 12 6.8h-1V5.4a3 3 0 0 0-3-3Zm0 1.4a1.6 1.6 0 0 1 1.6 1.6v1.4H6.4V5.4A1.6 1.6 0 0 1 8 3.8Zm0 5.1a1.05 1.05 0 0 1 .55 1.95l.18 1.05a.73.73 0 0 1-1.46 0l.18-1.05A1.05 1.05 0 0 1 8 8.9Z" /></svg>
                      <span className="lvev-e2-srow-k">Payout Cap</span>
                      <span className="lvev-e2-srow-v">4%</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M2 9.6a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v3.2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9.6Zm4.8-2.8a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H7.8a1 1 0 0 1-1-1v-6Zm4.8-2.8a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v8.8a1 1 0 0 1-1 1h-1.4a1 1 0 0 1-1-1V4Z" /></svg>
                      <span className="lvev-e2-srow-k">Consistency Rule</span>
                      <span className="lvev-e2-srow-v">40%</span>
                    </li>
                  </ul>
                  <a className="lvev-e2-cta" href="#configure" data-lvev-e2-cta aria-label="Select the $25,000 Lvlup Evaluation and configure it below">
                    <span className="lvev-e2-cta-t">Select</span>
                  </a>
                  <a className="lvev-e2-card-note" href="https://lvlupfuturesdashboard.propaccount.com/en/challenges/purchase?category=35" target="_blank" rel="noopener">Configure and continue below ↓</a>
                </div>
              </article>
              <article className="lvev-e2-card lvev-e2-card--pop" data-lvev-e2-account="50k">
                <div className="lvev-e2-card-in">
                  <span className="lvev-e2-card-glow" aria-hidden="true" />
                  <div className="lvev-e2-card-head">
                    <p className="lvev-e2-card-kind">Lvlup Evaluation</p>
                    <p className="lvev-e2-card-size">$50,000</p>
                    <span className="lvev-e2-pop"><svg className="lvev-e2-pop-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-white)" d="M8 .9c.3 0 .6.2.8.5l1.8 3.6 4 .6c.7.1 1 .9.5 1.4l-2.9 2.8.7 4c.1.7-.6 1.2-1.2.9L8 12.8l-3.6 1.9c-.6.3-1.3-.2-1.2-.9l.7-4L1 7c-.5-.5-.2-1.3.5-1.4l4-.6L7.2 1.4c.2-.3.5-.5.8-.5Z" /></svg><span className="lvev-e2-pop-t">Most Popular</span></span>
                  </div>
                  <div className="lvev-e2-plan">
                    <button className="lvev-e2-chip is-selected" type="button" aria-pressed="true" data-lvev-e2-select="50k">
                      <span className="lvev-e2-chip-dot" aria-hidden="true" />
                      <span className="lvev-e2-chip-t">Selected</span>
                    </button>
                    <div className="lvev-e2-opt" style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
                      <p className="lvev-e2-opt-price">$194</p>
                      <p className="lvev-e2-opt-note">One-Time Fee</p>
                    </div>
                  </div>
                  <p className="lvev-e2-sep"><span className="lvev-e2-sep-l" aria-hidden="true" /><span className="lvev-e2-sep-t">What’s Included</span><span className="lvev-e2-sep-l" aria-hidden="true" /></p>
                  <ul className="lvev-e2-specs">
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M1.6 1.4a.7.7 0 0 1 .7.7v10.1c0 .3.2.5.5.5h11.6a.7.7 0 0 1 0 1.4H2.8A1.9 1.9 0 0 1 .9 12.2V2.1a.7.7 0 0 1 .7-.7Z" /><path fill="url(#lvev-e2-g-soft)" d="M14.4 4.1a.6.6 0 0 1 .6.6v7.2H4.1V8.4l2.5-2.5a.9.9 0 0 1 1.2 0l1.5 1.5 4.4-3.1a.6.6 0 0 1 .7-.2Z" /></svg>
                      <span className="lvev-e2-srow-k">Profit Target</span>
                      <span className="lvev-e2-srow-v">$3,000</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M2.6 2.2h10.8c.9 0 1.6.7 1.6 1.6v6.3c0 .9-.7 1.6-1.6 1.6H2.6c-.9 0-1.6-.7-1.6-1.6V3.8c0-.9.7-1.6 1.6-1.6Zm.6 4.5a.6.6 0 0 0 0 1.3h2.3c.2 0 .4-.1.5-.3l.6-1 1.2 2.4c.2.5.9.5 1.1 0l1-2 .4.7c.1.2.3.3.5.3h2.1a.6.6 0 0 0 0-1.3h-1.7l-.9-1.5a.6.6 0 0 0-1 0L8.3 7.4 7.1 5a.6.6 0 0 0-1 0l-1 1.7H3.2Z" /><path fill="url(#lvev-e2-g-soft)" d="M5.6 12.5h4.8l.4 1.5a.5.5 0 0 1-.5.6H5.7a.5.5 0 0 1-.5-.6l.4-1.5Z" /></svg>
                      <span className="lvev-e2-srow-k">EOD Trailing Drawdown</span>
                      <span className="lvev-e2-srow-v">$2,000</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M4.2 1.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V2.4c0-.6-.5-1.1-1.1-1.1Zm0 5.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V7.7c0-.6-.5-1.1-1.1-1.1Zm5.3-5.3H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V2.4c0-.6-.5-1.1-1.1-1.1Zm0 5.3H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V7.7c0-.6-.5-1.1-1.1-1.1Zm-5.3 5.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V13c0-.6-.5-1.1-1.1-1.1Zm5.3 0H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V13c0-.6-.5-1.1-1.1-1.1Zm4.2-9.4a.6.6 0 0 1 .6.6v2.2h2.2a.6.6 0 0 1 0 1.2h-2.2v2.2a.6.6 0 0 1-1.2 0V6.5h-2.2a.6.6 0 0 1 0-1.2h2.2V3.1a.6.6 0 0 1 .6-.6Z" /></svg>
                      <span className="lvev-e2-srow-k">Min. Trading Days</span>
                      <span className="lvev-e2-srow-v">5 days</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M6.1.9a.5.5 0 0 1 .5.4l.7 2.6 2.6.7a.5.5 0 0 1 0 1l-2.6.7-.7 2.6a.5.5 0 0 1-1 0l-.7-2.6-2.6-.7a.5.5 0 0 1 0-1l2.6-.7.7-2.6a.5.5 0 0 1 .5-.4Zm6.4 6.4a.5.5 0 0 1 .5.4l.4 1.4 1.4.4a.5.5 0 0 1 0 1l-1.4.4-.4 1.4a.5.5 0 0 1-1 0l-.4-1.4-1.4-.4a.5.5 0 0 1 0-1l1.4-.4.4-1.4a.5.5 0 0 1 .5-.4Zm-6 4.6a.5.5 0 0 1 .5.3l.3 1 1 .3a.5.5 0 0 1 0 1l-1 .3-.3 1a.5.5 0 0 1-1 0l-.3-1-1-.3a.5.5 0 0 1 0-1l1-.3.3-1a.5.5 0 0 1 .5-.3Z" /></svg>
                      <span className="lvev-e2-srow-k">Max Contracts</span>
                      <span className="lvev-e2-srow-v">3 Mini</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M2.2 3.4a1.2 1.2 0 0 1 1.2-1.2h3a1.2 1.2 0 0 1 1.2 1.2v9.2a1.2 1.2 0 0 1-1.2 1.2h-3a1.2 1.2 0 0 1-1.2-1.2V3.4Zm7.2 0a1.2 1.2 0 0 1 1.2-1.2h2a1.2 1.2 0 0 1 1.2 1.2v3a1.2 1.2 0 0 1-1.2 1.2h-2a1.2 1.2 0 0 1-1.2-1.2v-3Zm0 5.6a1.2 1.2 0 0 1 1.2-1.2h2a1.2 1.2 0 0 1 1.2 1.2v3.6a1.2 1.2 0 0 1-1.2 1.2h-2a1.2 1.2 0 0 1-1.2-1.2V9Z" /></svg>
                      <span className="lvev-e2-srow-k">Profit Split</span>
                      <span className="lvev-e2-srow-v">100%</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" fillRule="evenodd" d="M1.5 1.6a.8.8 0 0 1 1.1-.1l1.9 1.5-1 1.3-1.9-1.5a.8.8 0 0 1-.1-1.2Zm13 0a.8.8 0 0 1-.1 1.2l-1.9 1.5-1-1.3 1.9-1.5a.8.8 0 0 1 1.1.1ZM8 3.6a5.9 5.9 0 1 0 0 11.8A5.9 5.9 0 0 0 8 3.6Zm-.65 2.5a.65.65 0 0 1 1.3 0v3.08l2.03 2.03a.65.65 0 1 1-.92.92l-2.22-2.22a.65.65 0 0 1-.19-.46V6.1Z" /></svg>
                      <span className="lvev-e2-srow-k">Payout Cycle</span>
                      <span className="lvev-e2-srow-v">Every 5 days</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" fillRule="evenodd" d="M8 2.4a3 3 0 0 0-3 3v1.4H4a1.1 1.1 0 0 0-1.1 1.1v5a1.1 1.1 0 0 0 1.1 1.1h8a1.1 1.1 0 0 0 1.1-1.1v-5A1.1 1.1 0 0 0 12 6.8h-1V5.4a3 3 0 0 0-3-3Zm0 1.4a1.6 1.6 0 0 1 1.6 1.6v1.4H6.4V5.4A1.6 1.6 0 0 1 8 3.8Zm0 5.1a1.05 1.05 0 0 1 .55 1.95l.18 1.05a.73.73 0 0 1-1.46 0l.18-1.05A1.05 1.05 0 0 1 8 8.9Z" /></svg>
                      <span className="lvev-e2-srow-k">Payout Cap</span>
                      <span className="lvev-e2-srow-v">4%</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M2 9.6a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v3.2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9.6Zm4.8-2.8a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H7.8a1 1 0 0 1-1-1v-6Zm4.8-2.8a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v8.8a1 1 0 0 1-1 1h-1.4a1 1 0 0 1-1-1V4Z" /></svg>
                      <span className="lvev-e2-srow-k">Consistency Rule</span>
                      <span className="lvev-e2-srow-v">40%</span>
                    </li>
                  </ul>
                  <a className="lvev-e2-cta lvev-e2-cta--active" href="#configure" data-lvev-e2-cta aria-label="Selected $50K - configure the $50,000 Lvlup Evaluation below">
                    <span className="lvev-e2-cta-t">Selected $50K</span>
                  </a>
                  <a className="lvev-e2-card-note" href="https://lvlupfuturesdashboard.propaccount.com/en/challenges/purchase?category=35" target="_blank" rel="noopener">Configure and continue below ↓</a>
                </div>
              </article>
              <article className="lvev-e2-card" data-lvev-e2-account="100k">
                <div className="lvev-e2-card-in">
                  <span className="lvev-e2-card-glow" aria-hidden="true" />
                  <div className="lvev-e2-card-head">
                    <p className="lvev-e2-card-kind">Lvlup Evaluation</p>
                    <p className="lvev-e2-card-size">$100,000</p>
                  </div>
                  <div className="lvev-e2-plan">
                    <button className="lvev-e2-chip" type="button" aria-pressed="false" data-lvev-e2-select="100k">
                      <span className="lvev-e2-chip-dot" aria-hidden="true" />
                      <span className="lvev-e2-chip-t">Select</span>
                    </button>
                    <div className="lvev-e2-opt" style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
                      <p className="lvev-e2-opt-price">$259</p>
                      <p className="lvev-e2-opt-note">One-Time Fee</p>
                    </div>
                  </div>
                  <p className="lvev-e2-sep"><span className="lvev-e2-sep-l" aria-hidden="true" /><span className="lvev-e2-sep-t">What’s Included</span><span className="lvev-e2-sep-l" aria-hidden="true" /></p>
                  <ul className="lvev-e2-specs">
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M1.6 1.4a.7.7 0 0 1 .7.7v10.1c0 .3.2.5.5.5h11.6a.7.7 0 0 1 0 1.4H2.8A1.9 1.9 0 0 1 .9 12.2V2.1a.7.7 0 0 1 .7-.7Z" /><path fill="url(#lvev-e2-g-soft)" d="M14.4 4.1a.6.6 0 0 1 .6.6v7.2H4.1V8.4l2.5-2.5a.9.9 0 0 1 1.2 0l1.5 1.5 4.4-3.1a.6.6 0 0 1 .7-.2Z" /></svg>
                      <span className="lvev-e2-srow-k">Profit Target</span>
                      <span className="lvev-e2-srow-v">$7,000</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M2.6 2.2h10.8c.9 0 1.6.7 1.6 1.6v6.3c0 .9-.7 1.6-1.6 1.6H2.6c-.9 0-1.6-.7-1.6-1.6V3.8c0-.9.7-1.6 1.6-1.6Zm.6 4.5a.6.6 0 0 0 0 1.3h2.3c.2 0 .4-.1.5-.3l.6-1 1.2 2.4c.2.5.9.5 1.1 0l1-2 .4.7c.1.2.3.3.5.3h2.1a.6.6 0 0 0 0-1.3h-1.7l-.9-1.5a.6.6 0 0 0-1 0L8.3 7.4 7.1 5a.6.6 0 0 0-1 0l-1 1.7H3.2Z" /><path fill="url(#lvev-e2-g-soft)" d="M5.6 12.5h4.8l.4 1.5a.5.5 0 0 1-.5.6H5.7a.5.5 0 0 1-.5-.6l.4-1.5Z" /></svg>
                      <span className="lvev-e2-srow-k">EOD Trailing Drawdown</span>
                      <span className="lvev-e2-srow-v">$3,000</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M4.2 1.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V2.4c0-.6-.5-1.1-1.1-1.1Zm0 5.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V7.7c0-.6-.5-1.1-1.1-1.1Zm5.3-5.3H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V2.4c0-.6-.5-1.1-1.1-1.1Zm0 5.3H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V7.7c0-.6-.5-1.1-1.1-1.1Zm-5.3 5.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V13c0-.6-.5-1.1-1.1-1.1Zm5.3 0H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V13c0-.6-.5-1.1-1.1-1.1Zm4.2-9.4a.6.6 0 0 1 .6.6v2.2h2.2a.6.6 0 0 1 0 1.2h-2.2v2.2a.6.6 0 0 1-1.2 0V6.5h-2.2a.6.6 0 0 1 0-1.2h2.2V3.1a.6.6 0 0 1 .6-.6Z" /></svg>
                      <span className="lvev-e2-srow-k">Min. Trading Days</span>
                      <span className="lvev-e2-srow-v">5 days</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M6.1.9a.5.5 0 0 1 .5.4l.7 2.6 2.6.7a.5.5 0 0 1 0 1l-2.6.7-.7 2.6a.5.5 0 0 1-1 0l-.7-2.6-2.6-.7a.5.5 0 0 1 0-1l2.6-.7.7-2.6a.5.5 0 0 1 .5-.4Zm6.4 6.4a.5.5 0 0 1 .5.4l.4 1.4 1.4.4a.5.5 0 0 1 0 1l-1.4.4-.4 1.4a.5.5 0 0 1-1 0l-.4-1.4-1.4-.4a.5.5 0 0 1 0-1l1.4-.4.4-1.4a.5.5 0 0 1 .5-.4Zm-6 4.6a.5.5 0 0 1 .5.3l.3 1 1 .3a.5.5 0 0 1 0 1l-1 .3-.3 1a.5.5 0 0 1-1 0l-.3-1-1-.3a.5.5 0 0 1 0-1l1-.3.3-1a.5.5 0 0 1 .5-.3Z" /></svg>
                      <span className="lvev-e2-srow-k">Max Contracts</span>
                      <span className="lvev-e2-srow-v">6 Mini</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M2.2 3.4a1.2 1.2 0 0 1 1.2-1.2h3a1.2 1.2 0 0 1 1.2 1.2v9.2a1.2 1.2 0 0 1-1.2 1.2h-3a1.2 1.2 0 0 1-1.2-1.2V3.4Zm7.2 0a1.2 1.2 0 0 1 1.2-1.2h2a1.2 1.2 0 0 1 1.2 1.2v3a1.2 1.2 0 0 1-1.2 1.2h-2a1.2 1.2 0 0 1-1.2-1.2v-3Zm0 5.6a1.2 1.2 0 0 1 1.2-1.2h2a1.2 1.2 0 0 1 1.2 1.2v3.6a1.2 1.2 0 0 1-1.2 1.2h-2a1.2 1.2 0 0 1-1.2-1.2V9Z" /></svg>
                      <span className="lvev-e2-srow-k">Profit Split</span>
                      <span className="lvev-e2-srow-v">100%</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" fillRule="evenodd" d="M1.5 1.6a.8.8 0 0 1 1.1-.1l1.9 1.5-1 1.3-1.9-1.5a.8.8 0 0 1-.1-1.2Zm13 0a.8.8 0 0 1-.1 1.2l-1.9 1.5-1-1.3 1.9-1.5a.8.8 0 0 1 1.1.1ZM8 3.6a5.9 5.9 0 1 0 0 11.8A5.9 5.9 0 0 0 8 3.6Zm-.65 2.5a.65.65 0 0 1 1.3 0v3.08l2.03 2.03a.65.65 0 1 1-.92.92l-2.22-2.22a.65.65 0 0 1-.19-.46V6.1Z" /></svg>
                      <span className="lvev-e2-srow-k">Payout Cycle</span>
                      <span className="lvev-e2-srow-v">Every 5 days</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" fillRule="evenodd" d="M8 2.4a3 3 0 0 0-3 3v1.4H4a1.1 1.1 0 0 0-1.1 1.1v5a1.1 1.1 0 0 0 1.1 1.1h8a1.1 1.1 0 0 0 1.1-1.1v-5A1.1 1.1 0 0 0 12 6.8h-1V5.4a3 3 0 0 0-3-3Zm0 1.4a1.6 1.6 0 0 1 1.6 1.6v1.4H6.4V5.4A1.6 1.6 0 0 1 8 3.8Zm0 5.1a1.05 1.05 0 0 1 .55 1.95l.18 1.05a.73.73 0 0 1-1.46 0l.18-1.05A1.05 1.05 0 0 1 8 8.9Z" /></svg>
                      <span className="lvev-e2-srow-k">Payout Cap</span>
                      <span className="lvev-e2-srow-v">2.5%</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M2 9.6a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v3.2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9.6Zm4.8-2.8a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H7.8a1 1 0 0 1-1-1v-6Zm4.8-2.8a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v8.8a1 1 0 0 1-1 1h-1.4a1 1 0 0 1-1-1V4Z" /></svg>
                      <span className="lvev-e2-srow-k">Consistency Rule</span>
                      <span className="lvev-e2-srow-v">40%</span>
                    </li>
                  </ul>
                  <a className="lvev-e2-cta" href="#configure" data-lvev-e2-cta aria-label="Select the $100,000 Lvlup Evaluation and configure it below">
                    <span className="lvev-e2-cta-t">Select</span>
                  </a>
                  <a className="lvev-e2-card-note" href="https://lvlupfuturesdashboard.propaccount.com/en/challenges/purchase?category=35" target="_blank" rel="noopener">Configure and continue below ↓</a>
                </div>
              </article>
              <article className="lvev-e2-card" data-lvev-e2-account="150k">
                <div className="lvev-e2-card-in">
                  <span className="lvev-e2-card-glow" aria-hidden="true" />
                  <div className="lvev-e2-card-head">
                    <p className="lvev-e2-card-kind">Lvlup Evaluation</p>
                    <p className="lvev-e2-card-size">$150,000</p>
                  </div>
                  <div className="lvev-e2-plan">
                    <button className="lvev-e2-chip" type="button" aria-pressed="false" data-lvev-e2-select="150k">
                      <span className="lvev-e2-chip-dot" aria-hidden="true" />
                      <span className="lvev-e2-chip-t">Select</span>
                    </button>
                    <div className="lvev-e2-opt" style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
                      <p className="lvev-e2-opt-price">$324</p>
                      <p className="lvev-e2-opt-note">One-Time Fee</p>
                    </div>
                  </div>
                  <p className="lvev-e2-sep"><span className="lvev-e2-sep-l" aria-hidden="true" /><span className="lvev-e2-sep-t">What’s Included</span><span className="lvev-e2-sep-l" aria-hidden="true" /></p>
                  <ul className="lvev-e2-specs">
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M1.6 1.4a.7.7 0 0 1 .7.7v10.1c0 .3.2.5.5.5h11.6a.7.7 0 0 1 0 1.4H2.8A1.9 1.9 0 0 1 .9 12.2V2.1a.7.7 0 0 1 .7-.7Z" /><path fill="url(#lvev-e2-g-soft)" d="M14.4 4.1a.6.6 0 0 1 .6.6v7.2H4.1V8.4l2.5-2.5a.9.9 0 0 1 1.2 0l1.5 1.5 4.4-3.1a.6.6 0 0 1 .7-.2Z" /></svg>
                      <span className="lvev-e2-srow-k">Profit Target</span>
                      <span className="lvev-e2-srow-v">$12,000</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M2.6 2.2h10.8c.9 0 1.6.7 1.6 1.6v6.3c0 .9-.7 1.6-1.6 1.6H2.6c-.9 0-1.6-.7-1.6-1.6V3.8c0-.9.7-1.6 1.6-1.6Zm.6 4.5a.6.6 0 0 0 0 1.3h2.3c.2 0 .4-.1.5-.3l.6-1 1.2 2.4c.2.5.9.5 1.1 0l1-2 .4.7c.1.2.3.3.5.3h2.1a.6.6 0 0 0 0-1.3h-1.7l-.9-1.5a.6.6 0 0 0-1 0L8.3 7.4 7.1 5a.6.6 0 0 0-1 0l-1 1.7H3.2Z" /><path fill="url(#lvev-e2-g-soft)" d="M5.6 12.5h4.8l.4 1.5a.5.5 0 0 1-.5.6H5.7a.5.5 0 0 1-.5-.6l.4-1.5Z" /></svg>
                      <span className="lvev-e2-srow-k">EOD Trailing Drawdown</span>
                      <span className="lvev-e2-srow-v">$4,500</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M4.2 1.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V2.4c0-.6-.5-1.1-1.1-1.1Zm0 5.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V7.7c0-.6-.5-1.1-1.1-1.1Zm5.3-5.3H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V2.4c0-.6-.5-1.1-1.1-1.1Zm0 5.3H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V7.7c0-.6-.5-1.1-1.1-1.1Zm-5.3 5.3H2.4c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V13c0-.6-.5-1.1-1.1-1.1Zm5.3 0H7.7c-.6 0-1.1.5-1.1 1.1v1.8c0 .6.5 1.1 1.1 1.1h1.8c.6 0 1.1-.5 1.1-1.1V13c0-.6-.5-1.1-1.1-1.1Zm4.2-9.4a.6.6 0 0 1 .6.6v2.2h2.2a.6.6 0 0 1 0 1.2h-2.2v2.2a.6.6 0 0 1-1.2 0V6.5h-2.2a.6.6 0 0 1 0-1.2h2.2V3.1a.6.6 0 0 1 .6-.6Z" /></svg>
                      <span className="lvev-e2-srow-k">Min. Trading Days</span>
                      <span className="lvev-e2-srow-v">5 days</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M6.1.9a.5.5 0 0 1 .5.4l.7 2.6 2.6.7a.5.5 0 0 1 0 1l-2.6.7-.7 2.6a.5.5 0 0 1-1 0l-.7-2.6-2.6-.7a.5.5 0 0 1 0-1l2.6-.7.7-2.6a.5.5 0 0 1 .5-.4Zm6.4 6.4a.5.5 0 0 1 .5.4l.4 1.4 1.4.4a.5.5 0 0 1 0 1l-1.4.4-.4 1.4a.5.5 0 0 1-1 0l-.4-1.4-1.4-.4a.5.5 0 0 1 0-1l1.4-.4.4-1.4a.5.5 0 0 1 .5-.4Zm-6 4.6a.5.5 0 0 1 .5.3l.3 1 1 .3a.5.5 0 0 1 0 1l-1 .3-.3 1a.5.5 0 0 1-1 0l-.3-1-1-.3a.5.5 0 0 1 0-1l1-.3.3-1a.5.5 0 0 1 .5-.3Z" /></svg>
                      <span className="lvev-e2-srow-k">Max Contracts</span>
                      <span className="lvev-e2-srow-v">9 Mini</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M2.2 3.4a1.2 1.2 0 0 1 1.2-1.2h3a1.2 1.2 0 0 1 1.2 1.2v9.2a1.2 1.2 0 0 1-1.2 1.2h-3a1.2 1.2 0 0 1-1.2-1.2V3.4Zm7.2 0a1.2 1.2 0 0 1 1.2-1.2h2a1.2 1.2 0 0 1 1.2 1.2v3a1.2 1.2 0 0 1-1.2 1.2h-2a1.2 1.2 0 0 1-1.2-1.2v-3Zm0 5.6a1.2 1.2 0 0 1 1.2-1.2h2a1.2 1.2 0 0 1 1.2 1.2v3.6a1.2 1.2 0 0 1-1.2 1.2h-2a1.2 1.2 0 0 1-1.2-1.2V9Z" /></svg>
                      <span className="lvev-e2-srow-k">Profit Split</span>
                      <span className="lvev-e2-srow-v">100%</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" fillRule="evenodd" d="M1.5 1.6a.8.8 0 0 1 1.1-.1l1.9 1.5-1 1.3-1.9-1.5a.8.8 0 0 1-.1-1.2Zm13 0a.8.8 0 0 1-.1 1.2l-1.9 1.5-1-1.3 1.9-1.5a.8.8 0 0 1 1.1.1ZM8 3.6a5.9 5.9 0 1 0 0 11.8A5.9 5.9 0 0 0 8 3.6Zm-.65 2.5a.65.65 0 0 1 1.3 0v3.08l2.03 2.03a.65.65 0 1 1-.92.92l-2.22-2.22a.65.65 0 0 1-.19-.46V6.1Z" /></svg>
                      <span className="lvev-e2-srow-k">Payout Cycle</span>
                      <span className="lvev-e2-srow-v">Every 5 days</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" fillRule="evenodd" d="M8 2.4a3 3 0 0 0-3 3v1.4H4a1.1 1.1 0 0 0-1.1 1.1v5a1.1 1.1 0 0 0 1.1 1.1h8a1.1 1.1 0 0 0 1.1-1.1v-5A1.1 1.1 0 0 0 12 6.8h-1V5.4a3 3 0 0 0-3-3Zm0 1.4a1.6 1.6 0 0 1 1.6 1.6v1.4H6.4V5.4A1.6 1.6 0 0 1 8 3.8Zm0 5.1a1.05 1.05 0 0 1 .55 1.95l.18 1.05a.73.73 0 0 1-1.46 0l.18-1.05A1.05 1.05 0 0 1 8 8.9Z" /></svg>
                      <span className="lvev-e2-srow-k">Payout Cap</span>
                      <span className="lvev-e2-srow-v">2%</span>
                    </li>
                    <li className="lvev-e2-srow">
                      <svg className="lvev-e2-srow-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="url(#lvev-e2-g-soft)" d="M2 9.6a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v3.2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9.6Zm4.8-2.8a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H7.8a1 1 0 0 1-1-1v-6Zm4.8-2.8a1 1 0 0 1 1-1h1.4a1 1 0 0 1 1 1v8.8a1 1 0 0 1-1 1h-1.4a1 1 0 0 1-1-1V4Z" /></svg>
                      <span className="lvev-e2-srow-k">Consistency Rule</span>
                      <span className="lvev-e2-srow-v">40%</span>
                    </li>
                  </ul>
                  <a className="lvev-e2-cta" href="#configure" data-lvev-e2-cta aria-label="Select the $150,000 Lvlup Evaluation and configure it below">
                    <span className="lvev-e2-cta-t">Select</span>
                  </a>
                  <a className="lvev-e2-card-note" href="https://lvlupfuturesdashboard.propaccount.com/en/challenges/purchase?category=35" target="_blank" rel="noopener">Configure and continue below ↓</a>
                </div>

              </article>
              <div style={{ paddingTop: "100px" }}>
              </div>
            </div>{/* /.lvev-e2-cards */}
            <div className="lvev-e2-foot" >
              <a className="lvev-e2-build" href="https://lvlupfuturesdashboard.propaccount.com/en/sign-in/" target="_blank" rel="noopener" aria-label="Build Your Plan - opens the external dashboard in a new tab">
                <span className="lvev-e2-build-t">Build Your Plan</span>
              </a>
            </div>
          </div>{/* /.lvev-e2-inner */}
        </section>
        {/* e3-configure */}
        <section className="lvev-e3" id="configure">
          {/* R3-Korrekturen (Befunde 2/4/5/9): Akzentfarbe der H2, staerkerer
 Umgebungsglow an den Raendern und engere Sektionsabstaende auf Desktop.
 fragment.css darf in Runde 3 nicht geaendert werden, daher hier. */}
          <style dangerouslySetInnerHTML={{ __html: "\n    .lvev-e3-title-accent {\n      background-image: var(--lvf-grad-blue);\n      -webkit-background-clip: text;\n      background-clip: text;\n      color: transparent;\n    }\n\n    .lvev-e3-glow::before,\n    .lvev-e3-glow::after {\n      display: none !important;\n    }\n\n    @media (min-width: 1024px) {\n      .lvev-e3 {\n        --lvev-e3-pt: 14px;\n        --lvev-e3-pb: 22px;\n      }\n    }\n  " }} />
          <svg className="lvev-e3-defs" width={0} height={0} aria-hidden="true" focusable="false">
            <defs>
              <linearGradient id="lvev-e3-ig" x1={0} y1={0} x2={0} y2={1}>
                <stop offset={0} stopColor="#8cd5ff" />
                <stop offset={1} stopColor="#12a9ff" />
              </linearGradient>
            </defs>
          </svg>
          {/* Weicher blauer Umgebungsschein (Ersatz fuer die riesigen "Star"-Vektoren).
 Laueft oben und unten ueber die Sektionsgrenzen hinaus weich aus -
 keine harte Kante zu den Nachbarsektionen. */}
          <div className="lvev-e3-glow" aria-hidden="true" style={{ background: 'radial-gradient(60vw 2000px at 50% 2200px, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 95%, rgba(34, 167, 255, 0.30) 102%, rgba(34, 167, 255, 0.7) 110%, rgba(232, 241, 248, 1) 120%)', WebkitMaskImage: 'none', maskImage: 'none' }} />
          <div className="lvf-container">
            <div className="lvev-e3-head">
              <h2 className="lvev-e3-title">Configure Your <span className="lvev-e3-title-accent" style={{ fontWeight: '600' }}>Evaluation</span></h2>
              <p className="lvev-e3-sub">Review your selected account and choose any optional enhancements before continuing.</p>
            </div>
            <div className="lvev-e3-grid">
              {/* ================================================= Linke Spalte */}
              <div className="lvev-e3-col">
                {/* Karte 1: Gewaehlte Evaluation */}
                <div className="lvev-e3-card lvev-e3-card--eval">
                  <div className="lvev-e3-eval-head">
                    <div className="lvev-e3-eval-titles">
                      <p className="lvev-e3-label">Select Evaluation</p>
                      <h3 className="lvev-e3-card-title" data-lvev-e3-field="title">50K Evaluation</h3>
                    </div>
                    <a className="lvev-e3-change" href="#pricing">
                      <span className="lvev-e3-orb lvev-e3-orb--lg" aria-hidden="true" />
                      <span className="lvev-e3-change-text">Change Account Size</span>
                    </a>
                  </div>
                  <ul className="lvev-e3-rows">
                    <li className="lvev-e3-row lvev-e3-row--top lvev-e3-row--hl">
                      <span className="lvev-e3-row-label">Base Monthly Price</span>
                      <span className="lvev-e3-row-val" data-lvev-e3-field="basePrice">$225.00</span>
                    </li>
                    <li className="lvev-e3-row">
                      <span className="lvev-e3-row-label">Profit Target</span>
                      <span className="lvev-e3-row-val" data-lvev-e3-field="profitTarget">$3,000</span>
                    </li>
                    <li className="lvev-e3-row">
                      <span className="lvev-e3-row-label">EOD Trailing Drawdown</span>
                      <span className="lvev-e3-row-val" data-lvev-e3-field="drawdown">$2,500</span>
                    </li>
                    <li className="lvev-e3-row">
                      <span className="lvev-e3-row-label">Min. Trading Days</span>
                      <span className="lvev-e3-row-val" data-lvev-e3-field="minDays">5 days</span>
                    </li>
                    <li className="lvev-e3-row">
                      <span className="lvev-e3-row-label">Max Contracts</span>
                      <span className="lvev-e3-row-val" data-lvev-e3-field="maxContracts">3 Mini</span>
                    </li>
                    <li className="lvev-e3-row">
                      <span className="lvev-e3-row-label">Profit Split</span>
                      <span className="lvev-e3-row-val" data-lvev-e3-field="profitSplit">80%</span>
                    </li>
                    <li className="lvev-e3-row">
                      <span className="lvev-e3-row-label">Payout Cycle</span>
                      <span className="lvev-e3-row-val" data-lvev-e3-field="payoutCycle">Every 14 days</span>
                    </li>
                    <li className="lvev-e3-row">
                      <span className="lvev-e3-row-label">Payout Cap</span>
                      <span className="lvev-e3-row-val" data-lvev-e3-field="payoutCap">10% of Balance</span>
                    </li>
                    <li className="lvev-e3-row lvev-e3-row--bot">
                      <span className="lvev-e3-row-label">Consistency Rule</span>
                      <span className="lvev-e3-row-val" data-lvev-e3-field="consistency">40%</span>
                    </li>
                  </ul>
                </div>
                {/* Karte 2: Handelsplattform */}
                <div className="lvev-e3-card lvev-e3-card--platform">
                  <h3 className="lvev-e3-card-title">Select Trading Platform</h3>
                  <div className="lvev-e3-opts" role="radiogroup" aria-label="Trading platform">
                    <button className="lvev-e3-opt lvev-e3-opt--on" type="button" role="radio" aria-checked="true" data-lvev-e3-platform="dx">
                      <span className="lvev-e3-orb" aria-hidden="true" />
                      <span className="lvev-e3-dx" aria-hidden="true">
                        <span className="lvev-e3-dx-icon" />
                        <span className="lvev-e3-dx-word" />
                      </span>
                      <span className="lvf-sr">DX Futuretech</span>
                    </button>
                    <button className="lvev-e3-opt" type="button" role="radio" aria-checked="false" data-lvev-e3-platform="volumetrica">
                      <span className="lvev-e3-orb" aria-hidden="true" />
                      <span className="lvev-e3-vol" aria-hidden="true" />
                      <span className="lvev-e3-vol-name">Volumetrica</span>
                    </button>
                  </div>
                </div>
                {/* Karte 3: Add-ons */}
                <div className="lvev-e3-card lvev-e3-card--addons">
                  <h3 className="lvev-e3-card-title">Select Add-Ons</h3>
                  <button className="lvev-e3-opt lvev-e3-opt--on lvev-e3-addon" type="button" role="switch" aria-checked="true" data-lvev-e3-addon>
                    <span className="lvev-e3-orb" aria-hidden="true" />
                    <span className="lvev-e3-addon-body">
                      <span className="lvev-e3-addon-name">
                        Payout Protector
                        <span className="lvev-e3-info" aria-hidden="true">i</span>
                      </span>
                      <span className="lvev-e3-addon-desc">Protect the eligible payout amount if a qualifying funded account breaches. Applies to eligible funded-stage payouts only.</span>
                    </span>
                    <span className="lvev-e3-addon-val">+25%</span>
                  </button>
                </div>
              </div>
              {/* ================================================= Rechte Spalte: Summary */}
              <div className="lvev-e3-card lvev-e3-card--summary">
                <p className="lvev-e3-label">Evaluation Summary</p>
                <ul className="lvev-e3-rows lvev-e3-rows--sum">
                  <li className="lvev-e3-row lvev-e3-row--top lvev-e3-row--lead">
                    <span className="lvev-e3-row-label" data-lvev-e3-field="summaryLabel">50K Evaluation</span>
                    <span className="lvev-e3-row-val" data-lvev-e3-field="summaryPrice">$225.00 / month</span>
                  </li>
                  <li className="lvev-e3-row">
                    <span className="lvev-e3-row-label">Trading Platform</span>
                    <span className="lvev-e3-row-val" data-lvev-e3-sum-platform>DX Futures</span>
                  </li>
                  <li className="lvev-e3-row">
                    <span className="lvev-e3-row-label">Payout Protector</span>
                    <span className="lvev-e3-row-val" data-lvev-e3-sum-addon>Applied (+25)</span>
                  </li>
                  <li className="lvev-e3-row lvev-e3-row--bot">
                    <span className="lvev-e3-row-label">Promotion Code</span>
                    <span className="lvev-e3-row-val">No code applied</span>
                  </li>
                </ul>
                <ul className="lvev-e3-notes">
                  <li>• Recurring monthly subscription</li>
                  <li>• No separate activation fee</li>
                  <li>• Cancel anytime. Access remains active until end of billing cycle.</li>
                </ul>
                <div className="lvev-e3-total">
                  <span className="lvev-e3-total-label">Grand Total</span>
                  <span className="lvev-e3-total-val" data-lvev-e3-field="totalPrice">$281.25/mo</span>
                </div>
                <p className="lvev-e3-fine">*Account creation and secure purchase are completed through the Lvlup dashboard.</p>
                <a className="lvev-e3-continue" href="https://lvlupfuturesdashboard.propaccount.com/en/challenges/purchase?category=35" target="_blank" rel="noopener" aria-label="Continue to Dashboard - opens the external Lvlup dashboard sign-up in a new tab">Continue to Dashboard</a>
                <div className="lvev-e3-secure">
                  <span className="lvev-e3-secure-item">
                    <svg className="lvev-e3-secure-ico" viewBox="0 0 15 15" aria-hidden="true" focusable="false">
                      <rect x="2.4" y="6.2" width="10.2" height={7} rx="1.6" fill="url(#lvev-e3-ig)" stroke="#ffffff" strokeWidth="0.8" />
                      <path d="M4.8 6.2V4.6a2.7 2.7 0 0 1 5.4 0v1.6" fill="none" stroke="url(#lvev-e3-ig)" strokeWidth="1.4" />
                    </svg>
                    <span className="lvev-e3-secure-text">HTTPS Secure Connection</span>
                  </span>
                  <span className="lvev-e3-secure-item">
                    <svg className="lvev-e3-secure-ico" viewBox="0 0 15 15" aria-hidden="true" focusable="false">
                      <path d="M7.5 0.8 13.3 3.7v5.6L7.5 14.2 1.7 9.3V3.7Z" fill="none" stroke="#2d7096" strokeWidth="1.4" strokeLinejoin="round" />
                    </svg>
                    <span className="lvev-e3-secure-text">256-bit Encryption</span>
                  </span>
                </div>
                {/* Accepted payment methods shown in the Figma reference. */}
                <div className="lvev-e3-pay" aria-label="Accepted payment methods">
                  <div className="lvev-e3-pay-row">
                    <img className="lvev-e3-pay-logo lvev-e3-pay-logo--visa" style={{ height: '50px' }} src="assets/images/payment-methods/visa.png" alt="Visa" />
                    {/* <img className="lvev-e3-pay-logo lvev-e3-pay-logo--visa" style={{ height: '24px', filter: 'brightness(0) invert(1)' }} src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" /> */}
                    <img className="lvev-e3-pay-logo lvev-e3-pay-logo--mc" style={{ height: '32px', filter: 'grayscale(1) brightness(1.2)' }} src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" alt="Mastercard" />
                  </div>
                  <div className="lvev-e3-pay-row" style={{ marginTop: '20px' }}>
                    <img className="lvev-e3-pay-logo lvev-e3-pay-logo--paypal" style={{ height: '24px', filter: 'brightness(0) invert(1)' }} src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
                    <span className="lvev-e3-pay-crypto" style={{ display: 'flex' }}>
                      <span className="lvev-e3-pay-coin" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#192531', borderRadius: '50%', border: '2px solid #020405', boxSizing: 'border-box', overflow: 'hidden' }}><img style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.1)' }} src="assets/images/payment-methods/binance.png" alt="Binance" /></span>
                      <span className="lvev-e3-pay-coin" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#192531', borderRadius: '50%', border: '2px solid #020405', boxSizing: 'border-box', overflow: 'hidden' }}><img style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.1)' }} src="assets/images/payment-methods/Bitcoin.svg" alt="Bitcoin" /></span>
                      <span className="lvev-e3-pay-coin" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#192531', borderRadius: '50%', border: '2px solid #020405', boxSizing: 'border-box', overflow: 'hidden' }}><img style={{ width: '100%', height: '100%', objectFit: 'contain', transform: 'scale(1)' }} src="https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg" alt="Ethereum" /></span>
                      <span className="lvev-e3-pay-coin" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#192531', borderRadius: '50%', border: '2px solid #020405', boxSizing: 'border-box', overflow: 'hidden' }}><img style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.1)' }} src="https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png" alt="Solana" /></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Kicker-Pille am Bandende, leitet zum Kontenvergleich (e4) weiter */}
            <p className="lvev-e3-pillwrap"><a className="lvev-e3-pill" href="#compare">Accounts Comparison</a></p>
          </div>
          {/* </section> */}
          {/* e4-compare */}
          {/* Sektion e4-compare: Vergleichstabelle "Compare Evaluation Structures"
     Desktop exakt nach Figma (Frame 1760, Band y=3640..4930), Mobile gestapelt bzw.
     Tabelle horizontal scrollbar. Hintergrund transparent, lokale Glows laufen weich aus. */}
          {/* <section className="lvev-e4" id="compare"> */}
          <div className="lvev-e4-glow lvev-e4-glow--left" aria-hidden="true" />
          <div className="lvev-e4-glow lvev-e4-glow--right" aria-hidden="true" />
          <div className="lvev-e4-glow lvev-e4-glow--bottom" aria-hidden="true" />
          <div className="lvf-container" id="compare" style={{ scrollMarginTop: '100px' }}>
            <div className="lvev-e4-head" style={{ paddingTop: '30px' }}>
              <h2 className="lvev-e4-title" style={{ color: '#ffffff' }}>Compare Evaluation <span className="lvev-e4-title-accent" style={{ fontWeight: 600 }}>Structures</span></h2>
              <p className="lvev-e4-sub">Review the main differences across the four account sizes.</p>
            </div>
            <div className="lvev-e4-table-wrap">
              <table className="lvev-e4-table">
                <colgroup>
                  <col className="lvev-e4-col-feature" />
                  <col span={8} />
                </colgroup>
                <thead>
                  <tr className="lvev-e4-row-groups">
                    <th className="lvev-e4-cell lvev-e4-cell--feature" scope="col"><span className="lvev-e4-vh">Feature</span></th>
                    <th className="lvev-e4-cell lvev-e4-cell--group" colSpan={4} scope="colgroup"><span className="lvev-e4-grad">Lvlup Accounts</span></th>
                    <th className="lvev-e4-cell lvev-e4-cell--group" colSpan={4} scope="colgroup"><span className="lvev-e4-grad">Starter Accounts</span></th>
                  </tr>
                  <tr className="lvev-e4-row-sizes">
                    <th className="lvev-e4-cell lvev-e4-cell--feature lvev-e4-cell--feature-head" style={{ backgroundColor: "#051016 !important" }} scope="col">Feature</th>
                    <th className="lvev-e4-cell lvev-e4-cell--size" scope="col">25K</th>
                    <th className="lvev-e4-cell lvev-e4-cell--size" scope="col">50K</th>
                    <th className="lvev-e4-cell lvev-e4-cell--size" scope="col">100K</th>
                    <th className="lvev-e4-cell lvev-e4-cell--size" scope="col">150K</th>
                    <th className="lvev-e4-cell lvev-e4-cell--size" scope="col">25K</th>
                    <th className="lvev-e4-cell lvev-e4-cell--size" scope="col">50K</th>
                    <th className="lvev-e4-cell lvev-e4-cell--size" scope="col">100K</th>
                    <th className="lvev-e4-cell lvev-e4-cell--size" scope="col">150K</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="lvev-e4-row lvev-e4-row--tall">
                    <th className="lvev-e4-cell lvev-e4-cell--feature" style={{ backgroundColor: "#051016 !important" }} scope="row">Evaluation Payment</th>
                    <td className="lvev-e4-cell"><span className="lvev-e4-stack"><span>One-Time</span><span className="lvev-e4-grad" style={{ fontWeight: '600' }}>OR</span><span>Monthly</span></span></td>
                    <td className="lvev-e4-cell"><span className="lvev-e4-stack"><span>One-Time</span><span className="lvev-e4-grad" style={{ fontWeight: '600' }}>OR</span><span>Monthly</span></span></td>
                    <td className="lvev-e4-cell"><span className="lvev-e4-stack"><span>One-Time</span><span className="lvev-e4-grad" style={{ fontWeight: '600' }}>OR</span><span>Monthly</span></span></td>
                    <td className="lvev-e4-cell"><span className="lvev-e4-stack"><span>One-Time</span><span className="lvev-e4-grad" style={{ fontWeight: '600' }}>OR</span><span>Monthly</span></span></td>
                    <td className="lvev-e4-cell">One-Time</td>
                    <td className="lvev-e4-cell">One-Time</td>
                    <td className="lvev-e4-cell">One-Time</td>
                    <td className="lvev-e4-cell">One-Time</td>
                  </tr>
                  <tr className="lvev-e4-row lvev-e4-row--hi">
                    <th className="lvev-e4-cell lvev-e4-cell--feature lvev-e4-cell--feature-strong" style={{ backgroundColor: "#071f2d !important" }} scope="row">One-Time Price</th>
                    <td className="lvev-e4-cell lvev-e4-cell--price" style={{ backgroundColor: "#09324E !important" }}>$194</td>
                    <td className="lvev-e4-cell lvev-e4-cell--price" style={{ backgroundColor: "#09324E !important" }}>$338</td>
                    <td className="lvev-e4-cell lvev-e4-cell--price" style={{ backgroundColor: "#09324E !important" }}>$554</td>
                    <td className="lvev-e4-cell lvev-e4-cell--price" style={{ backgroundColor: "#09324E !important" }}>$714</td>
                    <td className="lvev-e4-cell lvev-e4-cell--price" style={{ backgroundColor: "#09324E !important" }}>$129</td>
                    <td className="lvev-e4-cell lvev-e4-cell--price" style={{ backgroundColor: "#09324E !important" }}>$194</td>
                    <td className="lvev-e4-cell lvev-e4-cell--price" style={{ backgroundColor: "#09324E !important" }}>$259</td>
                    <td className="lvev-e4-cell lvev-e4-cell--price" style={{ backgroundColor: "#09324E !important" }}>$324</td>
                  </tr>
                  <tr className="lvev-e4-row lvev-e4-row--hi">
                    <th className="lvev-e4-cell lvev-e4-cell--feature lvev-e4-cell--feature-strong" style={{ backgroundColor: "#071f2d !important" }} scope="row">Monthly Price</th>
                    <td className="lvev-e4-cell lvev-e4-cell--price" style={{ backgroundColor: "#09324E !important" }}>$129/mo</td>
                    <td className="lvev-e4-cell lvev-e4-cell--price" style={{ backgroundColor: "#09324E !important" }}>$225/mo</td>
                    <td className="lvev-e4-cell lvev-e4-cell--price" style={{ backgroundColor: "#09324E !important" }}>$369/mo</td>
                    <td className="lvev-e4-cell lvev-e4-cell--price" style={{ backgroundColor: "#09324E !important" }}>$476/mo</td>
                    <td className="lvev-e4-cell lvev-e4-cell--dim" style={{ backgroundColor: "#071F2C !important" }}>Not Applicable</td>
                    <td className="lvev-e4-cell lvev-e4-cell--dim" style={{ backgroundColor: "#071F2C !important" }}>Not Applicable</td>
                    <td className="lvev-e4-cell lvev-e4-cell--dim" style={{ backgroundColor: "#071F2C !important" }}>Not Applicable</td>
                    <td className="lvev-e4-cell lvev-e4-cell--dim" style={{ backgroundColor: "#071F2C !important" }}>Not Applicable</td>
                  </tr>
                  <tr className="lvev-e4-row">
                    <th className="lvev-e4-cell lvev-e4-cell--feature" scope="row" style={{ backgroundColor: "#051016 !important" }}>Profit Target</th>
                    <td className="lvev-e4-cell"><span className="lvev-e4-stack"><span className="lvev-e4-grad lvev-e4-grad--bold" style={{ fontWeight: '600' }}>6%</span><span className="lvev-e4-note">($1,500)</span></span></td>
                    <td className="lvev-e4-cell"><span className="lvev-e4-stack"><span className="lvev-e4-grad lvev-e4-grad--bold" style={{ fontWeight: '600' }}>6%</span><span className="lvev-e4-note">($3,000)</span></span></td>
                    <td className="lvev-e4-cell"><span className="lvev-e4-stack"><span className="lvev-e4-grad lvev-e4-grad--bold" style={{ fontWeight: '600' }}>7%</span><span className="lvev-e4-note">($7,000)</span></span></td>
                    <td className="lvev-e4-cell"><span className="lvev-e4-stack"><span className="lvev-e4-grad lvev-e4-grad--bold" style={{ fontWeight: '600' }}>8%</span><span className="lvev-e4-note">($12,000)</span></span></td>
                    <td className="lvev-e4-cell"><span className="lvev-e4-stack"><span className="lvev-e4-grad lvev-e4-grad--bold" style={{ fontWeight: '600' }}>6%</span><span className="lvev-e4-note">($1,500)</span></span></td>
                    <td className="lvev-e4-cell"><span className="lvev-e4-stack"><span className="lvev-e4-grad lvev-e4-grad--bold" style={{ fontWeight: '600' }}>6%</span><span className="lvev-e4-note">($3,000)</span></span></td>
                    <td className="lvev-e4-cell"><span className="lvev-e4-stack"><span className="lvev-e4-grad lvev-e4-grad--bold" style={{ fontWeight: '600' }}>7%</span><span className="lvev-e4-note">($7,000)</span></span></td>
                    <td className="lvev-e4-cell"><span className="lvev-e4-stack"><span className="lvev-e4-grad lvev-e4-grad--bold" style={{ fontWeight: '600' }}>8%</span><span className="lvev-e4-note">($12,000)</span></span></td>
                  </tr>
                  <tr className="lvev-e4-row">
                    <th className="lvev-e4-cell lvev-e4-cell--feature" scope="row" style={{ backgroundColor: "#051016 !important" }}>Maximum Drawdown</th>
                    <td className="lvev-e4-cell"><span className="lvev-e4-stack"><span className="lvev-e4-grad lvev-e4-grad--bold" style={{ fontWeight: '600' }}>5%</span><span className="lvev-e4-note">($1,250)</span></span></td>
                    <td className="lvev-e4-cell"><span className="lvev-e4-stack"><span className="lvev-e4-grad lvev-e4-grad--bold" style={{ fontWeight: '600' }}>5%</span><span className="lvev-e4-note">($2,500)</span></span></td>
                    <td className="lvev-e4-cell"><span className="lvev-e4-stack"><span className="lvev-e4-grad lvev-e4-grad--bold" style={{ fontWeight: '600' }}>5%</span><span className="lvev-e4-note">($5,000)</span></span></td>
                    <td className="lvev-e4-cell"><span className="lvev-e4-stack"><span className="lvev-e4-grad lvev-e4-grad--bold" style={{ fontWeight: '600' }}>5%</span><span className="lvev-e4-note">($7,500)</span></span></td>
                    <td className="lvev-e4-cell"><span className="lvev-e4-stack"><span className="lvev-e4-grad lvev-e4-grad--bold" style={{ fontWeight: '600' }}>4%</span><span className="lvev-e4-note">($1,000)</span></span></td>
                    <td className="lvev-e4-cell"><span className="lvev-e4-stack"><span className="lvev-e4-grad lvev-e4-grad--bold" style={{ fontWeight: '600' }}>4%</span><span className="lvev-e4-note">($2,000)</span></span></td>
                    <td className="lvev-e4-cell"><span className="lvev-e4-stack"><span className="lvev-e4-grad lvev-e4-grad--bold" style={{ fontWeight: '600' }}>3%</span><span className="lvev-e4-note">($3,000)</span></span></td>
                    <td className="lvev-e4-cell"><span className="lvev-e4-stack"><span className="lvev-e4-grad lvev-e4-grad--bold" style={{ fontWeight: '600' }}>3%</span><span className="lvev-e4-note">($4,500)</span></span></td>
                  </tr>
                  <tr className="lvev-e4-row">
                    <th className="lvev-e4-cell lvev-e4-cell--feature" scope="row" style={{ backgroundColor: "#051016 !important" }}>Drawdown Type</th>
                    <td className="lvev-e4-cell"><span className="lvev-e4-grad lvev-e4-grad--bold" style={{ fontWeight: '600' }}>EOD</span> Trailing</td>
                    <td className="lvev-e4-cell"><span className="lvev-e4-grad lvev-e4-grad--bold" style={{ fontWeight: '600' }}>EOD</span> Trailing</td>
                    <td className="lvev-e4-cell"><span className="lvev-e4-grad lvev-e4-grad--bold" style={{ fontWeight: '600' }}>EOD</span> Trailing</td>
                    <td className="lvev-e4-cell"><span className="lvev-e4-grad lvev-e4-grad--bold" style={{ fontWeight: '600' }}>EOD</span> Trailing</td>
                    <td className="lvev-e4-cell"><span className="lvev-e4-grad lvev-e4-grad--bold" style={{ fontWeight: '600' }}>EOD</span> Trailing</td>
                    <td className="lvev-e4-cell"><span className="lvev-e4-grad lvev-e4-grad--bold" style={{ fontWeight: '600' }}>EOD</span> Trailing</td>
                    <td className="lvev-e4-cell"><span className="lvev-e4-grad lvev-e4-grad--bold" style={{ fontWeight: '600' }}>EOD</span> Trailing</td>
                    <td className="lvev-e4-cell"><span className="lvev-e4-grad lvev-e4-grad--bold" style={{ fontWeight: '600' }}>EOD</span> Trailing</td>
                  </tr>
                  <tr className="lvev-e4-row">
                    <th className="lvev-e4-cell lvev-e4-cell--feature" scope="row" style={{ backgroundColor: "#051016 !important" }}>Min. Trading Days</th>
                    <td className="lvev-e4-cell">5 Days</td>
                    <td className="lvev-e4-cell">5 Days</td>
                    <td className="lvev-e4-cell">5 Days</td>
                    <td className="lvev-e4-cell">5 Days</td>
                    <td className="lvev-e4-cell">5 Days</td>
                    <td className="lvev-e4-cell">5 Days</td>
                    <td className="lvev-e4-cell">5 Days</td>
                    <td className="lvev-e4-cell">5 Days</td>
                  </tr>
                  <tr className="lvev-e4-row">
                    <th className="lvev-e4-cell lvev-e4-cell--feature" scope="row" style={{ backgroundColor: "#051016 !important" }}>Maximum Contracts</th>
                    <td className="lvev-e4-cell">1 mini</td>
                    <td className="lvev-e4-cell">3 mini</td>
                    <td className="lvev-e4-cell">6 mini</td>
                    <td className="lvev-e4-cell">9 mini</td>
                    <td className="lvev-e4-cell">1 mini</td>
                    <td className="lvev-e4-cell">3 mini</td>
                    <td className="lvev-e4-cell">6 mini</td>
                    <td className="lvev-e4-cell">9 mini</td>
                  </tr>
                  <tr className="lvev-e4-row">
                    <th className="lvev-e4-cell lvev-e4-cell--feature" scope="row" style={{ backgroundColor: "#051016 !important" }}>Profit Split</th>
                    <td className="lvev-e4-cell">80%</td>
                    <td className="lvev-e4-cell">80%</td>
                    <td className="lvev-e4-cell">80%</td>
                    <td className="lvev-e4-cell">80%</td>
                    <td className="lvev-e4-cell">100%</td>
                    <td className="lvev-e4-cell">100%</td>
                    <td className="lvev-e4-cell">100%</td>
                    <td className="lvev-e4-cell">100%</td>
                  </tr>
                  <tr className="lvev-e4-row">
                    <th className="lvev-e4-cell lvev-e4-cell--feature" scope="row" style={{ backgroundColor: "#051016 !important" }}>Payout Terms</th>
                    <td className="lvev-e4-cell"><span className="lvev-e4-grad lvev-e4-grad--bold" style={{ fontWeight: '600' }}>10%</span> Cap</td>
                    <td className="lvev-e4-cell"><span className="lvev-e4-grad lvev-e4-grad--bold" style={{ fontWeight: '600' }}>10%</span> Cap</td>
                    <td className="lvev-e4-cell"><span className="lvev-e4-grad lvev-e4-grad--bold" style={{ fontWeight: '600' }}>10%</span> Cap</td>
                    <td className="lvev-e4-cell"><span className="lvev-e4-grad lvev-e4-grad--bold" style={{ fontWeight: '600' }}>10%</span> Cap</td>
                    <td className="lvev-e4-cell"><span className="lvev-e4-stack"><span><span className="lvev-e4-grad lvev-e4-grad--bold" style={{ fontWeight: '600' }}>4%</span> Cap</span><span className="lvev-e4-note">Up to 50% Profit</span></span></td>
                    <td className="lvev-e4-cell"><span className="lvev-e4-stack"><span><span className="lvev-e4-grad lvev-e4-grad--bold" style={{ fontWeight: '600' }}>4%</span> Cap</span><span className="lvev-e4-note">Up to 50% Profit</span></span></td>
                    <td className="lvev-e4-cell"><span className="lvev-e4-stack"><span><span className="lvev-e4-grad lvev-e4-grad--bold" style={{ fontWeight: '600' }}>2.5%</span> Cap</span><span className="lvev-e4-note">Up to 50% Profit</span></span></td>
                    <td className="lvev-e4-cell"><span className="lvev-e4-stack"><span><span className="lvev-e4-grad lvev-e4-grad--bold" style={{ fontWeight: '600' }}>2%</span> Cap</span><span className="lvev-e4-note">Up to 50% Profit</span></span></td>
                  </tr>
                  <tr className="lvev-e4-row">
                    <th className="lvev-e4-cell lvev-e4-cell--feature" scope="row" style={{ backgroundColor: "#051016 !important" }}>Payout Cycle</th>
                    <td className="lvev-e4-cell">Every 14 Days</td>
                    <td className="lvev-e4-cell">Every 14 Days</td>
                    <td className="lvev-e4-cell">Every 14 Days</td>
                    <td className="lvev-e4-cell">Every 14 Days</td>
                    <td className="lvev-e4-cell">Every 5 Profitable Days</td>
                    <td className="lvev-e4-cell">Every 5 Profitable Days</td>
                    <td className="lvev-e4-cell">Every 5 Profitable Days</td>
                    <td className="lvev-e4-cell">Every 5 Profitable Days</td>
                  </tr>
                  <tr className="lvev-e4-row">
                    <th className="lvev-e4-cell lvev-e4-cell--feature" style={{ backgroundColor: "#051016 !important" }} scope="row">Activation Fee</th>
                    <td className="lvev-e4-cell">Required After Passing</td>
                    <td className="lvev-e4-cell">Required After Passing</td>
                    <td className="lvev-e4-cell">Required After Passing</td>
                    <td className="lvev-e4-cell">Required After Passing</td>
                    <td className="lvev-e4-cell lvev-e4-cell--dim">None</td>
                    <td className="lvev-e4-cell lvev-e4-cell--dim">None</td>
                    <td className="lvev-e4-cell lvev-e4-cell--dim">None</td>
                    <td className="lvev-e4-cell lvev-e4-cell--dim">None</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="lvev-e4-cta">
              <a className="lvev-e4-pill" href="/rules">Rules You Should Know</a>
            </div>
          </div>
          {/* </section> */}
          {/* e5-steps */}
          {/* Sektion e5-steps: "One Structure Across Every Evaluation", 6 Feature-Karten
     im 3x2-Raster. Desktop exakt nach Figma (Frame 1760, Band y=4930..5840),
     Mobile gestapelt. Hintergrund transparent, lokale Glows laufen weich aus. */}
          {/* <div className="lvev-e5" id="structure"> */}
          <div className=" lvev-e5-glow lvev-e5-glow--left" aria-hidden="true" />
          <div className="lvev-e5-glow lvev-e5-glow--right" aria-hidden="true" />
          <div className="lvev-e5-glow lvev-e5-glow--bottom" aria-hidden="true" />
          <div className="lvf-container">
            <div className=" lvev-e5-head" style={{ paddingBottom: '30px', paddingTop: '50px' }}>
              <h2 className="lvev-e5-title" style={{ color: '#ffffff', marginBottom: '15px' }}>One Structure Across <span className="lvev-e5-title-accent" style={{ fontWeight: 600 }}>Every Evaluation</span></h2>
              <p className="lvev-e5-sub">The account size changes. The core trading framework remains consistent.</p>
            </div>
            <div className="lvev-e5-panel">
              <div className="lvev-e5-grid">
                <article className="lvev-e5-card">
                  <span className="lvev-e5-num" aria-hidden="true" style={{ background: 'linear-gradient(45deg, rgba(140, 213, 255, 0) 3%, rgba(140, 213, 255, 0.38) 50%, #2db2ffff 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>01</span>
                  <div className="lvev-e5-icon" aria-hidden="true">
                    <svg viewBox="0 0 32 32" width={32} height={32} fill="currentColor"><path fillRule="evenodd" d="M8.33 4.27 8.15 5.86 5.68 7.27 3.92 10.27 3.92 23.49 4.98 25.79 8.15 27.73 22.97 27.73 26.14 26.32 27.73 23.14 27.73 10.62 26.32 7.62 23.85 6.21 22.61 3.92 21.56 4.27 20.67 6.04 17.15 6.04 16.62 4.27 15.38 3.92 14.32 6.04 10.97 6.21 10.27 5.68 9.92 4.1ZM20.32 15.38 19.62 17.15 15.74 21.03 14.68 21.03 11.68 17.85 12.21 16.79 13.44 16.62 15.21 18.03 18.56 14.85 19.44 14.68Z" /></svg>
                  </div>
                  <div className="lvev-e5-text">
                    <h3 className="lvev-e5-card-title" style={{ color: '#ffffff' }}>No <span className="lvev-e5-card-title-accent" style={{ fontWeight: '600' }}>Daily Loss</span> Limit</h3>
                    <p className="lvev-e5-card-desc">Trade without a separate daily loss limit while staying within your maximum drawdown.</p>
                  </div>
                </article>
                <article className="lvev-e5-card">
                  <span className="lvev-e5-num" aria-hidden="true" style={{ background: 'linear-gradient(45deg, rgba(140, 213, 255, 0) 3%, rgba(140, 213, 255, 0.38) 50%, #2db2ffff 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>02</span>
                  <div className="lvev-e5-icon" aria-hidden="true">
                    <svg viewBox="0 0 32 32" width={32} height={32} fill="currentColor"><path fillRule="evenodd" d="M7.98 19.79 4.1 22.97 4.1 27.55 4.63 27.9 8.15 27.55ZM10.62 19.62 10.44 27.55 14.32 27.73 14.68 22.97 13.44 22.44ZM20.85 18.2 20.32 18.2 16.62 22.08 16.62 27.37 17.32 27.9 20.85 27.37ZM27.02 11.86 22.97 15.56 22.97 27.37 23.67 27.9 27.2 27.37ZM30.02 4.45 29.49 3.92 23.49 4.27 23.14 5.15 24.55 7.09 15.03 16.79 10.09 12.21 8.86 12.03 2.86 17.85 1.98 19.26 2.86 20.85 4.63 20.67 9.03 16.09 9.56 16.09 13.8 20.32 15.38 20.67 26.85 9.21 28.79 10.62 29.67 10.09Z" /></svg>
                  </div>
                  <div className="lvev-e5-text">
                    <h3 className="lvev-e5-card-title" style={{ color: '#ffffff' }}><span className="lvev-e5-card-title-accent" style={{ fontWeight: '600' }}>40%</span> Consistency Rule</h3>
                    <p className="lvev-e5-card-desc">Your best trading day cannot account for more than 40% of your total accumulated profit. Applies during the Evaluation Stage only. Funded Starter Accounts have no consistency rule.</p>
                  </div>
                </article>
                <article className="lvev-e5-card">
                  <span className="lvev-e5-num" aria-hidden="true" style={{ background: 'linear-gradient(45deg, rgba(140, 213, 255, 0) 3%, rgba(140, 213, 255, 0.38) 50%, #2db2ffff 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>03</span>
                  <div className="lvev-e5-icon" aria-hidden="true">
                    <svg viewBox="0 0 32 32" width={32} height={32} fill="currentColor"><path fillRule="evenodd" d="M19.97 17.5 19.79 20.32 21.56 22.08 27.02 22.26 28.08 21.2 28.26 17.32 27.02 15.91 21.56 16.09ZM22.26 18.03 23.32 18.03 24.02 18.91 22.97 20.32 21.56 19.26ZM21.2 4.1 18.91 4.1 8.33 10.44 5.68 10.44 4.63 11.15 4.27 25.79 4.98 27.2 5.86 27.73 25.61 27.73 26.85 26.67 26.67 23.49 21.38 23.32 18.38 20.5 18.38 17.85 19.97 15.56 22.08 14.5 27.02 14.15 26.67 11.15 24.73 9.92ZM23.85 9.92 23.32 10.44 19.62 10.09 22.08 8.33 22.61 8.33ZM20.67 4.98 20.14 6.21 12.74 10.44 10.97 10.09 19.79 4.8Z" /></svg>
                  </div>
                  <div className="lvev-e5-text">
                    <h3 className="lvev-e5-card-title" style={{ color: '#ffffff' }}>Payouts Every <span className="lvev-e5-card-title-accent" style={{ fontWeight: '600' }}>5 Days</span></h3>
                    <p className="lvev-e5-card-desc">Eligible funded traders can request payouts every 14 days on Lvlup Accounts and every 5 profitable days on Starter Accounts.</p>
                  </div>
                </article>
                <article className="lvev-e5-card">
                  <span className="lvev-e5-num" aria-hidden="true" style={{ background: 'linear-gradient(45deg, rgba(140, 213, 255, 0) 3%, rgba(140, 213, 255, 0.38) 50%, #2db2ffff 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>04</span>
                  <div className="lvev-e5-icon" aria-hidden="true">
                    <svg viewBox="0 0 32 32" width={32} height={32} fill="currentColor"><path fillRule="evenodd" d="M22.08 14.5 20.85 14.68 13.09 19.79 12.56 20.5 12.56 22.79 14.68 24.91 16.79 24.91 18.56 23.67 22.26 16.09ZM26.32 12.03 24.2 14.15 24.55 15.38 23.14 18.03 23.85 21.56 29.84 21.56 30.02 18.03 29.31 15.91 27.2 12.38ZM5.15 11.86 4.1 12.74 1.98 16.44 1.27 19.44 1.63 21.56 7.98 21.2 8.15 19.09 9.56 16.26ZM16.79 7.27 17.15 13.8 18.73 13.97 21.38 12.56 22.97 12.74 25.08 10.8 24.38 9.74 21.91 8.33ZM14.68 7.27 13.62 7.09 9.39 8.33 7.09 9.74 6.57 10.8 10.62 14.85 14.85 13.27Z" /></svg>
                  </div>
                  <div className="lvev-e5-text">
                    <div className="lvev-e5-card-title-row">
                      <h3 className="lvev-e5-card-title" style={{ color: '#ffffff' }}><span className="lvev-e5-card-title-accent" style={{ fontWeight: '600' }}>10%</span> Payout Cap</h3>
                      <span className="lvev-e5-badge">
                        <svg viewBox="0 0 24 24" width={10} height={10} fill="currentColor" aria-hidden="true"><path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8z" /></svg>
                        Industries Biggest
                      </span>
                    </div>
                    <p className="lvev-e5-card-desc">Withdraw up to 10% of the account size per eligible payout.</p>
                  </div>
                </article>
                <article className="lvev-e5-card">
                  <span className="lvev-e5-num" aria-hidden="true" style={{ background: 'linear-gradient(45deg, rgba(140, 213, 255, 0) 3%, rgba(140, 213, 255, 0.38) 50%, #2db2ffff 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>05</span>
                  <div className="lvev-e5-icon" aria-hidden="true">
                    <svg viewBox="0 0 32 32" width={32} height={32} fill="currentColor"><path fillRule="evenodd" d="M5.68 9.92 5.15 11.33 9.74 27.55 10.97 27.9 11.33 26.49 6.57 10.09ZM24.02 6.57 20.67 8.33 11.33 8.15 9.92 8.33 7.8 9.74 10.62 20.67 12.56 19.44 15.38 18.91 22.97 19.44 25.43 18.56 26.85 17.15 26.49 16.26 22.79 13.44Z" /></svg>
                  </div>
                  <div className="lvev-e5-text">
                    <h3 className="lvev-e5-card-title" style={{ color: '#ffffff' }}><span className="lvev-e5-card-title-accent" style={{ fontWeight: '600' }}>EOD</span> Trailing Drawdown</h3>
                    <p className="lvev-e5-card-desc">Your maximum drawdown trails based on your end-of-day account balance.</p>
                  </div>
                </article>
                <article className="lvev-e5-card">
                  <span className="lvev-e5-num" aria-hidden="true" style={{ background: 'linear-gradient(45deg, rgba(140, 213, 255, 0) 3%, rgba(140, 213, 255, 0.38) 50%, #2db2ffff 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>06</span>
                  <div className="lvev-e5-icon" aria-hidden="true">
                    <svg viewBox="0 0 32 32" width={32} height={32} fill="currentColor"><path fillRule="evenodd" d="M4.63 7.62 3.92 8.51 3.92 25.26 4.63 26.49 6.21 27.02 7.8 25.79 7.8 7.98ZM9.74 5.15 9.03 26.85 25.08 27.02 27.37 25.79 27.9 24.2 27.9 5.68 27.02 4.98ZM13.27 21.38 13.97 20.5 23.49 20.5 24.2 21.2 23.32 21.91 13.8 21.91ZM13.27 17.15 13.8 16.62 23.67 16.62 24.02 17.5 23.49 18.03 13.97 18.2ZM13.44 13.8 13.8 12.74 23.32 12.74 24.2 13.44 23.32 14.15ZM13.27 9.39 13.8 8.86 23.67 8.86 24.02 9.74 23.49 10.27 14.15 10.44Z" /></svg>
                  </div>
                  <div className="lvev-e5-text">
                    <h3 className="lvev-e5-card-title" style={{ color: '#ffffff' }}>Hold Through <span className="lvev-e5-card-title-accent" style={{ fontWeight: '600' }}>News</span></h3>
                    <p className="lvev-e5-card-desc">Trade through scheduled economic news without a news trading restriction.</p>
                  </div>
                </article>
              </div>
            </div>
            <div className="lvev-e5-cta">
              <a className="lvev-e5-pill" href="#compare" style={{ background: '#020405', boxShadow: 'none', padding: '10px 32px' }}>Account Structure</a>
            </div>
          </div>
        </section>
        {/* e6-beyond */}
        {/* Sektion e6-beyond: "Know What Happens Beyond the Evaluation", 8 Features in
     3 versetzten Spalten (links/rechts je 3, Mitte 2) mit feinen Verbindungslinien
     und Punkten, darunter 2 CTAs. Helle Sektion: schwarzer Text auf grossem
     weiss/blau-Glow, der weich in die dunklen Nachbarsektionen auslaeuft.
     Desktop exakt nach Figma (Frame 1760, Band y=5840..7210), Mobile gestapelt. */}
        <section className="lvev-e6" id="beyond">
          <div className="lvev-e6-glow lvev-e6-glow--center" aria-hidden="true" />
          <div className="lvev-e6-glow lvev-e6-glow--left" aria-hidden="true" />
          <div className="lvev-e6-glow lvev-e6-glow--right" aria-hidden="true" />
          <div className="lvev-e6-glow lvev-e6-glow--bottom" aria-hidden="true" />
          <div className="lvf-container">
            <div className="lvev-e6-head">
              <h2 className="lvev-e6-title" style={{ paddingTop: 40, paddingBottom: 40 }}>Know What Happens Beyond the Evaluation</h2>
              <p className="lvev-e6-sub">Understand the payment, funded-account and operational conditions that complete your Lvlup journey.</p>
            </div>
            <div className="lvev-e6-features">
              <div className="lvev-e6-deco" aria-hidden="true">
                <span className="lvev-e6-line lvev-e6-line--v1" />
                <span className="lvev-e6-line lvev-e6-line--v2" />
                <span className="lvev-e6-line lvev-e6-line--h1" />
                <span className="lvev-e6-line lvev-e6-line--h2" />
                <span className="lvev-e6-line lvev-e6-line--h3" />
                <span className="lvev-e6-line lvev-e6-line--h4" />
                <span className="lvev-e6-line lvev-e6-line--h5" />
                <span className="lvev-e6-dot lvev-e6-dot--1" />
                <span className="lvev-e6-dot lvev-e6-dot--2" />
                <span className="lvev-e6-dot lvev-e6-dot--3" />
                <span className="lvev-e6-dot lvev-e6-dot--4" />
                <span className="lvev-e6-dot lvev-e6-dot--5" />
                <span className="lvev-e6-dot lvev-e6-dot--6" />
              </div>
              <div className="lvev-e6-col lvev-e6-col--side lvev-e6-col--left">
                <article className="lvev-e6-item">
                  <div className="lvev-e6-icon" aria-hidden="true">
                    <svg viewBox="0 0 32 32" width={32} height={32} fill="currentColor"><defs><linearGradient id="lvev-e6-ig" x1={0} y1={0} x2={0} y2={1}><stop offset={0} stopColor="#8cd5ff" /><stop offset={1} stopColor="#12a9ff" /></linearGradient></defs><path fillRule="evenodd" d="M15.74 27.02 15.38 30.2 16.44 30.9 16.97 30.37 16.97 27.73ZM23.32 24.38 23.49 25.26 25.08 26.85 26.49 26.67 26.32 25.61 24.91 24.2 24.02 23.85ZM9.03 24.2 7.62 24.02 5.68 26.49 6.92 27.02 8.51 25.61ZM26.49 16.79 27.02 17.68 30.2 17.68 30.55 17.15 30.02 16.26 27.2 16.26ZM1.63 16.62 1.98 17.68 5.68 17.5 5.33 16.26ZM12.91 9.39 10.8 10.8 8.68 13.27 7.98 14.85 8.15 19.44 9.39 21.73 12.03 24.02 14.85 24.91 18.56 24.73 21.56 23.14 23.49 20.85 24.38 18.2 24.02 14.15 22.61 11.86 19.44 9.39 16.79 8.86ZM26.85 7.45 25.61 6.74 23.32 9.03 23.32 9.74 24.55 9.92ZM6.04 6.92 5.68 7.98 7.45 9.92 9.21 9.56 6.92 6.92ZM15.74 3.04 15.21 3.57 15.21 6.21 16.26 7.09 16.97 6.39 16.97 3.39Z" /></svg>
                  </div>
                  <h3 className="lvev-e6-item-title">5 Minimum Trading Days</h3>
                  <p className="lvev-e6-item-desc">Trade on at least five separate trading days before completing the evaluation.</p>
                </article>
                <article className="lvev-e6-item">
                  <div className="lvev-e6-icon" aria-hidden="true">
                    <svg viewBox="0 0 32 32" width={32} height={32} fill="currentColor"><path fillRule="evenodd" d="M29.49 17.85 28.08 16.97 26.67 17.32 18.73 25.26 17.85 27.37 18.03 30.2 22.26 29.31 30.2 21.38 30.73 19.79ZM6.39 4.45 5.15 5.51 4.63 6.92 4.98 25.08 6.74 26.85 15.38 26.85 16.79 23.85 23.32 17.32 23.14 6.39 21.56 4.45 20.14 4.27ZM7.8 18.2 8.86 17.15 14.68 17.15 15.74 18.56 14.68 19.44 8.86 19.44ZM7.98 13.62 9.03 12.74 18.73 12.74 19.97 13.62 19.97 14.5 19.44 15.03 9.03 15.21 7.98 14.32ZM7.98 9.21 8.86 8.51 13.8 8.51 14.5 9.74 13.8 10.8 8.86 10.8 8.15 10.27Z" /></svg>
                  </div>
                  <h3 className="lvev-e6-item-title">Contract Limits</h3>
                  <p className="lvev-e6-item-desc">Maximum contracts increase by account size: 1, 3, 6, or 9 mini contracts.</p>
                </article>
                <article className="lvev-e6-item">
                  <div className="lvev-e6-icon" aria-hidden="true">
                    <svg viewBox="0 0 32 32" width={32} height={32} fill="currentColor"><path fillRule="evenodd" d="M17.5 13.44 16.26 13.62 14.15 16.44 15.03 17.68 15.91 17.68 17.68 15.38 18.03 14.15ZM6.04 7.98 3.74 10.09 3.74 25.79 4.98 27.37 7.62 27.73 8.15 8.15ZM24.73 7.8 24.2 8.15 24.2 27.37 26.32 27.73 28.08 26.49 28.61 25.08 28.79 11.33 28.26 9.56 27.37 8.68ZM12.56 3.74 11.33 4.8 11.15 6.92 9.39 8.33 9.56 27.2 9.92 27.73 22.44 27.73 22.61 8.15 21.2 6.92 21.2 4.98 20.14 3.92ZM18.91 5.33 19.79 6.04 19.79 6.92 18.56 8.15 19.79 10.62 19.26 12.03 19.62 15.03 17.15 18.73 15.74 19.79 12.56 17.85 12.03 16.79 15.56 12.21 18.03 11.5 18.2 10.27 17.15 8.68 13.27 7.62 12.56 6.21 13.09 5.33Z" /></svg>
                  </div>
                  <h3 className="lvev-e6-item-title lvev-e6-item-title--2l">No Overnight or<br />Weekend Holding</h3>
                  <p className="lvev-e6-item-desc">Overnight and weekend holding is not allowed on these accounts.</p>
                </article>
              </div>
              <div className="lvev-e6-col lvev-e6-col--mid">
                <article className="lvev-e6-item">
                  <div className="lvev-e6-icon" aria-hidden="true">
                    <svg viewBox="0 0 32 32" width={32} height={32} fill="currentColor"><path fillRule="evenodd" d="M22.26 16.79 19.44 17.68 17.85 19.09 16.79 22.44 17.5 25.08 19.09 26.85 20.85 27.73 23.14 27.9 25.08 27.2 27.37 24.73 27.73 21.56 27.37 19.97 25.79 18.03ZM4.98 17.5 3.74 19.26 3.92 25.96 4.45 26.85 6.21 27.9 13.27 27.73 14.85 25.96 14.85 18.91 14.15 17.68 12.38 16.79 6.57 16.79ZM5.33 4.1 3.74 6.04 3.74 12.56 4.45 13.97 6.21 15.03 12.56 15.03 14.15 14.32 14.85 13.09 14.85 5.68 13.27 4.1ZM17.5 4.8 16.79 6.57 16.79 12.03 17.15 13.62 18.2 14.68 25.61 15.03 27.55 13.62 27.9 6.39 26.32 4.1 19.79 3.92Z" /></svg>
                  </div>
                  <h3 className="lvev-e6-item-title">Monthly or One-Time Eval.</h3>
                  <p className="lvev-e6-item-desc">Choose between a monthly or one-time evaluation on Lvlup Accounts. Starter is one-time fee only.</p>
                </article>
                <article className="lvev-e6-item">
                  <div className="lvev-e6-icon" aria-hidden="true">
                    <svg viewBox="0 0 32 32" width={32} height={32} fill="currentColor"><path fillRule="evenodd" d="M15.03 18.03 17.15 22.26 16.97 25.43 15.21 28.96 24.02 28.96 25.96 28.26 28.08 26.32 28.96 24.2 28.96 22.61 28.26 20.67 26.32 18.73 24.38 17.85ZM7.8 17.85 5.51 18.73 3.74 20.5 3.04 24.38 3.92 26.49 5.68 28.08 7.8 28.96 9.39 28.96 11.5 28.26 14.15 25.43 14.32 22.26 12.38 19.09 9.92 17.85ZM21.73 3.04 20.14 3.74 18.2 5.68 17.5 9.21 18.03 10.97 19.62 12.91 21.73 13.97 24.2 14.15 26.49 13.27 28.08 11.68 28.96 10.09 28.96 7.09 26.67 3.92 24.73 3.04ZM3.74 5.68 3.04 6.92 3.04 9.92 3.92 11.68 5.86 13.44 7.62 14.15 16.97 13.97 14.85 9.74 15.03 6.92 16.97 3.04 7.09 3.04Z" /></svg>
                  </div>
                  <h3 className="lvev-e6-item-title">Activation Fee After Passing</h3>
                  <p className="lvev-e6-item-desc">For Lvlup Accounts, an activation fee is required after passing. For Starter Accounts, there is no activation fee.</p>
                </article>
              </div>
              <div className="lvev-e6-col lvev-e6-col--side lvev-e6-col--right">
                <article className="lvev-e6-item">
                  <div className="lvev-e6-icon" aria-hidden="true">
                    <svg viewBox="0 0 32 32" width={32} height={32} fill="currentColor"><path fillRule="evenodd" d="M19.97 6.57 19.26 7.27 19.44 24.73 20.14 25.43 26.32 25.43 28.08 24.55 29.67 22.26 29.49 9.03 26.85 6.57ZM4.8 6.57 3.21 7.62 1.8 10.44 1.8 21.38 2.33 22.97 5.15 25.43 11.68 25.43 12.21 24.73 12.21 7.09 11.86 6.57 9.74 6.39ZM15.38 3.92 14.68 4.8 14.85 27.2 16.09 27.9 16.97 27.2 16.97 4.63Z" /></svg>
                  </div>
                  <h3 className="lvev-e6-item-title">100% Base Profit Split</h3>
                  <p className="lvev-e6-item-desc">Keep up to 100% of eligible profits generated on your funded Starter Account and an 80% base profit split on Lvlup Accounts.</p>
                </article>
                <article className="lvev-e6-item">
                  <div className="lvev-e6-icon" aria-hidden="true">
                    <svg viewBox="0 0 32 32" width={32} height={32} fill="currentColor"><path fillRule="evenodd" d="M11.68 5.15 7.8 7.27 4.1 11.86 3.21 15.74 3.39 19.79 4.8 23.14 9.39 27.37 13.09 28.79 19.26 28.26 22.26 26.67 24.38 24.73 26.49 21.38 27.2 18.2 25.79 16.97 15.91 16.97 15.21 16.26 14.5 5.86 13.8 5.15ZM18.38 3.21 17.68 4.45 17.85 13.62 18.38 14.15 28.26 14.15 29.14 13.09 29.14 12.03 27.2 7.45 22.61 3.74 20.85 3.04Z" /></svg>
                  </div>
                  <h3 className="lvev-e6-item-title">Up to $1M Total Allocation</h3>
                  <p className="lvev-e6-item-desc">Build your funded allocation across eligible accounts up to a combined $1,000,000.</p>
                </article>
                <article className="lvev-e6-item">
                  <div className="lvev-e6-icon" aria-hidden="true">
                    <svg viewBox="0 0 32 32" width={32} height={32} fill="currentColor"><path fillRule="evenodd" d="M12.91 3.04 8.33 5.15 4.45 9.39 3.04 12.91 3.04 18.73 5.15 23.32 9.74 27.37 14.15 28.79 19.97 28.26 23.85 26.14 27.37 22.08 28.96 16.26 28.26 11.68 25.96 7.62 22.26 4.45 18.73 3.04ZM15.74 6.74 17.15 7.62 17.15 15.38 21.2 19.62 20.14 21.2 18.73 20.67 14.5 16.09 14.68 7.45Z" /></svg>
                  </div>
                  <h3 className="lvev-e6-item-title lvev-e6-item-title--2l">Payout Processing<br />Within 48 Hours</h3>
                  <p className="lvev-e6-item-desc">Approved payouts are processed within a maximum of 48 hours, with no internal payout fee charged by Lvlup Futures.</p>
                </article>
              </div>
            </div>
            <div className="lvev-e6-cta">
              <a className="lvev-e6-btn lvev-e6-btn--primary" href="#pricing" style={{ boxShadow: '0 7px 16px -5px rgba(0,0,0,.35), 0 0 9px rgba(0,150,255,.22), inset 0 2px 2px rgba(255,255,255,.5), 0 0 0 2px rgba(0,0,0,.17), inset -1px -2px 10px #52b8f1, inset -1px -2px 5px #00a4ff' }}>
                <span className="lvev-e6-btn-tile" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width={18} height={18} fill="white" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><path d="M9 7h8v8" /></svg>
                </span>
                Choose Your Evaluation
              </a>
              <a className="lvev-e6-btn lvev-e6-btn--ghost" href="/rules">View all the Rules</a>
            </div>
          </div>
        </section>
        {/* Shared trading-conditions dialog */}
        <div className="lvf-conditions-modal" data-lvf-conditions-modal hidden>
          <div className="lvf-conditions-backdrop" data-lvf-conditions-close />
          <div className="lvf-conditions-dialog" role="dialog" aria-modal="true" aria-labelledby="lvf-conditions-title">
            <button className="lvf-conditions-x" type="button" data-lvf-conditions-close aria-label="Close">×</button>
            <div className="lvf-conditions-head">
              <p className="lvf-conditions-kicker">Quick Rules Overview</p>
              <h2 className="lvf-conditions-title" id="lvf-conditions-title">Know the <span className="lvf-conditions-title-hl">Conditions Before You Trade</span></h2>
              <p className="lvf-conditions-sub">Check the rules that shape your evaluation, funded account and payout eligibility.</p>
              <div className="lvf-conditions-tabs" role="tablist" aria-label="Account conditions">
                <button className="lvf-conditions-tab" type="button" role="tab" aria-selected="false" tabIndex={-1} data-lvf-conditions-tab="lvlup">Lvlup Accounts</button>
                <button className="lvf-conditions-tab is-active" type="button" role="tab" aria-selected="true" data-lvf-conditions-tab="starter">Starter Accounts</button>
              </div>
            </div>
            <div className="lvf-conditions-frame">
              <div className="lvf-conditions-panel" role="tabpanel" data-lvf-conditions-panel="lvlup" hidden>
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
                    <p className="lvf-conditions-row-d">Choose monthly or one-time evaluation payment inside the external dashboard. After passing, the required activation fee must be paid before the funded account becomes active.</p>
                  </div>
                </div>
              </div>
              <div className="lvf-conditions-panel is-active" role="tabpanel" data-lvf-conditions-panel="starter">
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
        {/* e7-faq */}
        {/* Sektion e7-faq (Evaluation-Seite): "Frequently Asked Questions", Akkordeon mit
     6 Fragen (erste offen), darunter "View Rules Summary"-Pill und
     "Open Full Trading Rules ->"-Link. Inhaltlich identisch zur Startseiten-FAQ (s09),
     Kopf ohne Kicker-Pill. Desktop exakt nach Figma (Frame 1760, Band y=7210..8380,
     Content-Spalte x=260..1500), Mobile gestapelt. Hintergrund transparent, lokale
     Glows laufen weich in die Nachbarsektionen aus. */}
        <section className="lvev-e7" id="faq" aria-labelledby="lvev-e7-title">
          <div className="lvev-e7-bg" aria-hidden="true" />
          <div className="lvf-container lvev-e7-inner">
            {/* Kopfblock: H2 + Subline (kein Kicker in diesem Design) */}
            <div className="lvev-e7-head">
              <p className="lvev-e7-kicker">FAQ'S</p>
              <h2 className="lvev-e7-title" id="lvev-e7-title">Frequently Asked <span className="lvev-e7-title-accent">Questions</span></h2>
              <p className="lvev-e7-sub">Key details before entering an evaluation.</p>
            </div>
            {/* Akkordeon */}
            <div className="lvev-e7-list" data-lvev-e7-accordion>
              <div className="lvev-e7-item is-open" data-lvev-e7-item>
                <span className="lvev-e7-glow" aria-hidden="true" />
                <span className="lvev-e7-line lvev-e7-line--a" aria-hidden="true" />
                <span className="lvev-e7-line lvev-e7-line--b" aria-hidden="true" />
                <h3 className="lvev-e7-qh">
                  <button className="lvev-e7-q" type="button" id="lvev-e7-q1" aria-expanded="true" aria-controls="lvev-e7-a1">
                    <span className="lvev-e7-qtext">How much can I withdraw?</span>
                    <span className="lvev-e7-btn" aria-hidden="true">
                      <svg className="lvev-e7-ico lvev-e7-ico--plus" viewBox="0 0 18 18" fill="none" focusable="false"><path d="M4.5 9h9M9 4.5v9" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" /></svg>
                      <svg className="lvev-e7-ico lvev-e7-ico--minus" viewBox="0 0 18 18" fill="none" focusable="false"><path d="M3.5 9h11" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" /></svg>
                    </span>
                  </button>
                </h3>
                <div className="lvev-e7-panel" id="lvev-e7-a1" role="region" aria-labelledby="lvev-e7-q1">
                  <div className="lvev-e7-panel-in">
                    <div className="lvev-e7-answer">
                      <p>You can request a payout of up to 10% of your account’s starting balance every 14 days.</p>
                      <p>For example, with Lvlup Futures’ maximum allocation of $1,000,000, you may request up to $100,000 every 14 days, subject to the applicable payout rules.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lvev-e7-item" data-lvev-e7-item>
                <span className="lvev-e7-glow" aria-hidden="true" />
                <h3 className="lvev-e7-qh">
                  <button className="lvev-e7-q" type="button" id="lvev-e7-q2" aria-expanded="false" aria-controls="lvev-e7-a2">
                    <span className="lvev-e7-qtext">Which trading platforms are available?</span>
                    <span className="lvev-e7-btn" aria-hidden="true">
                      <svg className="lvev-e7-ico lvev-e7-ico--plus" viewBox="0 0 18 18" fill="none" focusable="false"><path d="M4.5 9h9M9 4.5v9" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" /></svg>
                      <svg className="lvev-e7-ico lvev-e7-ico--minus" viewBox="0 0 18 18" fill="none" focusable="false"><path d="M3.5 9h11" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" /></svg>
                    </span>
                  </button>
                </h3>
                <div className="lvev-e7-panel" id="lvev-e7-a2" role="region" aria-labelledby="lvev-e7-q2">
                  <div className="lvev-e7-panel-in">
                    <div className="lvev-e7-answer">
                      <p>You can trade every Lvlup Futures account on DX Trade or on Volumetrica. Our own platform, the Lvlup Trading Terminal, is in development and will be added as a third option. Platform access is part of the evaluation, so there is nothing extra to buy.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lvev-e7-item" data-lvev-e7-item>
                <span className="lvev-e7-glow" aria-hidden="true" />
                <h3 className="lvev-e7-qh">
                  <button className="lvev-e7-q" type="button" id="lvev-e7-q3" aria-expanded="false" aria-controls="lvev-e7-a3">
                    <span className="lvev-e7-qtext">Which countries are restricted?</span>
                    <span className="lvev-e7-btn" aria-hidden="true">
                      <svg className="lvev-e7-ico lvev-e7-ico--plus" viewBox="0 0 18 18" fill="none" focusable="false"><path d="M4.5 9h9M9 4.5v9" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" /></svg>
                      <svg className="lvev-e7-ico lvev-e7-ico--minus" viewBox="0 0 18 18" fill="none" focusable="false"><path d="M3.5 9h11" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" /></svg>
                    </span>
                  </button>
                </h3>
                <div className="lvev-e7-panel" id="lvev-e7-a3" role="region" aria-labelledby="lvev-e7-q3">
                  <div className="lvev-e7-panel-in">
                    <div className="lvev-e7-answer">
                      <p>A small number of jurisdictions cannot be served for legal and sanctions reasons. The current list is part of the full trading rules and is verified during KYC, so please check it before you buy an evaluation.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lvev-e7-item" data-lvev-e7-item>
                <span className="lvev-e7-glow" aria-hidden="true" />
                <h3 className="lvev-e7-qh">
                  <button className="lvev-e7-q" type="button" id="lvev-e7-q4" aria-expanded="false" aria-controls="lvev-e7-a4">
                    <span className="lvev-e7-qtext">Is there a daily loss limit?</span>
                    <span className="lvev-e7-btn" aria-hidden="true">
                      <svg className="lvev-e7-ico lvev-e7-ico--plus" viewBox="0 0 18 18" fill="none" focusable="false"><path d="M4.5 9h9M9 4.5v9" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" /></svg>
                      <svg className="lvev-e7-ico lvev-e7-ico--minus" viewBox="0 0 18 18" fill="none" focusable="false"><path d="M3.5 9h11" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" /></svg>
                    </span>
                  </button>
                </h3>
                <div className="lvev-e7-panel" id="lvev-e7-a4" role="region" aria-labelledby="lvev-e7-q4">
                  <div className="lvev-e7-panel-in">
                    <div className="lvev-e7-answer">
                      <p>No. Lvlup Futures does not use a daily loss limit. The only drawdown rule is the end-of-day trailing drawdown, which is measured on your balance at the close of each trading day. That leaves room to hold a position through intraday volatility without failing the account.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lvev-e7-item" data-lvev-e7-item>
                <span className="lvev-e7-glow" aria-hidden="true" />
                <h3 className="lvev-e7-qh">
                  <button className="lvev-e7-q" type="button" id="lvev-e7-q5" aria-expanded="false" aria-controls="lvev-e7-a5">
                    <span className="lvev-e7-qtext">What is KYC, and which provider does Lvlup Futures use?</span>
                    <span className="lvev-e7-btn" aria-hidden="true">
                      <svg className="lvev-e7-ico lvev-e7-ico--plus" viewBox="0 0 18 18" fill="none" focusable="false"><path d="M4.5 9h9M9 4.5v9" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" /></svg>
                      <svg className="lvev-e7-ico lvev-e7-ico--minus" viewBox="0 0 18 18" fill="none" focusable="false"><path d="M3.5 9h11" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" /></svg>
                    </span>
                  </button>
                </h3>
                <div className="lvev-e7-panel" id="lvev-e7-a5" role="region" aria-labelledby="lvev-e7-q5">
                  <div className="lvev-e7-panel-in">
                    <div className="lvev-e7-answer">
                      <p>KYC stands for Know Your Customer: the identity check every trader completes before the first payout is released. It runs online through our verification partner and only has to be done once, not for every payout. The provider currently in use is named in the full trading rules.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lvev-e7-item" data-lvev-e7-item>
                <span className="lvev-e7-glow" aria-hidden="true" />
                <h3 className="lvev-e7-qh">
                  <button className="lvev-e7-q" type="button" id="lvev-e7-q6" aria-expanded="false" aria-controls="lvev-e7-a6">
                    <span className="lvev-e7-qtext">Is the evaluation billed monthly?</span>
                    <span className="lvev-e7-btn" aria-hidden="true">
                      <svg className="lvev-e7-ico lvev-e7-ico--plus" viewBox="0 0 18 18" fill="none" focusable="false"><path d="M4.5 9h9M9 4.5v9" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" /></svg>
                      <svg className="lvev-e7-ico lvev-e7-ico--minus" viewBox="0 0 18 18" fill="none" focusable="false"><path d="M3.5 9h11" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" /></svg>
                    </span>
                  </button>
                </h3>
                <div className="lvev-e7-panel" id="lvev-e7-a6" role="region" aria-labelledby="lvev-e7-q6">
                  <div className="lvev-e7-panel-in">
                    <div className="lvev-e7-answer">
                      <p>That is your choice. Every evaluation can be paid as a monthly plan or as a single one-time payment. The trading rules, the platforms and the 80% profit split are identical either way.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* CTAs */}
            <div className="lvev-e7-cta">
              <button className="lvev-e7-pill" type="button" data-lvf-open="conditions">
                <svg className="lvev-e7-pill-ico" viewBox="0 0 12 13" fill="none" aria-hidden="true" focusable="false">
                  <defs>
                    <linearGradient id="lvev-e7-grad-rules" x1={6} y1={0} x2={6} y2={13} gradientUnits="userSpaceOnUse">
                      <stop stopColor="#87d3ff" />
                      <stop offset={1} stopColor="#14a6fa" />
                    </linearGradient>
                  </defs>
                  <path fill="url(#lvev-e7-grad-rules)" fillRule="evenodd" clipRule="evenodd" d="M1.8 0h4.9L12 5.1v6.1c0 1-.8 1.8-1.8 1.8H1.8C.8 13 0 12.2 0 11.2V1.8C0 .8.8 0 1.8 0Zm.8 6.9h6.8v1.2H2.6V6.9Zm4.6 2.6H2.6v1.2h4.6V9.5Z" />
                </svg>
                <span className="lvev-e7-pill-text">View Rules Summary</span>
              </button>
              <a className="lvev-e7-link" href="/rules">Open Full Trading Rules →</a>
            </div>
          </div>
          {/* </section> */}
          {/* e8-cta */}
          {/* Sektion e8-cta (Evaluation-Seite): Abschluss-CTA-Karte "Choose $25K-$150K /
     Build Toward $1M" mit Subline, 4 Kennzahlen (100% Profit Split, $1M Max Funding,
     10% Payout Access, Five Min Trading Day) und 2 Buttons ("Choose Your Evaluation",
     "View the Rules"). Desktop exakt nach Figma (Frame 1760, Karte box 261,8298,
     1239x547, Radius 45, 10px Aussenkontur als Verlauf), Mobile gestapelt.
     Hintergrund transparent, lokale Glows laufen weich in die Nachbarsektionen aus.
     Footer-Leiste (Logo/Social) gehoert zum gemeinsamen Footer-Fragment, nicht hierher. */}
          {/* <section className="lvev-e8" id="get-started" aria-labelledby="lvev-e8-title" style={{ paddingTop: 40, paddingBottom: 40 }}> */}
          <div className="lvf-container lvev-e8-inner" style={{ maxWidth: 1152, margin: '0 auto', width: '100%', padding: '0 1rem', paddingTop: 40, paddingBottom: 40 }}>
            <div style={{ position: 'relative', width: '100%' }}>
              <img src="assets/media/CTA_frame.png" alt="Choose Your Evaluation - Build Toward $1M" style={{ width: '100%', height: 'auto', objectFit: 'contain', borderRadius: 40, display: 'block', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }} />
              {/* Transparent functional links mapped over the baked-in image buttons */}
              <a href="#pricing" aria-label="Choose Your Evaluation" style={{ position: 'absolute', left: '25%', top: '65%', width: '24%', height: '25%', zIndex: 10, display: 'block' }} />
              <a href="/rules" aria-label="View the Rules" style={{ position: 'absolute', left: '51%', top: '65%', width: '24%', height: '25%', zIndex: 10, display: 'block' }} />
            </div>
          </div>
        </section>
      </div>
      {/* Trading Conditions popup — same modal used on the home page */}
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
                  <p className="lvf-conditions-row-d">Choose Monthly or One-Time evaluation payment. After passing, the required activation fee must be paid before the funded account becomes active.</p>
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
      <Script src="/assets/js/live/evaluation.js" strategy="lazyOnload" />
      {/* Load the home JS so the conditions modal open/close logic runs on this page too */}
      <Script src="/assets/js/live/lvlup-home.js" strategy="lazyOnload" />
    </>
  );
}
