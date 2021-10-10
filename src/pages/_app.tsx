import "normalize.css";
import { AppProps } from "next/app";
import Head from 'next/head'
// NOTE: Do not move the styles dir to the src.
// They are used by the Netlify CMS preview feature.
import config from "../../config.json";
import "../../public/styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${config.analytics}`}
        />

        <script async>
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${config.analytics}');
      `}
        </script>
      </Head>

      <Component {...pageProps} />
    </>
  );
}
