import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Link to your PWA manifest */}
        <link rel="manifest" href="/manifest.json" />
        {/* Theme color for browser UI */}
        <meta name="theme-color" content="#FFFFFF" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}