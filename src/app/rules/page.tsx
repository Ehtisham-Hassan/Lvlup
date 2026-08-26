'use client';
// @ts-nocheck
import React, { useState, useMemo, useRef, useEffect } from 'react';
import Script from 'next/script';

const RULES_INDEX = [
  { id: 'rule-account-types', title: 'Account Types', category: 'Evaluation', sectionId: 'evaluation-drawdown', text: 'Lvlup Accounts and Starter Accounts available in 25K, 50K, 100K and 150K sizes.' },
  { id: 'rule-one-step-eval', title: 'One-Step Evaluation', category: 'Evaluation', sectionId: 'evaluation-drawdown', text: 'One-step evaluation model without second evaluation phase.' },
  { id: 'rule-min-trading-days', title: 'Minimum Trading Days', category: 'Evaluation', sectionId: 'evaluation-drawdown', text: 'A minimum of five separate trading days is required.' },
  { id: 'rule-lvlup-eval-duration', title: 'Lvlup Evaluation Duration', category: 'Evaluation', sectionId: 'evaluation-drawdown', text: 'Unlimited evaluation duration as long as account remains active.' },
  { id: 'rule-lvlup-profit-targets', title: 'Lvlup Account Profit Targets', category: 'Evaluation', sectionId: 'evaluation-drawdown', text: '25K: 6% ($1,500), 50K: 6% ($3,000), 100K: 7% ($7,000), 150K: 8% ($12,000).' },
  { id: 'rule-starter-profit-targets', title: 'Starter Account Profit Targets', category: 'Evaluation', sectionId: 'evaluation-drawdown', text: '25K: 6% ($1,500), 50K: 6% ($3,000), 100K: 7% ($7,000), 150K: 8% ($12,000).' },
  { id: 'rule-starter-eval-duration', title: 'Starter Evaluation Duration', category: 'Evaluation', sectionId: 'evaluation-drawdown', text: 'Maximum duration of 30 days.' },
  { id: 'rule-account-inactivity', title: 'Account Inactivity', category: 'Evaluation', sectionId: 'evaluation-drawdown', text: 'Must record at least one executed trade every 30 days.' },
  { id: 'rule-lvlup-max-drawdown', title: 'Lvlup Accounts Maximum Drawdown', category: 'Drawdown', sectionId: 'drawdown-rules', text: '5% of starting balance (25K: $1,250, 50K: $2,500, 100K: $5,000, 150K: $7,500).' },
  { id: 'rule-starter-max-drawdown', title: 'Starter Accounts Maximum Drawdown', category: 'Drawdown', sectionId: 'drawdown-rules', text: '25K: 4% ($1,000), 50K: 4% ($2,000), 100K: 3% ($3,000), 150K: 3% ($4,500).' },
  { id: 'rule-starter-eod-drawdown', title: 'Starter Accounts EOD Trailing Drawdown', category: 'Drawdown', sectionId: 'drawdown-rules', text: 'End-of-day trailing drawdown based on closed balance.' },
  { id: 'rule-lvlup-eod-drawdown', title: 'Lvlup EOD Trailing Drawdown', category: 'Drawdown', sectionId: 'drawdown-rules', text: 'Trailing drawdown calculated from highest closed balance.' },
  { id: 'rule-lvlup-drawdown-lock', title: 'Lvlup Drawdown Lock', category: 'Drawdown', sectionId: 'drawdown-rules', text: 'Drawdown locks permanently at original starting balance upon reaching 6% profit.' },
  { id: 'rule-no-daily-loss-limit', title: 'No Daily Loss Limit', category: 'Drawdown', sectionId: 'drawdown-rules', text: 'No separate daily loss limit threshold.' },
  { id: 'rule-40-consistency', title: 'The 40% Consistency Requirement', category: 'Consistency', sectionId: 'consistency-rules', text: 'Best trading day must represent 40% or lower of total profit.' },
  { id: 'rule-consistency-example', title: 'Consistency Example', category: 'Consistency', sectionId: 'consistency-rules', text: 'Math calculation details for 40% consistency ratio.' },
  { id: 'rule-funded-consistency', title: 'Funded Consistency', category: 'Consistency', sectionId: 'consistency-rules', text: '40% consistency applies to funded payouts.' },
  { id: 'rule-consistency-not-breach', title: 'Failing Consistency Is Not a Breach', category: 'Consistency', sectionId: 'consistency-rules', text: 'Exceeding 40% does not close account; trader can continue building total profit.' },
  { id: 'rule-starter-consistency', title: 'Starter Evaluation Consistency', category: 'Consistency', sectionId: 'consistency-rules', text: '40% consistency requirement during evaluation.' },
  { id: 'rule-news-trading', title: 'News Trading Is Fully Allowed', category: 'Trading Conditions', sectionId: 'trading-conditions', text: 'Trading during scheduled economic news events is allowed with zero 3-minute restriction.' },
  { id: 'rule-weekend-holding', title: 'Weekend Holding Is Not Allowed', category: 'Trading Conditions', sectionId: 'trading-conditions', text: 'All positions must be closed before the weekend cutoff.' },
  { id: 'rule-hedging-one-account', title: 'Hedging Within One Account', category: 'Trading Conditions', sectionId: 'trading-conditions', text: 'Hedging inside the same account is permitted.' },
  { id: 'rule-trading-bots', title: 'Trading Bots', category: 'Trading Conditions', sectionId: 'trading-conditions', text: 'Traders may use their own trading bots or automated systems.' },
  { id: 'rule-overnight-holding', title: 'Overnight Holding Is Not Allowed', category: 'Trading Conditions', sectionId: 'trading-conditions', text: 'Positions cannot remain open overnight (close by 15:55 CST).' },
  { id: 'rule-session-reopening', title: 'Trading Session Reopening', category: 'Trading Conditions', sectionId: 'trading-conditions', text: 'Orders placed after 17:00 CST CME Globex open.' },
  { id: 'rule-holiday-trading', title: 'Holiday Trading Responsibility', category: 'Trading Conditions', sectionId: 'trading-conditions', text: 'Traders responsible for closing positions before holiday market closes.' },
  { id: 'rule-min-duration', title: 'Minimum Trade Duration', category: 'Trading Conditions', sectionId: 'trading-conditions', text: 'No minimum trade duration required.' },
  { id: 'rule-hft', title: 'High-Frequency Trading', category: 'Trading Conditions', sectionId: 'trading-conditions', text: 'High-frequency trading bots are prohibited.' },
  { id: 'rule-emini-micro-conversion', title: 'E-mini and Micro Conversion', category: 'Contracts & Limits', sectionId: 'contracts-and-payout', text: '1:10 conversion ratio (1 E-mini = 10 Micro contracts).' },
  { id: 'rule-exposure-aggregated', title: 'Exposure Is Aggregated', category: 'Contracts & Limits', sectionId: 'contracts-and-payout', text: 'Contract limits calculated across all open positions.' },
  { id: 'rule-max-total-allocation', title: 'Maximum Total Allocation', category: 'Contracts & Limits', sectionId: 'contracts-and-payout', text: 'Maximum total active allocation is $1,000,000 per trader.' },
  { id: 'rule-max-contract-limits', title: 'Maximum Contract Limits', category: 'Contracts & Limits', sectionId: 'contracts-and-payout', text: 'Position sizes: 25K (1 mini / 10 micro), 50K (3 mini), 100K (6 mini), 150K (9 mini).' },
  { id: 'rule-multiple-accounts', title: 'Multiple Accounts', category: 'Contracts & Limits', sectionId: 'contracts-and-payout', text: 'Traders may hold multiple evaluation or funded accounts up to $1M allocation.' },
  { id: 'rule-payout-eligibility', title: 'Payout Eligibility', category: 'Payouts', sectionId: 'payout-rules', text: 'Must satisfy 40% consistency and 14-day payout cycle.' },
  { id: 'rule-payout-processing', title: 'Payout Processing', category: 'Payouts', sectionId: 'payout-rules', text: 'Processed within 24 to 48 hours via Rise or Crypto.' },
  { id: 'rule-drawdown-after-payout', title: 'Drawdown After a Payout', category: 'Payouts', sectionId: 'payout-rules', text: 'Payout does not reset or lower drawdown threshold.' },
  { id: 'rule-payout-cycle', title: 'Payout Cycle', category: 'Payouts', sectionId: 'payout-rules', text: 'Biweekly 14-day payout cycle.' },
  { id: 'rule-max-payout-amount', title: 'Maximum Payout Amount', category: 'Payouts', sectionId: 'payout-rules', text: '10% of starting balance (25K: $2,500, 50K: $5,000, 100K: $10,000, 150K: $15,000).' },
  { id: 'rule-starter-reward-cycle', title: '5 Profitable Day Reward Cycle', category: 'Starter Payouts', sectionId: 'starter-payout-rules', text: 'Starter Funded Accounts use a 5 Profitable Trading Day Reward Cycle.' },
  { id: 'rule-starter-profit-split', title: '100% Profit Split', category: 'Starter Payouts', sectionId: 'starter-payout-rules', text: 'Starter Accounts use a 100% Profit Split.' },
  { id: 'rule-starter-50-percent', title: 'Maximum 50% Profit Withdrawal', category: 'Starter Payouts', sectionId: 'starter-payout-rules', text: 'Each Starter payout request may include a maximum of 50% of generated profit.' },
  { id: 'rule-starter-5-payouts', title: 'Maximum Five Payouts', category: 'Starter Payouts', sectionId: 'starter-payout-rules', text: 'Each Starter Account is limited to a maximum of 5 approved payouts.' },
  { id: 'rule-payout-compliance', title: 'Payout Rule Compliance', category: 'Starter Payouts', sectionId: 'starter-payout-rules', text: 'All payout conditions must be satisfied at time of request.' },
  { id: 'rule-starter-max-payout-caps', title: 'Starter Maximum Payout Caps', category: 'Starter Payouts', sectionId: 'starter-payout-rules', text: 'Position sizes and max payout limits per account size (25K-150K).' },
  { id: 'rule-starter-min-payout', title: 'Starter Minimum Payout', category: 'Starter Payouts', sectionId: 'starter-payout-rules', text: 'Minimum payout thresholds for Starter accounts.' },
  { id: 'rule-starter-account-lock', title: 'Account Lock During a Payout Request', category: 'Starter Payouts', sectionId: 'starter-payout-rules', text: 'Account is locked from trading while payout request is being processed.' },
  { id: 'rule-starter-account-deduction', title: 'Starter Payout Account Deduction', category: 'Starter Payouts', sectionId: 'starter-payout-rules', text: 'Full approved payout amount is deducted and goes to trader.' },

  { id: 'rule-dashboard-checkout', title: 'Website Selection and Dashboard Checkout', category: 'Billing & Lifecycle', sectionId: 'billing-protector', text: 'Account configuration, platform selection, payment option handled in dashboard.' },
  { id: 'rule-lvlup-onetime-eval', title: 'Lvlup One-Time Evaluation', category: 'Billing & Lifecycle', sectionId: 'billing-protector', text: 'One-Time Evaluation access without recurring monthly fee.' },
  { id: 'rule-no-funded-monthly-fee', title: 'No Funded Monthly Evaluation Fee', category: 'Billing & Lifecycle', sectionId: 'billing-protector', text: 'No ongoing monthly Evaluation subscription on Funded Account.' },
  { id: 'rule-no-starter-activation', title: 'No Starter Activation Fee', category: 'Billing & Lifecycle', sectionId: 'billing-protector', text: 'Starter accounts do not require activation fee after passing.' },
  { id: 'rule-subscription-cancellation', title: 'Monthly Subscription Cancellation', category: 'Billing & Lifecycle', sectionId: 'billing-protector', text: 'Cancel monthly evaluation through dashboard anytime.' },
  { id: 'rule-lvlup-monthly-eval', title: 'Lvlup Monthly Evaluation', category: 'Billing & Lifecycle', sectionId: 'billing-protector', text: 'Monthly evaluation payment applies while active.' },
  { id: 'rule-activation-fee', title: 'Lvlup Activation Fee', category: 'Billing & Lifecycle', sectionId: 'billing-protector', text: 'Mandatory post-pass activation fee paid within 30 days.' },
  { id: 'rule-starter-onetime-fee', title: 'Starter One-Time Fee', category: 'Billing & Lifecycle', sectionId: 'billing-protector', text: 'Starter Accounts available through One-Time Fee only.' },
  { id: 'rule-inactivity-req', title: 'Lvlup Inactivity Requirement', category: 'Billing & Lifecycle', sectionId: 'billing-protector', text: 'Must record at least one executed trade within 30-day period.' },
  { id: 'rule-no-reset-breach', title: 'No Reset After Breach', category: 'Billing & Lifecycle', sectionId: 'billing-protector', text: 'Breached account cannot be reset or reactivated.' },
  { id: 'rule-hard-breach', title: 'Hard Breach', category: 'Billing & Lifecycle', sectionId: 'billing-protector', text: 'Violation of critical trading or risk rule closes account.' },
  { id: 'rule-activation-fees-table', title: 'Lvlup Accounts Activation Fees', category: 'Billing & Lifecycle', sectionId: 'billing-protector', text: 'Table of activation fees for 25K to 150K accounts.' },

  { id: 'rule-protector-both-types', title: 'Available on Both Account Types', category: 'Payout Protector', sectionId: 'billing-protector', text: 'Payout Protector available on Lvlup and Starter accounts.' },
  { id: 'rule-protector-no-prevent-breach', title: 'Payout Protector Does Not Prevent a Breach', category: 'Payout Protector', sectionId: 'billing-protector', text: 'Does not increase drawdown or keep breached account open.' },
  { id: 'rule-how-protector-works', title: 'How Payout Protector Works', category: 'Payout Protector', sectionId: 'billing-protector', text: 'Reviews trading account and profit eligibility after breach.' },
  { id: 'rule-protector-active-before', title: 'Payout Protector Must Be Active Before Breach', category: 'Payout Protector', sectionId: 'billing-protector', text: 'Must be active on account before breach occurs.' },

  { id: 'rule-supported-platforms', title: 'Supported Trading Platforms', category: 'Platforms', sectionId: 'platforms-verification', text: 'Supports DXtrade and Volumetrica.' },
  { id: 'rule-commission-rates', title: 'Futures Commission Rates', category: 'Platforms', sectionId: 'platforms-verification', text: 'ES/NQ ($2.18), MES/MNQ ($0.71), Gold/Crude rates listed.' },
  { id: 'rule-kyc-verification', title: 'KYC Verification', category: 'Platforms', sectionId: 'platforms-verification', text: 'Identity verification required via Sumsub after passing.' },
  { id: 'rule-pricing-latency-exploitation', title: 'Pricing and Latency Exploitation', category: 'Prohibited Trading', sectionId: 'prohibited-trading-rules', text: 'Delayed price feeds, incorrect quotes, platform errors, latency differences and execution faults may not be exploited.' },
  { id: 'rule-no-minimum-trade-duration', title: 'No Minimum Trade Duration', category: 'Prohibited Trading', sectionId: 'prohibited-trading-rules', text: 'There is no minimum required duration for an individual trade, provided the activity does not violate HFT or technical-exploitation rules.' },
  { id: 'rule-prohibited-trading', title: 'Prohibited Trading Rules', category: 'Prohibited Trading', sectionId: 'prohibited-trading-rules', text: 'Latency exploitation, front-running, cross-account hedging, group trading prohibited.' },
];

export default function Page() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement | null>(null);

  const filteredRules = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    return RULES_INDEX.filter(
      (rule) =>
        rule.title.toLowerCase().includes(q) ||
        rule.category.toLowerCase().includes(q) ||
        rule.text.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectRule = (rule: (typeof RULES_INDEX)[0]) => {
    setIsOpen(false);
    const element = document.getElementById(rule.id) || document.getElementById(rule.sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      element.classList.add('lvr-card-highlight');
      setTimeout(() => {
        element.classList.remove('lvr-card-highlight');
      }, 3000);
    }
  };

  const handleSearchSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (filteredRules.length > 0) {
      handleSelectRule(filteredRules[0]);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://api.fontshare.com/v2/css?f[]=clash-grotesk@300,400,500,600,700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        /* Default Typography across page elements */
        .lvf-page, .lvf-page *, .lvf-page button, .lvf-page input, .lvf-page select, .lvf-page textarea {
          font-family: 'Clash Grotesk Variable', 'Clash Grotesk', 'Space Grotesk', sans-serif !important;
        }

        /* Main Page Title: Clash Grotesk / Space Grotesk 500 */
        .lvr-r1-title, h1.lvr-r1-title, h1 {
          font-family: 'Clash Grotesk Variable', 'Clash Grotesk', 'Space Grotesk', sans-serif !important;
          font-weight: 500 !important;
          letter-spacing: -0.5px !important;
        }

        /* Large Section Headings: Exact Figma Specs (Clash Grotesk Variable, 500 Medium, 41.11px Size, 93% Line Height, -2% Letter Spacing, Gradient Fill) */
        .lvr-r3-title, .lvr-r4-title, .lvr-r5-title, .lvr-r6-title, .lvr-r7-title, .lvr-r8-title, .lvr-r9-title, h2.lvr-r3-title, h2.lvr-r4-title, h2.lvr-r5-title, h2.lvr-r6-title, h2.lvr-r7-title, h2.lvr-r8-title, h2.lvr-r9-title, h2 {
          font-family: 'Clash Grotesk Variable', 'Clash Grotesk', 'Space Grotesk', sans-serif !important;
          font-size: 41.11px !important;
          font-weight: 500 !important;
          line-height: 93% !important;
          letter-spacing: -0.02em !important;
          background: linear-gradient(180deg, #FFFFFF 0%, #D0D8E0 100%) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          display: inline-flex !important;
          align-items: center !important;
          flex-wrap: wrap !important;
        }

        /* Card Titles: Exact Figma Properties (Clash Grotesk Variable, 400 Regular, 24.33px, Line Height 100%, Letter Spacing 2%, Color #FFFFFF 80%) */
        .lvr-r3-cardtitle, .lvr-r4-cardtitle, .lvr-r5-cardtitle, .lvr-r6-cardtitle, .lvr-r7-cardtitle, .lvr-r8-cardtitle, .lvr-r9-cardtitle, h3 {
          font-family: 'Clash Grotesk Variable', 'Clash Grotesk', 'Space Grotesk', sans-serif !important;
          font-size: 24.33px !important;
          font-weight: 400 !important;
          line-height: 100% !important;
          letter-spacing: 0.02em !important;
          color: rgba(255, 255, 255, 0.8) !important;
          margin: 0 !important;
        }

        /* Body & Description Text: 300 Light */
        .lvr-r3-body, .lvr-r4-body, .lvr-r5-body, .lvr-r6-body, .lvr-r7-body, .lvr-r8-body, .lvr-r9-body,
        .lvr-r3-body p, .lvr-r4-body p, .lvr-r5-body p, .lvr-r6-body p, .lvr-r7-body p, .lvr-r8-body p, .lvr-r9-body p,
        .lvr-r3-body li, .lvr-r4-body li, .lvr-r5-body li, .lvr-r6-body li, .lvr-r7-body li, .lvr-r8-body li, .lvr-r9-body li,
        .lvr-r1-sub, .lvr-r1-subtitle, .lvr-search-input, .lvr-search-results {
          font-family: 'Clash Grotesk Variable', 'Clash Grotesk', 'Space Grotesk', sans-serif !important;
          font-weight: 300 !important;
        }

        /* Ambient Left & Right Glow Orbs - Smooth Gradient rgb(37,145,202) -> rgb(150,218,247) */
        @keyframes lvrGlowLeftFloat {
          0% { transform: translateY(0) scale(1); opacity: 0.85; }
          50% { transform: translateY(50px) scale(1.1); opacity: 1; }
          100% { transform: translateY(0) scale(1); opacity: 0.85; }
        }

        @keyframes lvrGlowRightFloat {
          0% { transform: translateY(0) scale(1); opacity: 0.85; }
          50% { transform: translateY(-45px) scale(1.12); opacity: 1; }
          100% { transform: translateY(0) scale(1); opacity: 0.85; }
        }

        .lvr-page-glow-layer {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
          z-index: 1;
        }

        /* Glow Orbs Placement to match Figma Frame */
        .lvr-glow-top-right {
          position: absolute;
          top: 120px;
          right: -200px;
          width: 800px;
          height: 1100px;
          background: radial-gradient(ellipse at center, rgba(150, 218, 247, 0.55) 0%, rgba(37, 145, 202, 0.42) 45%, rgba(0, 3, 5, 0) 75%);
          filter: blur(85px);
          animation: lvrGlowRightFloat 16s ease-in-out infinite;
        }

        /* Left Side Heavy Glow */
        .lvr-glow-left-1 {
          position: absolute;
          top: 1100px;
          left: -220px;
          width: 750px;
          height: 1200px;
          background: radial-gradient(ellipse at center, rgba(150, 218, 247, 0.48) 0%, rgba(37, 145, 202, 0.38) 45%, rgba(0, 3, 5, 0) 75%);
          filter: blur(90px);
          animation: lvrGlowLeftFloat 14s ease-in-out infinite;
        }

        /* Right Side Heavy Glow */
        .lvr-glow-right-1 {
          position: absolute;
          top: 2400px;
          right: -240px;
          width: 800px;
          height: 1300px;
          background: radial-gradient(ellipse at center, rgba(150, 218, 247, 0.52) 0%, rgba(37, 145, 202, 0.42) 45%, rgba(0, 3, 5, 0) 75%);
          filter: blur(95px);
          animation: lvrGlowRightFloat 16s ease-in-out infinite;
        }

        /* Lower Left Side Glow */
        .lvr-glow-left-2 {
          position: absolute;
          top: 3800px;
          left: -200px;
          width: 780px;
          height: 1250px;
          background: radial-gradient(ellipse at center, rgba(150, 218, 247, 0.45) 0%, rgba(37, 145, 202, 0.36) 45%, rgba(0, 3, 5, 0) 75%);
          filter: blur(90px);
          animation: lvrGlowLeftFloat 12s ease-in-out infinite;
        }

        /* Lower Right Side Glow */
        .lvr-glow-right-2 {
          position: absolute;
          top: 5200px;
          right: -220px;
          width: 750px;
          height: 1200px;
          background: radial-gradient(ellipse at center, rgba(150, 218, 247, 0.48) 0%, rgba(37, 145, 202, 0.4) 45%, rgba(0, 3, 5, 0) 75%);
          filter: blur(90px);
          animation: lvrGlowRightFloat 15s ease-in-out infinite;
        }

        /* Semi-transparent Cards allowing Glow to brighten from behind */
        .lvr-r3-card, .lvr-r4-card, .lvr-r5-card, .lvr-r6-card, .lvr-r7-card, .lvr-r8-card, .lvr-r9-card {
          position: relative;
          z-index: 2;
          background: rgba(6, 14, 26, 0.62) !important;
          backdrop-filter: blur(20px) !important;
          -webkit-backdrop-filter: blur(20px) !important;
          border: none !important;
          border-radius: 16px !important;
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.45) !important;
          transition: transform 0.25s ease, box-shadow 0.25s ease !important;
          overflow: hidden !important;
        }

        .lvr-r3-card:hover, .lvr-r4-card:hover, .lvr-r5-card:hover, .lvr-r6-card:hover, .lvr-r7-card:hover, .lvr-r8-card:hover, .lvr-r9-card:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.65) !important;
        }

        /* Exact Header Background rgb(0, 3, 5) & Figma Padding */
        .lvr-r3-cardhead, .lvr-r4-cardhead, .lvr-r5-cardhead, .lvr-r6-cardhead, .lvr-r7-cardhead, .lvr-r8-cardhead, .lvr-r9-cardhead {
          background: rgba(0, 3, 6, 0.85) !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05) !important;
          padding: 20.75px 21px !important;
          border-top-left-radius: 16px !important;
          border-top-right-radius: 16px !important;
        }

        .lvr-section-divider {
          width: 100%;
          height: 1px;
          border-top: 1.5px dashed rgba(255, 255, 255, 0.22);
          margin: 60px 0 40px 0;
          position: relative;
          z-index: 10;
        }

        /* Square Section Badges with BLACK Numbering */
        .lvr-r3-badge, .lvr-r4-badge, .lvr-r5-badge, .lvr-r6-badge, .lvr-r7-badge, .lvr-r8-badge, .lvr-r9-badge {
          background: #00a2ff !important;
          color: #000000 !important;
          font-weight: 700 !important;
          border-radius: 6px !important;
          min-width: 30px !important;
          height: 30px !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          margin-right: 12px !important;
          font-size: 16px !important;
          font-family: 'Space Grotesk', sans-serif !important;
        }

        /* Title Accent Gradient (Blue 'Rules') */
        .lvr-r3-accent, .lvr-r4-accent, .lvr-r5-accent, .lvr-r6-accent, .lvr-r7-accent, .lvr-r8-accent, .lvr-r9-accent, .lvr-r7-title-accent, .lvr-r8-title-accent {
          background: linear-gradient(180deg, #38BDF8 0%, #0088FF 100%) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          font-weight: 500 !important;
          margin-left: 8px !important;
          display: inline-block !important;
        }

        /* Body text styling inside rule cards - Exact Figma Properties (Clash Grotesk Variable, 338 Weight, 15px Size, 170% Line Height, 6% Letter Spacing, #F6F8FA 60% opacity) */
        .lvr-r3-body, .lvr-r4-body, .lvr-r5-body, .lvr-r6-body, .lvr-r7-body, .lvr-r8-body, .lvr-r9-body {
          padding: 22px 24px 26px 24px !important;
        }

        .lvr-r3-body p, .lvr-r4-body p, .lvr-r5-body p, .lvr-r6-body p, .lvr-r7-body p, .lvr-r8-body p, .lvr-r9-body p {
          font-family: 'Clash Grotesk Variable', 'Clash Grotesk', 'Space Grotesk', sans-serif !important;
          font-size: 15px !important;
          font-weight: 338 !important;
          line-height: 170% !important;
          letter-spacing: 0.06em !important;
          color: rgba(246, 248, 250, 0.6) !important;
          margin-top: 0 !important;
          margin-bottom: 20px !important;
        }

        .lvr-r3-body p:last-child, .lvr-r4-body p:last-child, .lvr-r5-body p:last-child, .lvr-r6-body p:last-child, .lvr-r7-body p:last-child, .lvr-r8-body p:last-child, .lvr-r9-body p:last-child {
          margin-bottom: 0 !important;
        }

        .lvr-r3-body ul, .lvr-r4-body ul, .lvr-r5-body ul, .lvr-r6-body ul, .lvr-r7-body ul, .lvr-r8-body ul, .lvr-r9-body ul {
          margin-top: 0 !important;
          margin-bottom: 20px !important;
          padding-left: 20px !important;
        }

        .lvr-r3-body li, .lvr-r4-body li, .lvr-r5-body li, .lvr-r6-body li, .lvr-r7-body li, .lvr-r8-body li, .lvr-r9-body li {
          font-family: 'Clash Grotesk Variable', 'Clash Grotesk', 'Space Grotesk', sans-serif !important;
          font-size: 15px !important;
          font-weight: 338 !important;
          line-height: 170% !important;
          letter-spacing: 0.06em !important;
          color: rgba(246, 248, 250, 0.6) !important;
          margin-bottom: 8px !important;
        }

        /* Tables inside cards */
        .lvr-r3-table, .lvr-r5-table, .lvr-r6-table, .lvr-r8-table {
          width: 100% !important;
          border-collapse: collapse !important;
          margin: 14px 0 !important;
          font-size: 13px !important;
        }
        .lvr-r3-table th, .lvr-r5-table th, .lvr-r6-table th, .lvr-r8-table th, th {
          font-family: 'Space Grotesk', sans-serif !important;
          color: rgba(255, 255, 255, 0.45) !important;
          text-align: left !important;
          padding: 8px 12px !important;
          font-weight: 400 !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
        }
        .lvr-r3-table td, .lvr-r5-table td, .lvr-r6-table td, .lvr-r8-table td, td {
          font-family: 'Space Grotesk', sans-serif !important;
          color: rgba(255, 255, 255, 0.85) !important;
          padding: 10px 12px !important;
          font-weight: 400 !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04) !important;
        }

        @keyframes lvrPulseHighlight {
          0% { box-shadow: 0 0 0 0 rgba(0, 162, 255, 0.9); transform: scale(1.02); }
          50% { box-shadow: 0 0 35px 8px rgba(0, 162, 255, 0.8); transform: scale(1.02); }
          100% { box-shadow: 0 0 0 0 rgba(0, 162, 255, 0); transform: scale(1); }
        }
        .lvr-card-highlight {
          animation: lvrPulseHighlight 2.8s ease-in-out;
          position: relative;
          z-index: 15;
        }
      `}</style>
      <link rel="stylesheet" href="/assets/css/live/post-8048.css" />
      <link rel="stylesheet" href="/assets/css/live/rules.css" />
      <div className="lvf-page" style={{ position: 'relative' }}>
        {/* Layer 1: Ambient Floating Glow Orbs (Left & Right Sides) */}
        <div className="lvr-page-glow-layer" aria-hidden="true">
          <div className="lvr-glow-top-right" />
          <div className="lvr-glow-left-1" />
          <div className="lvr-glow-right-1" />
          <div className="lvr-glow-left-2" />
          <div className="lvr-glow-right-2" />
        </div>

        {/* r1-hero */}
        <section className="lvr-r1" id="rules-hero">
          <div className="lvr-r1-bg" aria-hidden="true" />
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: 'absolute',
              top: '78%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              minWidth: '100%',
              minHeight: '100%',
              objectFit: 'cover',
              opacity: 0.6,
              pointerEvents: 'none',
              zIndex: 0,
              mixBlendMode: 'screen'
            }}
          >
            <source src="/assets/media/God rays.mp4" type="video/mp4" />
          </video>
          <div className="lvr-r1-glow" aria-hidden="true" />
          <div className="lvr-r1-glow lvr-r1-glow--low" aria-hidden="true" />
          <div className="lvf-container lvr-r1-inner">
            <p className="lvr-r1-badge"><span className="lvr-r1-badge-dot" aria-hidden="true" /><b className="lvr-r1-badge-hl">Zero</b> Hidden Rules</p>
            <h1 className="lvr-r1-title">
              <span className="lvr-r1-title-line lvr-r1-title-line--blue">Every Rule.</span>
              <span className="lvr-r1-title-line">Right in Front of You.</span>
            </h1>
            <p className="lvr-r1-sub">We make every important rule easy to understand, so you can focus on execution instead of uncertainty.</p>
            <div className="lvr-r1-pills">
              <div className="lvr-r1-pill">
                <svg className="lvr-r1-pill-icon" viewBox="0 0 28 28" overflow="visible" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M6.35 2.31 6.18 3.89 3.72 5.3 1.96 8.29 1.96 21.47 3.01 23.76 6.18 25.69 20.94 25.69 24.11 24.28 25.69 21.12 25.69 8.64 24.28 5.65 21.82 4.24 20.59 1.96 19.54 2.31 18.66 4.07 15.14 4.07 14.62 2.31 13.38 1.96 12.33 4.07 8.99 4.24 8.29 3.72 7.94 2.14ZM18.31 13.38 17.6 15.14 13.74 19.01 12.68 19.01 9.69 15.85 10.22 14.79 11.45 14.62 13.21 16.02 16.55 12.86 17.43 12.68Z" /></svg>
                <span><b className="lvr-r1-pill-hl">No Daily</b> Loss Limit</span>
              </div>
              <div className="lvr-r1-pill">
                <svg className="lvr-r1-pill-icon" viewBox="0 0 28 28" overflow="visible" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M3.58 6.33 2.94 7.3 2.94 22.48 3.58 23.61 5.04 24.09 6.49 22.96 6.49 6.65ZM8.27 4.07 7.62 23.93 22.32 24.09 24.42 22.96 24.9 21.51 24.9 4.55 24.09 3.91ZM11.5 18.93 12.14 18.12 20.86 18.12 21.51 18.76 20.7 19.41 11.98 19.41ZM11.5 15.05 11.98 14.57 21.03 14.57 21.35 15.37 20.86 15.86 12.14 16.02ZM11.66 11.98 11.98 11.01 20.7 11.01 21.51 11.66 20.7 12.3ZM11.5 7.94 11.98 7.46 21.03 7.46 21.35 8.27 20.86 8.75 12.14 8.91Z" /></svg>
                <span><b className="lvr-r1-pill-hl">News</b> Trading Allowed</span>
              </div>
              <div className="lvr-r1-pill">
                <svg className="lvr-r1-pill-icon" viewBox="0 0 28 28" overflow="visible" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M3.1 6.45 2.54 7.94 7.38 25.09 8.69 25.46 9.06 23.97 4.03 6.64ZM22.48 2.91 18.94 4.77 9.06 4.59 7.57 4.77 5.33 6.27 8.32 17.82 10.37 16.52 13.35 15.96 21.36 16.52 23.97 15.58 25.46 14.09 25.09 13.16 21.18 10.18Z" /></svg>
                <span><b className="lvr-r1-pill-hl">EOD</b> Trailing Drawdown</span>
              </div>
              <div className="lvr-r1-pill">
                <svg className="lvr-r1-pill-icon" viewBox="0 0 28 28" overflow="visible" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M26.98 17.4 26.7 16.71 20.73 11.01 19.35 10.88 13.38 17.12 9.07 14.9 7.54 15.04 1.57 23.23 1.16 24.34 2.41 25.45 25.73 25.45 26.84 24.62ZM26.98 8.93 20.32 2.68 19.21 2.68 12.26 10.46 7.82 8.24 6.16 8.24 1.43 14.07 1.16 15.04 1.71 15.87 3.52 15.87 7.27 11.29 12.82 13.51 19.9 6.29 25.18 10.88 26.01 10.74 26.98 9.77Z" /></svg>
                <span><b className="lvr-r1-pill-hl">40%</b> Consistency Rule</span>
              </div>
              <div className="lvr-r1-pill">
                <svg className="lvr-r1-pill-icon" viewBox="0 0 28 28" overflow="visible" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M21.26 12.31 19.87 12.51 11.12 18.28 10.52 19.07 10.52 21.66 12.91 24.05 15.09 24.05 17.28 22.65 21.46 14.1ZM26.04 9.52 23.65 11.91 24.05 13.3 22.45 16.29 23.25 20.27 30.01 20.27 30.21 16.29 29.42 13.9 27.03 9.92ZM2.16 9.32 0.97 10.32 -1.42 14.5 -2.21 17.88 -1.82 20.27 5.35 19.87 5.55 17.48 7.14 14.3ZM15.29 4.15 15.69 11.51 17.48 11.71 20.47 10.12 22.26 10.32 24.64 8.13 23.85 6.94 21.06 5.35ZM12.91 4.15 11.71 3.95 6.94 5.35 4.35 6.94 3.75 8.13 8.33 12.71 13.1 10.92Z" /></svg>
                <span><b className="lvr-r1-pill-hl">10%</b> Payout Access</span>
              </div>
            </div>
            <div
              ref={searchContainerRef}
              style={{ position: 'relative', width: '100%', maxWidth: 1238, zIndex: 50, marginTop: 124 }}
            >
              <form onSubmit={handleSearchSubmit} className="lvr-r1-search" data-lvr-r1-search style={{ margin: 0, position: 'relative' }}>
                <svg className="lvr-r1-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx={11} cy={11} r={7} /><path d="m21 21-4.3-4.3" /></svg>
                <input
                  className="lvr-r1-search-input"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsOpen(true);
                  }}
                  onFocus={() => {
                    if (searchQuery.trim()) setIsOpen(true);
                  }}
                  placeholder="Find any Lvlup or Starter Account rule..."
                  aria-label="Find any Lvlup or Starter Account rule"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      setIsOpen(false);
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'rgba(255, 255, 255, 0.6)',
                      cursor: 'pointer',
                      padding: '4px 8px',
                      fontSize: '16px',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                    aria-label="Clear search"
                  >
                    ✕
                  </button>
                )}
                <button
                  type="submit"
                  style={{
                    background: 'linear-gradient(135deg, #00a2ff 0%, #0066ff 100%)',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#ffffff',
                    padding: '8px 18px',
                    fontSize: '13px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(0, 162, 255, 0.3)',
                    whiteSpace: 'nowrap'
                  }}
                >
                  Search
                </button>
              </form>

              {/* Search Results Dropdown Overlay */}
              {isOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 8px)',
                    left: 0,
                    right: 0,
                    background: 'rgba(8, 12, 24, 0.95)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(0, 162, 255, 0.3)',
                    borderRadius: '16px',
                    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 162, 255, 0.15)',
                    maxHeight: '400px',
                    overflowY: 'auto',
                    zIndex: 1000,
                    padding: '8px 0'
                  }}
                >
                  {filteredRules.length > 0 ? (
                    filteredRules.map((rule) => (
                      <div
                        key={rule.id}
                        onClick={() => handleSelectRule(rule)}
                        style={{
                          padding: '12px 20px',
                          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                          cursor: 'pointer',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '4px',
                          textAlign: 'left',
                          transition: 'background 0.15s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(0, 162, 255, 0.12)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent';
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                          <span style={{ fontSize: '15px', fontWeight: '600', color: '#ffffff' }}>{rule.title}</span>
                          <span
                            style={{
                              fontSize: '10px',
                              fontWeight: '600',
                              color: '#00a2ff',
                              textTransform: 'uppercase',
                              letterSpacing: '0.8px',
                              background: 'rgba(0, 162, 255, 0.15)',
                              padding: '2px 8px',
                              borderRadius: '12px',
                              border: '1px solid rgba(0, 162, 255, 0.3)'
                            }}
                          >
                            {rule.category}
                          </span>
                        </div>
                        <p style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.65)', margin: 0, lineHeight: '1.4' }}>
                          {rule.text}
                        </p>
                      </div>
                    ))
                  ) : (
                    <div style={{ padding: '20px', textAlign: 'center', color: 'rgba(255, 255, 255, 0.5)', fontSize: '14px' }}>
                      No matching rules found for &quot;{searchQuery}&quot;
                    </div>
                  )}
                </div>
              )}
            </div>
            <nav className="lvr-r1-chips" aria-label="Rule categories">
              <a className="lvr-r1-chip lvr-r1-chip--active" href="#account-overview" aria-current="true">All Rules</a>
              <a className="lvr-r1-chip" href="#evaluation-drawdown">Evaluation</a>
              <a className="lvr-r1-chip" href="#drawdown-rules">Drawdown</a>
              <a className="lvr-r1-chip" href="#consistency-rules">Consistency</a>
              <a className="lvr-r1-chip" href="#trading-conditions">Trading Conditions</a>
              <a className="lvr-r1-chip" href="#contracts-and-payout">Contracts &amp; Limits</a>
              <a className="lvr-r1-chip" href="#payout-rules">Payouts</a>
              <a className="lvr-r1-chip" href="#profit-split-rules">Profit Split</a>
              <a className="lvr-r1-chip" href="#platforms-verification">Platforms</a>
              <a className="lvr-r1-chip" href="#billing-protector">Billing &amp; Account Lifecycle</a>
            </nav>
          </div>
        </section>
        {/* r2-account-overview */}
        <section className="lvr-r2" id="account-overview">
          <div className="lvr-r2-glow" aria-hidden="true" />
          <div className="lvf-container">
            <h2 className="lvr-r2-title">Account Rules <span className="lvr-r2-accent">Overview</span></h2>
            <div className="lvr-r2-table" role="table" aria-label="Account Rules Overview">
              {/* Gruppenkopf */}
              <div className="lvr-r2-row lvr-r2-row--groups" role="row">
                <div className="lvr-r2-gh-empty" role="presentation" />
                <div className="lvr-r2-gh" role="columnheader">Lvlup Accounts</div>
                <div className="lvr-r2-gh" role="columnheader">Starter Accounts</div>
              </div>
              {/* Kontogroessen */}
              <div className="lvr-r2-row lvr-r2-row--sizes" role="row">
                <div className="lvr-r2-f lvr-r2-f--light" role="columnheader">Feature</div>
                <div className="lvr-r2-c lvr-r2-c--size" role="columnheader" data-a="Lvlup 25K">25K</div>
                <div className="lvr-r2-c lvr-r2-c--size" role="columnheader" data-a="Lvlup 50K">50K</div>
                <div className="lvr-r2-c lvr-r2-c--size" role="columnheader" data-a="Lvlup 100K">100K</div>
                <div className="lvr-r2-c lvr-r2-c--size" role="columnheader" data-a="Lvlup 150K">150K</div>
                <div className="lvr-r2-c lvr-r2-c--size lvr-r2-c--split" role="columnheader" data-a="Starter 25K">25K</div>
                <div className="lvr-r2-c lvr-r2-c--size" role="columnheader" data-a="Starter 50K">50K</div>
                <div className="lvr-r2-c lvr-r2-c--size" role="columnheader" data-a="Starter 100K">100K</div>
                <div className="lvr-r2-c lvr-r2-c--size" role="columnheader" data-a="Starter 150K">150K</div>
              </div>
              {/* Evaluation Payment */}
              <div className="lvr-r2-row lvr-r2-row--payment" role="row">
                <div className="lvr-r2-f" role="rowheader">Evaluation Payment</div>
                <div className="lvr-r2-c lvr-r2-c--grad" role="cell" data-a="Lvlup 25K"><span>One-Time</span><span className="lvr-r2-or">OR</span><span>Monthly</span></div>
                <div className="lvr-r2-c lvr-r2-c--grad" role="cell" data-a="Lvlup 50K"><span>One-Time</span><span className="lvr-r2-or">OR</span><span>Monthly</span></div>
                <div className="lvr-r2-c lvr-r2-c--grad" role="cell" data-a="Lvlup 100K"><span>One-Time</span><span className="lvr-r2-or">OR</span><span>Monthly</span></div>
                <div className="lvr-r2-c lvr-r2-c--grad" role="cell" data-a="Lvlup 150K"><span>One-Time</span><span className="lvr-r2-or">OR</span><span>Monthly</span></div>
                <div className="lvr-r2-c lvr-r2-c--grad lvr-r2-c--split" role="cell" data-a="Starter 25K"><span>One-Time</span></div>
                <div className="lvr-r2-c lvr-r2-c--grad" role="cell" data-a="Starter 50K"><span>One-Time</span></div>
                <div className="lvr-r2-c lvr-r2-c--grad" role="cell" data-a="Starter 100K"><span>One-Time</span></div>
                <div className="lvr-r2-c lvr-r2-c--grad" role="cell" data-a="Starter 150K"><span>One-Time</span></div>
              </div>
              {/* One-Time Price */}
              <div className="lvr-r2-row lvr-r2-row--dark lvr-r2-row--dark-top" role="row">
                <div className="lvr-r2-f lvr-r2-f--dark" role="rowheader">One-Time Price</div>
                <div className="lvr-r2-c lvr-r2-c--dark" role="cell" data-a="Lvlup 25K">$194</div>
                <div className="lvr-r2-c lvr-r2-c--dark" role="cell" data-a="Lvlup 50K">$338</div>
                <div className="lvr-r2-c lvr-r2-c--dark" role="cell" data-a="Lvlup 100K">$554</div>
                <div className="lvr-r2-c lvr-r2-c--dark" role="cell" data-a="Lvlup 150K">$714</div>
                <div className="lvr-r2-c lvr-r2-c--dark lvr-r2-c--split" role="cell" data-a="Starter 25K">$129</div>
                <div className="lvr-r2-c lvr-r2-c--dark" role="cell" data-a="Starter 50K">$194</div>
                <div className="lvr-r2-c lvr-r2-c--dark" role="cell" data-a="Starter 100K">$259</div>
                <div className="lvr-r2-c lvr-r2-c--dark" role="cell" data-a="Starter 150K">$324</div>
              </div>
              {/* Monthly Price */}
              <div className="lvr-r2-row lvr-r2-row--dark lvr-r2-row--dark-bot" role="row">
                <div className="lvr-r2-f lvr-r2-f--dark" role="rowheader">Monthly Price</div>
                <div className="lvr-r2-c lvr-r2-c--dark" role="cell" data-a="Lvlup 25K">$129/mo</div>
                <div className="lvr-r2-c lvr-r2-c--dark" role="cell" data-a="Lvlup 50K">$225/mo</div>
                <div className="lvr-r2-c lvr-r2-c--dark" role="cell" data-a="Lvlup 100K">$369/mo</div>
                <div className="lvr-r2-c lvr-r2-c--dark" role="cell" data-a="Lvlup 150K">$476/mo</div>
                <div className="lvr-r2-c lvr-r2-c--dark lvr-r2-c--split" role="cell" data-a="Starter 25K"><span className="lvr-r2-na">Not Applicable</span></div>
                <div className="lvr-r2-c lvr-r2-c--dark" role="cell" data-a="Starter 50K"><span className="lvr-r2-na">Not Applicable</span></div>
                <div className="lvr-r2-c lvr-r2-c--dark" role="cell" data-a="Starter 100K"><span className="lvr-r2-na">Not Applicable</span></div>
                <div className="lvr-r2-c lvr-r2-c--dark" role="cell" data-a="Starter 150K"><span className="lvr-r2-na">Not Applicable</span></div>
              </div>
              {/* Profit Target */}
              <div className="lvr-r2-row lvr-r2-row--body" role="row">
                <div className="lvr-r2-f" role="rowheader">Profit Target</div>
                <div className="lvr-r2-c" role="cell" data-a="Lvlup 25K"><span className="lvr-r2-v">6%</span><span className="lvr-r2-s">($1,500)</span></div>
                <div className="lvr-r2-c" role="cell" data-a="Lvlup 50K"><span className="lvr-r2-v">6%</span><span className="lvr-r2-s">($3,000)</span></div>
                <div className="lvr-r2-c" role="cell" data-a="Lvlup 100K"><span className="lvr-r2-v">7%</span><span className="lvr-r2-s">($7,000)</span></div>
                <div className="lvr-r2-c" role="cell" data-a="Lvlup 150K"><span className="lvr-r2-v">8%</span><span className="lvr-r2-s">($12,000)</span></div>
                <div className="lvr-r2-c lvr-r2-c--split" role="cell" data-a="Starter 25K"><span className="lvr-r2-v">6%</span><span className="lvr-r2-s">($1,500)</span></div>
                <div className="lvr-r2-c" role="cell" data-a="Starter 50K"><span className="lvr-r2-v">6%</span><span className="lvr-r2-s">($3,000)</span></div>
                <div className="lvr-r2-c" role="cell" data-a="Starter 100K"><span className="lvr-r2-v">7%</span><span className="lvr-r2-s">($7,000)</span></div>
                <div className="lvr-r2-c" role="cell" data-a="Starter 150K"><span className="lvr-r2-v">8%</span><span className="lvr-r2-s">($12,000)</span></div>
              </div>
              {/* Maximum Drawdown */}
              <div className="lvr-r2-row lvr-r2-row--body" role="row">
                <div className="lvr-r2-f" role="rowheader">Maximum Drawdown</div>
                <div className="lvr-r2-c" role="cell" data-a="Lvlup 25K"><span className="lvr-r2-v">5%</span><span className="lvr-r2-s">($1,250)</span></div>
                <div className="lvr-r2-c" role="cell" data-a="Lvlup 50K"><span className="lvr-r2-v">5%</span><span className="lvr-r2-s">($2,500)</span></div>
                <div className="lvr-r2-c" role="cell" data-a="Lvlup 100K"><span className="lvr-r2-v">5%</span><span className="lvr-r2-s">($5,000)</span></div>
                <div className="lvr-r2-c" role="cell" data-a="Lvlup 150K"><span className="lvr-r2-v">5%</span><span className="lvr-r2-s">($7,500)</span></div>
                <div className="lvr-r2-c lvr-r2-c--split" role="cell" data-a="Starter 25K"><span className="lvr-r2-v">4%</span><span className="lvr-r2-s">($1,000)</span></div>
                <div className="lvr-r2-c" role="cell" data-a="Starter 50K"><span className="lvr-r2-v">4%</span><span className="lvr-r2-s">($2,000)</span></div>
                <div className="lvr-r2-c" role="cell" data-a="Starter 100K"><span className="lvr-r2-v">3%</span><span className="lvr-r2-s">($3,000)</span></div>
                <div className="lvr-r2-c" role="cell" data-a="Starter 150K"><span className="lvr-r2-v">3%</span><span className="lvr-r2-s">($4,500)</span></div>
              </div>
              {/* Drawdown Type */}
              <div className="lvr-r2-row lvr-r2-row--body" role="row">
                <div className="lvr-r2-f" role="rowheader">Drawdown Type</div>
                <div className="lvr-r2-c lvr-r2-c--inline" role="cell" data-a="Lvlup 25K"><span className="lvr-r2-v">EOD</span><span className="lvr-r2-s">Trailing</span></div>
                <div className="lvr-r2-c lvr-r2-c--inline" role="cell" data-a="Lvlup 50K"><span className="lvr-r2-v">EOD</span><span className="lvr-r2-s">Trailing</span></div>
                <div className="lvr-r2-c lvr-r2-c--inline" role="cell" data-a="Lvlup 100K"><span className="lvr-r2-v">EOD</span><span className="lvr-r2-s">Trailing</span></div>
                <div className="lvr-r2-c lvr-r2-c--inline" role="cell" data-a="Lvlup 150K"><span className="lvr-r2-v">EOD</span><span className="lvr-r2-s">Trailing</span></div>
                <div className="lvr-r2-c lvr-r2-c--split lvr-r2-c--inline" role="cell" data-a="Starter 25K"><span className="lvr-r2-v">EOD</span><span className="lvr-r2-s">Trailing</span></div>
                <div className="lvr-r2-c lvr-r2-c--inline" role="cell" data-a="Starter 50K"><span className="lvr-r2-v">EOD</span><span className="lvr-r2-s">Trailing</span></div>
                <div className="lvr-r2-c lvr-r2-c--inline" role="cell" data-a="Starter 100K"><span className="lvr-r2-v">EOD</span><span className="lvr-r2-s">Trailing</span></div>
                <div className="lvr-r2-c lvr-r2-c--inline" role="cell" data-a="Starter 150K"><span className="lvr-r2-v">EOD</span><span className="lvr-r2-s">Trailing</span></div>
              </div>
              {/* Min. Trading Days */}
              <div className="lvr-r2-row lvr-r2-row--body" role="row">
                <div className="lvr-r2-f" role="rowheader">Min. Trading Days</div>
                <div className="lvr-r2-c" role="cell" data-a="Lvlup 25K">5 Days</div>
                <div className="lvr-r2-c" role="cell" data-a="Lvlup 50K">5 Days</div>
                <div className="lvr-r2-c" role="cell" data-a="Lvlup 100K">5 Days</div>
                <div className="lvr-r2-c" role="cell" data-a="Lvlup 150K">5 Days</div>
                <div className="lvr-r2-c lvr-r2-c--split" role="cell" data-a="Starter 25K">5 Days</div>
                <div className="lvr-r2-c" role="cell" data-a="Starter 50K">5 Days</div>
                <div className="lvr-r2-c" role="cell" data-a="Starter 100K">5 Days</div>
                <div className="lvr-r2-c" role="cell" data-a="Starter 150K">5 Days</div>
              </div>
              {/* Maximum Contracts */}
              <div className="lvr-r2-row lvr-r2-row--body" role="row">
                <div className="lvr-r2-f" role="rowheader">Maximum Contracts</div>
                <div className="lvr-r2-c" role="cell" data-a="Lvlup 25K">1 mini</div>
                <div className="lvr-r2-c" role="cell" data-a="Lvlup 50K">3 mini</div>
                <div className="lvr-r2-c" role="cell" data-a="Lvlup 100K">6 mini</div>
                <div className="lvr-r2-c" role="cell" data-a="Lvlup 150K">9 mini</div>
                <div className="lvr-r2-c lvr-r2-c--split" role="cell" data-a="Starter 25K">1 mini</div>
                <div className="lvr-r2-c" role="cell" data-a="Starter 50K">3 mini</div>
                <div className="lvr-r2-c" role="cell" data-a="Starter 100K">6 mini</div>
                <div className="lvr-r2-c" role="cell" data-a="Starter 150K">9 mini</div>
              </div>
              {/* Profit Split */}
              <div className="lvr-r2-row lvr-r2-row--body" role="row">
                <div className="lvr-r2-f" role="rowheader">Profit Split</div>
                <div className="lvr-r2-c" role="cell" data-a="Lvlup 25K">80%</div>
                <div className="lvr-r2-c" role="cell" data-a="Lvlup 50K">80%</div>
                <div className="lvr-r2-c" role="cell" data-a="Lvlup 100K">80%</div>
                <div className="lvr-r2-c" role="cell" data-a="Lvlup 150K">80%</div>
                <div className="lvr-r2-c lvr-r2-c--split" role="cell" data-a="Starter 25K">100%</div>
                <div className="lvr-r2-c" role="cell" data-a="Starter 50K">100%</div>
                <div className="lvr-r2-c" role="cell" data-a="Starter 100K">100%</div>
                <div className="lvr-r2-c" role="cell" data-a="Starter 150K">100%</div>
              </div>
              {/* Payout Terms */}
              <div className="lvr-r2-row lvr-r2-row--body" role="row">
                <div className="lvr-r2-f" role="rowheader">Payout Terms</div>
                <div className="lvr-r2-c lvr-r2-c--inline" role="cell" data-a="Lvlup 25K"><span className="lvr-r2-v">10%</span><span className="lvr-r2-s">Cap</span></div>
                <div className="lvr-r2-c lvr-r2-c--inline" role="cell" data-a="Lvlup 50K"><span className="lvr-r2-v">10%</span><span className="lvr-r2-s">Cap</span></div>
                <div className="lvr-r2-c lvr-r2-c--inline" role="cell" data-a="Lvlup 100K"><span className="lvr-r2-v">10%</span><span className="lvr-r2-s">Cap</span></div>
                <div className="lvr-r2-c lvr-r2-c--inline" role="cell" data-a="Lvlup 150K"><span className="lvr-r2-v">10%</span><span className="lvr-r2-s">Cap</span></div>
                <div className="lvr-r2-c lvr-r2-c--split" role="cell" data-a="Starter 25K"><span className="lvr-r2-v">4% Cap</span><span className="lvr-r2-s">Up to 50% Profit</span></div>
                <div className="lvr-r2-c" role="cell" data-a="Starter 50K"><span className="lvr-r2-v">4% Cap</span><span className="lvr-r2-s">Up to 50% Profit</span></div>
                <div className="lvr-r2-c" role="cell" data-a="Starter 100K"><span className="lvr-r2-v">2.5% Cap</span><span className="lvr-r2-s">Up to 50% Profit</span></div>
                <div className="lvr-r2-c" role="cell" data-a="Starter 150K"><span className="lvr-r2-v">2% Cap</span><span className="lvr-r2-s">Up to 50% Profit</span></div>
              </div>
              {/* Payout Cycle */}
              <div className="lvr-r2-row lvr-r2-row--body" role="row">
                <div className="lvr-r2-f" role="rowheader">Payout Cycle</div>
                <div className="lvr-r2-c" role="cell" data-a="Lvlup 25K">Every 14 Days</div>
                <div className="lvr-r2-c" role="cell" data-a="Lvlup 50K">Every 14 Days</div>
                <div className="lvr-r2-c" role="cell" data-a="Lvlup 100K">Every 14 Days</div>
                <div className="lvr-r2-c" role="cell" data-a="Lvlup 150K">Every 14 Days</div>
                <div className="lvr-r2-c lvr-r2-c--split" role="cell" data-a="Starter 25K">Every 5 Profitable Days</div>
                <div className="lvr-r2-c" role="cell" data-a="Starter 50K">Every 5 Profitable Days</div>
                <div className="lvr-r2-c" role="cell" data-a="Starter 100K">Every 5 Profitable Days</div>
                <div className="lvr-r2-c" role="cell" data-a="Starter 150K">Every 5 Profitable Days</div>
              </div>
              {/* Activation Fee */}
              <div className="lvr-r2-row lvr-r2-row--body" role="row">
                <div className="lvr-r2-f" role="rowheader">Activation Fee</div>
                <div className="lvr-r2-c" role="cell" data-a="Lvlup 25K">Required After Passing</div>
                <div className="lvr-r2-c" role="cell" data-a="Lvlup 50K">Required After Passing</div>
                <div className="lvr-r2-c" role="cell" data-a="Lvlup 100K">Required After Passing</div>
                <div className="lvr-r2-c" role="cell" data-a="Lvlup 150K">Required After Passing</div>
                <div className="lvr-r2-c lvr-r2-c--split" role="cell" data-a="Starter 25K"><span className="lvr-r2-none">None</span></div>
                <div className="lvr-r2-c" role="cell" data-a="Starter 50K"><span className="lvr-r2-none">None</span></div>
                <div className="lvr-r2-c" role="cell" data-a="Starter 100K"><span className="lvr-r2-none">None</span></div>
                <div className="lvr-r2-c" role="cell" data-a="Starter 150K"><span className="lvr-r2-none">None</span></div>
              </div>
            </div>
          </div>
        </section>
        {/* r3-evaluation-drawdown */}
        <section className="lvr-r3" id="evaluation-drawdown">
          <div className="lvr-r3-glow" aria-hidden="true" />
          <div className="lvf-container">
            <div className="lvr-section-divider" aria-hidden="true" />
            <div className="lvr-r3-head">
              <span className="lvr-r3-badge" aria-hidden="true">1</span>
              <h2 className="lvr-r3-title">Evaluation <span className="lvr-r3-accent">Rules</span></h2>
            </div>
            <div className="lvr-r3-grid lvr-r3-grid--eval">
              <div className="lvr-r3-col">
                <article className="lvr-r3-card" id="rule-account-types">
                  <div className="lvr-r3-cardhead">
                    <h3 className="lvr-r3-cardtitle">Account Types</h3>
                  </div>
                  <div className="lvr-r3-body">
                    <p>Lvlup Futures offers two separate account structures:</p>
                    <p style={{ color: 'rgba(255, 255, 255, 0.95)', fontWeight: 500 }}>Lvlup Accounts<br />Starter Accounts</p>
                    <p>Both structures are available in 25K, 50K, 100K and 150K sizes.</p>
                    <p>Each account type has its own payment structure, drawdown limits, funded profit structure and payout conditions.</p>
                  </div>
                </article>
                <article className="lvr-r3-card" id="rule-one-step-eval">
                  <div className="lvr-r3-cardhead">
                    <h3 className="lvr-r3-cardtitle">One-Step Evaluation</h3>
                  </div>
                  <div className="lvr-r3-body">
                    <p>Both Lvlup Accounts and Starter Accounts use a One-Step Evaluation. To pass the Evaluation, traders must:</p>
                    <ul style={{ listStyleType: 'disc' }}>
                      <li>Reach the required Profit Target</li>
                      <li>Complete at least 5 Trading Days</li>
                      <li>Stay within the Maximum Drawdown</li>
                      <li>Meet the applicable 40% Consistency Rule</li>
                      <li>Follow all Trading Rules</li>
                    </ul>
                    <p>There is no second Evaluation phase.</p>
                  </div>
                </article>
                <article className="lvr-r3-card" id="rule-min-trading-days">
                  <div className="lvr-r3-cardhead">
                    <h3 className="lvr-r3-cardtitle">Minimum Trading Days</h3>
                  </div>
                  <div className="lvr-r3-body">
                    <p>A minimum of 5 separate Trading Days is required during the Evaluation Stage.</p>
                    <p>A Trading Day is counted when at least one trade is executed during that trading session.</p>
                    <p>The 5-day minimum applies to the Evaluation Stage only.</p>
                    <p style={{ marginTop: 14, fontWeight: 600, color: '#ffffff' }}>Lvlup Funded Accounts</p>
                    <p>Lvlup Funded Accounts do not require 5 profitable days before a payout.</p>
                    <p>Payout eligibility follows the 14-Day Payout Cycle, and those trading days do not need to be profitable.</p>
                    <p style={{ marginTop: 14, fontWeight: 600, color: '#ffffff' }}>Starter Funded Accounts</p>
                    <p>Starter Funded Accounts use a 5 Profitable Trading Day Reward Cycle.</p>
                    <p>A payout becomes eligible after the trader completes 5 profitable Trading Days and meets all other payout requirements.</p>
                  </div>
                </article>
                <article className="lvr-r3-card" id="rule-account-inactivity">
                  <div className="lvr-r3-cardhead">
                    <h3 className="lvr-r3-cardtitle">Account Inactivity</h3>
                  </div>
                  <div className="lvr-r3-body">
                    <p>An evaluation account must record at least one executed trade within every 30-day period to remain active. The inactivity timer cannot be paused at any account stage.</p>
                  </div>
                </article>
              </div>
              <div className="lvr-r3-col">
                <article className="lvr-r3-card" id="rule-lvlup-profit-targets">
                  <div className="lvr-r3-cardhead">
                    <h3 className="lvr-r3-cardtitle">Lvlup Account Profit Targets</h3>
                  </div>
                  <div className="lvr-r3-body">
                    <p>The profit target depends on the selected Lvlup Account size:</p>
                  </div>
                  <table className="lvr-r3-table">
                    <thead>
                      <tr><th scope="col">Account Size</th><th scope="col">Profit Target</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>25K</td><td>6%, or $1,500</td></tr>
                      <tr><td>50K</td><td>6%, or $3,000</td></tr>
                      <tr><td>100K</td><td>7%, or $7,000</td></tr>
                      <tr><td>150K</td><td>8%, or $12,000</td></tr>
                    </tbody>
                  </table>
                  <div className="lvr-r3-body">
                    <p>Reaching the Profit Target alone does not complete the Evaluation. The trader must also complete the minimum Trading Days, remain within the Drawdown limit and satisfy the 40% Consistency Rule.</p>
                  </div>
                </article>
                <article className="lvr-r3-card" id="rule-starter-profit-targets">
                  <div className="lvr-r3-cardhead">
                    <h3 className="lvr-r3-cardtitle">Starter Account Profit Targets</h3>
                  </div>
                  <div className="lvr-r3-body">
                    <p>The profit target depends on the selected Lvlup Account size:</p>
                  </div>
                  <table className="lvr-r3-table">
                    <thead>
                      <tr><th scope="col">Account Size</th><th scope="col">Profit Target</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>25K</td><td>6%, or $1,500</td></tr>
                      <tr><td>50K</td><td>6%, or $3,000</td></tr>
                      <tr><td>100K</td><td>7%, or $7,000</td></tr>
                      <tr><td>150K</td><td>8%, or $12,000</td></tr>
                    </tbody>
                  </table>
                  <div className="lvr-r3-body">
                    <p>Starter traders must also complete the minimum Trading Days, satisfy the Evaluation Consistency Rule and remain within the applicable Drawdown limit.</p>
                  </div>
                </article>
                <article className="lvr-r3-card" id="rule-starter-eval-duration">
                  <div className="lvr-r3-cardhead">
                    <h3 className="lvr-r3-cardtitle">Starter Account Duration</h3>
                  </div>
                  <div className="lvr-r3-body">
                    <p>Starter Accounts have a fixed 30-day account life.</p>
                    <p>The 30-day period begins from the trader&apos;s first executed trade.</p>
                    <p>After 30 days, the Starter Account closes regardless of whether the account is still in Evaluation or has progressed to the Funded Stage.</p>
                    <p>Starter Accounts do not renew or rebill after the 30-day period.</p>
                  </div>
                </article>
                <article className="lvr-r3-card" id="rule-lvlup-eval-duration">
                  <div className="lvr-r3-cardhead">
                    <h3 className="lvr-r3-cardtitle">Lvlup Account Duration</h3>
                  </div>
                  <div className="lvr-r3-body">
                    <p>Lvlup Accounts do not have a fixed Evaluation expiry date.</p>
                    <p>However, the account must remain active.</p>
                    <p>At least one executed trade must be recorded within every 30-day period.</p>
                    <p>This inactivity requirement applies during both the Evaluation and Funded stages of a Lvlup Account.</p>
                  </div>
                </article>
              </div>
            </div>
            <div className="lvr-section-divider" aria-hidden="true" />
            <div className="lvr-r3-head lvr-r3-head--dd" id="drawdown-rules">
              <span className="lvr-r3-badge" aria-hidden="true">2</span>
              <h2 className="lvr-r3-title">Drawdown <span className="lvr-r3-accent">Rules</span></h2>
            </div>
            <div className="lvr-r3-grid lvr-r3-grid--dd">
              <div className="lvr-r3-col">                <article className="lvr-r3-card lvr-r3-card--solid" id="drawdown-lvlup-max">
                  <div className="lvr-r3-cardhead">
                    <h3 className="lvr-r3-cardtitle">Lvlup Accounts Maximum Drawdown</h3>
                  </div>
                  <div className="lvr-r3-body">
                    <p>Lvlup Accounts use a 5% Maximum Drawdown.</p>
                  </div>
                  <table className="lvr-r3-table">
                    <thead>
                      <tr><th scope="col">Account Size</th><th scope="col">Maximum Drawdown</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>25K</td><td>$1,250</td></tr>
                      <tr><td>50K</td><td>$2,500</td></tr>
                      <tr><td>100K</td><td>$5,000</td></tr>
                      <tr><td>150K</td><td>$7,500</td></tr>
                    </tbody>
                  </table>
                  <div className="lvr-r3-body">
                    <p>Reaching or falling below the active Maximum Drawdown threshold results in a Hard Breach.</p>
                  </div>
                </article>
                <article className="lvr-r3-card lvr-r3-card--solid" id="drawdown-starter-max">
                  <div className="lvr-r3-cardhead">
                    <h3 className="lvr-r3-cardtitle">Starter Accounts Maximum Drawdown</h3>
                  </div>
                  <div className="lvr-r3-body">
                    <p>Starter Accounts use the following Maximum Drawdown limits:</p>
                  </div>
                  <table className="lvr-r3-table">
                    <thead>
                      <tr><th scope="col">Account Size</th><th scope="col">Maximum Drawdown</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>25K</td><td>4%, or $1,000</td></tr>
                      <tr><td>50K</td><td>4%, or $2,000</td></tr>
                      <tr><td>100K</td><td>3%, or $3,000</td></tr>
                      <tr><td>150K</td><td>3%, or $4,500</td></tr>
                    </tbody>
                  </table>
                  <div className="lvr-r3-body">
                    <p>Reaching or falling below the active Drawdown threshold results in a Hard Breach.</p>
                  </div>
                </article>
                <article className="lvr-r3-card lvr-r3-card--solid" id="drawdown-starter-eod">
                  <div className="lvr-r3-cardhead">
                    <h3 className="lvr-r3-cardtitle">Starter Accounts EOD Trailing Drawdown</h3>
                  </div>
                  <div className="lvr-r3-body">
                    <p>Starter Accounts also use an End-of-Day Trailing Drawdown.</p>
                    <p>The applicable Drawdown percentage depends on the selected Starter Account size.</p>
                  </div>
                </article>
              </div>
              <div className="lvr-r3-col">
                <article className="lvr-r3-card lvr-r3-card--blur110" id="drawdown-lvlup-eod">
                  <div className="lvr-r3-cardhead">
                    <h3 className="lvr-r3-cardtitle">Lvlup EOD Trailing Drawdown</h3>
                  </div>
                  <div className="lvr-r3-body">
                    <p>Lvlup Accounts use a 5% End-of-Day Trailing Drawdown.</p>
                    <p>The drawdown is calculated from the account&apos;s highest End-of-Day balance and updates after the trading day is completed.</p>
                    <p>Intraday profits, losses and unrealized gains do not move the drawdown threshold during the trading session.</p>
                    <p>The drawdown continues trailing the highest End-of-Day balance until the account reaches 6% profit. It then permanently locks at the account&apos;s original starting balance.</p>
                  </div>
                </article>
                <article className="lvr-r3-card lvr-r3-card--dark" id="drawdown-lvlup-lock">
                  <div className="lvr-r3-cardhead">
                    <h3 className="lvr-r3-cardtitle">Lvlup Drawdown Lock</h3>
                  </div>
                  <div className="lvr-r3-body">
                    <p>The Lvlup EOD Trailing Drawdown continues moving until the account reaches 6% profit.</p>
                    <p>At that point, the Drawdown stops trailing and locks at the account&apos;s original starting balance.</p>
                    <p style={{ marginTop: 12, fontWeight: 600, color: '#ffffff' }}>Example</p>
                    <p>A 100K Lvlup Account begins with a $95,000 Drawdown threshold.</p>
                    <p>When the closed balance reaches $106,000, the Drawdown locks at $100,000.</p>
                    <p>It does not continue moving higher after the lock.</p>
                  </div>
                </article>
                <article className="lvr-r3-card lvr-r3-card--dark" id="drawdown-no-daily-limit">
                  <div className="lvr-r3-cardhead">
                    <h3 className="lvr-r3-cardtitle">No Daily Loss Limit</h3>
                  </div>
                  <div className="lvr-r3-body">
                    <p>Lvlup Futures Accounts do not use a separate Daily Loss Limit.</p>
                    <p>Traders are not stopped by an independent daily loss threshold.</p>
                    <p>The applicable Maximum Drawdown remains active at all times.</p>
                    <p>No Daily Loss Limit does not mean unlimited loss.</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        {/* r4-consistency-conditions */}
        <section className="lvr-r4" id="consistency-rules">
          <div className="lvr-r4-glow" aria-hidden="true" />
          <div className="lvf-container">
            <div className="lvr-section-divider" aria-hidden="true" />
            <div className="lvr-r4-head">
              <span className="lvr-r4-badge" aria-hidden="true">3</span>
              <h2 className="lvr-r4-title">Consistency <span className="lvr-r4-accent">Rules</span></h2>
            </div>
            <div className="lvr-r4-grid">
              <div className="lvr-r4-col">
                <article className="lvr-r4-card lvr-r4-card--dark" id="consistency-not-breach">
                  <div className="lvr-r4-cardhead">
                    <h3 className="lvr-r4-cardtitle">Failing Consistency Is Not a Breach</h3>
                  </div>
                  <div className="lvr-r4-body">
                    <p>Exceeding the 40% Consistency Rule does not automatically breach or close the account.</p>
                    <p>The trader can continue trading until the Consistency percentage becomes compliant.</p>
                  </div>
                </article>
                <article className="lvr-r4-card lvr-r4-card--dark" id="consistency-example">
                  <div className="lvr-r4-cardhead">
                    <h3 className="lvr-r4-cardtitle">Consistency Example</h3>
                  </div>
                  <div className="lvr-r4-body">
                    <p>If the trader&apos;s best day is $2,000 and total accumulated profit is $8,000:</p>
                    <p style={{ fontFamily: 'monospace', color: 'rgba(255,255,255,0.9)', margin: '4px 0' }}>$2,000 ÷ $8,000 = 25%</p>
                    <p>The trader meets the Consistency Rule.</p>
                    <p style={{ marginTop: 10 }}>If the trader&apos;s best day is $3,500 and total accumulated profit is $8,000:</p>
                    <p style={{ fontFamily: 'monospace', color: 'rgba(255,255,255,0.9)', margin: '4px 0' }}>$3,500 ÷ $8,000 = 43.75%</p>
                    <p>The trader does not yet meet the Consistency Rule.</p>
                    <p>The trader can continue trading until total accumulated profit increases enough for the best day to represent 40% or less.</p>
                  </div>
                </article>
                <article className="lvr-r4-card lvr-r4-card--dark" id="consistency-lvlup-funded">
                  <div className="lvr-r4-cardhead">
                    <h3 className="lvr-r4-cardtitle">Lvlup Funded Consistency</h3>
                  </div>
                  <div className="lvr-r4-body">
                    <p>Lvlup Funded Accounts continue to use the 40% Consistency Rule.</p>
                    <p>The account must satisfy the rule when a payout request is submitted.</p>
                  </div>
                </article>
              </div>
              <div className="lvr-r4-col">
                <article className="lvr-r4-card" id="consistency-lvlup-40pct">
                  <div className="lvr-r4-cardhead">
                    <h3 className="lvr-r4-cardtitle">Lvlup Account 40% Consistency Rule</h3>
                  </div>
                  <div className="lvr-r4-body">
                    <p>Lvlup Accounts use a 40% Consistency Rule during both the Evaluation and Funded stages.</p>
                    <p>The trader&apos;s most profitable Trading Day cannot represent more than 40% of total accumulated profit.</p>
                    <p style={{ marginTop: 10, fontWeight: 600, color: '#ffffff' }}>Formula</p>
                    <p>Best Trading Day ÷ Total Accumulated Profit × 100</p>
                    <p>The result must be 40% or lower.</p>
                  </div>
                </article>
                <article className="lvr-r4-card" id="consistency-starter-funded">
                  <div className="lvr-r4-cardhead">
                    <h3 className="lvr-r4-cardtitle">Starter Funded Consistency</h3>
                  </div>
                  <div className="lvr-r4-body">
                    <p>Starter Funded Accounts have no Consistency Rule.</p>
                    <p>Once the Starter Evaluation has been passed, the 40% Consistency requirement no longer applies.</p>
                  </div>
                </article>
                <article className="lvr-r4-card" id="consistency-starter-eval">
                  <div className="lvr-r4-cardhead">
                    <h3 className="lvr-r4-cardtitle">Starter Evaluation Consistency</h3>
                  </div>
                  <div className="lvr-r4-body">
                    <p>Starter Accounts use the 40% Consistency Rule during the Evaluation Stage only.</p>
                    <p>The trader&apos;s most profitable Evaluation day cannot exceed 40% of total Evaluation profit.</p>
                  </div>
                </article>
              </div>
            </div>
            <div className="lvr-section-divider" aria-hidden="true" />
            <div className="lvr-r4-head lvr-r4-head--cond" id="trading-conditions">
              <span className="lvr-r4-badge" aria-hidden="true">4</span>
              <h2 className="lvr-r4-title">Trading <span className="lvr-r4-accent">Conditions</span></h2>
            </div>
            <div className="lvr-r4-grid">
              <div className="lvr-r4-col">
                <article className="lvr-r4-card lvr-r4-card--dark" id="rule-news-trading">
                  <div className="lvr-r4-cardhead">
                    <h3 className="lvr-r4-cardtitle">News Trading Is Fully Allowed</h3>
                  </div>
                  <div className="lvr-r4-body">
                    <p>News Trading is allowed on both Lvlup Accounts and Starter Accounts, during both Evaluation and Funded stages.</p>
                    <p>There is no 3-minute news restriction before or after scheduled economic news events.</p>
                    <p>Normal risk and prohibited-trading rules continue to apply.</p>
                  </div>
                </article>
                <article className="lvr-r4-card lvr-r4-card--dark" id="rule-weekend-holding">
                  <div className="lvr-r4-cardhead">
                    <h3 className="lvr-r4-cardtitle">Weekend Holding Is Not Allowed</h3>
                  </div>
                  <div className="lvr-r4-body">
                    <p>Positions cannot be carried over the weekend.</p>
                    <p>All open positions and pending orders must be closed before the permitted weekend trading cutoff.</p>
                  </div>
                </article>
                <article className="lvr-r4-card lvr-r4-card--dark" id="rule-hedging-one-account">
                  <div className="lvr-r4-cardhead">
                    <h3 className="lvr-r4-cardtitle">Hedging Within One Account</h3>
                  </div>
                  <div className="lvr-r4-body">
                    <p>Hedging within the same account is allowed.</p>
                    <p>Traders may hold opposing exposure inside one account as long as the activity remains compliant with all other trading rules.</p>
                    <p>Cross-account hedging remains prohibited.</p>
                  </div>
                </article>
                <article className="lvr-r4-card lvr-r4-card--dark" id="rule-trading-bots">
                  <div className="lvr-r4-cardhead">
                    <h3 className="lvr-r4-cardtitle">Trading Bots</h3>
                  </div>
                  <div className="lvr-r4-body">
                    <p>Traders may use their own Trading Bots or automated trading systems.</p>
                    <p>The bot must belong to and be operated for the verified trader&apos;s own trading activity.</p>
                    <p>Automation cannot be used to copy or coordinate trades between different traders.</p>
                  </div>
                </article>
              </div>
              <div className="lvr-r4-col">
                <article className="lvr-r4-card" id="rule-overnight-holding">
                  <div className="lvr-r4-cardhead">
                    <h3 className="lvr-r4-cardtitle">Overnight Holding Is Not Allowed</h3>
                  </div>
                  <div className="lvr-r4-body">
                    <p>Positions cannot remain open overnight.</p>
                    <p>On standard non-holiday trading days, all open positions and pending orders must be closed or cancelled by 15:55 CST.</p>
                    <p>Traders remain responsible for closing their positions before the permitted trading window ends.</p>
                  </div>
                </article>
                <article className="lvr-r4-card lvr-r4-card--dark" id="rule-session-reopening">
                  <div className="lvr-r4-cardhead">
                    <h3 className="lvr-r4-cardtitle">Trading Session Reopening</h3>
                  </div>
                  <div className="lvr-r4-body">
                    <p>After the daily close, trading may resume from the 17:00 CST CME Globex open.</p>
                  </div>
                </article>
                <article className="lvr-r4-card lvr-r4-card--dark" id="rule-holiday-trading">
                  <div className="lvr-r4-cardhead">
                    <h3 className="lvr-r4-cardtitle">Holiday Trading Responsibility</h3>
                  </div>
                  <div className="lvr-r4-body">
                    <p>Trading hours may change during holidays or shortened exchange sessions.</p>
                    <p>Traders are responsible for checking the applicable market schedule and closing positions before the required market close.</p>
                  </div>
                </article>
                <article className="lvr-r4-card lvr-r4-card--dark" id="rule-min-duration">
                  <div className="lvr-r4-cardhead">
                    <h3 className="lvr-r4-cardtitle">Minimum Trade Duration</h3>
                  </div>
                  <div className="lvr-r4-body">
                    <p>There is no minimum trade duration.</p>
                    <p>Trades are not required to remain open for a minimum number of seconds or minutes.</p>
                    <p>High-Frequency Trading restrictions still apply.</p>
                  </div>
                </article>
                <article className="lvr-r4-card lvr-r4-card--dark" id="rule-hft">
                  <div className="lvr-r4-cardhead">
                    <h3 className="lvr-r4-cardtitle">High-Frequency Trading</h3>
                  </div>
                  <div className="lvr-r4-body">
                    <p>High-Frequency Trading bots are not allowed.</p>
                    <p>Strategies or automated systems designed to generate extremely high-frequency order activity are prohibited.</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        {/* r5-contracts-payout */}
        <section className="lvr-r5" id="contracts-and-payout">
          <div className="lvr-r5-glow" aria-hidden="true" />
          <div className="lvf-container">
            <div className="lvr-section-divider" aria-hidden="true" />
            <div className="lvr-r5-head">
              <span className="lvr-r5-badge" aria-hidden="true">5</span>
              <h2 className="lvr-r5-title">Contracts and Account <span className="lvr-r5-accent">Limits</span></h2>
            </div>
            <div className="lvr-r5-grid">
              <div className="lvr-r5-col">
                <article className="lvr-r5-card" id="rule-emini-micro-conversion">
                  <div className="lvr-r5-cardhead">
                    <h3 className="lvr-r5-cardtitle">E-mini and Micro Conversion</h3>
                  </div>
                  <div className="lvr-r5-body">
                    <p>Lvlup uses a 1:10 conversion ratio.</p>
                    <p>1 E-mini Contract = 10 Micro Contracts</p>
                    <p>For example, a 50K Account may trade:</p>
                    <p style={{ margin: '6px 0 0 10px', color: 'rgba(255, 255, 255, 0.9)' }}>3 E-mini Contracts<br />30 Micro Contracts<br />Or an equivalent combination</p>
                  </div>
                </article>
                <article className="lvr-r5-card lvr-r5-card--soft" id="rule-exposure-aggregated">
                  <div className="lvr-r5-cardhead">
                    <h3 className="lvr-r5-cardtitle">Exposure Is Aggregated</h3>
                  </div>
                  <div className="lvr-r5-body">
                    <p>Contract limits apply to the trader&apos;s total open exposure.</p>
                    <p>Trading multiple futures products does not create a separate contract allowance for each market.</p>
                  </div>
                </article>
                <article className="lvr-r5-card" id="rule-max-total-allocation">
                  <div className="lvr-r5-cardhead">
                    <h3 className="lvr-r5-cardtitle">Maximum Total Allocation</h3>
                  </div>
                  <div className="lvr-r5-body">
                    <p>The maximum total active allocation is:</p>
                    <p style={{ fontWeight: 600, color: '#00a2ff', margin: '4px 0 8px 0', fontSize: 16 }}>$1,000,000 per trader</p>
                    <p>The allocation may be built using different account sizes and multiple active accounts.</p>
                  </div>
                </article>
              </div>
              <div className="lvr-r5-col">
                <article className="lvr-r5-card lvr-r5-card--dark" id="rule-max-contract-limits">
                  <div className="lvr-r5-cardhead">
                    <h3 className="lvr-r5-cardtitle">Maximum Contract Limits</h3>
                  </div>
                  <div className="lvr-r5-body">
                    <p>Maximum position size depends on the account size.</p>
                    <div className="lvr-r5-tablewrap">
                      <table className="lvr-r5-table">
                        <thead>
                          <tr>
                            <th scope="col">Account Size</th>
                            <th scope="col">E-mini contracts</th>
                            <th scope="col">Equivalent Micro contracts</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td>25K</td><td>1</td><td>10</td></tr>
                          <tr><td>50K</td><td>3</td><td>30</td></tr>
                          <tr><td>100K</td><td>6</td><td>60</td></tr>
                          <tr><td>150K</td><td>9</td><td>90</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </article>
                <article className="lvr-r5-card lvr-r5-card--dark" id="rule-multiple-accounts">
                  <div className="lvr-r5-cardhead">
                    <h3 className="lvr-r5-cardtitle">Multiple Accounts</h3>
                  </div>
                  <div className="lvr-r5-body">
                    <p>Traders may hold multiple active Evaluation or Funded Accounts.</p>
                    <p>The primary limit is the trader&apos;s combined Maximum Total Allocation.</p>
                  </div>
                </article>
              </div>
            </div>
            <div className="lvr-section-divider" aria-hidden="true" />
            <div className="lvr-r5-head lvr-r5-head--payout" id="payout-rules">
              <span className="lvr-r5-badge" aria-hidden="true">6</span>
              <h2 className="lvr-r5-title">Lvlup Funded Payout <span className="lvr-r5-accent">Rules</span></h2>
            </div>
            <div className="lvr-r5-grid">
              <div className="lvr-r5-col">
                <article className="lvr-r5-card" id="rule-payout-eligibility">
                  <div className="lvr-r5-cardhead">
                    <h3 className="lvr-r5-cardtitle">Lvlup Payout Eligibility</h3>
                  </div>
                  <div className="lvr-r5-body">
                    <p>Lvlup Funded Accounts use:</p>
                    <p style={{ margin: '4px 0 8px 10px', color: 'rgba(255,255,255,0.9)' }}>40% Consistency Rule<br />14-Day Payout Cycle</p>
                    <p>There is no separate 5-profitable-day requirement on Lvlup Funded Accounts.</p>
                    <p>Trading days within the payout cycle do not all need to be profitable.</p>
                  </div>
                </article>
                <article className="lvr-r5-card lvr-r5-card--soft" id="rule-payout-processing">
                  <div className="lvr-r5-cardhead">
                    <h3 className="lvr-r5-cardtitle">Payout Processing</h3>
                  </div>
                  <div className="lvr-r5-body">
                    <p>Approved payouts are generally processed within approximately 24 to 48 hours.</p>
                    <p style={{ margin: '8px 0 4px 0' }}>Available payout methods include:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: 20, margin: '4px 0 8px 0', color: 'rgba(255, 255, 255, 0.85)', fontSize: 13, lineHeight: '1.6' }}>
                      <li>Rise</li>
                      <li>Crypto</li>
                    </ul>
                    <p>Identity verification and account review must be completed where required.</p>
                  </div>
                </article>
                <article className="lvr-r5-card lvr-r5-card--soft" id="rule-drawdown-after-payout">
                  <div className="lvr-r5-cardhead">
                    <h3 className="lvr-r5-cardtitle">Drawdown After a Payout</h3>
                  </div>
                  <div className="lvr-r5-body">
                    <p>A payout does not reset the account&apos;s Drawdown.</p>
                    <p>Because the full approved payout amount is deducted from the account balance, traders should consider the remaining balance and Drawdown position before requesting a payout.</p>
                  </div>
                </article>
              </div>
              <div className="lvr-r5-col">
                <article className="lvr-r5-card lvr-r5-card--dark" id="rule-payout-cycle">
                  <div className="lvr-r5-cardhead">
                    <h3 className="lvr-r5-cardtitle">Payout Cycle</h3>
                  </div>
                  <div className="lvr-r5-body">
                    <p>Lvlup payout access follows a 14-Day Payout Cycle.</p>
                    <p>Eligible traders may submit a payout request once the applicable 14-day cycle has been completed and all funded payout requirements are satisfied.</p>
                  </div>
                </article>
                <article className="lvr-r5-card lvr-r5-card--darker" id="rule-max-payout-amount">
                  <div className="lvr-r5-cardhead">
                    <h3 className="lvr-r5-cardtitle">Maximum Payout Amount</h3>
                  </div>
                  <div className="lvr-r5-body">
                    <p>The maximum payout is 10% of the account&apos;s original starting balance.</p>
                    <div className="lvr-r5-tablewrap">
                      <table className="lvr-r5-table">
                        <thead>
                          <tr>
                            <th scope="col">Account Size</th>
                            <th scope="col">Maximum Payout</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td>25K</td><td>$2,500</td></tr>
                          <tr><td>50K</td><td>$5,000</td></tr>
                          <tr><td>100K</td><td>$10,000</td></tr>
                          <tr><td>150K</td><td>$15,000</td></tr>
                        </tbody>
                      </table>
                    </div>
                    <p>The payout cap is based on the account&apos;s original starting balance.</p>
                  </div>
                </article>
                <article className="lvr-r5-card lvr-r5-card--dark" id="rule-lvlup-profit-split-deduction">
                  <div className="lvr-r5-cardhead">
                    <h3 className="lvr-r5-cardtitle">Lvlup Profit Split and Account Deduction</h3>
                  </div>
                  <div className="lvr-r5-body">
                    <p>Lvlup Funded Accounts use an 80% Base Profit Split.</p>
                    <p>When a payout is requested and approved, the full requested payout amount is deducted from the trading account balance.</p>
                    <p style={{ marginTop: 8 }}>The approved payout is then divided:</p>
                    <p style={{ margin: '4px 0 8px 10px', color: 'rgba(255,255,255,0.9)' }}>80% to the trader<br />20% to Lvlup</p>
                    <p style={{ marginTop: 8, fontWeight: 600, color: '#ffffff' }}>Example</p>
                    <p>If a trader requests a $1,000 payout:</p>
                    <p>$1,000 is deducted from the trading account.</p>
                    <p style={{ marginTop: 6 }}>The trader receives: $800<br />Lvlup receives: $200</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        {/* r6-profitsplit-starter */}
        <section className="lvr-r6" id="profit-split-rules">
          <div className="lvr-r6-glow" aria-hidden="true" />
          <div className="lvf-container">
            <div className="lvr-section-divider" aria-hidden="true" />
            <div className="lvr-r6-head">
              <span className="lvr-r6-badge" aria-hidden="true">7</span>
              <h2 className="lvr-r6-title">Profit Split <span className="lvr-r6-accent">Rules</span></h2>
            </div>
            <div className="lvr-r6-grid lvr-r6-grid--even">
              <div className="lvr-r6-col">
                <article className="lvr-r6-card" id="rule-lvlup-accounts-split">
                  <div className="lvr-r6-cardhead">
                    <h3 className="lvr-r6-cardtitle">Lvlup Accounts</h3>
                  </div>
                  <div className="lvr-r6-body">
                    <p>Lvlup Funded Accounts use an:</p>
                    <p style={{ fontWeight: 600, color: '#00a2ff', margin: '4px 0 8px 0', fontSize: 16 }}>80% Base Profit Split</p>
                    <p>The trader receives 80% of the approved payout amount and Lvlup receives 20%.</p>
                  </div>
                </article>
              </div>
              <div className="lvr-r6-col">
                <article className="lvr-r6-card" id="rule-starter-accounts-split">
                  <div className="lvr-r6-cardhead">
                    <h3 className="lvr-r6-cardtitle">Starter Accounts Profit Split</h3>
                  </div>
                  <div className="lvr-r6-body">
                    <p>Starter Funded Accounts use a: <span style={{ fontWeight: 600, color: '#00a2ff' }}>100% Profit Split</span></p>
                    <p>The trader receives the full approved Starter payout amount.</p>
                    <p style={{ marginTop: 8 }}>The Starter payout remains subject to the applicable:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: 20, margin: '4px 0 8px 0', color: 'rgba(255, 255, 255, 0.85)', fontSize: 13, lineHeight: '1.6' }}>
                      <li>Maximum Payout Cap</li>
                      <li>50% Profit Withdrawal Limit</li>
                      <li>Minimum Payout</li>
                      <li>5 Profitable Day Reward Cycle</li>
                      <li>Maximum 5 Payouts</li>
                    </ul>
                  </div>
                </article>
              </div>
            </div>
            <div className="lvr-section-divider" aria-hidden="true" />
            <div className="lvr-r6-head lvr-r6-head--starter">
              <span className="lvr-r6-badge" aria-hidden="true">8</span>
              <h2 className="lvr-r6-title">Starter Funded Payout <span className="lvr-r6-accent">Rules</span></h2>
            </div>
            <div className="lvr-r6-grid">
              <div className="lvr-r6-col">
                <article className="lvr-r6-card" id="rule-starter-reward-cycle">
                  <div className="lvr-r6-cardhead">
                    <h3 className="lvr-r6-cardtitle">5 Profitable Day Reward Cycle</h3>
                  </div>
                  <div className="lvr-r6-body">
                    <p>Starter Funded Accounts use a 5 Profitable Trading Day Reward Cycle.</p>
                    <p>A trader becomes eligible to request a payout after completing 5 profitable Trading Days and satisfying all other payout requirements.</p>
                  </div>
                </article>
                <article className="lvr-r6-card" id="rule-starter-profit-split">
                  <div className="lvr-r6-cardhead">
                    <h3 className="lvr-r6-cardtitle">100% Profit Split</h3>
                  </div>
                  <div className="lvr-r6-body">
                    <p>Starter Accounts use a 100% Profit Split.</p>
                    <p>The full approved payout amount goes to the trader.</p>
                  </div>
                </article>
                <article className="lvr-r6-card" id="rule-starter-50-percent">
                  <div className="lvr-r6-cardhead">
                    <h3 className="lvr-r6-cardtitle">Maximum 50% Profit Withdrawal</h3>
                  </div>
                  <div className="lvr-r6-body">
                    <p>Each Starter payout request may include a maximum of 50% of the profit generated on the account.</p>
                    <p>The payout must also remain within the Maximum Payout Cap for the selected account size.</p>
                    <p style={{ marginTop: 12, fontWeight: 600, color: '#ffffff' }}>Example</p>
                    <p>If a trader generates $2,000 profit on a 25K Starter Account: 50% of generated profit = $1,000</p>
                    <p>The 25K Maximum Payout Cap is also $1,000.</p>
                    <p>The trader may request a maximum payout of: $1,000</p>
                    <p style={{ marginTop: 10 }}>If 50% of generated profit exceeds the account&apos;s Maximum Payout Cap, the account-size cap becomes the maximum available payout.</p>
                  </div>
                </article>
                <article className="lvr-r6-card" id="rule-starter-5-payouts">
                  <div className="lvr-r6-cardhead">
                    <h3 className="lvr-r6-cardtitle">Maximum Five Payouts</h3>
                  </div>
                  <div className="lvr-r6-body">
                    <p>Each Starter Account is limited to a maximum of 5 approved payouts.</p>
                    <p>After the fifth approved payout, the Starter Account closes permanently and the journey ends.</p>
                    <p style={{ marginTop: 10 }}>The fifth payout remains subject to the normal:</p>
                    <p style={{ margin: '4px 0 2px 10px', color: 'rgba(255,255,255,0.85)' }}>50% Profit Withdrawal Limit</p>
                    <p style={{ margin: '0 0 4px 10px', color: 'rgba(255,255,255,0.85)' }}>and<br />Maximum Payout Cap</p>
                    <p>The fifth payout does not allow the trader to bypass those limits.</p>
                  </div>
                </article>
                <article className="lvr-r6-card" id="rule-payout-compliance">
                  <div className="lvr-r6-cardhead">
                    <h3 className="lvr-r6-cardtitle">Payout Rule Compliance</h3>
                  </div>
                  <div className="lvr-r6-body">
                    <p>All payout conditions must be satisfied at the time the payout request is submitted. This includes the minimum payout requirement, maximum payout cap, generated-profit limit and any applicable account restrictions.</p>
                    <p>A payout request may be rejected or adjusted if the requested amount exceeds the account&apos;s eligible payout amount.</p>
                  </div>
                </article>
              </div>
              <div className="lvr-r6-col">
                <article className="lvr-r6-card" id="rule-starter-max-payout-caps">
                  <div className="lvr-r6-cardhead">
                    <h3 className="lvr-r6-cardtitle">Starter Maximum Payout Caps</h3>
                  </div>
                  <div className="lvr-r6-body">
                    <p>Maximum position size depends on the account&apos;s starting balance:</p>
                    <table className="lvr-r6-table">
                      <thead>
                        <tr>
                          <th scope="col">Account Size</th>
                          <th scope="col">Maximum payout percentage</th>
                          <th scope="col">Maximum amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td>25K</td><td>4%</td><td>$1,000</td></tr>
                        <tr><td>50K</td><td>4%</td><td>$2,000</td></tr>
                        <tr><td>100K</td><td>2.5%</td><td>$2,500</td></tr>
                        <tr><td>150K</td><td>2%</td><td>$3,000</td></tr>
                      </tbody>
                    </table>
                    <p>A Starter payout cannot exceed the Maximum Payout Cap assigned to the selected account size.</p>
                  </div>
                </article>
                <article className="lvr-r6-card" id="rule-starter-min-payout">
                  <div className="lvr-r6-cardhead">
                    <h3 className="lvr-r6-cardtitle">Starter Minimum Payout</h3>
                  </div>
                  <div className="lvr-r6-body">
                    <p>Starter Accounts have the following minimum payout thresholds:</p>
                    <table className="lvr-r6-table">
                      <thead>
                        <tr>
                          <th scope="col">Account Size</th>
                          <th scope="col">Minimum payout threshold</th>
                          <th scope="col">Minimum payout threshold</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td>25K</td><td>2%</td><td>$500</td></tr>
                        <tr><td>50K</td><td>1%</td><td>$500</td></tr>
                        <tr><td>100K</td><td>0.5%</td><td>$500</td></tr>
                        <tr><td>150K</td><td>0.333%</td><td>Approx. $500</td></tr>
                      </tbody>
                    </table>
                    <p>The payout request must meet the applicable minimum threshold.</p>
                  </div>
                </article>
                <article className="lvr-r6-card" id="rule-starter-account-lock">
                  <div className="lvr-r6-cardhead">
                    <h3 className="lvr-r6-cardtitle">Account Lock During a Payout Request</h3>
                  </div>
                  <div className="lvr-r6-body">
                    <p>When a Starter Payout is requested, the account is locked from new trading activity.</p>
                    <p>The account remains locked until the payout request is approved.</p>
                    <p>Once the payout receives backend approval, the account is unlocked and the trader may resume trading.</p>
                    <p>The trader does not need to wait for the payout funds to be sent or received before trading again.</p>
                    <p>If the payout has not been approved, the account remains locked.</p>
                  </div>
                </article>
                <article className="lvr-r6-card" id="rule-starter-account-deduction">
                  <div className="lvr-r6-cardhead">
                    <h3 className="lvr-r6-cardtitle">Starter Payout Account Deduction</h3>
                  </div>
                  <div className="lvr-r6-body">
                    <p>Starter Accounts use a 100% Profit Split.</p>
                    <p>When a Starter payout is approved, the full approved payout amount is deducted from the trading account balance and the full amount goes to the trader.</p>
                    <p style={{ marginTop: 12, fontWeight: 600, color: '#ffffff' }}>Example</p>
                    <p>If a Starter trader requests and receives approval for a $1,000 payout</p>
                    <p style={{ marginTop: 8 }}>Then:<br />$1,000 is deducted from the trading account</p>
                    <p style={{ marginTop: 6 }}>and:<br />$1,000 goes to the trader</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* r7-billing-protector */}
        <section className="lvr-r7" id="billing-protector">
          <div className="lvr-r7-glow" aria-hidden="true" />
          <div className="lvf-container">
            <div className="lvr-section-divider" aria-hidden="true" />
            <div className="lvr-r7-head">
              <span className="lvr-r7-badge" aria-hidden="true">9</span>
              <h2 className="lvr-r7-title">Billing and Account <span className="lvr-r7-title-accent">Lifecycle</span></h2>
            </div>
            <div className="lvr-r7-grid">
              <div className="lvr-r7-col">
                <article className="lvr-r7-card" id="rule-dashboard-checkout">
                  <div className="lvr-r7-cardhead">
                    <h3 className="lvr-r7-cardtitle">Website Selection and Dashboard Checkout</h3>
                  </div>
                  <div className="lvr-r7-body">
                    <p>No payment is processed directly on the public Lvlup Futures website.</p>
                    <p>The trader selects an account and continues to the external dashboard.</p>
                    <p style={{ marginTop: 10, fontWeight: 500 }}>The dashboard handles:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: 20, margin: '6px 0 0 0', color: 'rgba(255, 255, 255, 0.75)', fontSize: 13, lineHeight: '1.7' }}>
                      <li>Account configuration</li>
                      <li>Platform selection</li>
                      <li>Payment option</li>
                      <li>Discounts</li>
                      <li>Add-ons</li>
                      <li>Checkout</li>
                      <li>Activation</li>
                      <li>Account management</li>
                    </ul>
                  </div>
                </article>
                <article className="lvr-r7-card" id="rule-lvlup-onetime-eval">
                  <div className="lvr-r7-cardhead">
                    <h3 className="lvr-r7-cardtitle">Lvlup One-Time Evaluation</h3>
                  </div>
                  <div className="lvr-r7-body">
                    <p>Lvlup Accounts may also be purchased through a One-Time Evaluation payment.</p>
                    <p>The trader pays once for Evaluation access rather than using a recurring monthly payment.</p>
                    <p>Passing the Evaluation still requires the applicable Activation Fee before the Funded Account becomes active.</p>
                  </div>
                </article>
                <article className="lvr-r7-card" id="rule-no-funded-monthly-fee">
                  <div className="lvr-r7-cardhead">
                    <h3 className="lvr-r7-cardtitle">No Funded Monthly Evaluation Fee</h3>
                  </div>
                  <div className="lvr-r7-body">
                    <p>After the Lvlup Evaluation is passed and the required Activation Fee is completed, there is no ongoing monthly Evaluation subscription on the Funded Account.</p>
                  </div>
                </article>
                <article className="lvr-r7-card" id="rule-no-starter-activation">
                  <div className="lvr-r7-cardhead">
                    <h3 className="lvr-r7-cardtitle">No Starter Activation Fee</h3>
                  </div>
                  <div className="lvr-r7-body">
                    <p>Starter Accounts do not require an Activation Fee after passing.</p>
                    <p>After completing the Evaluation and required verification, the trader can progress to the Starter Funded Account without an additional Activation payment.</p>
                  </div>
                </article>
                <article className="lvr-r7-card" id="rule-subscription-cancellation">
                  <div className="lvr-r7-cardhead">
                    <h3 className="lvr-r7-cardtitle">Monthly Subscription Cancellation</h3>
                  </div>
                  <div className="lvr-r7-body">
                    <p>An active Lvlup monthly evaluation can be cancelled through the dashboard.</p>
                    <p>The trader keeps access until the end of the current paid billing period. No additional renewal is charged after the cancellation becomes effective.</p>
                  </div>
                </article>
              </div>
              <div className="lvr-r7-col">
                <article className="lvr-r7-card" id="rule-lvlup-monthly-eval">
                  <div className="lvr-r7-cardhead">
                    <h3 className="lvr-r7-cardtitle">Lvlup Monthly Evaluation</h3>
                  </div>
                  <div className="lvr-r7-body">
                    <p>Lvlup Accounts may be purchased through a Monthly Evaluation payment. The monthly payment applies while the Evaluation remains active.</p>
                    <p>Billing ends after the Evaluation is passed, breached or cancelled according to the applicable account conditions.</p>
                  </div>
                </article>
                <article className="lvr-r7-card" id="rule-activation-fee">
                  <div className="lvr-r7-cardhead">
                    <h3 className="lvr-r7-cardtitle">Lvlup Activation Fee</h3>
                  </div>
                  <div className="lvr-r7-body">
                    <p>Lvlup Accounts require an Activation Fee after passing the Evaluation. The Activation Fee must be completed before the Funded Account becomes active.</p>
                    <p>The trader has 30 days after passing to complete the Activation payment.</p>
                  </div>
                </article>
                <article className="lvr-r7-card" id="rule-starter-onetime-fee">
                  <div className="lvr-r7-cardhead">
                    <h3 className="lvr-r7-cardtitle">Starter One-Time Fee</h3>
                  </div>
                  <div className="lvr-r7-body">
                    <p>Starter Accounts are available through a One-Time Fee only.</p>
                    <p>There is no monthly Starter subscription.</p>
                  </div>
                </article>
                <article className="lvr-r7-card" id="rule-inactivity-req">
                  <div className="lvr-r7-cardhead">
                    <h3 className="lvr-r7-cardtitle">Lvlup Inactivity Requirement</h3>
                  </div>
                  <div className="lvr-r7-body">
                    <p>Lvlup Accounts must record at least one executed trade within every 30-day period to remain active.</p>
                    <p>This requirement applies during both the Evaluation and Funded stages.</p>
                  </div>
                </article>
                <article className="lvr-r7-card" id="rule-no-reset-breach">
                  <div className="lvr-r7-cardhead">
                    <h3 className="lvr-r7-cardtitle">No Reset After Breach</h3>
                  </div>
                  <div className="lvr-r7-body">
                    <p>A breached account cannot be reset, restored or reactivated.</p>
                    <p>A trader who wishes to continue must purchase a new Evaluation.</p>
                  </div>
                </article>
                <article className="lvr-r7-card" id="rule-hard-breach">
                  <div className="lvr-r7-cardhead">
                    <h3 className="lvr-r7-cardtitle">Hard Breach</h3>
                  </div>
                  <div className="lvr-r7-body">
                    <p>A Hard Breach occurs when a critical trading or risk rule is violated, including the Maximum Drawdown or prohibited trading requirements.</p>
                    <p>A Hard Breach closes the affected account.</p>
                  </div>
                </article>
                <article className="lvr-r7-card" id="rule-activation-fees-table">
                  <div className="lvr-r7-cardhead">
                    <h3 className="lvr-r7-cardtitle">Lvlup Accounts Activation Fees</h3>
                  </div>
                  <div className="lvr-r7-body">
                    <table className="lvr-r6-table">
                      <thead>
                        <tr>
                          <th scope="col">Account Size</th>
                          <th scope="col">Activation if One-Time</th>
                          <th scope="col">Activation if Monthly</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td>25K</td><td>$194</td><td>$129</td></tr>
                        <tr><td>50K</td><td>$338</td><td>$225</td></tr>
                        <tr><td>100K</td><td>$554</td><td>$369</td></tr>
                        <tr><td>150K</td><td>$714</td><td>$476</td></tr>
                      </tbody>
                    </table>
                  </div>
                </article>
              </div>
            </div>
            <div className="lvr-section-divider" aria-hidden="true" />
            <div className="lvr-r7-head lvr-r7-head--protector">
              <span className="lvr-r7-badge" aria-hidden="true">10</span>
              <h2 className="lvr-r7-title">Payout <span className="lvr-r7-title-accent">Protector</span></h2>
            </div>
            <div className="lvr-r7-grid">
              <div className="lvr-r7-col">
                <article className="lvr-r7-card" id="rule-protector-both-types">
                  <div className="lvr-r7-cardhead">
                    <h3 className="lvr-r7-cardtitle">Available on Both Account Types</h3>
                  </div>
                  <div className="lvr-r7-body">
                    <p>Payout Protector is available on both:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: 20, margin: '4px 0 8px 0', color: 'rgba(255, 255, 255, 0.75)', fontSize: 13, lineHeight: '1.6' }}>
                      <li>Lvlup Accounts</li>
                      <li>Starter Accounts</li>
                    </ul>
                    <p>It is an optional account enhancement.</p>
                  </div>
                </article>
                <article className="lvr-r7-card" id="rule-protector-no-prevent-breach">
                  <div className="lvr-r7-cardhead">
                    <h3 className="lvr-r7-cardtitle">Payout Protector Does Not Prevent a Breach</h3>
                  </div>
                  <div className="lvr-r7-body">
                    <p>Payout Protector does not:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: 20, margin: '4px 0 8px 0', color: 'rgba(255, 255, 255, 0.75)', fontSize: 13, lineHeight: '1.6' }}>
                      <li>Increase the Maximum Drawdown</li>
                      <li>Remove Trading Rules</li>
                      <li>Prevent a breach</li>
                      <li>Keep a breached account open</li>
                    </ul>
                    <p>The breached account still closes.</p>
                    <p>Payout Protector only allows an eligible funded payout to be reviewed after a qualifying breach.</p>
                  </div>
                </article>
              </div>
              <div className="lvr-r7-col">
                <article className="lvr-r7-card" id="rule-how-protector-works">
                  <div className="lvr-r7-cardhead">
                    <h3 className="lvr-r7-cardtitle">How Payout Protector Works</h3>
                  </div>
                  <div className="lvr-r7-body">
                    <p>If a Funded Account is breached while holding profit, Lvlup reviews:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: 20, margin: '4px 0 8px 0', color: 'rgba(255, 255, 255, 0.75)', fontSize: 13, lineHeight: '1.6' }}>
                      <li>The trading account</li>
                      <li>The breach</li>
                      <li>Trading activity</li>
                      <li>Available profit</li>
                      <li>Payout eligibility</li>
                    </ul>
                    <p>If the protected payout is eligible after review, the trader receives the applicable payout.</p>
                  </div>
                </article>
                <article className="lvr-r7-card" id="rule-protector-active-before">
                  <div className="lvr-r7-cardhead">
                    <h3 className="lvr-r7-cardtitle">Payout Protector Must Be Active Before the Breach</h3>
                  </div>
                  <div className="lvr-r7-body">
                    <p>Payout Protector cannot be added after the account has already breached.</p>
                    <p>It must be active on the account before the qualifying breach occurs.</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        {/* r8-platforms-verification */}
        <section className="lvr-r8" id="platforms-verification">
          <div className="lvr-r8-glow" aria-hidden="true" />
          <div className="lvf-container">
            <div className="lvr-section-divider" aria-hidden="true" />
            <div className="lvr-r8-head">
              <span className="lvr-r8-badge" aria-hidden="true">11</span>
              <h2 className="lvr-r8-title">Platforms and <span className="lvr-r8-title-accent">Execution</span></h2>
            </div>
            <div className="lvr-r8-grid">
              <article className="lvr-r8-card">
                <div className="lvr-r8-cardhead">
                  <h3 className="lvr-r8-cardtitle">Supported Trading Platforms</h3>
                </div>
                <div className="lvr-r8-body">
                  <p>Lvlup Futures currently supports:</p>
                  <ul style={{ listStyleType: 'disc' }}>
                    <li>DXtrade</li>
                    <li>Volumetrica</li>
                  </ul>
                  <p>The selected platform is configured through the external dashboard.</p>
                </div>
              </article>
              <article className="lvr-r8-card">
                <div className="lvr-r8-cardhead">
                  <h3 className="lvr-r8-cardtitle">Third-Party Market Infrastructure</h3>
                </div>
                <div className="lvr-r8-body">
                  <p>Market pricing, execution and trading-platform functionality may rely on third-party exchanges, market-data providers and infrastructure.</p>
                  <p>Traders may not exploit incorrect pricing, execution delays, platform faults or technical errors.</p>
                </div>
              </article>
              <article className="lvr-r8-card lvr-r8-card--full">
                <div className="lvr-r8-cardhead">
                  <h3 className="lvr-r8-cardtitle">Lvlup Trading Terminal</h3>
                </div>
                <div className="lvr-r8-body">
                  <p>The Lvlup Trading Terminal is currently in development.</p>
                  <p>It is planned as a future proprietary trading environment and is not currently available for live Evaluation or Funded Account selection.</p>
                </div>
              </article>
              <article className="lvr-r8-card lvr-r8-card--full lvr-r8-card--d45">
                <div className="lvr-r8-cardhead">
                  <h3 className="lvr-r8-cardtitle">Futures Commission Rates</h3>
                </div>
                <div className="lvr-r8-body">
                  <p>Trading commissions are charged per side.</p>
                  <table className="lvr-r8-table">
                    <thead>
                      <tr>
                        <th scope="col">Futures products</th>
                        <th scope="col">Commission per side</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>ES, NQ, YM, RTY</td><td>$2.18</td></tr>
                      <tr><td>MES, MNQ, MYM, M2K</td><td>$0.71</td></tr>
                      <tr><td>6E, 6B, 6J, 6C, 6S, 6A</td><td>$2.40</td></tr>
                      <tr><td>CL, HO, RB</td><td>$2.30</td></tr>
                      <tr><td>MCL, MGC</td><td>$0.86</td></tr>
                      <tr><td>NG, GC, SI, PL, HG</td><td>$2.40</td></tr>
                      <tr><td>SIL</td><td>$1.36</td></tr>
                      <tr><td>ZC, ZS, ZM, ZL, ZW</td><td>$2.90</td></tr>
                      <tr><td>MBT</td><td>$2.86</td></tr>
                      <tr><td>MET</td><td>$0.46</td></tr>
                    </tbody>
                  </table>
                  <p>Trading commissions affect the account balance and therefore also affect profit, Drawdown and Evaluation performance.</p>
                </div>
              </article>
            </div>
            <div className="lvr-section-divider" aria-hidden="true" />
            <div className="lvr-r8-head lvr-r8-head--verification">
              <span className="lvr-r8-badge" aria-hidden="true">12</span>
              <h2 className="lvr-r8-title">Verification and Account <span className="lvr-r8-title-accent">Ownership</span></h2>
            </div>
            <div className="lvr-r8-grid">
              <article className="lvr-r8-card lvr-r8-card--d80">
                <div className="lvr-r8-cardhead">
                  <h3 className="lvr-r8-cardtitle">KYC Verification</h3>
                </div>
                <div className="lvr-r8-body">
                  <p>Lvlup Futures uses Sumsub for identity verification.</p>
                  <p>After passing an Evaluation, the trader must complete the required verification before Funded Account access or payout access where applicable.</p>
                </div>
              </article>
              <article className="lvr-r8-card">
                <div className="lvr-r8-cardhead">
                  <h3 className="lvr-r8-cardtitle">Simulated Trading Environment</h3>
                </div>
                <div className="lvr-r8-body">
                  <p>Lvlup Evaluations and Funded Accounts operate in a simulated trading environment unless expressly stated otherwise in the applicable agreement.</p>
                  <p>Trading performance and payout eligibility remain subject to the applicable account rules.</p>
                </div>
              </article>
              <article className="lvr-r8-card lvr-r8-card--d85">
                <div className="lvr-r8-cardhead">
                  <h3 className="lvr-r8-cardtitle">Personal Account Use</h3>
                </div>
                <div className="lvr-r8-body">
                  <p>Every trading account belongs to the verified account holder.</p>
                  <p>Account credentials may not be shared, sold, transferred or operated by another person.</p>
                </div>
              </article>
              <article className="lvr-r8-card lvr-r8-card--d50">
                <div className="lvr-r8-cardhead">
                  <h3 className="lvr-r8-cardtitle">Funded Trader Agreement</h3>
                </div>
                <div className="lvr-r8-body">
                  <p>A trader may be required to accept the applicable Funded Trader Agreement before receiving Funded Account access.</p>
                </div>
              </article>
              <article className="lvr-r8-card lvr-r8-card--full lvr-r8-card--d80">
                <div className="lvr-r8-cardhead">
                  <h3 className="lvr-r8-cardtitle">Device and Access Monitoring</h3>
                </div>
                <div className="lvr-r8-body">
                  <p>Lvlup Futures may review:</p>
                  <ul style={{ listStyleType: 'disc' }}>
                    <li>Account access</li>
                    <li>Devices</li>
                    <li>IP addresses</li>
                    <li>Trading patterns</li>
                  </ul>
                  <p>This may be used to protect account security and identify unauthorized account use or prohibited trading activity.</p>
                </div>
              </article>
            </div>
          </div>
        </section>
        {/* r9-prohibited */}
        <section className="lvr-r9" id="prohibited-trading-rules">
          <div className="lvr-r9-glow" aria-hidden="true" />
          <div className="lvf-container">
            <div className="lvr-section-divider" aria-hidden="true" />
            <div className="lvr-r9-head">
              <span className="lvr-r9-badge" aria-hidden="true">13</span>
              <h2 className="lvr-r9-title">Prohibited and Allowed Trading <span className="lvr-r9-accent">Activity</span></h2>
            </div>
            <div className="lvr-r9-grid">
              {/* LEFT COLUMN */}
              <div className="lvr-r9-col">
                <article className="lvr-r9-card" id="rule-pricing-latency-exploitation">
                  <div className="lvr-r9-cardhead">
                    <h3 className="lvr-r9-cardtitle">Pricing and Latency Exploitation</h3>
                  </div>
                  <div className="lvr-r9-body">
                    <p>Traders may not exploit:</p>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                      <li>Delayed price feeds</li>
                      <li>Incorrect quotes</li>
                      <li>Platform errors</li>
                      <li>Latency differences</li>
                      <li>Execution faults</li>
                    </ul>
                    <p>Trading must be based on genuine market activity rather than technical exploitation.</p>
                  </div>
                </article>
                <article className="lvr-r9-card">
                  <div className="lvr-r9-cardhead">
                    <h3 className="lvr-r9-cardtitle">Own Trading Bots</h3>
                  </div>
                  <div className="lvr-r9-body">
                    <p>A trader may use their own Trading Bot or automated trading system.</p>
                    <p>The automation must be used for the verified trader's own strategy and trading activity.</p>
                    <p>Automation may not be used to coordinate or copy trades between different traders.</p>
                  </div>
                </article>
                <article className="lvr-r9-card">
                  <div className="lvr-r9-cardhead">
                    <h3 className="lvr-r9-cardtitle">Front-Running</h3>
                  </div>
                  <div className="lvr-r9-body">
                    <p>Traders may not use advance knowledge of another trader's or account's pending market order to enter the market beforehand.</p>
                  </div>
                </article>
                <article className="lvr-r9-card">
                  <div className="lvr-r9-cardhead">
                    <h3 className="lvr-r9-cardtitle">Cross-Account Arbitrage</h3>
                  </div>
                  <div className="lvr-r9-body">
                    <p>Arbitrage between Lvlup Accounts or between Lvlup Futures and another trading firm is prohibited.</p>
                  </div>
                </article>
                <article className="lvr-r9-card">
                  <div className="lvr-r9-cardhead">
                    <h3 className="lvr-r9-cardtitle">Group Trading and Signal Groups</h3>
                  </div>
                  <div className="lvr-r9-body">
                    <p>Coordinated group trading is prohibited.</p>
                    <p>Traders may not enter or exit trades together through:</p>
                    <ul style={{ listStyleType: 'disc' }}>
                      <li>Signal groups</li>
                      <li>Coordinated trading groups</li>
                      <li>Synchronized strategies</li>
                      <li>Organized accounts designed to reproduce matching results</li>
                    </ul>
                  </div>
                </article>
                <article className="lvr-r9-card">
                  <div className="lvr-r9-cardhead">
                    <h3 className="lvr-r9-cardtitle">Automated Copying Between Different Traders</h3>
                  </div>
                  <div className="lvr-r9-body">
                    <p>Bots, scripts, Expert Advisors or other automation may not be used to copy trades between different traders.</p>
                  </div>
                </article>
                <article className="lvr-r9-card">
                  <div className="lvr-r9-cardhead">
                    <h3 className="lvr-r9-cardtitle">Third-Party Challenge Passing</h3>
                  </div>
                  <div className="lvr-r9-body">
                    <p>Third-party services may not trade, manage or pass an Evaluation on behalf of the registered trader.</p>
                    <p>The Evaluation must reflect the registered trader's own trading activity.</p>
                  </div>
                </article>
                <article className="lvr-r9-card">
                  <div className="lvr-r9-cardhead">
                    <h3 className="lvr-r9-cardtitle">Gambling and All-In Trading</h3>
                  </div>
                  <div className="lvr-r9-body">
                    <p>All-in trading, excessive leverage and repeatedly placing an unreasonable portion of the account at risk on a single market move are prohibited.</p>
                  </div>
                </article>
                <article className="lvr-r9-card">
                  <div className="lvr-r9-cardhead">
                    <h3 className="lvr-r9-cardtitle">Spam and Unauthorized Solicitation</h3>
                  </div>
                  <div className="lvr-r9-body">
                    <p>Lvlup services may not be used for unauthorized commercial solicitation or spam.</p>
                  </div>
                </article>
                <article className="lvr-r9-card">
                  <div className="lvr-r9-cardhead">
                    <h3 className="lvr-r9-cardtitle">Regulatory and Exchange Compliance</h3>
                  </div>
                  <div className="lvr-r9-body">
                    <p>Trading must comply with applicable exchange, platform and regulatory requirements.</p>
                  </div>
                </article>
              </div>
              {/* RIGHT COLUMN */}
              <div className="lvr-r9-col">
                <article className="lvr-r9-card" id="rule-high-frequency-trading">
                  <div className="lvr-r9-cardhead">
                    <h3 className="lvr-r9-cardtitle">High-Frequency Trading</h3>
                  </div>
                  <div className="lvr-r9-body">
                    <p>High-Frequency Trading and HFT bots are prohibited.</p>
                  </div>
                </article>
                <article className="lvr-r9-card" id="rule-no-minimum-trade-duration">
                  <div className="lvr-r9-cardhead">
                    <h3 className="lvr-r9-cardtitle">No Minimum Trade Duration</h3>
                  </div>
                  <div className="lvr-r9-body">
                    <p>There is no minimum required duration for an individual trade.</p>
                    <p>Traders may enter and exit positions without a required minimum holding time, provided the activity does not violate the HFT or technical-exploitation rules.</p>
                  </div>
                </article>
                <article className="lvr-r9-card">
                  <div className="lvr-r9-cardhead">
                    <h3 className="lvr-r9-cardtitle">Insider or Non-Public Information</h3>
                  </div>
                  <div className="lvr-r9-body">
                    <p>Trading using confidential, insider or non-public information is prohibited.</p>
                  </div>
                </article>
                <article className="lvr-r9-card">
                  <div className="lvr-r9-cardhead">
                    <h3 className="lvr-r9-cardtitle">Cross-Account Hedging</h3>
                  </div>
                  <div className="lvr-r9-body">
                    <p>Opposing positions may not be used across separate accounts to neutralize normal market risk.</p>
                    <p>This includes hedging:</p>
                    <ul style={{ listStyleType: 'disc' }}>
                      <li>Between separate Lvlup Accounts</li>
                      <li>Between a Lvlup Account and another firm's account</li>
                    </ul>
                  </div>
                </article>
                <article className="lvr-r9-card">
                  <div className="lvr-r9-cardhead">
                    <h3 className="lvr-r9-cardtitle">Mirroring Between Different Traders</h3>
                  </div>
                  <div className="lvr-r9-body">
                    <p>Trades may not be copied or mirrored between accounts owned by different people.</p>
                  </div>
                </article>
                <article className="lvr-r9-card">
                  <div className="lvr-r9-cardhead">
                    <h3 className="lvr-r9-cardtitle">Copy Trading Between Your Own Accounts</h3>
                  </div>
                  <div className="lvr-r9-body">
                    <p>Copy Trading is allowed between accounts owned by the same verified trader.</p>
                    <p>All copied trades must remain within:</p>
                    <ul style={{ listStyleType: 'disc' }}>
                      <li>Maximum Allocation limits</li>
                      <li>Contract limits</li>
                      <li>Exposure limits</li>
                      <li>All other Trading Rules</li>
                    </ul>
                  </div>
                </article>
                <article className="lvr-r9-card">
                  <div className="lvr-r9-cardhead">
                    <h3 className="lvr-r9-cardtitle">Manipulative Strategy Switching</h3>
                  </div>
                  <div className="lvr-r9-body">
                    <p>Trading should represent a genuine strategy rather than an artificial high-risk method used only to pass the Evaluation before completely changing behaviour in the Funded Stage.</p>
                  </div>
                </article>
                <article className="lvr-r9-card">
                  <div className="lvr-r9-cardhead">
                    <h3 className="lvr-r9-cardtitle">Account Sharing</h3>
                  </div>
                  <div className="lvr-r9-body">
                    <p>Account credentials may not be shared.</p>
                    <p>No other person may trade or manage the account on behalf of the registered trader.</p>
                  </div>
                </article>
                <article className="lvr-r9-card">
                  <div className="lvr-r9-cardhead">
                    <h3 className="lvr-r9-cardtitle">Platform Manipulation</h3>
                  </div>
                  <div className="lvr-r9-body">
                    <p>Traders may not:</p>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                      <li>Hack</li>
                      <li>Reverse engineer</li>
                      <li>Interfere with</li>
                      <li>Overload</li>
                      <li>Bypass security</li>
                      <li>Exploit technical weaknesses</li>
                    </ul>
                    <p>of the website, dashboard or trading platforms.</p>
                  </div>
                </article>
              </div>
            </div>
            {/* ENFORCEMENT — full width bottom card */}
            <article className="lvr-r9-card lvr-r9-card--wide">
              <div className="lvr-r9-cardhead">
                <h3 className="lvr-r9-cardtitle">Enforcement</h3>
              </div>
              <div className="lvr-r9-body">
                <p>Violations of prohibited trading rules may result in:</p>
                <ul style={{ listStyleType: 'disc' }}>
                  <li>Account suspension</li>
                  <li>Account termination</li>
                  <li>Loss of Funded eligibility</li>
                  <li>Loss of payout eligibility</li>
                  <li>Forfeiture of profit</li>
                  <li>Loss of paid fees</li>
                </ul>
                <p>Trading activity may be reviewed before Funded approval or payout processing.</p>
              </div>
            </article>

          </div>
        </section>
        {/* r9b-cta */}
        <section className="lvf-s10" id="final-cta" style={{ paddingTop: 40, paddingBottom: 40 }}>
          <div className="lvf-container lvf-s10-container" style={{ maxWidth: 1152, margin: '0 auto', width: '100%', padding: '0 1rem' }}>
            <div style={{ position: 'relative', width: '100%' }}>
              <img src="assets/media/CTA_frame.png" alt="Choose Your Evaluation - Build Toward $1M" style={{ width: '100%', height: 'auto', objectFit: 'contain', borderRadius: 40, display: 'block', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }} />
              {/* Transparent functional links mapped over the baked-in image buttons */}
              <a href="/#evaluations" aria-label="Choose Your Evaluation" style={{ position: 'absolute', left: '25%', top: '65%', width: '24%', height: '25%', zIndex: 10, display: 'block' }} />
              <a href="/rules" aria-label="View the Rules" style={{ position: 'absolute', left: '51%', top: '65%', width: '24%', height: '25%', zIndex: 10, display: 'block' }} />
            </div>
          </div>
        </section>
      </div>

    </>
  );
}

