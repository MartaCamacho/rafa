import "../styles/index.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale-1.0.width=device-width" />
        <title>Escribo libros</title>
        <meta
          key="description"
          name="description"
          content="Mis libros son mundialmente conocidos, y si no lo son, lo serán"
        />
        <link rel="icon" href="../public/images/favicon.ico"/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
