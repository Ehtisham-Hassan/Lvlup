import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BodyManager from "@/components/BodyManager";

export const metadata: Metadata = {
  title: "Home | Lvlup Futures",
  description: "A refined structure for futures evaluations, built around clarity and discipline.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/css/live/reset.css" />
        <link rel="stylesheet" href="/assets/css/live/frontend.min.css" />
        <link rel="stylesheet" href="/assets/css/live/post-7895.css" />
        <link rel="stylesheet" href="/assets/css/live/post-4611.css" />
        <link rel="stylesheet" href="/assets/css/live/post-67.css" />
        <link rel="stylesheet" href="/assets/css/live/widget-styles.css" />
        <link rel="stylesheet" href="/assets/css/live/responsive.css" />
        <link rel="stylesheet" href="/assets/css/live/lvlup-theme.css" />
        <link rel="stylesheet" href="/assets/css/live/lvlup-home.css" />
        <link rel="stylesheet" href="/assets/css/live/fixes-elite.css" />
        <link rel="stylesheet" href="/assets/css/live/fixes-evaluation.css" />
        <link rel="stylesheet" href="/assets/css/live/fixes-header.css" />
        <link rel="stylesheet" href="/assets/css/live/fixes-home-band.css" />
        <link rel="stylesheet" href="/assets/css/live/fixes-home.css" />
        <link rel="stylesheet" href="/assets/css/live/r3-elite.css" />
        <link rel="stylesheet" href="/assets/css/live/r3-evaluation.css" />
        <link rel="stylesheet" href="/assets/css/live/r3-home.css" />
        <link rel="stylesheet" href="/assets/css/live/r3-rules.css" />
        <link rel="stylesheet" href="/assets/css/live/r3b-evaluation.css" />
        <link rel="stylesheet" href="/assets/css/live/r3b-home.css" />
        <link rel="stylesheet" href="/assets/css/live/sofort.css" />
        <link rel="stylesheet" href="/assets/css/live/fixes.css" />
        <link rel="stylesheet" href="/assets/css/live/ekiticons.css" />
        <link rel="stylesheet" href="/assets/css/root.css" />
        <link rel="stylesheet" href="/assets/css/typography.css" />
      </head>
      <body>
        <BodyManager />
        <Header />
        <main>{children}</main>
        <Footer />
        <Script id="lvlup-theme-js-extra" strategy="beforeInteractive">
          {`var lvfAjax = {"ajaxurl":""};`}
        </Script>
        <Script src="/assets/js/live/lvlup-theme.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
