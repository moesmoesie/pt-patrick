import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />

        <link
          rel="preload"
          href={`/fonts/rubik/rubik-v20-latin-500.woff2`}
          as="font"
          crossOrigin=""
        />

        <link
          rel="preload"
          href={`/fonts/rubik/rubik-v20-latin-regular.woff2`}
          as="font"
          crossOrigin=""
        />

        <link
          rel="preload"
          href={`/fonts/rubik/rubik-v20-latin-700.woff2`}
          as="font"
          crossOrigin=""
        />

        <link
          rel="preload"
          href={`/fonts/overpass/overpass-v11-latin-regular.woff2`}
          as="font"
          crossOrigin=""
        />

        <link
          rel="preload"
          href={`/fonts/overpass/overpass-v11-latin-700.woff2`}
          as="font"
          crossOrigin=""
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
