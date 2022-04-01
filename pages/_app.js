import "../styles/globals.css";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import Head from "next/head";

const supportedChainIds = [1];

const connectors = {
  injected: {},
};
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hot Tape Girls Club</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThirdwebWeb3Provider
        supportedChainIds={supportedChainIds}
        connectors={connectors}
      >
        <Component {...pageProps} />
      </ThirdwebWeb3Provider>
    </>
  );
}

export default MyApp;
