// @ts-nocheck
import Script from 'next/script';

export default function Page() {
  return (
    <>
      <link rel="stylesheet" href="/assets/css/live/post-5024.css" />
      <link rel="stylesheet" href="/assets/css/live/post-5015.css" />
      <link rel="stylesheet" href="/assets/css/contact.css" />
      <div>
        <div className="lvf-page lvct-page">
          {/* ============================================================
 Sektion 1 - Hero                       Referenz y    0 ..  640
 ============================================================ */}
          <section className="lvct-hero">
            <div className="lvct-hero-bg" aria-hidden="true" />
            <div className="lvct-shell lvct-hero-inner">
              <p className="lvct-eyebrow lvct-eyebrow--hero">
                <span className="lvct-eyebrow-dot" aria-hidden="true" />
                <span className="lvct-eyebrow-txt"><span className="lvct-eyebrow-hl">Contact</span> Lvlup</span>
              </p>
              <h1 className="lvct-hero-title">
                <span className="lvct-hero-l1">Need Help?</span>
                <span className="lvct-hero-l2">You’re in the Right Place.</span>
              </h1>
              <p className="lvct-hero-sub">Whether it's your evaluation, funded account, payout, platform, billing, or something else, our support team is here to help you find the right answer and keep moving.</p>
              <div className="lvct-hero-actions">
                {/* Ziel des Live-Chats ist nirgends bestaetigt -> bewusst ohne href */}
                <span className="lvct-btn lvct-btn--primary lvct-btn--hero" data-lvct-link="live-chat">
                  <span className="lvct-btn-ico" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" focusable="false">
                      <path d="M6.5 17.5 17.5 6.5M9 6.5h8.5V15" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="lvct-btn-label">Start Live Chat</span>
                </span>
                {/* Ziel des Help Centers ist nirgends bestaetigt -> bewusst ohne href */}
                <span className="lvct-btn lvct-btn--ghost lvct-btn--hero" data-lvct-link="help-center">
                  <span className="lvct-btn-label">Visit Help Center</span>
                </span>
              </div>
            </div>
          </section>
          {/* ============================================================
 Sektion 2 - Choose How You'd Like to Connect
                                        Referenz y  640 .. 1709
 ============================================================ */}
          <section className="lvct-connect">
            <div className="lvct-connect-glow" aria-hidden="true" />
            <div className="lvct-shell">
              <p className="lvct-eyebrow lvct-eyebrow--plain">Get the Right Help</p>
              <h2 className="lvct-connect-title">
                <span className="lvct-head-silver">Choose How You’d </span><span className="lvct-head-blue">Like to Connect</span>
              </h2>
              <p className="lvct-sectionsub">Different questions need different routes. Choose the option that best matches what you need.</p>
              <div className="lvct-cards">
                <article className="lvct-card">
                  <img className="lvct-card-wm lvct-card-wm--chat" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvct-icon-livechat.webp" alt aria-hidden="true" />
                  <span className="lvct-card-icobox">
                    <img src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvct-icon-livechat.webp" alt width={36} height={36} />
                  </span>
                  <h3 className="lvct-card-title">Live Chat</h3>
                  <p className="lvct-card-text">The fastest way to get help with general account, billing, platform,<br className="lvct-brk" /> or dashboard questions.</p>
                  <div className="lvct-card-foot">
                    {/* Ziel des Live-Chats ist nirgends bestaetigt -> bewusst ohne href.
           Als button statt span, damit die Flaeche wenigstens per Tastatur
           erreichbar und ausloesbar ist (Korrektur 12.08.). */}
                    <button type="button" className="lvct-btn lvct-btn--primary lvct-btn--card" data-lvct-link="live-chat">
                      <span className="lvct-btn-label">Start Live Chat</span>
                    </button>
                    <span className="lvct-card-note">Available 24/7</span>
                  </div>
                </article>
                <article className="lvct-card">
                  <img className="lvct-card-wm lvct-card-wm--help" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvct-icon-helpcenter.webp" alt aria-hidden="true" />
                  <span className="lvct-card-icobox">
                    <img src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvct-icon-helpcenter.webp" alt width={36} height={36} />
                  </span>
                  <h3 className="lvct-card-title">Help Center</h3>
                  <p className="lvct-card-text">Find answers to common questions about evaluations, billing, payouts,<br className="lvct-brk" /> platforms, account types, Elite, and more.</p>
                  <div className="lvct-card-foot">
                    {/* Ziel des Help Centers ist nirgends bestaetigt -> bewusst ohne href.
           Als button statt span, damit die Flaeche wenigstens per Tastatur
           erreichbar und ausloesbar ist (Korrektur 12.08.). */}
                    <button type="button" className="lvct-btn lvct-btn--primary lvct-btn--card" data-lvct-link="help-center">
                      <span className="lvct-btn-label">Visit Help Center</span>
                    </button>
                    <span className="lvct-card-note">Browse guides and FAQs anytime.</span>
                  </div>
                </article>
                <article className="lvct-card">
                  <img className="lvct-card-wm lvct-card-wm--send" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvct-icon-request.webp" alt aria-hidden="true" />
                  <span className="lvct-card-icobox">
                    <img src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvct-icon-request.webp" alt width={36} height={36} />
                  </span>
                  <h3 className="lvct-card-title">Send A Request</h3>
                  <p className="lvct-card-text">Have a question that needs more detail? Send our team a message with<br className="lvct-brk" /> your account information and enquiry.</p>
                  <div className="lvct-card-foot">
                    <a className="lvct-btn lvct-btn--primary lvct-btn--card" href="#lvct-kontaktformular">
                      <span className="lvct-btn-label">Send a Message</span>
                    </a>
                    <span className="lvct-card-note">Best for detailed account enquiries.</span>
                  </div>
                </article>
                <article className="lvct-card">
                  <img className="lvct-card-wm lvct-card-wm--community" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvct-icon-community.webp" alt aria-hidden="true" />
                  <span className="lvct-card-icobox">
                    <img src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvct-icon-community.webp" alt width={36} height={36} />
                  </span>
                  <h3 className="lvct-card-title">Lvlup Community</h3>
                  <p className="lvct-card-text">Connect with the wider Lvlup community, follow announcements, and<br className="lvct-brk" /> stay close to what's happening.</p>
                  <div className="lvct-card-foot">
                    {/* Discord-Einladung ist nirgends bestaetigt -> bewusst ohne href.
           Als button statt span, damit die Flaeche wenigstens per Tastatur
           erreichbar und ausloesbar ist (Korrektur 12.08.). */}
                    <button type="button" className="lvct-btn lvct-btn--primary lvct-btn--card" data-lvct-link="community">
                      <span className="lvct-btn-label">Join the Community</span>
                    </button>
                    <span className="lvct-card-note">Community, updates and discussions.</span>
                  </div>
                </article>
              </div>
            </div>
          </section>
          {/* ============================================================
 Sektion 3 - Tell Us What You Need (Formular)
                                        Referenz y 1709 .. 2735
 ============================================================ */}
          <section className="lvct-formsec" id="lvct-kontaktformular">
            <div className="lvct-formsec-glow" aria-hidden="true" />
            <div className="lvct-shell">
              <p className="lvct-eyebrow lvct-eyebrow--wide">Contact Support</p>
              <h2 className="lvct-formsec-title">
                <span className="lvct-head-silver">Tell Us What </span><span className="lvct-head-blue">You Need</span>
              </h2>
              <p className="lvct-sectionsub">Give us a little context and we'll make sure your enquiry reaches the right place.</p>
              <form className="lvct-panel" action="#" method="post" noValidate>
                <div className="lvct-field">
                  <label className="lvct-label" htmlFor="lvct-name">Full Name<span className="lvct-req" aria-hidden="true">*</span></label>
                  <input className="lvct-input" id="lvct-name" name="full-name" type="text" autoComplete="name" placeholder="Enter your full name" required />
                </div>
                <div className="lvct-field">
                  <label className="lvct-label" htmlFor="lvct-email">Email Address<span className="lvct-req" aria-hidden="true">*</span></label>
                  <input className="lvct-input" id="lvct-email" name="email" type="email" autoComplete="email" placeholder="Enter your email address" required />
                </div>
                <div className="lvct-field">
                  <label className="lvct-label" htmlFor="lvct-account">Account #<span className="lvct-req" aria-hidden="true">*</span></label>
                  <input className="lvct-input" id="lvct-account" name="account" type="text" placeholder="Enter your account number" required />
                </div>
                <div className="lvct-field">
                  <label className="lvct-label" htmlFor="lvct-subject">Subject<span className="lvct-req" aria-hidden="true">*</span></label>
                  <input className="lvct-input" id="lvct-subject" name="subject" type="text" placeholder="What can we help you with?" required />
                </div>
                <div className="lvct-field lvct-field--msg">
                  <label className="lvct-label" htmlFor="lvct-message">Message<span className="lvct-req" aria-hidden="true">*</span></label>
                  <textarea className="lvct-input lvct-textarea" id="lvct-message" name="message" placeholder="Describe your question or issue and include any relevant details that may help our team assist you." required defaultValue={""} />
                </div>
                <button className="lvct-send" type="submit">
                  <span className="lvct-send-label">Send Message</span>
                  <span className="lvct-send-ico" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" focusable="false">
                      <path d="M6 18 18 6M8.5 6H18v9.5" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
              </form>
            </div>
          </section>
          {/* ============================================================
 Sektion 4 und 5 in einer gemeinsamen Huelle, weil die seitlichen
 Scheine ueber die Sektionsgrenze y 3605 hinweg durchlaufen.
                                        Referenz y 2735 .. 4252
 ============================================================ */}
          <div className="lvct-band2">
            <span className="lvct-band2-glow" aria-hidden="true" />
            {/* Sektion 4 - Schnellzugriff auf das Help Center   y 2735 .. 3605 */}
            <section className="lvct-quick" aria-labelledby="lvct-quick-h">
              <div className="lvct-wrap">
                <p className="lvct-pill">Save Yourself Some Time</p>
                <h2 className="lvct-quick-h" id="lvct-quick-h">Your Answer May <span className="lvct-quick-h-b">Already Be Waiting</span></h2>
                <p className="lvct-quick-sub">Our Help Center covers the most common questions about accounts, payments, verification, <br className="lvct-nl" />payouts, platforms, billing, and more.</p>
                <p className="lvct-quick-lbl">Quick Links:</p>
                <div className="lvct-qgrid">
                  <article className="lvct-qcard">
                    <h3 className="lvct-qcard-h">Account Types</h3>
                    <p className="lvct-qcard-t">Understand The Difference Between <br className="lvct-nl" />Lvlup And Starter Accounts.</p>
                  </article>
                  <article className="lvct-qcard">
                    <h3 className="lvct-qcard-h">Billing &amp; Payments</h3>
                    <p className="lvct-qcard-t">Learn How Monthly, One-Time And <br className="lvct-nl" />Activation Payments Work.</p>
                  </article>
                  <article className="lvct-qcard">
                    <h3 className="lvct-qcard-h">Payouts</h3>
                    <p className="lvct-qcard-t">Find Answers About Payout Access, <br className="lvct-nl" />Processing And Verification.</p>
                  </article>
                  <article className="lvct-qcard">
                    <h3 className="lvct-qcard-h">Platforms</h3>
                    <p className="lvct-qcard-t">Get Information About DXtrade, <br className="lvct-nl" />Volumetrica And Platform Access.</p>
                  </article>
                  <article className="lvct-qcard">
                    <h3 className="lvct-qcard-h">KYC &amp; Verification</h3>
                    <p className="lvct-qcard-t">Understand When Verification Is <br className="lvct-nl" />Required And How It Works.</p>
                  </article>
                  <article className="lvct-qcard">
                    <h3 className="lvct-qcard-h">Account Breach</h3>
                    <p className="lvct-qcard-t">See What Happens When An Account <br className="lvct-nl" />Is Breached.</p>
                  </article>
                </div>
                <p className="lvct-quick-act"><a className="lvct-faqbtn" href="/faqs">Explore All FAQs</a></p>
              </div>
            </section>
            {/* Sektion 5 - Abschlusskarte                       y 3605 .. 4252 */}
            <section className="lvct-final" aria-labelledby="lvct-final-h">
              <div className="lvct-wrap">
                <div className="lvct-final-card">
                  <div className="lvct-final-inner">
                    <img className="lvct-final-plate" src="https://lvlup.tivaosagencytempdomains.de/wp-content/uploads/2026/08/lvct-final-plate.webp" alt aria-hidden="true" width={1240} height={547} />
                    <div className="lvct-final-body">
                      <h2 className="lvct-final-h" id="lvct-final-h"><span className="lvct-final-h-b">Whatever the Question</span><span className="lvct-final-h-s">Start With the Right Team.</span></h2>
                      <p className="lvct-final-t">Account issue? Talk to support.<br />Looking for information? Visit the Help Center.<br />Business enquiry? Contact Lvlup directly.</p>
                      <div className="lvct-final-act">
                        {/* Ziel des Live-Chats ist nirgends bestaetigt: bewusst ohne href */}
                        <span className="lvct-cbtn lvct-cbtn--pri" data-lvct-link="live-chat">
                          <span className="lvct-cbtn-ico" aria-hidden="true">
                            <svg viewBox="0 0 14 14" width={14} height={14} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" focusable="false"><path d="M3.4 10.6 10.6 3.4" /><path d="M5.1 3.4h5.5v5.5" /></svg>
                          </span>
                          <span className="lvct-cbtn-lbl">Start Live Chat</span>
                        </span>
                        {/* Ziel des Help Centers ist nirgends bestaetigt: bewusst ohne href */}
                        <span className="lvct-cbtn lvct-cbtn--sec" data-lvct-link="help-center">Browse Help Center</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        {/* Traeger fuer die Fussnaht: liegt NEBEN .lvct-page, also ausserhalb des
     Schnitts von .lvct-band2. Siehe den Abschnitt am Ende des Stilblocks. */}
        <div className="lvct-fussnaht" aria-hidden="true">
          <span className="lvct-fussnaht-band" />
        </div>
      </div>

    </>
  );
}

