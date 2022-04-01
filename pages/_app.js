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
          {/* PWA primary color */}
          <meta name="theme-color" />
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="Come and join a sensual and terrific NFT project! HTGC disrupts the NFT format and adds new value to NFT. 10+ tape girls are waiting you to remove their tapes!"
          />
          <title>Hot Tape Girls Club</title>
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
