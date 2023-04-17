/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="id">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hangeulin - Kursus Bahasa Korea Online</title>
        <link rel="icon" type="ico" href="/favicon.ico" />
        <meta
          name="description"
          content="Hangeulin adalah situs kursus Bahasa Korea online dengan pengajar berpengalaman."
        />
        <meta
          name="keywords"
          content="kursus Bahasa Korea online, belajar Bahasa Korea, les Bahasa Korea"
        />
        <link
          rel="canonical"
          href="https://hangeulin.com/kursus-bahasa-korea-online"
        />
        <meta
          property="og:title"
          content="Hangeulin - Kursus Bahasa Korea Online"
        />
        <meta
          property="og:description"
          content="Hangeulin adalah situs kursus Bahasa Korea online dengan pengajar berpengalaman."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://hangeulin.com/kursus-bahasa-korea-online"
        />
        <meta
          property="og:image"
          content="https://hangeulin.com/assets/img/hangeulin-logo.png"
        />
        <meta property="og:image:alt" content="Logo Hangeulin" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="Hangeulin - Kursus Bahasa Korea Online"
        />
        <meta
          property="twitter:description"
          content="Hangeulin adalah situs kursus Bahasa Korea online dengan pengajar berpengalaman."
        />
        <meta
          property="twitter:image"
          content="https://hangeulin.com/assets/img/hangeulin-logo.png"
        />
        <meta property="twitter:image:alt" content="Logo Hangeulin" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
